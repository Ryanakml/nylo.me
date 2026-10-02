"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

/**
 * 1:1 Official Aceternity UI ShootingStars Component
 * https://ui.aceternity.com/components/shooting-stars-and-stars-background
 */

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200);

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: typeof window !== "undefined" ? window.innerWidth : 1200, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: typeof window !== "undefined" ? window.innerHeight : 800, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = ({
  minSpeed = 14,
  maxSpeed = 32,
  minDelay = 1000,
  maxDelay = 3000,
  starColor = "#10b981",
  trailColor = "#34d399",
  starWidth = 28,
  starHeight = 2.5,
  className,
}) => {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId = setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > (typeof window !== "undefined" ? window.innerWidth + 20 : 1220) ||
            newY < -20 ||
            newY > (typeof window !== "undefined" ? window.innerHeight + 20 : 820)
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#shooting-star-gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="shooting-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
