import React, { useState, useEffect } from "react";
import { TerminalWindow } from "@/components/ui/terminal";

export default function About() {
  // Real-time ticking engineering uptime calculator down to milliseconds
  const [uptimeString, setUptimeString] = useState("");

  useEffect(() => {
    // Calculated from project start (~2 years of shipped production engineering)
    const projectStartDate = new Date("2024-09-01T00:00:00Z");

    const updateUptime = () => {
      const now = new Date();
      const diffMs = Math.max(0, now.getTime() - projectStartDate.getTime());

      const msPerSecond = 1000;
      const msPerMinute = msPerSecond * 60;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerYear = msPerDay * 365.25;

      const years = Math.floor(diffMs / msPerYear);
      let rem = diffMs % msPerYear;

      const days = Math.floor(rem / msPerDay);
      rem %= msPerDay;

      const hours = Math.floor(rem / msPerHour);
      rem %= msPerHour;

      const minutes = Math.floor(rem / msPerMinute);
      rem %= msPerMinute;

      const seconds = Math.floor(rem / msPerSecond);
      const milliseconds = rem % msPerSecond;

      const pad = (n, len = 2) => String(n).padStart(len, "0");

      setUptimeString(
        `${years}y, ${days}d, ${pad(hours)}h, ${pad(minutes)}m, ${pad(seconds)}s, ${pad(milliseconds, 3)}ms`
      );
    };

    updateUptime();
    const interval = setInterval(updateUptime, 41); // ~24 fps update for smooth ticking
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 w-full">
      <div className="mb-8 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 font-mono">
          ABOUT ME
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Systems mindset, engineering philosophy, and runtime track record.
        </p>
      </div>

      {/* Flagship macOS Terminal Window */}
      <TerminalWindow uptimeString={uptimeString} />
    </section>
  );
}
