"use client";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

/**
 * 1:1 Aceternity UI CardSpotlight Component
 * https://ui.aceternity.com/components/card-spotlight
 *
 * Uses CanvasRevealEffect masked by a dynamic radial gradient spotlight
 * that strictly follows the mouse pointer instead of filling the whole card.
 */
export const CardSpotlight = ({
  children,
  radius = 260,
  color = "rgba(16, 185, 129, 0.08)",
  colors = [
    [16, 185, 129],
    [5, 150, 105],
  ],
  dotSize = 2.5,
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-[#0f0f0f] hover:border-neutral-700/80 transition-all duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* 1:1 Aceternity CanvasRevealEffect spotlight follower */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={3.5}
            containerClassName="!bg-transparent absolute inset-0 pointer-events-none"
            colors={colors}
            dotSize={dotSize}
            showGradient={false}
          />
        )}
      </motion.div>

      {/* Subtle border highlight following pointer */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          border: "1px solid rgba(16, 185, 129, 0.35)",
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius * 0.75}px circle at ${mouseX}px ${mouseY}px,
              black 30%,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius * 0.75}px circle at ${mouseX}px ${mouseY}px,
              black 30%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};
