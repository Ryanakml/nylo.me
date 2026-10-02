// nylo.me — Ryan Akmal Pasya
export const profile = {
  name: "Ryan Akmal Pasya",
  shortName: "Nylo",
  title: "AI Systems Engineer — App → Infrastructure",
  tagline:
    "I build end-to-end AI systems: agents & RAG, queues & workers, observable infra. Root-cause driven, shipped to production.",
  location: "Indonesia (Remote)",
  email: "brian.sbg12@gmail.com",
  github: "https://github.com/Ryanakml",
  availability: "Open for freelance & OSS",
};

export const servicesData = [
  {
    title: "AI Systems",
    description: "Agents, RAG and model routing built as real production systems",
    items: [
      { title: "Agent orchestration & tool-calling", description: "" },
      { title: "RAG pipelines & knowledge-grounded drafting", description: "" },
      { title: "LLM routing — OpenAI / Gemini / Groq", description: "" },
      { title: "Voice & realtime AI (Vapi, TTS, coaching)", description: "" },
    ],
  },
  {
    title: "Backend Systems",
    description: "Event-driven apps with queues, workers, APIs and webhooks",
    items: [
      { title: "REST APIs — Express / Hono, Zod, OpenAPI", description: "" },
      { title: "Queues & workers — BullMQ / Redis / Inngest", description: "" },
      { title: "Webhooks with HMAC, retry & dead-letter", description: "" },
      { title: "Auth, tenancy & isolation per tenant", description: "" },
    ],
  },
  {
    title: "Reliability",
    description: "Systems that expose failures clearly and recover safely",
    items: [
      { title: "Root-cause debugging, no symptom fixes", description: "" },
      { title: "Tracing & observability — OpenTelemetry", description: "" },
      { title: "Durable progress, leases & fencing", description: "" },
      { title: "Vitest + Playwright + CI on every PR", description: "" },
    ],
  },
  {
    title: "Delivery",
    description: "From data model to dashboard to cloud",
    items: [
      { title: "Postgres / Prisma / Supabase / Convex", description: "" },
      { title: "React / Next.js / Tailwind dashboards", description: "" },
      { title: "Docker, AWS / GCP, Caddy, Turborepo", description: "" },
      { title: "GitHub Actions — release per SHA", description: "" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Deadbolt — flagship infra",
    description:
      "Durable workflow infrastructure with self-hosted workers. Go control plane, Postgres authority, NATS JetStream, leases & fencing, immutable deploys, Run Inspector. 348 commits, M0 gated, M1 execution live.",
    href: "https://github.com/Ryanakml/Deadbolt",
    source: "https://github.com/Ryanakml/Deadbolt",
    live: "https://github.com/Ryanakml/Deadbolt",
    liveLabel: "Live Demo ↗",
    image: "/assets/projects/deadbolt.webp",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Go" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "NATS" },
      { id: 5, name: "React" },
    ],
  },
  {
    id: 2,
    name: "FlowDesk",
    description:
      "Multi-tenant customer-ops workspace: realtime team inbox, knowledge-grounded AI drafting, approvals, routing, analytics, resilient WhatsApp infra.",
    href: "https://github.com/Ryanakml/flowdesk-ai",
    source: "https://github.com/Ryanakml/flowdesk-ai",
    live: "",
    liveLabel: "Source ↗",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "React" },
      { id: 3, name: "Express" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Redis" },
    ],
  },
  {
    id: 3,
    name: "Wabrix",
    description:
      "WhatsApp automation with webhook ingestion, BullMQ async processing, AI routing, escalation to humans, per-tenant isolation, full-path tracing.",
    href: "https://wabrix-ai.vercel.app/",
    source: "https://github.com/Ryanakml/wabrix",
    live: "https://wabrix-ai.vercel.app/",
    liveLabel: "Live ↗",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "BullMQ" },
      { id: 3, name: "Supabase" },
      { id: 4, name: "LangChain" },
    ],
  },
  {
    id: 4,
    name: "Streak",
    description:
      "Brutalist AI habit tracker: realtime coaching, intent parsing, proactive reminders, weekly reviews, Clerk auth with free/pro enforcement.",
    href: "https://www.nylo.me/",
    source: "https://github.com/Ryanakml/Streak",
    live: "https://www.nylo.me/",
    liveLabel: "Live ↗ (moving to streak.nylo.me)",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Convex" },
      { id: 3, name: "Clerk" },
      { id: 4, name: "Groq" },
    ],
  },
  {
    id: 5,
    name: "Chattiphy",
    description:
      "Realtime voice + text support built around low-latency AI and shared conversational state across channels.",
    href: "https://chattiphy.nextstackhq.app/",
    source: "https://github.com/Ryanakml/Chattiphy",
    live: "https://chattiphy.nextstackhq.app/",
    liveLabel: "Live ↗",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Groq" },
      { id: 3, name: "Convex" },
      { id: 4, name: "Vapi" },
    ],
  },
  {
    id: 6,
    name: "Voxify",
    description:
      "Multi-voice TTS platform: realtime audio generation, voice management, reusable workflows, team dashboard + API.",
    href: "https://voxify-peach.vercel.app/",
    source: "https://github.com/Ryanakml/Voxify",
    live: "https://voxify-peach.vercel.app/",
    liveLabel: "Live ↗",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Prisma" },
      { id: 3, name: "Python" },
      { id: 4, name: "tRPC" },
    ],
  },
  {
    id: 7,
    name: "ClipperAI",
    description:
      "Automated video clipping engine: multi-stage processing, Modal GPU inference, Inngest background workflows, AI content understanding.",
    href: "https://clipperai.tech/",
    source: "https://github.com/Ryanakml/Clipper-2",
    live: "https://clipperai.tech/",
    liveLabel: "Live ↗",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Gemini" },
      { id: 3, name: "Modal GPU" },
      { id: 4, name: "Inngest" },
    ],
  },
];

// Fallback if GitHub API rate-limits — live fetch replaces this automatically
export const ossFallback = [
  {
    repo: "celery/celery",
    number: 10739,
    title: "multi: expand ~ in --workdir for spawned workers",
    url: "https://github.com/celery/celery/pull/10739",
    category: "Distributed Task Queue",
  },
  {
    repo: "pylint-dev/pylint",
    number: 11487,
    title: "Add regression test for unsubscriptable-object FP on __class_getitem__",
    url: "https://github.com/pylint-dev/pylint/pull/11487",
    category: "Static Code Analysis",
  },
  {
    repo: "python/typeshed",
    number: 16450,
    title: "Add note that csv.Dialect is usually the wrong class",
    url: "https://github.com/python/typeshed/pull/16450",
    category: "Python Core Typing",
  },
  {
    repo: "deepset-ai/haystack-core-integrations",
    number: 4011,
    title: "chore: switch remaining document stores to haystack.logging",
    url: "https://github.com/deepset-ai/haystack-core-integrations/pull/4011",
    category: "LLM / AI Framework",
  },
  {
    repo: "mastra-ai/mastra",
    number: 15346,
    title: "fix(core): allow requireApproval to be a function in tool builder",
    url: "https://github.com/mastra-ai/mastra/pull/15346",
    category: "TypeScript Agent Framework",
  },
  {
    repo: "OpenHands/OpenHands",
    number: 12223,
    title: "feat: add chat message skeletons and improve routing stability",
    url: "https://github.com/OpenHands/OpenHands/pull/12223",
    category: "Autonomous AI Software Engineer",
  },
  {
    repo: "OpenHands/OpenHands",
    number: 12219,
    title: "fix(frontend): add missing onClose prop to conversation panel modals",
    url: "https://github.com/OpenHands/OpenHands/pull/12219",
    category: "Autonomous AI Software Engineer",
  },
  {
    repo: "yan-ulc/echo-support-platform-",
    number: 15,
    title: "refactor(backend): stabilize convex ai tools and store conversation previews",
    url: "https://github.com/yan-ulc/echo-support-platform-/pull/15",
    category: "AI Support Platform",
  },
  {
    repo: "AnnisaGustiNanda/TIK214-2024-4-SeaTrack",
    number: 3,
    title: "edit index",
    url: "https://github.com/AnnisaGustiNanda/TIK214-2024-4-SeaTrack/pull/3",
    category: "Web Application",
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/Ryanakml" },
  { name: "Email", href: "mailto:brian.sbg12@gmail.com" },
];
