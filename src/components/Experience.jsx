"use client";
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const experiences = [
  {
    role: "Lead Systems Engineer & Architect",
    company: "nylo.me / Deadbolt & Autonomous Projects",
    period: "Aug 2024 – Present",
    bullets: [
      "Engineered Deadbolt: durable workflow engine with Go control plane, Postgres authority, NATS JetStream, and distributed leases & fencing for resilient worker execution",
      "Architected FlowDesk: multi-tenant customer operations workspace featuring realtime team inbox, knowledge-grounded AI drafting, and resilient WhatsApp infra",
      "Maintained zero-unhandled-downtime standard across 7 shipped production platforms using OpenTelemetry distributed tracing and root-cause observability",
    ],
  },
  {
    role: "AI & Distributed Backend Engineer",
    company: "Wabrix & Automation Infra",
    period: "Nov 2023 – Aug 2024",
    bullets: [
      "Built resilient WhatsApp automation with webhook ingestion, BullMQ async queues, and AI routing with human escalation paths",
      "Designed and deployed ClipperAI video processing pipeline orchestrating Modal GPU serverless inference and Inngest background event workflows",
      "Engineered strict tenant isolation and HMAC verification across external webhook integrations with zero security leakage",
    ],
  },
  {
    role: "Open Source Contributor & Systems Researcher",
    company: "Global Open Source Community",
    period: "Feb 2023 – Present",
    bullets: [
      "Direct upstream code contributions across critical open source ecosystems including Celery, OpenHands, Pylint, and Typeshed",
      "Fixed regression bugs, enhanced type definition soundness, and improved LLM tool-calling execution sandboxes",
      "Authored reproduction suites and automated CI verification tests for distributed agent workflows and upstream runtime environments",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header 1:1 matching reference */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-mono mb-2">
          EXPERIENCE
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-mono">
          An overview of my professional journey so far.
        </p>
      </div>

      {/* Timeline Section with 1:1 curved dotted line and glowing cards */}
      <div className="relative pl-7 sm:pl-9">
        {/* Continuous Left Vertical Dashed/Dotted Line */}
        <div className="absolute left-0 top-[16px] bottom-[16px] w-0 border-l border-dashed border-neutral-700/80 pointer-events-none" />

        {/* Top Arc Curve */}
        <svg
          className="absolute -top-2 left-0 w-6 h-6 overflow-visible pointer-events-none text-neutral-700/80"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M 24 0 C 10 0, 0 10, 0 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </svg>

        {/* Bottom Arc Curve */}
        <svg
          className="absolute -bottom-2 left-0 w-6 h-6 overflow-visible pointer-events-none text-neutral-700/80"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M 0 0 C 0 14, 10 24, 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </svg>

        {/* Experience Cards Stack */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Emerald Dot with pulse animation (1:1 with reference) */}
              <div className="absolute -left-7 sm:-left-9 top-7 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-[#0a0a0a] border border-neutral-800/80 flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                </div>
              </div>

              {/* Glowing Card with Aceternity GlowingEffect */}
              <div className="relative rounded-2xl md:rounded-3xl border border-neutral-800/80 p-0.5 transition-colors">
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  variant="emerald"
                />
                <div className="relative z-10 rounded-[inherit] bg-[#0c0c0c] p-6 sm:p-7">
                  {/* Header Row: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-emerald-400 font-mono text-base sm:text-lg font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-neutral-400 font-mono text-xs sm:text-sm shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <div className="text-neutral-200 font-mono text-sm sm:text-base font-normal mb-4">
                    {exp.company}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
