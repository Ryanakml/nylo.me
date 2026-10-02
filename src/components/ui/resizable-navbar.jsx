"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import React, { useRef, useState } from "react";

/**
 * Resizable Navbar Component
 * Liquid-Smooth Continuous Scroll Interpolation (GPU-Accelerated)
 * Directly tied to scroll distance (0px -> 140px) with zero sudden boolean snaps.
 */

export const Navbar = ({
  children,
  className
}) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full pt-2 sm:pt-3 pointer-events-none", className)}
    >
      <div className="pointer-events-auto">
        {children}
      </div>
    </div>
  );
};

export const NavBody = ({
  children,
  className,
}) => {
  const { scrollY } = useScroll();

  // Low mass (0.2) + high stiffness (280) for zero lag, but perfectly smooth scroll wheel filtering
  const smoothY = useSpring(scrollY, {
    stiffness: 280,
    damping: 32,
    mass: 0.2,
  });

  // Continuous fluid interpolation directly tracking scroll distance
  const width = useTransform(smoothY, [0, 150], ["96%", "82%"]);
  const maxWidth = useTransform(smoothY, [0, 150], ["1280px", "1060px"]);
  const y = useTransform(smoothY, [0, 150], [0, 6]);
  const bgOpacity = useTransform(smoothY, [0, 150], [0, 1]);

  return (
    <motion.div
      style={{
        width,
        maxWidth,
        y,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden flex-row items-center justify-between self-start rounded-full px-5 py-2.5 lg:flex",
        className
      )}
    >
      {/* GPU-Accelerated Smooth Fading Background Layer */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 rounded-full bg-[#0d0d0f]/85 backdrop-blur-md border border-neutral-800/80 shadow-2xl pointer-events-none -z-10"
      />

      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick
}) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-neutral-400 lg:flex pointer-events-none",
        className
      )}
    >
      <div className="flex items-center space-x-1 pointer-events-auto">
        {items.map((item, idx) => (
          <a
            key={`link-${idx}`}
            href={item.link || item.href}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-3.5 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors duration-200 select-none font-medium"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hoveredNavPill"
                className="absolute inset-0 rounded-full bg-neutral-800/60 border border-neutral-700/40 pointer-events-none"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
}) => {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    stiffness: 280,
    damping: 32,
    mass: 0.2,
  });

  const width = useTransform(smoothY, [0, 150], ["96%", "90%"]);
  const y = useTransform(smoothY, [0, 150], [0, 6]);
  const bgOpacity = useTransform(smoothY, [0, 150], [0, 1]);

  return (
    <motion.div
      style={{
        width,
        y,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-lg flex-col items-center justify-between rounded-full px-4 py-2 lg:hidden",
        className
      )}
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 rounded-full bg-[#0d0d0f]/90 backdrop-blur-md border border-neutral-800/80 shadow-xl pointer-events-none -z-10"
      />
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className
}) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between", className)}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "absolute inset-x-0 top-14 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-2xl bg-[#0f0f0f]/95 p-4 backdrop-blur-2xl border border-neutral-800 shadow-2xl",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <IconX className="size-5 text-white" />
      ) : (
        <IconMenu2 className="size-5 text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = ({ children, href = "#" }) => {
  return (
    <a
      href={href}
      className="relative z-20 mr-4 flex items-center space-x-2 text-sm font-semibold tracking-tight text-white group outline-none"
    >
      {children}
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-3.5 py-1.5 rounded-full text-xs font-medium relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center gap-1.5 text-center";

  const variantStyles = {
    primary:
      "bg-emerald-500 text-black hover:bg-emerald-400 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.25)] hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]",
    secondary:
      "bg-transparent text-neutral-400 hover:text-white border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800/30",
    dark:
      "bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800",
    gradient:
      "bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
