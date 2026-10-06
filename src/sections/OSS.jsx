import { useEffect, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { ossFallback } from "../constants";

const CACHE_KEY = "nylo-oss-cache-v1";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6h
const USERNAME = "Ryanakml";

function parseRepoUrl(apiUrl) {
  // https://api.github.com/repos/owner/repo -> owner/repo
  const m = apiUrl.match(/repos\/([^/]+\/[^/]+)/);
  return m ? m[1] : apiUrl;
}

const OSS = () => {
  const [external, setExternal] = useState(ossFallback);
  const [total, setTotal] = useState(null);
  const [live, setLive] = useState(false);

  const text = `Merged upstream — not just my own repos.
This list updates itself from GitHub, no redeploy needed.`;

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
        if (cached && Date.now() - cached.ts < CACHE_TTL) {
          if (!cancelled) {
            setExternal(cached.external);
            setTotal(cached.total);
            setLive(cached.live);
          }
          return;
        }
      } catch {
        /* ignore */
      }
      try {
        const headers = {};
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (token) headers.Authorization = `Bearer ${token}`;
        const res = await fetch(
          `https://api.github.com/search/issues?q=author:${USERNAME}+type:pr+is:merged&per_page=100&sort=updated`,
          { headers }
        );
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const data = await res.json();
        const items = (data.items || [])
          .map((it) => ({
            repo: parseRepoUrl(it.repository_url),
            number: it.number,
            title: it.title,
            url: it.html_url,
            mergedAt: it.pull_request?.merged_at || it.closed_at,
          }))
          // external first: hide own repos from the list, keep count
          .filter((pr) => !pr.repo.toLowerCase().startsWith("ryanakml/"))
          .slice(0, 8);
        const next = {
          ts: Date.now(),
          external: items.length ? items : ossFallback,
          total: data.total_count ?? null,
          live: items.length > 0,
        };
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        if (!cancelled) {
          setExternal(next.external);
          setTotal(next.total);
          setLive(next.live);
        }
      } catch {
        if (!cancelled) {
          setExternal(ossFallback);
          setLive(false);
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="oss" className="flex flex-col min-h-[60vh] bg-white text-black">
      <AnimatedHeaderSection
        subTitle={"Merged upstream, not just my repos"}
        title={"Open Source"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="px-1 sm:px-1 md:px-3 lg:px-6 pb-16 ultra-small-screen">
        <p className="mb-6 text-sm uppercase tracking-widest text-black/60">
          {total ? `${total} merged PRs and counting` : "270+ merged PRs and counting"}{" "}
          ·{" "}
          <a
            href={`https://github.com/search?q=author:${USERNAME}+type:pr+is:merged&type=pullrequests`}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            view all ↗
          </a>{" "}
          {live ? (
            <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
              live from GitHub
            </span>
          ) : (
            <span className="ml-2 rounded-full bg-black/5 px-2 py-0.5 text-xs text-black/60">
              cached
            </span>
          )}
        </p>
        <div className="flex flex-col">
          {external.map((pr, i) => (
            <a
              key={`${pr.repo}-${pr.number}-${i}`}
              href={pr.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 py-4 border-t border-black/15 last:border-b hover:bg-black hover:text-white transition-colors duration-200 px-2 md:px-4"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base md:text-xl font-light">
                  {pr.repo}#{pr.number}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest opacity-60">
                  {pr.state === "open" ? "open ↗" : "merged ↗"}
                </span>
              </div>
              <span className="text-sm md:text-base opacity-70">{pr.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OSS;
