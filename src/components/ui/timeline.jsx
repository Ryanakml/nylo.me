"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

/**
 * Official Aceternity UI Timeline Component
 * https://ui.aceternity.com/components/timeline
 */
export const Timeline = ({ data, title, description }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && ref.current) {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(ref.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div className="w-full font-sans md:px-6" ref={containerRef}>
      {(title || description) && (
        <div className="max-w-4xl mx-auto py-10 px-4 md:px-0 text-left">
          {title && (
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-mono mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm sm:text-base text-neutral-400 font-mono">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            {/* Sticky Navigation / Milestone Indicator on Desktop */}
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-36 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-950/90 backdrop-blur-md flex items-center justify-center border border-neutral-800 shadow-lg">
                <div className="h-4 w-4 rounded-full bg-neutral-900 border border-emerald-500/40 p-2 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                </div>
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl lg:text-3xl font-bold font-mono tracking-tight text-neutral-300">
                {item.title}
              </h3>
            </div>

            {/* Content Card on the Right */}
            <div className="relative pl-16 pr-2 sm:pl-20 sm:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold font-mono text-neutral-200">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Aceternity Dynamic Beam Track & Glowing Gradient */}
        <div
          style={{
            height: height > 0 ? `${height}px` : "100%",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] pointer-events-none"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-emerald-400 via-emerald-500 to-transparent from-[0%] via-[12%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.85)]"
          />
        </div>
      </div>
    </div>
  );
};
