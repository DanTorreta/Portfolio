import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles, MapPin, Briefcase, GraduationCap, Code2, TrendingUp, ShieldCheck, ExternalLink } from "lucide-react";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[280px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Avatar & Real Profile Photo */}
          <div className="relative inline-block mb-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 shadow-2xl shadow-indigo-500/30">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-[#090d16]">
                <Image
                  src={FOUNDER_PROFILE.photoUrl}
                  alt={FOUNDER_PROFILE.name}
                  fill
                  priority
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
            </div>

            {/* Online / Active Badge */}
            <div className="absolute bottom-1 right-1/2 translate-x-12 px-2.5 py-0.5 rounded-full bg-[#0d1322] border border-emerald-500/40 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible</span>
            </div>
          </div>

          {/* Location & Title pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              {FOUNDER_PROFILE.location}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              {FOUNDER_PROFILE.education.degree.split(" (")[0]}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Ingeniero Full-Stack & Embebidos
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5 leading-[1.12]">
            Hola, soy <span className="text-white">{FOUNDER_PROFILE.name}</span>.<br />
            <span className="glow-gradient-text">Ingeniero de Software & Creador de Apps.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {FOUNDER_PROFILE.bio} Aquí encontrarás mis <strong>aplicaciones y SaaS listos para comercializar</strong>, con un desglose técnico riguroso de cada uno: problemas de negocio que resuelven, público objetivo, viabilidad comercial y arquitectura de código.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <Link
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Explorar Proyectos & Apps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={FOUNDER_PROFILE.cvUrl}
              download="CV_Daniel_Martinez_Mira.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Descargar Mi CV (PDF)</span>
            </a>

            <Link
              href="#monetizacion"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 transition-all hover:-translate-y-0.5"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Adquisición / Compra de Apps</span>
            </Link>
          </div>

          {/* Key Metrics / Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Trayectoria Profesional</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">+2 Años Experiencia</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Balterra Ingeniería SL (Full-Time)</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Proyectos y SaaS</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">7 Aplicaciones</div>
              <p className="text-[11px] text-slate-400 mt-0.5">SaaS B2B, IA, PWA, IoT y Unity</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Formación Oficial</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Grado Ingeniería</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Universitat de València</p>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-medium mb-1">
                <ExternalLink className="w-4 h-4" />
                <span>Viabilidad Comercial</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Listas para Venta</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Código fuente o cesión de negocio</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
