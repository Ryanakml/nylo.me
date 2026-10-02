import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// 1:1 Magnetic Cursor Effect for Interactive Buttons
function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const element = ref.current;
    if (!element) return;
    setIsHovered(true);
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={`relative inline-flex p-1 ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`will-change-transform ${isHovered ? "duration-0" : "duration-200 ease-out"} transition-transform`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        {children}
      </div>
    </div>
  );
}

const PHRASES = [
  "I'd love to hear about your ideas.",
  "Feel free to reach out anytime.",
  "Your next project deserves the right collaborator.",
  "Building great work starts with a conversation.",
  "Let's discuss how I can help your vision.",
  "Ready to collaborate? Let's talk.",
];

export default function Contact() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[max(70vh,32rem)] flex flex-col justify-start pt-16 pb-0 overflow-hidden"
    >
      {/* 1:1 Left-Aligned Header */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-20 mb-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white font-mono text-left">
          CONTACT
        </h2>
      </div>

      {/* Hujan (BackgroundBeamsWithCollision) di-comment sementara */}
      {/* <BackgroundBeamsWithCollision className="w-full flex-1 min-h-[45vh] md:min-h-[55vh] flex flex-col items-center justify-start z-0"> */}
      <div className="w-full flex-1 flex flex-col items-center justify-start z-0">
        <div className="px-4 text-center z-30 flex flex-col items-center justify-start w-full max-w-xl mx-auto pt-12 md:pt-16">
          {/* Main Email Callout with Underline */}
          <p className="text-base sm:text-lg text-white font-mono font-normal">
            Feel free to reach me at{" "}
            <a
              href="mailto:brian.sbg12@gmail.com"
              className="underline underline-offset-4 decoration-neutral-500 hover:decoration-emerald-400 text-white hover:text-emerald-400 font-medium transition-colors"
            >
              brian.sbg12@gmail.com
            </a>
          </p>

          {/* Subtitle matching Image 2 */}
          <div className="mt-4 md:mt-3 mb-4 md:mb-2 text-center min-h-[2.5rem] flex items-center justify-center">
            <p className="text-sm sm:text-base text-neutral-400 font-mono font-normal transition-all duration-300">
              {PHRASES[phraseIndex]}
            </p>
          </div>

          {/* 4 Circular Action Buttons with Magnetic Hover */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 py-4 relative z-40 px-2">
            {/* Email Icon */}
            <Magnetic>
              <a
                href="mailto:brian.sbg12@gmail.com"
                aria-label="Email"
                title="Email"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-800 bg-[#0a0a0a]/90 hover:bg-neutral-900 hover:border-emerald-500/60 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
              >
                <Mail size={18} />
              </a>
            </Magnetic>

            {/* Phone / WhatsApp Icon */}
            <Magnetic>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phone / WhatsApp"
                title="Phone / WhatsApp"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-800 bg-[#0a0a0a]/90 hover:bg-neutral-900 hover:border-emerald-500/60 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
              >
                <Phone size={18} />
              </a>
            </Magnetic>

            {/* GitHub Icon */}
            <Magnetic>
              <a
                href="https://github.com/Ryanakml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-800 bg-[#0a0a0a]/90 hover:bg-neutral-900 hover:border-emerald-500/60 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
              >
                <GithubIcon size={18} />
              </a>
            </Magnetic>

            {/* Location Icon */}
            <Magnetic>
              <a
                href="https://maps.google.com/?q=Jakarta,Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                title="Location: Jakarta (UTC+7)"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-800 bg-[#0a0a0a]/90 hover:bg-neutral-900 hover:border-emerald-500/60 text-neutral-300 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
              >
                <MapPin size={18} />
              </a>
            </Magnetic>
          </div>

          {/* 1:1 Developed by Me - Directly beneath the buttons matching Image 2 */}
          <div className="text-center text-xs font-mono text-neutral-500 pt-6 pb-4">
            © Developed by Me
          </div>
        </div>
      </div>
      {/* </BackgroundBeamsWithCollision> */}
    </footer>
  );
}
