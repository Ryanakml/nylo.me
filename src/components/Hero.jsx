"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowDown, GitPullRequest, Layers, Cpu, Code2, Sparkles } from "lucide-react";
import { useGithubPRs } from "../lib/useGithubPRs";
import { NumberTicker } from "@/components/ui/number-ticker";
import { CometCard } from "@/components/ui/comet-card";
import { TextLoop } from "@/components/ui/text-loop";

export default function Hero() {
  const { totalCount: ossCount } = useGithubPRs();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-3.5 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[400px] max-w-full bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* Balanced Hero Container */}
      <div className="w-full max-w-5xl xl:max-w-[1040px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Left Column: Intro & Rotating Text */}
        <div className="w-full lg:w-[58%] flex flex-col space-y-6">

          {/* Heading with Static Greeting and Rotating Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {/* Line 1: Static Greeting ("Greetings,") - Looping options kept in comment */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-tight min-h-[1.2em] flex items-center">
              Greetings,
              {/* 
              <TextLoop
                words={[
                  "Hey there,",
                  "Hello world,",
                  "Welcome, traveler,",
                  "Greetings,",
                  "Hi there,",
                ]}
                interval={4500}
                className="text-white"
              />
              */}
            </h1>

            {/* Line 2: Rotating Roles (Concise, Fits Inline, 2.8s Interval) */}
            <div className="text-xl sm:text-2xl font-medium text-neutral-300 flex flex-wrap items-baseline gap-2 min-h-[1.3em]">
              <span>I am Ryan —</span>
              <TextLoop
                words={[
                  "AI Systems Engineer",
                  "Backend Architect",
                  "Full-Stack Builder",
                  "OSS Contributor",
                  "Systems Crafter",
                ]}
                interval={2800}
                delay={1000}
                className="font-mono text-emerald-400 font-semibold"
              />
            </div>

            {/* Line 3: Minimalist Single-Line Tagline */}
            <p className="text-sm sm:text-base text-neutral-400 font-mono tracking-tight pt-1">
              Building resilient software, distributed queues, and observable AI systems.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <a
              href="#projects"
              className="relative group p-[1px] rounded-2xl overflow-hidden focus:outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl animate-spin-slow group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 py-2.5 rounded-2xl bg-[#0f0f0f] hover:bg-[#141414] text-white text-sm font-semibold transition-colors flex items-center gap-2">
                <span>Explore Featured Systems</span>
                <Sparkles size={15} className="text-emerald-400" />
              </div>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-emerald-400 transition-colors py-2 px-3"
            >
              <span>Get to know me</span>
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </motion.div>

          {/* 4 Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2"
          >
            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-200 group">
              <div className="text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                <Layers size={18} />
              </div>
              <div className="text-xl font-bold font-mono text-white">
                <NumberTicker value={7} delay={0.2} />
              </div>
              <div className="text-xs text-neutral-400">Shipped Systems</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-200 group">
              <div className="text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                <GitPullRequest size={18} />
              </div>
              <div className="text-xl font-bold font-mono text-white">
                <NumberTicker value={ossCount || 10} delay={0.3} />
              </div>
              <div className="text-xs text-neutral-400">External PRs Merged</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-200 group">
              <div className="text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                <Code2 size={18} />
              </div>
              <div className="text-xl font-bold font-mono text-white">Go, TS, Py</div>
              <div className="text-xs text-neutral-400">Core Languages</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-200 group">
              <div className="text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                <Cpu size={18} />
              </div>
              <div className="text-xl font-bold font-mono text-white">AI & Infra</div>
              <div className="text-xs text-neutral-400">Specialization</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Aceternity CometCard Compact & Balanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[42%] flex justify-center"
        >
          <CometCard className="w-full max-w-xs sm:max-w-sm">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl p-2.5 bg-gradient-to-b from-neutral-800/90 to-neutral-900/95 border border-neutral-700/60 shadow-2xl flex flex-col justify-between group overflow-hidden">
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/60 border border-neutral-800">
                <img
                  src="/images/pfp.png"
                  alt="Ryan Akmal Pasya"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Badge on Photo */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Ryan Akmal Pasya</div>
                    <div className="text-sm font-semibold text-white">nylo.me</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </div>
                </div>
              </div>
            </div>
          </CometCard>
        </motion.div>
      </div>
    </section>
  );
}
