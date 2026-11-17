"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FOUNDER_PROFILE } from "@/data/projects";
import { Menu, X, ArrowUpRight, Terminal, Command } from "lucide-react";
import LiveFPSMonitor from "@/components/LiveFPSMonitor";

const NAV_ITEMS = [
  { id: "proyectos", label: "PROYECTOS" },
  { id: "experiencia", label: "EXPERIENCIA" },
  { id: "stack", label: "STACK & ARQUITECTURA" },
  { id: "filosofia-producto", label: "PRODUCT MINDSET" },
  { id: "contacto", label: "CONTACTO" },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("proyectos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
          scrolled ? "pt-3 sm:pt-4" : "pt-4 sm:pt-6"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "w-[94%] max-w-5xl px-4 py-2 rounded-full bg-[#09090B]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]"
              : "w-[96%] max-w-7xl px-5 py-3 rounded-2xl bg-[#09090B]/50 backdrop-blur-md border border-white/[0.05]"
          }`}
        >
          {/* Brand Signature */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 p-[1px] group-hover:border-[#00FF94] transition-colors duration-300">
              <Image
                src={FOUNDER_PROFILE.photoUrl}
                alt={FOUNDER_PROFILE.name}
                fill
                priority
                className="object-cover object-top"
                sizes="32px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-tight text-white group-hover:text-[#00FF94] transition-colors">
                DANIEL M. MIRA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                SWE // MULTIMEDIA
              </span>
            </div>
          </Link>

          {/* Center Navigation with LayoutId Floating Indicator */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121216]/60 border border-white/[0.06] rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className="relative px-3 py-1.5 text-[11px] font-mono tracking-wider transition-colors duration-200"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-[#00FF94]/40"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-[#00FF94] font-semibold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Status Pill + FPS Telemetry + Command Palette + CV */}
          <div className="flex items-center gap-2">
            {/* Real-time FPS Telemetry */}
            <div className="hidden lg:flex items-center">
              <LiveFPSMonitor />
            </div>

            {/* Quick Command Palette Button */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-[11px] font-mono text-zinc-300 hover:text-white transition-colors"
                title="Abrir paleta de comandos (Cmd+K o Ctrl+K)"
              >
                <Command className="w-3 h-3 text-accent" />
                <span className="text-[10px] text-zinc-400">⌘K</span>
              </button>
            )}

            <a
              href={FOUNDER_PROFILE.cvUrl}
              download="CV_Daniel_Martinez_Mira.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,148,0.25)] hover:shadow-[0_0_25px_rgba(0,255,148,0.45)] hover:scale-105"
            >
              <span>CV.PDF</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#09090B]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#00FF94]" />
                MENU_TERMINAL
              </span>
              <span className="text-[#00FF94]">AVAILABLE_FOR_HIRE</span>
            </div>

            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-sm font-mono tracking-wider text-zinc-300 hover:text-white hover:border-[#00FF94]/30 transition-colors flex items-center justify-between"
                >
                  <span>// {item.label}</span>
                  <span className="text-[10px] text-zinc-600">0{NAV_ITEMS.indexOf(item) + 1}</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
              <a
                href={FOUNDER_PROFILE.cvUrl}
                download="CV_Daniel_Martinez_Mira.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-bold bg-[#00FF94] text-black"
              >
                <span>DESCARGAR CURRÍCULUM VITAE (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
