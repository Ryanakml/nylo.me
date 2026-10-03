import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Skills from "./components/Skills";
import ScrollStatement from "./components/ScrollStatement";
import Contact from "./components/Contact";
import { TracingBeam } from "./components/TracingBeam";
import { LoaderFour } from "./components/ui/loader";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(12px)",
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
          >
            <LoaderFour text="Loading..." />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-emerald-500 selection:text-black antialiased relative">
        {/* Aceternity Stars Background & Emerald Shooting Stars */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
          <StarsBackground
            starDensity={0.00025}
            allStarsTwinkle={true}
            twinkleProbability={0.8}
            minTwinkleSpeed={0.5}
            maxTwinkleSpeed={1.2}
          />
          <ShootingStars
            minSpeed={14}
            maxSpeed={32}
            minDelay={1000}
            maxDelay={3000}
            starColor="#10b981"
            trailColor="#34d399"
            starWidth={28}
            starHeight={2.5}
          />
        </div>

        {/* Page Content Layer above Stars */}
        <div className="relative z-10 w-full max-w-full overflow-x-hidden">
          {/* Floating Capsule Navbar */}
          <Navbar />

          {/* Hero Section */}
          <Hero />

          {/* Main Content with Tracing Beam on the left */}
          <TracingBeam>
            <About />
            <Experience />
            <Projects />
            <OpenSource />
            <Skills />
            <ScrollStatement />
            <Contact />
          </TracingBeam>
        </div>
      </div>
    </>
  );
}

