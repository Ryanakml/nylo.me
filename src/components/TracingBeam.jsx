"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Minimalist TracingBeam with Viewport-Synchronized Traveling Light
 * - Synchronized directly with viewport focus (window.innerHeight * 0.45)
 * - Hits the notch precisely when "I learn fast—mostly because I break things faster" is on screen
 * - Subtle, refined minimal glow (never blinding or overpowered)
 * - Precision 1.5px laser line with tiny 2.2px emerald/white fiber bead
 */
export function TracingBeam({ children, className = "" }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const pathRef = useRef(null);

  const [svgHeight, setSvgHeight] = useState(2000);
  const [notchY, setNotchY] = useState(1600);
  const [tipCoords, setTipCoords] = useState({ x: 19, y: 0 });
  const [progressVal, setProgressVal] = useState(0);

  // Directly track the Y coordinate relative to the viewport focus line
  const targetY = useMotionValue(0);

  // Smooth responsive spring physics
  const springY = useSpring(targetY, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.5,
  });

  const springProgress = useTransform(springY, (y) =>
    svgHeight > 0 ? Math.max(0, Math.min(1, y / svgHeight)) : 0
  );

  // Track coordinates of the light head on the SVG path in realtime
  useMotionValueEvent(springY, "change", (latestY) => {
    if (!pathRef.current || svgHeight <= 0) return;
    const progress = Math.max(0, Math.min(1, latestY / svgHeight));
    setProgressVal(progress);
    try {
      const len = pathRef.current.getTotalLength();
      if (len > 0) {
        const targetDist = progress * len;
        const pt = pathRef.current.getPointAtLength(targetDist);
        if (pt && Number.isFinite(pt.x) && Number.isFinite(pt.y)) {
          setTipCoords({ x: pt.x, y: pt.y });
        }
      }
    } catch (e) {
      // Ignore during initial render
    }
  });

  const updateScrollPosition = (currentHeight = svgHeight) => {
    if (!containerRef.current || currentHeight <= 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    // 45% from top of viewport: perfectly aligns with user focus & text reveal center
    const viewportFocus = window.innerHeight * 0.45;
    const rawY = viewportFocus - rect.top;
    const clamped = Math.max(0, Math.min(currentHeight, rawY));
    targetY.set(clamped);
  };

  const updateMetrics = () => {
    const height = typeof window !== "undefined" ? window.innerHeight : 800;

    let lineLength = 0;
    let targetNotch = 0;

    if (contentRef.current) {
      const contactEl = contentRef.current.querySelector("#contact");
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        // Stops precisely 20px above Contact section
        lineLength = Math.max(0, contactRect.top - contentRect.top - 20);
      } else {
        lineLength = contentRef.current.offsetHeight;
      }

      // Calculate the exact Y position of the notch so it aligns with "because I break"
      const revealContainer = contentRef.current.querySelector("[data-text-reveal]");
      if (revealContainer) {
        const containerTop = revealContainer.offsetTop;
        targetNotch = containerTop + height * 0.45;
      } else {
        targetNotch = lineLength * 0.85;
      }
    }

    if (lineLength > 100) {
      setSvgHeight(lineLength);
      if (targetNotch > 100 && targetNotch < lineLength - 60) {
        setNotchY(targetNotch);
      } else {
        setNotchY(lineLength * 0.85);
      }
      updateScrollPosition(lineLength);
    }
  };

  useEffect(() => {
    updateMetrics();

    const handleScroll = () => updateScrollPosition();
    const handleResize = () => updateMetrics();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    let ro = null;
    if (typeof ResizeObserver !== "undefined" && contentRef.current) {
      ro = new ResizeObserver(() => updateMetrics());
      ro.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (ro) ro.disconnect();
    };
  }, [svgHeight]);

  const pathD = `M 1 0 V -36 l 18 24 V ${notchY} l -18 24 V ${svgHeight}`;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative w-full max-w-6xl mx-auto h-full px-3.5 sm:px-6 md:px-8", className)}
    >
      {/* Side Tracing Beam Container (Visible on tablet & desktop, hidden on mobile for clean full-width layout) */}
      <div className="hidden md:block absolute md:-left-8 lg:-left-12 top-3 pointer-events-none z-20">
        {/* Subtle Top Beacon Anchor */}
        <div className="ml-[27px] h-3.5 w-3.5 rounded-full border border-neutral-800 bg-neutral-950 shadow-sm flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* SVG Path Tracker with Minimalist Laser Light */}
        {svgHeight > 0 && (
          <svg
            viewBox={`0 0 24 ${svgHeight}`}
            width="24"
            height={svgHeight}
            className="ml-4 block overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Refined Subtle Glow Filter (Minimal & Non-blinding) */}
              <filter id="subtle-laser-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. Base Guide Rail (Minimal subtle track) */}
            <path
              d={pathD}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="1.25"
            />

            {/* 2. Soft Traversed Emerald Trail */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="rgba(16, 185, 129, 0.2)"
              strokeWidth="1.25"
              style={{
                pathLength: springProgress,
              }}
            />

            {/* 3. Sleek Active Laser Line (Refined 1.5px with minimal soft glow) */}
            <motion.path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#subtle-laser-glow)"
              style={{
                pathLength: springProgress,
              }}
            />

            {/* 4. Minimal Traveling Light Bead (Subtle & Precision Aligned) */}
            {progressVal > 0.002 && (
              <g transform={`translate(${tipCoords.x}, ${tipCoords.y})`}>
                {/* Soft subtle halo */}
                <circle
                  r="4.5"
                  fill="rgba(52, 211, 153, 0.25)"
                />
                {/* Precision emerald bead */}
                <circle
                  r="2.2"
                  fill="#10b981"
                />
                {/* Tiny pinpoint core */}
                <circle
                  r="1.1"
                  fill="#ffffff"
                />
              </g>
            )}
          </svg>
        )}
      </div>

      {/* Main Content Area */}
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </motion.div>
  );
}
