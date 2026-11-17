import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, TrendingUp, ShieldCheck, ExternalLink } from "lucide-react";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Top Pill / Status Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio de Software Engineer & Indie Maker</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-mono">Apps Listas para Despliegue & Venta</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Creo aplicaciones completas preparadas para{" "}
            <span className="glow-gradient-text">resolver problemas y ser monetizadas.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Soy <strong className="text-white font-semibold">{FOUNDER_PROFILE.name}</strong>, ingeniero de software. Cada proyecto de este portfolio cuenta con un análisis exhaustivo:{" "}
            <span className="text-cyan-300 font-medium">qué problema resuelve</span>,{" "}
            <span className="text-indigo-300 font-medium">público objetivo</span>,{" "}
            <span className="text-emerald-300 font-medium">modelo de monetización</span> y{" "}
            <span className="text-amber-300 font-medium">stack tecnológico</span> utilizado.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <Link
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Explorar Proyectos & Apps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#monetizacion"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#131b2e] hover:bg-[#1a253e] text-slate-200 border border-white/10 hover:border-white/20 transition-all"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Opciones de Adquisición / Venta</span>
            </Link>
          </div>

          {/* Key Metrics / Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium mb-1">
                <Code2 className="w-4 h-4" />
                <span>Proyectos Construidos</span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">6+ Apps</div>
              <p className="text-[11px] text-slate-400 mt-0.5">SaaS, IA, PWA, IoT y Juegos</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Enfoque Comercial</span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">100% Monetizable</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Modelos SaaS y Licencias validados</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Arquitectura Robusta</span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Vercel & Edge</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Next.js, TypeScript, PostgreSQL</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-medium mb-1">
                <ExternalLink className="w-4 h-4" />
                <span>Disponibilidad</span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">Para Venta</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Código fuente o proyecto completo</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
