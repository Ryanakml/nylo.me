"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Independent context (do not reuse 3d-card's MouseEnterContext)
const ExplodeContext = createContext(undefined);

export const useExplode = () => {
  const ctx = useContext(ExplodeContext);
  if (ctx === undefined) {
    throw new Error("useExplode must be used within an ExplodeContainer");
  }
  return ctx;
};

export const ExplodeContainer = ({
  children,
  className,
  containerClassName,
  explodeScale = 1,
  disableTilt = false,
  // Controlled lock (for demo reset button / external control). Uncontrolled by default.
  locked: controlledLocked,
  onLockedChange,
}) => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [internalLocked, setInternalLocked] = useState(false);

  const isControlled = controlledLocked !== undefined;
  const locked = isControlled ? controlledLocked : internalLocked;

  const setLocked = useCallback(
    (v) => {
      const next = typeof v === "function" ? v(locked) : v;
      if (!isControlled) setInternalLocked(next);
      onLockedChange?.(next);
    },
    [isControlled, locked, onLockedChange]
  );

  const isExploded = hovered || locked;

  const handleMouseMove = (e) => {
    if (disableTilt || !containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    // More subtle than 3d-card (/30 vs /25)
    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setHovered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleClick = () => {
    // Toggle lock (mobile support). Desktop hover still works via `hovered`.
    setLocked((prev) => !prev);
  };

  return (
    <ExplodeContext.Provider
      value={{ isExploded, locked, setLocked, explodeScale }}
    >
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1200px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={cn(
            "relative flex items-center justify-center cursor-pointer select-none",
            "transition-all duration-500 ease-out",
            "[transform-style:preserve-3d]",
            isExploded && "explode-shake",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            // Glow when exploded
            filter: isExploded
              ? "drop-shadow(0 0 42px rgba(16,185,129,0.28))"
              : "drop-shadow(0 0 0px rgba(16,185,129,0))",
          }}
        >
          {children}
          <style>{`
            .explode-shake { animation: explode-shake 0.5s cubic-bezier(0.16,1,0.3,1); }
            @keyframes explode-shake {
              0% { margin-left: 0; margin-top: 0; }
              25% { margin-left: -2px; margin-top: 1px; }
              50% { margin-left: 2px; margin-top: -1px; }
              75% { margin-left: -1px; margin-top: -1px; }
              100% { margin-left: 0; margin-top: 0; }
            }
          `}</style>
        </div>
      </div>
    </ExplodeContext.Provider>
  );
};

export const ExplodeItem = ({
  as: Tag = "div",
  children,
  className,
  explodeX = 0,
  explodeY = 0,
  explodeZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  scale = 1,
  ...rest
}) => {
  const ref = useRef(null);
  const { isExploded, explodeScale } = useExplode();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sx = Number(explodeX) * explodeScale;
    const sy = Number(explodeY) * explodeScale;
    const sz = Number(explodeZ) * explodeScale;
    if (isExploded) {
      el.style.transform =
        `translate3d(${sx}px, ${sy}px, ${sz}px) ` +
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) ` +
        `scale(${scale})`;
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
      el.style.zIndex = "20";
    } else {
      el.style.transform =
        "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
      el.style.zIndex = "10";
    }
  }, [
    isExploded,
    explodeScale,
    explodeX,
    explodeY,
    explodeZ,
    rotateX,
    rotateY,
    rotateZ,
    scale,
  ]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "w-fit will-change-transform",
        "[transform-style:preserve-3d]",
        // Spring-like easing
        "transition-all duration-500",
        isExploded &&
          "shadow-[0_8px_40px_rgba(16,185,129,0.25)] backdrop-blur-md",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
