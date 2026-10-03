"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextReveal component
 * Features:
 * - 100% fluid & responsive layout on mobile, tablet, and desktop
 * - Preserves the authentic 3-line statement structure without awkward mobile wrapping
 * - Sequential scroll-driven token illumination
 * - Words reveal progressively and finish early (at ~65% scroll)
 */
export const TextReveal = ({ lines, children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // Spring smoothing for discrete mouse wheel clicks and touch scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0001,
  });

  const revealEnd = 0.65;

  // Support structured lines format
  if (lines && Array.isArray(lines)) {
    const allTokens = lines.flat();
    const wordStep = revealEnd / Math.max(1, allTokens.length);
    let tokenIndex = 0;

    return (
      <div
        ref={targetRef}
        className={cn("relative z-0 h-[220vh]", className)}
        data-text-reveal="true"
      >
        <div
          className="sticky top-0 mx-auto flex h-screen min-h-[100svh] max-w-5xl items-center justify-center bg-transparent px-1 sm:px-4 md:px-6 py-8 sm:py-16"
          data-text-reveal-content="true"
        >
          <div className="w-full text-left font-mono font-bold text-[clamp(1.2rem,5vw,4.5rem)] tracking-tight leading-[1.25] sm:leading-[1.2] select-none overflow-x-hidden">
            <div className="flex flex-col gap-y-[0.3em] w-full">
              {lines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className="flex items-center gap-x-[0.35em] whitespace-nowrap overflow-visible"
                >
                  {line.map((item, itemIdx) => {
                    const currentIndex = tokenIndex++;
                    const start = currentIndex * wordStep;
                    const end = Math.min(revealEnd, start + wordStep * 1.35);

                    return (
                      <Word
                        key={itemIdx}
                        progress={smoothProgress}
                        range={[start, end]}
                      >
                        {item}
                      </Word>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for flat children
  const flattenChildren = (content) => {
    if (typeof content === "string") {
      return content.split(/\s+/).filter(Boolean);
    }
    if (typeof content === "number") {
      return [content.toString()];
    }
    if (Array.isArray(content)) {
      return content.flatMap(flattenChildren);
    }
    return [content];
  };

  const words = flattenChildren(children);
  const wordStep = revealEnd / Math.max(1, words.length);

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[220vh]", className)}
      data-text-reveal="true"
    >
      <div
        className="sticky top-0 mx-auto flex h-screen min-h-[100svh] max-w-4xl items-center justify-center bg-transparent px-4 sm:px-6 md:px-8 py-8 sm:py-16"
        data-text-reveal-content="true"
      >
        <div className="w-full text-left">
          <span className="flex flex-wrap items-center justify-start text-left p-2 sm:p-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-mono text-white/20 leading-relaxed">
            {words.map((word, i) => {
              const start = i * wordStep;
              const end = Math.min(revealEnd, start + wordStep * 1.35);
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-flex items-center align-middle">
      {/* Dim / Unrevealed Ghost Layer */}
      <span
        aria-hidden="true"
        className="select-none opacity-20 text-white inline-flex items-center justify-start pointer-events-none"
      >
        {children}
      </span>
      {/* Bright / Revealed Scroll-Driven Motion Layer */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-white font-bold inline-flex items-center justify-start pointer-events-none"
      >
        {children}
      </motion.span>
    </span>
  );
};
