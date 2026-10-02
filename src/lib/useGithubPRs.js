import { useState, useEffect } from "react";
import { ossFallback } from "../constants";

const CACHE_KEY = "nylo_oss_prs_v1";
const CACHE_TIME_KEY = "nylo_oss_prs_timestamp_v1";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache to prevent rate-limiting

export function useGithubPRs() {
  const [prs, setPrs] = useState(ossFallback);
  const [totalCount, setTotalCount] = useState(ossFallback.length);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchPRs() {
      // 1. Check local cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        if (cached && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          if (age < CACHE_TTL_MS) {
            const parsed = JSON.parse(cached);
            if (parsed && parsed.items && isMounted) {
              setPrs(parsed.items);
              setTotalCount(parsed.totalCount || parsed.items.length);
              setLoading(false);
              setIsLive(true);
              return;
            }
          }
        }
      } catch (err) {
        console.warn("Could not read local cache:", err);
      }

      // 2. Fetch from GitHub Search API: author:Ryanakml is:pr is:merged -user:Ryanakml
      try {
        const query = encodeURIComponent("author:Ryanakml is:pr is:merged -user:Ryanakml");
        const res = await fetch(
          `https://api.github.com/search/issues?q=${query}&sort=updated&order=desc`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error ${res.status}`);
        }

        const data = await res.json();
        const items = (data.items || []).map((item) => {
          const repoParts = item.repository_url.split("/");
          const repo = `${repoParts[repoParts.length - 2]}/${repoParts[repoParts.length - 1]}`;

          let category = "Open Source";
          if (repo.includes("celery")) category = "Distributed Task Queue";
          else if (repo.includes("pylint")) category = "Static Code Analysis";
          else if (repo.includes("typeshed")) category = "Python Core Typing";
          else if (repo.includes("haystack")) category = "LLM / AI Framework";
          else if (repo.includes("mastra")) category = "TypeScript Agent Framework";
          else if (repo.includes("OpenHands")) category = "Autonomous AI Software Engineer";

          return {
            repo,
            number: item.number,
            title: item.title,
            url: item.html_url,
            createdAt: item.created_at,
            category,
          };
        });

        if (isMounted) {
          const total = data.total_count || items.length;
          setPrs(items.length > 0 ? items : ossFallback);
          setTotalCount(total > 0 ? total : ossFallback.length);
          setLoading(false);
          setIsLive(true);

          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ items, totalCount: total }));
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
          } catch (e) {
            // ignore localStorage quota error
          }
        }
      } catch (err) {
        console.warn("GitHub API rate limit or network error, using fallback data:", err);
        if (isMounted) {
          setPrs(ossFallback);
          setTotalCount(ossFallback.length);
          setLoading(false);
          setIsLive(false);
        }
      }
    }

    fetchPRs();

    return () => {
      isMounted = false;
    };
  }, []);

  return { prs, totalCount, loading, isLive };
}
