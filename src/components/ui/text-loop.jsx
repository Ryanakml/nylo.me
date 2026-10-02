"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * TextLoop Component
 * Seamless vertical rotate / roll animation with subtle blur and fluid deceleration.
 * Supports desynchronized phase delay so multiple loops don't flip simultaneously.
 */
export function TextLoop({
  words = [],
  interval = 2800,
  delay = 0,
  className = "",
  transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    let timer;

    const initialTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);

      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, interval);
    }, delay > 0 ? delay : interval);

    return () => {
      clearTimeout(initialTimeout);
      if (timer) clearInterval(timer);
    };
  }, [words, interval, delay]);

  if (!words || words.length === 0) return null;

  return (
    <span className={cn("relative inline-flex overflow-hidden align-baseline select-none", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(4px)" }}
          transition={transition}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default TextLoop;
