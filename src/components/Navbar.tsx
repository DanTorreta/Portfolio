'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FOUNDER_PROFILE } from '@/data/projects';
import { Menu, X, Command, Sun, Moon, Globe } from 'lucide-react';
import LiveFPSMonitor from '@/components/LiveFPSMonitor';
import { useAppInteractions } from '@/components/AppProviders';

const SECTION_IDS = ['proyectos', 'experiencia', 'stack', 'contacto'];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { theme, toggleTheme, language, toggleLanguage } = useAppInteractions();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('proyectos');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const NAV_ITEMS = language === 'es' ? [
    { id: 'proyectos', label: 'PROYECTOS' },
    { id: 'experiencia', label: 'EXPERIENCIA' },
    { id: 'stack', label: 'STACK' },
    { id: 'contacto', label: 'CONTACTO' },
  ] : [
    { id: 'proyectos', label: 'PROJECTS' },
    { id: 'experiencia', label: 'EXPERIENCE' },
    { id: 'stack', label: 'STACK' },
    { id: 'contacto', label: 'CONTACT' },
  ];

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60);
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_IDS.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
          scrolled ? 'pt-3 sm:pt-4' : 'pt-4 sm:pt-6'
        }`}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'w-[94%] max-w-5xl px-4 py-2 rounded-full bg-[#09090B]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]'
              : 'w-[96%] max-w-7xl px-5 py-3 rounded-2xl bg-[#09090B]/50 backdrop-blur-md border border-white/[0.05]'
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
                unoptimized
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

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121216]/60 border border-white/[0.06] rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className="relative px-3.5 py-1.5 text-[11px] font-mono tracking-wider transition-colors duration-200"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-[#00FF94]/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? 'text-[#00FF94] font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Clean Essential Controls */}
          <div className="flex items-center gap-2">
            {/* Real-time FPS Monitor */}
            <div className="hidden lg:flex items-center">
              <LiveFPSMonitor />
            </div>

            {/* Language Switcher ES / EN */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-[10px] font-mono text-zinc-300 hover:text-white transition-colors"
              title="Cambiar idioma (ES / EN)"
            >
              <Globe className="w-3 h-3 text-[#00FF94]" />
              <span className="font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle (Clean Sun / Moon icon) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-zinc-700" />
              )}
            </button>

            {/* Quick Command Palette Button ⌘K */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-[11px] font-mono text-zinc-300 hover:text-white transition-colors"
                title="Abrir paleta de comandos (Cmd+K / Ctrl+K)"
              >
                <Command className="w-3 h-3 text-accent" />
                <span className="text-[10px] text-zinc-400">⌘K</span>
              </button>
            )}

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
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[#09090B]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-3 md:hidden"
          >
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-sm font-mono tracking-wider text-zinc-300 hover:text-white hover:border-[#00FF94]/30 transition-colors flex items-center justify-between"
              >
                <span>// {item.label}</span>
                <span className="text-[10px] text-zinc-600">0{idx + 1}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
