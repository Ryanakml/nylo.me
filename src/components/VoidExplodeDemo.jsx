"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  FolderKanban,
  Briefcase,
  GitFork,
  Mail,
  RotateCcw,
  MousePointerClick,
} from "lucide-react";
import { ExplodeContainer, ExplodeItem } from "@/components/ui/explode-card";
import { cn } from "@/lib/utils";

const SHARDS = [
  {
    key: "profile",
    label: "Profile",
    sub: "#about",
    href: "#about",
    Icon: User,
    explodeX: -180,
    explodeY: -120,
    explodeZ: 80,
    rotateZ: -8,
  },
  {
    key: "projects",
    label: "Projects",
    sub: "#projects",
    href: "#projects",
    Icon: FolderKanban,
    explodeX: 180,
    explodeY: -100,
    explodeZ: 120,
    rotateZ: 8,
  },
  {
    key: "experience",
    label: "Experience",
    sub: "#experience",
    href: "#experience",
    Icon: Briefcase,
    explodeX: -160,
    explodeY: 120,
    explodeZ: 60,
    rotateZ: 6,
  },
  {
    key: "oss",
    label: "Open Source",
    sub: "#oss",
    href: "#oss",
    Icon: GitFork,
    explodeX: 160,
    explodeY: 130,
    explodeZ: 100,
    rotateZ: -6,
  },
  {
    key: "contact",
    label: "Contact",
    sub: "#contact",
    href: "#contact",
    Icon: Mail,
    explodeX: 0,
    explodeY: 200,
    explodeZ: 140,
    rotateZ: 0,
  },
];

function useExplodeScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 400) setScale(0.5);
      else if (w < 640) setScale(0.62);
      else if (w < 1024) setScale(0.85);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

export default function VoidExplodeDemo() {
  const [locked, setLocked] = useState(false);
  const explodeScale = useExplodeScale();

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-20">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
        }}
      />
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, transparent 40%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      {/* ambient emerald glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.07] blur-[100px]" />

      <p className="relative z-10 mb-2 text-[11px] font-mono uppercase tracking-[0.35em] text-emerald-300/70">
        void // explode-card
      </p>
      <h2 className="relative z-10 mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
        One card in the void.{" "}
        <span className="text-emerald-300">Hover to shatter it.</span>
      </h2>

      {/* Explode stage */}
      <div className="relative z-10 flex min-h-[480px] w-full items-center justify-center sm:min-h-[540px]">
        <ExplodeContainer
          locked={locked}
          onLockedChange={setLocked}
          explodeScale={explodeScale}
          containerClassName="relative"
          className="relative h-[280px] w-[280px]"
        >
          {/* Core — stays in the center */}
          <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_0_60px_rgba(0,0,0,0.8)] [transform:translateZ(10px)]">
            <span className="text-3xl font-black tracking-[0.2em] text-white">
              RYAN
            </span>
            <span className="mt-2 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              <MousePointerClick className="h-3 w-3 text-emerald-300/80" />
              hover / tap to explode
            </span>
            <span
              className={cn(
                "mt-3 rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest transition-colors",
                locked
                  ? "border-emerald-300/60 text-emerald-200"
                  : "border-white/10 text-neutral-500"
              )}
            >
              {locked ? "● locked" : "○ fused"}
            </span>
          </div>

          {/* Shards — fused at center when idle, fly out when exploded */}
          {SHARDS.map((s) => (
            <div
              key={s.key}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <ExplodeItem
                as="a"
                href={s.href}
                onClick={(e) => e.stopPropagation()}
                explodeX={s.explodeX}
                explodeY={s.explodeY}
                explodeZ={s.explodeZ}
                rotateZ={s.rotateZ}
                className="group flex w-36 items-center gap-2.5 rounded-xl border border-emerald-400/30 bg-[#0f0f0f]/95 px-3.5 py-3 hover:border-emerald-300/70 hover:bg-[#131313]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
                  <s.Icon className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[13px] font-semibold text-white">
                    {s.label}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-300/60">
                    {s.sub}
                  </span>
                </span>
              </ExplodeItem>
            </div>
          ))}
        </ExplodeContainer>
      </div>

      {/* Hint + reset */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-3">
        <p className="max-w-md text-center font-mono text-xs leading-relaxed text-neutral-500">
          hover to shatter — leave to fuse back.
          <br />
          tap / click to {locked ? "fuse back" : "lock the explosion"} (mobile).
        </p>
        <button
          onClick={() => setLocked(false)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-widest text-neutral-300 transition-colors hover:border-emerald-300/50 hover:text-emerald-200"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          reset / fuse
        </button>
      </div>
    </section>
  );
}

export { VoidExplodeDemo };
