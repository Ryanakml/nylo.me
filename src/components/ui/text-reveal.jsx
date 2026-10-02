"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextReveal component
 * Features:
 * - Structured multi-line support matching reference layout
 * - Sequential scroll-driven token illumination
 * - Words reveal progressively and finish early (at ~65% scroll),
 *   ensuring "faster." is 100% illuminated before Contact appears
 */
export const TextReveal = ({ lines, children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // Spring smoothing for discrete mouse wheel clicks
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
          className="sticky top-0 mx-auto flex h-[50%] max-w-5xl items-center bg-transparent px-4 sm:px-6 md:px-8 py-20"
          data-text-reveal-content="true"
        >
          <div className="w-full text-left font-mono font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight select-none">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {lines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3.5 md:gap-x-4.5"
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
        className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 sm:px-6 md:px-8 py-20"
        data-text-reveal-content="true"
      >
        <div className="w-full text-left">
          <span className="flex flex-wrap items-center justify-start text-left p-2 sm:p-4 text-2xl font-bold font-mono text-white/20 md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed">
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
    <span className="relative inline-grid align-middle">
      {/* Dim / Unrevealed Ghost Layer */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 select-none opacity-20 text-white flex items-center justify-start pointer-events-none"
      >
        {children}
      </span>
      {/* Bright / Revealed Scroll-Driven Motion Layer */}
      <motion.span
        style={{ opacity }}
        className="col-start-1 row-start-1 text-white font-bold flex items-center justify-start"
      >
        {children}
      </motion.span>
    </span>
  );
};
