"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Database, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import KineticCanvas from "./KineticCanvas";
import MagneticButton from "./MagneticButton";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Hero() {
  // Staggered mask animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-white/[0.06]">
      {/* 120 FPS Interactive Kinetic Canvas */}
      <KineticCanvas />

      {/* Subtle hairline background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Typographic & Asymmetric Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* System Status Pill */}
            <motion.div variants={fadeVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]" />
              </span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
                SYSTEM // READY TO COMMERCIALIZE
              </span>
              <span className="text-zinc-600 font-mono">|</span>
              <span className="text-[10px] font-mono text-[#00FF94]">100% MONETIZABLE APPS</span>
            </motion.div>

            {/* Mask Reveal Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={lineVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest text-white uppercase leading-none"
              >
                Daniel Martínez
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.div
                variants={lineVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400"
              >
                Software Engineer <span className="text-[#00FF94]">&amp;</span> Builder.
              </motion.div>
            </div>

            {/* Technical Sub-deck */}
            <motion.p
              variants={fadeVariants}
              className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8 font-sans"
            >
              Especialista en arquitecturas web full-stack, sistemas embebidos de alta precisión y flujos agénticos autónomos con IA. Cada proyecto cuenta con un análisis exhaustivo de <span className="text-white font-medium">problema real</span>, <span className="text-white font-medium">público objetivo</span>, <span className="text-[#00FF94] font-medium">viabilidad comercial</span> y <span className="text-white font-medium">arquitectura de código</span>.
            </motion.p>

            {/* Action Bar with Magnetic Button */}
            <motion.div variants={fadeVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <MagneticButton>
                <Link
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all duration-200 shadow-[0_0_30px_rgba(0,255,148,0.35)] hover:shadow-[0_0_40px_rgba(0,255,148,0.55)] group"
                >
                  <span>EXPLORAR CATÁLOGO DE APPS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={FOUNDER_PROFILE.cvUrl}
                  download="CV_Daniel_Martinez_Mira.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-medium tracking-wider bg-white/[0.04] text-zinc-200 hover:text-white border border-white/[0.1] hover:border-white/[0.25] backdrop-blur-md transition-all duration-200"
                >
                  <Download className="w-3.5 h-3.5 text-[#00FF94]" />
                  <span>DESCARGAR CV (.PDF)</span>
                </a>
              </MagneticButton>

              <Link
                href="#monetizacion"
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-zinc-400 hover:text-[#00FF94] transition-colors py-2 px-1"
              >
                <span>// COMPRA & TRASPASO</span>
                <span className="text-[#00FF94]">→</span>
              </Link>
            </motion.div>

            {/* Micro Specs Ticker */}
            <motion.div variants={fadeVariants} className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/[0.08] w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">01</span>
                <span>CLEAN ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">02</span>
                <span>SSG &amp; EDGE OPTIMIZED</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00FF94]">03</span>
                <span>BALIZAS EMBEBIDAS &amp; IA</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Identity Frame (Editorial Artifact) */}
          <motion.div
            variants={fadeVariants}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Corner Crosshairs */}
            <div className="w-full max-w-sm relative p-5 rounded-3xl bg-[#09090B]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              
              {/* Technical crosshairs on corners */}
              <span className="absolute top-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</span>
              <span className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</span>
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</span>
              <span className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</span>

              {/* Top metadata line */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-3 mb-3 border-b border-white/[0.06]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#00FF94]" />
                  <span>ID // DANIEL_M_MIRA</span>
                </span>
                <span className="text-zinc-500">VALENCIA, ES</span>
              </div>

              {/* Photo Viewport */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/80 border border-white/[0.08] mb-4">
                <Image
                  src={FOUNDER_PROFILE.photoUrl}
                  alt={FOUNDER_PROFILE.name}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Holographic frame overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                
                {/* Floating telemetry watermark inside image */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[9px] font-mono text-[#00FF94]">
                  STATUS: LIVE
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-white/[0.08]">
                  <p className="text-xs font-bold text-white font-sans">{FOUNDER_PROFILE.name}</p>
                  <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                    {FOUNDER_PROFILE.title.split(" • ")[0]} • {FOUNDER_PROFILE.education.degree.split(" (")[0]}
                  </p>
                </div>
              </div>

              {/* Technical specs breakdown under photo */}
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500">EXPERIENCIA:</span>
                  <span className="text-white font-semibold">+2 AÑOS (BALTERRA ING.)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500">ARQUITECTURA:</span>
                  <span className="text-[#00FF94]">CLEAN + EMBEDDED + AI</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-zinc-500">PROYECTOS:</span>
                  <span className="text-white">7 APPS DE NEGOCIO</span>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
