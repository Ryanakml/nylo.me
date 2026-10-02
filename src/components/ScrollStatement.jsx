import React from "react";
import { TextReveal } from "@/components/ui/text-reveal";

// 1:1 Stairs Icon from Reference
function StairsIcon({ className = "inline-block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400 align-middle" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 19h5v-5h5v-5h6" />
      <polyline points="16 4 20 4 20 8" />
    </svg>
  );
}

// 1:1 Break / Collision Icon from Reference
function BreakIcon({ className = "inline-block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400 align-middle" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l3.54 3.54M15.54 15.54l3.53 3.53M4.93 19.07l3.54-3.54M15.54 8.46l3.53-3.53" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

export default function ScrollStatement() {
  return (
    <section className="w-full">
      <TextReveal>
        {[
          "I learn",
          <StairsIcon key="stairs" />,
          "fast—mostly because I break",
          <BreakIcon key="break" />,
          "things faster.",
        ]}
      </TextReveal>
    </section>
  );
}
