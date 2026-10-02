import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  Cpu,
  Code2,
  Globe,
  Database,
  Wrench,
  Terminal,
} from "lucide-react";

// Tech SVGs
function TechIcon({ name, className = "w-4 h-4" }) {
  switch (name) {
    case "Python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.914 0C5.82 0 6.2 2.65 6.2 2.65l.006 2.748h5.814v.824H3.88S0 5.76 0 11.874c0 6.115 3.398 5.897 3.398 5.897h2.029v-2.855s-.11-3.398 3.344-3.398h5.759s3.235.053 3.235-3.125V2.65S18.17 0 11.914 0zm-3.235 1.764a1.087 1.087 0 110 2.174 1.087 1.087 0 010-2.174zM12.086 24c6.094 0 5.714-2.65 5.714-2.65l-.006-2.748h-5.814v-.824h8.14s3.88.462 3.88-5.652c0-6.115-3.398-5.897-3.398-5.897h-2.029v2.855s.11 3.398-3.344 3.398H9.47s-3.235-.053-3.235 3.125v5.759S5.83 24 12.086 24zm3.235-1.764a1.087 1.087 0 110-2.174 1.087 1.087 0 010 2.174z" />
        </svg>
      );
    case "Go (Golang)":
    case "Go":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.92 8.79h3.76v6.43H1.92V8.79zm5.55 0h3.77v6.43H7.47V8.79zm7.3 0c1.88 0 3.31 1.25 3.31 3.21 0 1.97-1.43 3.22-3.31 3.22-1.89 0-3.32-1.25-3.32-3.22 0-1.96 1.43-3.21 3.32-3.21zm0 4.67c.94 0 1.54-.62 1.54-1.46 0-.83-.6-1.46-1.54-1.46-.93 0-1.54.63-1.54 1.46 0 .84.61 1.46 1.54 1.46zM22.08 8.79v6.43h-1.63v-1.39a3.02 3.02 0 01-2.45 1.53c-1.88 0-3.31-1.25-3.31-3.22 0-1.96 1.43-3.21 3.31-3.21 1.03 0 1.9.46 2.45 1.34V8.79h1.63zm-3.97 4.67c.94 0 1.54-.62 1.54-1.46 0-.83-.6-1.46-1.54-1.46-.93 0-1.54.63-1.54 1.46 0 .84.61 1.46 1.54 1.46z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.108 10.372h2.529v9.643h-2.529v-9.643zm-7.632 0h7.106v2.091h-2.288v7.552H9.89v-7.552H7.601v-2.091z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.621-1.797-1.025-.119-.197-.15-.472-.05-.722.18-.466.867-.621 1.332-.48.45.137.822.483.993.905l1.642-1.042c-.41-.758-1.034-1.345-1.815-1.638-.804-.3-1.734-.337-2.526-.062-.888.31-1.543.98-1.75 1.835-.308 1.25.32 2.378 1.488 2.946.993.483 2.054.747 2.234 1.312.164.512-.132.934-.693 1.077-.665.17-1.493-.05-1.922-.647l-1.696 1.055c.42.793 1.135 1.39 2.033 1.674 1.05.33 2.227.24 3.12-.26 1.076-.6 1.636-1.688 1.41-3.067zm-7.85-6.619h-2.14v6.862c0 1.29-.44 1.82-1.428 1.82-.572 0-1.037-.158-1.383-.418l-.756 1.494c.642.49 1.436.726 2.316.726 2.112 0 3.39-1.05 3.39-3.52v-6.964z" />
        </svg>
      );
    case "C++":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.395 12a10.395 10.395 0 11-20.79 0 10.395 10.395 0 0120.79 0zm-8.814-1.378h-1.41v-1.41h-.953v1.41H9.813v.954h1.41v1.41h.953v-1.41h1.409v-.954zm3.978 0h-1.41v-1.41h-.954v1.41h-1.41v.954h1.41v1.41h.954v-1.41h1.41v-.954z" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7c-5.52 0-10 2.24-10 5s4.48 5 10 5 10-2.24 10-5-4.48-5-10-5zm0 14c-5.52 0-10 2.24-10 5s4.48 5 10 5 10-2.24 10-5-4.48-5-10-5zm-8.66-2.5C2.07 14.73 1.5 16.03 1.5 17.5c0 1.47.57 2.77 1.84 3.5 2.76 1.6 6.64.1 8.66-3.4-2.02-3.5-5.9-5-8.66-3.4zm17.32 0c-2.76-1.6-6.64-.1-8.66 3.4 2.02 3.5 5.9 5 8.66 3.4 1.27-.73 1.84-2.03 1.84-3.5 0-1.47-.57-2.77-1.84-3.5z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.955 18.232L10.36 8.358v8.685H8.623V6.957h1.737l7.595 9.875v-9.875h1.737v11.275h-1.737z" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.95 0C5.35 0 0 5.35 0 11.95c0 6.6 5.35 11.95 11.95 11.95 6.6 0 11.95-5.35 11.95-11.95C23.9 5.35 18.55 0 11.95 0zm.05 3.65c2.4 0 4.25 1.55 4.8 3.75h-2.1c-.4-1.2-1.45-2-2.7-2-1.65 0-3 1.35-3 3s1.35 3 3 3c1.25 0 2.3-.8 2.7-2h2.1c-.55 2.2-2.4 3.75-4.8 3.75-2.75 0-5-2.25-5-5s2.25-5 5-5z" />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185" />
        </svg>
      );
    case "Git / GitHub":
    case "Git":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "Linux":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.001 0c-3.13 0-5.674 2.457-5.719 5.575-.022 1.57.575 3.037 1.603 4.119-.074.743-.178 1.503-.314 2.275-1.077 1.488-2.67 4.195-2.67 7.031 0 2.76 2.054 5 4.587 5h4.996c2.533 0 4.587-2.24 4.587-5 0-2.836-1.593-5.543-2.67-7.031-.136-.772-.24-1.532-.314-2.275 1.028-1.082 1.625-2.549 1.603-4.119C20.675 2.457 18.131 0 15.001 0h-3zm0 2c1.99 0 3.6 1.61 3.6 3.6 0 .97-.39 1.85-1.02 2.5-.33.34-.73.6-1.18.76-.44.16-.91.24-1.4.24s-.96-.08-1.4-.24c-.45-.16-.85-.42-1.18-.76-.63-.65-1.02-1.53-1.02-2.5 0-1.99 1.61-3.6 3.6-3.6z" />
        </svg>
      );
    default:
      return <Terminal className={className} />;
  }
}

// Categories and detailed skill definitions with tooltips
const skillSections = [
  {
    id: "ai-systems",
    title: "AI & Distributed Systems",
    icon: Cpu,
    skills: [
      {
        name: "Agent Orchestration",
        desc: "Autonomous multi-step agents with tool-calling, state machines, and self-correction loops.",
      },
      {
        name: "RAG Pipelines",
        desc: "Knowledge-grounded retrieval, vector embeddings, chunk routing, and grounded drafting.",
      },
      {
        name: "LLM Routing",
        desc: "Model gateway with fallback, rate-limiting, and cost-latency optimization across Groq/OpenAI/Gemini.",
      },
      {
        name: "BullMQ / Queues",
        desc: "Resilient async job processing, dead-letter queues, exponential backoff, and concurrency limits.",
      },
      {
        name: "NATS JetStream",
        desc: "Low-latency message streaming, subject-based routing, durable consumers, and distributed state.",
      },
      {
        name: "Idempotent Webhooks",
        desc: "HMAC signature verification, retry policies, replay protection, and deduplication.",
      },
      {
        name: "Vapi Voice AI",
        desc: "Realtime low-latency bidirectional voice streams and conversational AI infrastructure.",
      },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: [
      {
        name: "Go (Golang)",
        desc: "High-concurrency control planes, distributed workers, leases & fencing, and systems engineering.",
      },
      {
        name: "TypeScript",
        desc: "Full-stack type safety across APIs, database schemas, and modern frontend applications.",
      },
      {
        name: "Python",
        desc: "AI workflows, scripting, and upstream open source static analysis contributions (Pylint, Typeshed).",
      },
      {
        name: "JavaScript",
        desc: "Modern ESNext runtimes, asynchronous patterns, event loop optimization, and browser APIs.",
      },
      {
        name: "SQL",
        desc: "Complex relational queries, indexing strategies, analytical aggregations, and schema migrations.",
      },
      {
        name: "C++",
        desc: "Memory management, performance-critical algorithms, and low-level computing architectures.",
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    skills: [
      {
        name: "React",
        desc: "Component architectures, concurrent rendering, virtual DOM optimization, and interactive state.",
      },
      {
        name: "Next.js",
        desc: "Full-stack SSR/SSG apps, server actions, route handlers, and edge API deployments.",
      },
      {
        name: "Node.js",
        desc: "Event-driven backend services, worker runtimes, and scalable microservices architectures.",
      },
      {
        name: "Hono",
        desc: "Ultrafast edge-first HTTP framework with TypeScript validation and minimal memory overhead.",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first modern styling, responsive layouts, design tokens, and fluid animation styling.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        desc: "Primary relational data authority, JSONB, indexing, isolation levels, and transactional guarantees.",
      },
      {
        name: "Supabase",
        desc: "Realtime PostgreSQL, row-level security (RLS), edge functions, and identity management.",
      },
      {
        name: "Convex",
        desc: "Reactive backend with automatic sync, live subscriptions, and ACID transactional state.",
      },
      {
        name: "Prisma",
        desc: "Type-safe database ORM, declarative schema modeling, and automated migration management.",
      },
      {
        name: "Redis",
        desc: "In-memory caching, queue storage, distributed locks, and pub/sub messaging.",
      },
      {
        name: "Vector DB / pgvector",
        desc: "High-performance vector similarity search for knowledge grounding and RAG pipelines.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    icon: Wrench,
    skills: [
      {
        name: "Docker",
        desc: "Multi-stage container builds, reproducible environments, and production compose stacks.",
      },
      {
        name: "Git / GitHub",
        desc: "Version control, branching strategies, and upstream open source collaboration across 271+ PRs.",
      },
      {
        name: "OpenTelemetry",
        desc: "Distributed tracing, root-cause observability, and performance metrics across service boundaries.",
      },
      {
        name: "AWS / GCP",
        desc: "Cloud infrastructure, serverless compute, object storage, and production deployments.",
      },
      {
        name: "Linux",
        desc: "Server administration, shell automation, daemon management, systemd, and SSH workflows.",
      },
      {
        name: "Visual Studio Code",
        desc: "Primary development environment, remote containers, debugging, and productivity workflows.",
      },
    ],
  },
];

// Aceternity UI Decorative Corner Plus Icon
const CornerIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`absolute h-5 w-5 text-emerald-500/30 pointer-events-none transition-colors group-hover/canvas-card:text-emerald-400/60 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// Compact Category Card with 1:1 Aceternity CanvasRevealEffect on Hover
function SkillCategoryCard({ section, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const Icon = section.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveTooltip(null);
      }}
      className={`border border-neutral-800/80 group/canvas-card p-5 sm:p-6 relative rounded-2xl bg-[#0f0f0f] hover:border-emerald-500/40 transition-all duration-300 ${className} ${
        activeTooltip ? "z-40" : hovered ? "z-20" : "z-10"
      }`}
    >
      {/* 1:1 Aceternity Corner Cross Icons */}
      <CornerIcon className="-top-2.5 -left-2.5" />
      <CornerIcon className="-bottom-2.5 -left-2.5" />
      <CornerIcon className="-top-2.5 -right-2.5" />
      <CornerIcon className="-bottom-2.5 -right-2.5" />

      {/* 1:1 Aceternity CanvasRevealEffect via AnimatePresence */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={2.5}
              containerClassName="bg-neutral-950/75 rounded-2xl overflow-hidden"
              colors={[
                [16, 185, 129],
                [52, 211, 153],
              ]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10 space-y-3.5">
        {/* Category Header */}
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Icon size={16} />
          </div>
          <h3 className="text-base font-bold font-mono text-white tracking-tight group-hover/canvas-card:text-emerald-300 transition-colors">
            {section.title}
          </h3>
        </div>

        {/* Skill Badges List */}
        <div className="flex flex-wrap gap-2 pt-0.5">
          {section.skills.map((skill) => {
            const isHovered = activeTooltip === skill.name;

            return (
              <div
                key={skill.name}
                className="relative inline-block"
                onMouseEnter={() => setActiveTooltip(skill.name)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none w-60 p-2.5 rounded-xl bg-[#141414]/95 backdrop-blur-xl border border-neutral-700 shadow-2xl text-left animate-in fade-in zoom-in-95 duration-150">
                    <p className="text-xs font-mono font-bold text-white mb-0.5">
                      {skill.name}
                    </p>
                    <p className="text-[10px] font-mono text-neutral-300 leading-relaxed">
                      {skill.desc}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#141414]" />
                  </div>
                )}

                {/* Badge Button */}
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-default select-none ${
                    isHovered
                      ? "bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)] scale-105 border border-emerald-400"
                      : "bg-neutral-900/90 text-neutral-200 border border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  <TechIcon
                    name={skill.name}
                    className={`w-3.5 h-3.5 ${
                      isHovered ? "text-white" : "text-neutral-400"
                    }`}
                  />
                  <span>{skill.name}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-mono">
          TECHNICAL SKILLS
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl">
          Core toolchain, distributed systems architecture, languages, and autonomous AI infrastructure. Hover over cards for digital matrix & skills for architectural context.
        </p>
      </div>

      {/* 5x1 Stacked Category Cards */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {skillSections.map((section) => (
          <SkillCategoryCard
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </section>
  );
}
