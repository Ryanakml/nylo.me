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

// Fallback if GitHub API rate-limits — live fetch replaces this automatically.
// Curated best-5 (links verified via gh). state: merged = upstream merged,
// open = under review.
export const ossFallback = [
  {
    repo: "python/typeshed",
    number: 16450,
    title: "Add note that csv.Dialect is usually the wrong class",
    url: "https://github.com/python/typeshed/pull/16450",
    category: "Python Core Typing",
    state: "merged",
  },
  {
    repo: "numpy/numpy",
    number: 32911,
    title: "DOC: Clarify half-to-even rounding behavior for quantile 'nearest' method",
    url: "https://github.com/numpy/numpy/pull/32911",
    category: "Numerical Core",
    state: "open",
  },
  {
    repo: "huggingface/accelerate",
    number: 4357,
    title: "Fix gather_tensor_shape discarding zero-sized dimensions and crash in copy_tensor_to_devices",
    url: "https://github.com/huggingface/accelerate/pull/4357",
    category: "ML Distributed Training",
    state: "open",
  },
  {
    repo: "matplotlib/matplotlib",
    number: 32421,
    title: "DOC: synchronize Axes.margins docs with set_xmargin/set_ymargin",
    url: "https://github.com/matplotlib/matplotlib/pull/32421",
    category: "Data Visualization Core",
    state: "merged",
  },
  {
    repo: "django/django",
    number: 22093,
    title: "Fixed #37397 -- Clarified DATA_UPLOAD_MAX_MEMORY_SIZE behavior on request.body vs request.POST.",
    url: "https://github.com/django/django/pull/22093",
    category: "Web Framework Core",
    state: "open",
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/Ryanakml" },
  { name: "Email", href: "mailto:brian.sbg12@gmail.com" },
];
