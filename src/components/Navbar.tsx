"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Briefcase, Layers, DollarSign, Mail, Menu, X, ArrowUpRight, Award } from "lucide-react";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090d16]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-indigo-500 to-cyan-400">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
              <Image
                src={FOUNDER_PROFILE.photoUrl}
                alt={FOUNDER_PROFILE.name}
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                {FOUNDER_PROFILE.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono hidden sm:inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Software Engineer
              </span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
              Full-Stack · AI · Embedded
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#131b2e]/80 border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
          <Link
            href="/#proyectos"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            Proyectos & Apps
          </Link>
          <Link
            href="/#experiencia"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <Award className="w-3.5 h-3.5 text-purple-400" />
            Experiencia
          </Link>
          <Link
            href="/#stack"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Stack Tecnológico
          </Link>
          <Link
            href="/#monetizacion"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            Monetización & Venta
          </Link>
          <Link
            href="/#contacto"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            Contacto
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={FOUNDER_PROFILE.cvUrl}
            download="CV_Daniel_Martinez_Mira.pdf"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
          >
            Descargar CV
          </a>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Contactar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-[#0d1322] border-b border-white/10">
          <Link
            href="/#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg"
          >
            <Briefcase className="w-4 h-4 text-indigo-400" />
            Proyectos & Apps
          </Link>
          <Link
            href="/#experiencia"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg"
          >
            <Award className="w-4 h-4 text-purple-400" />
            Experiencia
          </Link>
          <Link
            href="/#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            Stack Tecnológico
          </Link>
          <Link
            href="/#monetizacion"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Monetización & Venta
          </Link>
          <Link
            href="/#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            Contacto
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={FOUNDER_PROFILE.cvUrl}
              download="CV_Daniel_Martinez_Mira.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-white border border-white/10"
            >
              Descargar CV en PDF
            </a>
            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
            >
              <span>Contactar para Adquisición</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
