"use client";
import React, { useState } from "react";
import { Terminal, ArrowUpRight } from "lucide-react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "OSS", link: "#oss" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo href="#">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all duration-300">
            <Terminal size={13} />
          </div>
          <div className="flex items-center text-sm font-medium tracking-tight">
            <span className="text-emerald-400 font-semibold">Ryan</span>
            <span className="text-neutral-200 ml-1">Akmal Pasya</span>
          </div>
        </NavbarLogo>

        <NavItems items={navItems} />

        <div className="relative z-20 flex items-center gap-2">
          <NavbarButton href="mailto:brian.sbg12@gmail.com" variant="secondary">
            Get in touch
          </NavbarButton>
          <NavbarButton href="#projects" variant="primary">
            <span>View Work</span>
            <ArrowUpRight size={13} />
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href="#">
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal size={13} />
            </div>
            <span className="text-sm font-semibold text-white">Ryan</span>
          </NavbarLogo>

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:text-emerald-400 hover:bg-neutral-800/50 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="w-full pt-3 mt-1 border-t border-neutral-800/80 flex items-center justify-between">
            <a
              href="mailto:brian.sbg12@gmail.com"
              className="text-xs text-neutral-400 hover:text-white"
            >
              brian.sbg12@gmail.com
            </a>
            <NavbarButton
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
            >
              View Work ↗
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
