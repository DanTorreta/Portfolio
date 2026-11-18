'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText } from 'lucide-react';
import { FOUNDER_PROFILE, WORK_EXPERIENCE } from '@/data/projects';
import MagneticButton from './MagneticButton';
import KineticCanvas from './KineticCanvas';
import { useAppInteractions } from './AppProviders';

export default function Hero() {
  const { openExecutiveSummary, language } = useAppInteractions();
  const isEs = language === 'es';

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 120 FPS Interactive Kinetic Canvas Background */}
      <KineticCanvas />

      {/* Subtle Atmospheric Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct, Powerful Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]" />
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase">
                {isEs ? 'DISPONIBLE PARA CONTRATACIÓN & PROYECTOS' : 'AVAILABLE FOR HIRE & PROJECTS'}
              </span>
              <span className="text-zinc-600 font-mono">|</span>
              <span className="text-[10px] font-mono text-[#00FF94]">VALENCIA (ES)</span>
            </div>

            {/* Solid Fixed Headline (Zero Layout Shift) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest uppercase leading-none mb-3 font-sans text-white">
              DANIEL MARTÍNEZ
            </h1>

            <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-tight text-[#00FF94] mb-6 font-sans">
              {isEs ? 'Ingeniero de Software Full-Stack & Multimedia.' : 'Full-Stack & Multimedia Software Engineer.'}
            </div>

            {/* Universal Clear Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8 font-sans">
              {isEs ? (
                <>Diseño y desarrollo aplicaciones web, móviles y sistemas con IA de extremo a extremo. Combino ingeniería backend robusta (<span className="text-white font-medium">.NET Core, FastAPI, SQL</span>) con interfaces a <span className="text-white font-medium">120 FPS</span> y visión de negocio real.</>
              ) : (
                <>I design and build web, mobile, and AI-driven platforms from end to end. Combining solid backend engineering (<span className="text-white font-medium">.NET Core, FastAPI, SQL</span>) with responsive <span className="text-white font-medium">120 FPS</span> interfaces and measurable business impact.</>
              )}
            </p>

            {/* Clean 2-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <MagneticButton>
                <Link
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all duration-200 shadow-[0_0_25px_rgba(0,255,148,0.35)] hover:shadow-[0_0_35px_rgba(0,255,148,0.5)] group"
                >
                  <span>{isEs ? 'EXPLORAR PROYECTOS' : 'EXPLORE PROJECTS'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <button
                  type="button"
                  onClick={openExecutiveSummary}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-medium bg-white/[0.04] text-zinc-200 hover:text-white border border-white/[0.1] hover:border-white/[0.25] backdrop-blur-md transition-all duration-200"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00FF94]" />
                  <span>{isEs ? 'RESUMEN EJECUTIVO & CV' : 'EXECUTIVE SUMMARY & CV'}</span>
                </button>
              </MagneticButton>
            </div>

            {/* Discrete Engineering Spec Ticker */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/[0.08] w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">01</span>
                <span>CLEAN ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">02</span>
                <span>$0 COLD-START CLOUD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">03</span>
                <span>120 FPS FLUIDITY</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Editorial Profile Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-[#09090B]/90 border border-white/[0.1] p-4 shadow-2xl backdrop-blur-2xl group">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-[10px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94]" />
                  <span>DANIEL MARTÍNEZ MIRA</span>
                </span>
                <span className="text-[#00FF94]">UV // CS GRADUATE</span>
              </div>

              {/* Photo Viewport */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/80 border border-white/[0.08]">
                <Image
                  src={FOUNDER_PROFILE.photoUrl}
                  alt={FOUNDER_PROFILE.name}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                
                {/* Verified Experience Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/[0.1] text-xs font-mono">
                  <div className="flex items-center justify-between text-zinc-200">
                    <span className="font-bold text-white">{WORK_EXPERIENCE[0].company}</span>
                    <span className="text-[#00FF94] text-[10px]">{WORK_EXPERIENCE[0].period}</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-sans mt-0.5">
                    {WORK_EXPERIENCE[0].role}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
