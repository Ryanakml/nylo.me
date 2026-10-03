"use client";
import React, { useEffect, useState } from "react";
import { ExternalLink, Info } from "lucide-react";
import { ExpandableCardStandard } from "@/components/ui/expandable-card-standard";
import ContributionSkyline from "@/components/ui/contribution-skyline";

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const GITHUB_SEARCH_URL =
  "https://github.com/search?type=pullrequests&q=author%3ARyanakml+is%3Apr+is%3Amerged+-user%3ARyanakml";

// Curated Top 5 Prestigious Upstream Contributions (Zero API delay, zero missing content)
const TOP_FIVE_PRS = [
  {
    id: "pr-12223",
    title: "OpenHands",
    description: "Autonomous AI Software Engineer • Pull Request #12223",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View PR",
    ctaLink: "https://github.com/OpenHands/OpenHands/pull/12223",
    content: () => (
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-neutral-200 font-semibold text-sm">
          Feat: Chat message skeleton loader and conversation panel stabilization
        </div>
        <p>
          <strong>Issue:</strong> Layout shifts and UI flickering during real-time multi-agent LLM streaming responses in conversation panels.
        </p>
        <p>
          <strong>Upstream Fix:</strong> Engineered dedicated chat message skeleton loaders and stabilized routing state for OpenHands, eliminating layout shifts and reinforcing frontend reliability during high-frequency token generation.
        </p>
        <div className="pt-2 text-neutral-400">
          <span>Repository: </span>
          <code className="text-emerald-400">OpenHands/OpenHands</code>
          <br />
          <span>Status: </span>
          <span className="text-emerald-400 font-bold">Merged Upstream into Main</span>
        </div>
      </div>
    ),
  },
  {
    id: "pr-10739",
    title: "Celery",
    description: "Distributed Task Queue • Pull Request #10739",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View PR",
    ctaLink: "https://github.com/celery/celery/pull/10739",
    content: () => (
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-neutral-200 font-semibold text-sm">
          Fix: Expand tilde paths in worker --workdir CLI argument
        </div>
        <p>
          <strong>Issue:</strong> In Celery multi-worker daemon environments, directory paths containing tilde (<code>~</code>) were not being expanded in the <code>--workdir</code> argument, causing worker spawn failures on POSIX servers.
        </p>
        <p>
          <strong>Upstream Fix:</strong> Implemented proper tilde expansion across process spawning utilities and added regression test coverage ensuring path resolution stability across Linux & macOS worker daemons.
        </p>
        <div className="pt-2 text-neutral-400">
          <span>Repository: </span>
          <code className="text-emerald-400">celery/celery</code>
          <br />
          <span>Status: </span>
          <span className="text-emerald-400 font-bold">Merged Upstream into Core</span>
        </div>
      </div>
    ),
  },
  {
    id: "pr-32421",
    title: "Matplotlib",
    description: "Data Visualization Core • Pull Request #32421",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View PR",
    ctaLink: "https://github.com/matplotlib/matplotlib/pull/32421",
    content: () => (
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-neutral-200 font-semibold text-sm">
          Doc: Clarify Axes.margins behavior and numeric limit formulas
        </div>
        <p>
          <strong>Issue:</strong> Discrepancy between documentation of <code>Axes.margins()</code> and <code>set_xmargin</code>/<code>set_ymargin</code> behavior in edge-case axis autoscaling.
        </p>
        <p>
          <strong>Upstream Fix:</strong> Synchronized documentation across all axes margin methods, added mathematical margin formula and clear numeric examples explaining limit calculations for scientific plotting.
        </p>
        <div className="pt-2 text-neutral-400">
          <span>Repository: </span>
          <code className="text-emerald-400">matplotlib/matplotlib</code>
          <br />
          <span>Status: </span>
          <span className="text-emerald-400 font-bold">Merged Upstream into Main</span>
        </div>
      </div>
    ),
  },
  {
    id: "pr-11487",
    title: "Pylint",
    description: "Static Code Analysis • Pull Request #11487",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View PR",
    ctaLink: "https://github.com/pylint-dev/pylint/pull/11487",
    content: () => (
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-neutral-200 font-semibold text-sm">
          Fix: False positive unsubscriptable-object on generic type indexing
        </div>
        <p>
          <strong>Issue:</strong> False positive <code>unsubscriptable-object</code> lint error triggered when indexing generic types using <code>__class_getitem__</code>.
        </p>
        <p>
          <strong>Upstream Fix:</strong> Added rigorous AST-based regression test suites in Pylint's test harness, validating type subscripting across Python 3.9+ type systems and preventing erroneous build pipeline warnings.
        </p>
        <div className="pt-2 text-neutral-400">
          <span>Repository: </span>
          <code className="text-emerald-400">pylint-dev/pylint</code>
          <br />
          <span>Status: </span>
          <span className="text-emerald-400 font-bold">Merged Upstream into Main</span>
        </div>
      </div>
    ),
  },
  {
    id: "pr-16450",
    title: "Typeshed",
    description: "Python Core Typing • Pull Request #16450",
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    ctaText: "View PR",
    ctaLink: "https://github.com/python/typeshed/pull/16450",
    content: () => (
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-neutral-200 font-semibold text-sm">
          Types: Update csv.Dialect stubs and typing guards
        </div>
        <p>
          <strong>Contribution:</strong> Updated Python standard library type annotations in Typeshed (used by mypy, pyright, and VS Code Python extension).
        </p>
        <p>
          <strong>Detail:</strong> Added documentation and type guards clarifying usage of <code>csv.Dialect</code> to eliminate downstream runtime type errors across thousands of Python libraries.
        </p>
        <div className="pt-2 text-neutral-400">
          <span>Repository: </span>
          <code className="text-emerald-400">python/typeshed</code>
          <br />
          <span>Status: </span>
          <span className="text-emerald-400 font-bold">Merged Upstream into Main</span>
        </div>
      </div>
    ),
  },
];

export default function OpenSource() {
  const [showSkylineInfo, setShowSkylineInfo] = useState(false);

  // Clear any legacy broken cache from previous localStorage attempts
  useEffect(() => {
    try {
      localStorage.removeItem("ryanakml_merged_prs_v1");
      localStorage.removeItem("ryanakml_merged_prs_v2");
    } catch {
      // Ignore in private browsing
    }
  }, []);

  return (
    <section id="oss" className="py-16 sm:py-20 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-mono mb-2">
          OPEN SOURCE CONTRIBUTIONS
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Direct upstream code contributions to major open source runtimes, distributed task queues, static analyzers, and autonomous AI agents.
        </p>
      </div>

      {/* 3D GitHub Contribution Skyline Heatmap (Semi-transparent Glassmorphism) */}
      <div className="mb-12 rounded-2xl md:rounded-3xl border border-neutral-800/50 bg-neutral-900/30 p-3.5 sm:p-6 backdrop-blur-md shadow-xl relative overflow-hidden">
        {/* Header label inside card */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-neutral-800/40 pb-3">
          <div className="flex items-center gap-2">
            <GithubIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-200">
              Contribution Skyline
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs font-mono text-neutral-400">
              @Ryanakml
            </span>
          </div>
          {/* Interactive Info Tooltip */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSkylineInfo((prev) => !prev)}
              onMouseEnter={() => setShowSkylineInfo(true)}
              onMouseLeave={() => setShowSkylineInfo(false)}
              className="w-5 h-5 rounded-full border border-neutral-700/80 bg-neutral-800/80 hover:bg-neutral-700 hover:border-emerald-500/50 text-neutral-400 hover:text-emerald-400 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-400"
              aria-label="Interactive guide"
              title="Interactive guide"
            >
              <Info size={11} />
            </button>

            {/* Tooltip on hover or click */}
            <div
              className={`absolute right-0 top-full mt-2 w-56 sm:w-60 p-2.5 rounded-xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-md shadow-2xl z-30 transition-all duration-200 text-left ${
                showSkylineInfo
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Interactive Controls
              </div>
              <ul className="text-[11px] font-mono text-neutral-400 space-y-1">
                <li className="flex items-center gap-1.5">
                  <span className="text-neutral-500">•</span> Drag to orbit 3D view
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neutral-500">•</span> Double-click to reset angle
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-neutral-500">•</span> Click cells to inspect stats
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ContributionSkyline
          palette="github"
          defaultView="3d"
          unit="contribution"
          className="text-white"
        />
      </div>

      {/* 1:1 Official Aceternity ExpandableCard List (Top 5 Curated) */}
      <ExpandableCardStandard cards={TOP_FIVE_PRS} />

      {/* Minimal Footer Callout */}
      <div className="mt-8 flex items-center justify-center">
        <a
          href={GITHUB_SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono border border-neutral-800 bg-[#0f0f0f] text-neutral-400 hover:text-white hover:border-emerald-500/40 hover:bg-neutral-900 transition-colors"
        >
          <span>View all merged pull requests on GitHub</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </section>
  );
}
