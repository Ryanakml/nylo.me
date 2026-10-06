"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Terminal as TerminalIcon } from "lucide-react";

export function TerminalWindow({ uptimeString }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);

  // Tab 3: Interactive CLI State
  const [interactiveHistory, setInteractiveHistory] = useState([
    {
      type: "output",
      text: "Type 'help' to see available commands or click the tags below.",
    },
  ]);
  const [interactiveInput, setInteractiveInput] = useState("");
  const inputRef = useRef(null);
  const terminalScrollRef = useRef(null);

  // Auto-scroll interactive terminal on new output
  useEffect(() => {
    if (activeTab === "interactive" && terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [interactiveHistory, activeTab]);

  const handleCopy = () => {
    let textToCopy = "";
    if (activeTab === "profile") {
      textToCopy = `Ryan Akmal Pasya (@Ryanakml)
Role: AI Systems Engineer & Full-Stack Builder
Core Focus: Distributed Queues · Autonomous LLM Agents · High-Throughput Infra
Core Stack: Go, TypeScript, Python, Docker, Next.js, FastAPI, PostgreSQL, Redis
Philosophy: Root-cause engineering over surface demo wrappers
Shipped: 7 Production Systems (Deadbolt, FlowDesk, Wabrix...)
Upstream Merged: OpenHands, Celery, Matplotlib, Pylint, Typeshed
Location: Indonesia (UTC+7)
Kernel Uptime: ${uptimeString}`;
    } else if (activeTab === "philosophy") {
      textToCopy = `Engineering Philosophy:
I am an AI Systems Engineer focused on building software that operates reliably under real-world constraints. Rather than chasing surface-level demo wrappers, I focus on root-cause engineering: durable state machines, distributed leases & fencing, rate limits, idempotent webhook ingestion, and end-to-end telemetry.`;
    } else {
      textToCopy = interactiveHistory.map((h) => (h.type === "input" ? `$ ${h.text}` : h.text)).join("\n");
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const newHistory = [...interactiveHistory, { type: "input", text: trimmed }];
    const cmd = trimmed.toLowerCase();

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available commands:
  • whoami    : Core role & identity summary
  • stack     : Technologies, languages & infrastructure
  • shipped   : Production systems shipped to date
  • oss       : Upstream open source contributions
  • uptime    : Real-time kernel systems uptime
  • contact   : Get in touch & social links
  • clear     : Clear terminal history`,
        });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text: "Ryan Akmal Pasya — AI Systems Engineer focusing on distributed backends, LLM agents, and high-reliability production software.",
        });
        break;
      case "stack":
        newHistory.push({
          type: "output",
          text: "Languages : Go, TypeScript, Python, SQL, Rust (exploring)\nFrameworks : FastAPI, Next.js, Celery, Express\nInfra/DB   : Docker, Redis, PostgreSQL, Kafka, Nginx, AWS, Prometheus",
        });
        break;
      case "shipped":
        newHistory.push({
          type: "output",
          text: "Shipped 7 Production Systems:\n1. Deadbolt  - Zero-trust security & authentication gateway\n2. FlowDesk  - Real-time collaborative workspace & task orchestrator\n3. Wabrix    - Multi-tenant webhook dispatcher & queue worker\n...and 4 more proprietary client production systems.",
        });
        break;
      case "oss":
        newHistory.push({
          type: "output",
          text: "Upstream Contributions:\n• Python/Typeshed (PR #16450) - Python Core Typing\n• NumPy (PR #32911) - Numerical Core\n• HF Accelerate (PR #4357) - ML Distributed Training\n• Matplotlib (PR #32421) - Data Visualization Core\n• Django (PR #22093) - Web Framework Core",
        });
        break;
      case "uptime":
        newHistory.push({
          type: "output",
          text: `System Uptime: ${uptimeString} (Active since Sep 2024)`,
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text: "Email    : ryanakmalpasya@gmail.com\nGitHub   : https://github.com/Ryanakml\nLinkedIn : https://linkedin.com/in/ryanakmalpasya",
        });
        break;
      case "clear":
        setInteractiveHistory([]);
        setInteractiveInput("");
        return;
      case "sudo":
      case "sudo rm -rf /":
        newHistory.push({
          type: "output",
          text: "⚠️ Permission denied: Ryan's defensive sandbox prevents catastrophic deletion.",
        });
        break;
      default:
        newHistory.push({
          type: "output",
          text: `zsh: command not found: ${trimmed}. Type 'help' for a list of valid commands.`,
        });
        break;
    }

    setInteractiveHistory(newHistory);
    setInteractiveInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(interactiveInput);
    }
  };

  return (
    <div className="relative rounded-2xl md:rounded-3xl bg-black/35 backdrop-blur-[2px] border border-neutral-800 shadow-2xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300">
      {/* Top Window Bar (Solid macOS Window Chrome Header) */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 sm:px-6 bg-[#111113] border-b border-neutral-800 gap-3">
        {/* Left: Traffic Lights & Tab Pills */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500/90 border border-rose-600/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/90 border border-amber-600/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 border border-emerald-600/40" />
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs sm:text-sm font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "profile"
                  ? "bg-neutral-800 text-emerald-400 font-semibold shadow-sm border border-neutral-700/60"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>profile.sh</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("philosophy")}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "philosophy"
                  ? "bg-neutral-800 text-emerald-400 font-semibold shadow-sm border border-neutral-700/60"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>manifesto.md</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("interactive");
                setTimeout(() => inputRef.current?.focus(), 100);
              }}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "interactive"
                  ? "bg-neutral-800 text-emerald-400 font-semibold shadow-sm border border-neutral-700/60"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <TerminalIcon size={13} />
              <span>interactive.zsh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            zsh · darwin
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            title="Copy Output"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400 font-mono">Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="hidden md:inline font-mono">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Terminal Viewport (Subtle Dark Smoked Glass Tint) */}
      <div
        ref={terminalScrollRef}
        className="p-6 sm:p-8 md:p-10 font-mono text-neutral-300 min-h-[480px] md:min-h-[540px] overflow-y-auto space-y-6 bg-transparent"
      >
        {/* TAB 1: Fastfetch System Profile */}
        {activeTab === "profile" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Command Executed */}
            <div className="flex items-center gap-2.5 text-sm sm:text-base">
              <span className="text-emerald-400 font-semibold">ryanakml@darwin-node</span>
              <span className="text-neutral-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-neutral-400">$</span>
              <span className="text-white font-medium">fastfetch --profile=engineer</span>
            </div>

            {/* Fastfetch Output Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-start">
              {/* Left Column: ASCII Art Badge */}
              <div className="md:col-span-4 p-5 rounded-2xl bg-black/20 border border-neutral-800/70 text-emerald-400 text-xs sm:text-[13px] font-mono leading-relaxed whitespace-pre select-none shadow-inner">
{`   ____ _  __ ____
  / __ \\ |/ // __/
 / /_/ /   // /__ 
/ _, _/   / \\___/ 
/_/ |_/_/|_|      
────────────────────
ENGINEER RUNTIME
NODE : DARWIN-M3
UP   : PROD ACTIVE`}
                <div className="mt-4 pt-3 border-t border-neutral-800/70 text-xs text-neutral-400 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span>STATUS</span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>REGION</span>
                    <span className="text-white">ID (UTC+7 / WIB)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SECURITY</span>
                    <span className="text-emerald-400">ZERO-TRUST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CLUSTER</span>
                    <span className="text-neutral-300">AWS + BARE-METAL</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Spec Metrics */}
              <div className="md:col-span-8 space-y-3.5 text-sm sm:text-[15px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Identity
                  </span>
                  <span className="text-white font-semibold">
                    Ryan Akmal Pasya{" "}
                    <span className="text-neutral-500 font-normal">(@Ryanakml)</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Primary Role
                  </span>
                  <span className="text-emerald-400 font-medium">
                    AI Systems Engineer & Full-Stack Architect
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Core Focus
                  </span>
                  <span className="text-neutral-300">
                    Distributed Queues · Autonomous LLM Agents · Observable Infra
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Core Languages
                  </span>
                  <span className="text-white font-mono">
                    <span className="text-cyan-400 font-medium">Go</span>,{" "}
                    <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
                    <span className="text-yellow-400 font-medium">Python</span>,{" "}
                    <span className="text-orange-400 font-medium">SQL</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Infrastructure
                  </span>
                  <span className="text-neutral-300">
                    Docker, Redis, PostgreSQL, Kafka, Nginx, Prometheus, Grafana
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Track Record
                  </span>
                  <span className="text-emerald-400 font-medium">
                    7 Production Systems Shipped{" "}
                    <span className="text-neutral-400 font-normal">
                      (Deadbolt, FlowDesk, Wabrix...)
                    </span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Upstream OSS
                  </span>
                  <span className="text-white">
                    OpenHands (46k⭐), Celery (25k⭐), Matplotlib (21k⭐), Pylint (10k⭐), Typeshed
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 pt-3 border-t border-neutral-800">
                  <span className="text-neutral-500 min-w-[150px] uppercase text-xs tracking-wider">
                    Kernel Uptime
                  </span>
                  <span className="text-emerald-400 font-semibold overflow-x-auto whitespace-nowrap">
                    {uptimeString || "2y, 32d, 14h, 12m, 44s, 120ms"}
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-2 align-middle" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Engineering Manifesto */}
        {activeTab === "philosophy" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Command Executed */}
            <div className="flex items-center gap-2.5 text-sm sm:text-base">
              <span className="text-emerald-400 font-semibold">ryanakml@darwin-node</span>
              <span className="text-neutral-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-neutral-400">$</span>
              <span className="text-white font-medium">cat engineering_manifesto.md</span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-black/20 border border-neutral-800 space-y-4 leading-relaxed text-sm sm:text-base text-neutral-300">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-base sm:text-lg border-b border-neutral-800 pb-3">
                <span># ROOT-CAUSE ENGINEERING OVER DEMO WRAPPERS</span>
              </div>

              <p>
                I am an <span className="text-emerald-400 font-medium">AI Systems Engineer</span> dedicated to building software that operates predictably under real-world production stress. My architecture philosophy spans the entire lifecycle — from interactive frontends and LLM agent orchestration to distributed queues, worker execution pipelines, and observable cloud runtimes.
              </p>

              <p>
                Rather than chasing surface-level API wrappers, I prioritize <span className="text-white font-semibold">durable state machines</span>, distributed leases & fencing tokens, backpressure management, idempotent webhook delivery, and continuous tracing with OpenTelemetry.
              </p>

              <p>
                To date, I have shipped <span className="text-emerald-400 font-semibold">7 production systems</span> and contributed upstream fixes to foundational engines including <span className="text-white">Celery</span>, <span className="text-white">Pylint</span>, <span className="text-white">Matplotlib</span>, <span className="text-white">Typeshed</span>, and <span className="text-white">OpenHands</span>.
              </p>

              <div className="pt-3 text-xs sm:text-sm font-mono text-neutral-500 flex items-center justify-between border-t border-neutral-800">
                <span>// EOF manifesto.md</span>
                <span className="text-emerald-400 font-semibold">SIGNED BY @RYANAKML</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Interactive CLI Shell */}
        {activeTab === "interactive" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Quick Command Action Badges */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-neutral-800">
              <span className="text-xs text-neutral-500 mr-1">Quick Run:</span>
              {["help", "whoami", "stack", "shipped", "oss", "uptime", "contact", "clear"].map(
                (cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-800 text-neutral-400 transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                )
              )}
            </div>

            {/* Interactive Output Log */}
            <div className="space-y-3">
              {interactiveHistory.map((entry, idx) => (
                <div key={idx} className="leading-relaxed">
                  {entry.type === "input" ? (
                    <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
                      <span className="text-emerald-400 font-semibold">guest@ryanakml</span>
                      <span className="text-neutral-500">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-neutral-400">$</span>
                      <span className="text-white font-medium">{entry.text}</span>
                    </div>
                  ) : (
                    <pre className="text-neutral-300 font-mono text-xs sm:text-sm whitespace-pre-wrap pl-4 border-l-2 border-emerald-500/50 py-1">
                      {entry.text}
                    </pre>
                  )}
                </div>
              ))}
            </div>

            {/* Active Input Line */}
            <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-800">
              <span className="text-emerald-400 font-semibold text-sm">guest@ryanakml</span>
              <span className="text-neutral-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-neutral-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={interactiveInput}
                onChange={(e) => setInteractiveInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'stack')..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm sm:text-base placeholder:text-neutral-600 focus:ring-0 p-0"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Terminal Status Footer (Solid macOS Frame) */}
      <div className="px-6 py-2.5 bg-[#111113] border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>zsh 5.9</span>
        </div>
        <div className="text-neutral-500">
          <span>{activeTab}.sh</span>
        </div>
      </div>
    </div>
  );
}
