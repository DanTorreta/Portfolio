"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WORK_EXPERIENCE, FOUNDER_PROFILE } from "@/data/projects";
import { Terminal, Bot, GraduationCap, Languages, Download, ArrowUpRight, Cpu } from "lucide-react";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experiencia" ref={containerRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRAYECTORIA // PRODUCTION SYSTEMS &amp; AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight">
            Experiencia &amp; Arquitectura de Sistemas
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            Desarrollo corporativo en empresas de ingeniería industrial, desarrollo embebido de bajo nivel y orquestación autónoma de flujos de IA.
          </p>
        </div>

        <a
          href={FOUNDER_PROFILE.cvUrl}
          download="CV_Daniel_Martinez_Mira.pdf"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold bg-white/[0.05] hover:bg-[#00FF94] text-white hover:text-black border border-white/[0.1] hover:border-transparent transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>DESCARGAR CV COMPLETO (.PDF)</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Vertical Dynamic SVG Timeline */}
        <div className="lg:col-span-8 relative">
          
          {/* Animated Vertical Line */}
          <div className="absolute left-4 top-3 bottom-8 w-[2px] bg-white/[0.08] hidden sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-[#00FF94] shadow-[0_0_12px_#00FF94]"
            />
          </div>

          <div className="space-y-12">
            
            {/* Experience Item: Balterra Ingeniería */}
            {WORK_EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative sm:pl-12 group">
                
                {/* Node Milestone Icon */}
                <div className="absolute left-2.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00FF94] shadow-[0_0_10px_#00FF94] hidden sm:block z-10" />

                <div className="p-6 sm:p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:border-white/[0.2]">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                    <div>
                      <span className="text-[11px] font-mono text-[#00FF94] uppercase tracking-wider block">
                        JORNADA COMPLETA // EN PRODUCCIÓN
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tightest">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-300 mt-0.5">{exp.company}</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <span className="text-[#00FF94] font-mono shrink-0 mt-0.5">❯</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {exp.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

            {/* AI Engineering Architecture Artifact (Terminal Style) */}
            <div className="relative sm:pl-12 group">
              <div className="absolute left-2.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/40 group-hover:border-[#00FF94] transition-colors hidden sm:block z-10" />

              <div className="p-6 sm:p-8 rounded-3xl bg-[#09090B]/90 border border-white/[0.08] backdrop-blur-md space-y-6">
                
                <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#00FF94]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#00FF94] tracking-widest uppercase">
                      AI ENGINEERING // AGENTIC ARCHITECTURE
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Flujos Agénticos &amp; Síntesis Autónoma
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-white font-bold mb-1">// PIPELINE SPEC.MD</p>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      Orquestación desacoplada con n8n y Google Gemini Pro/Flash como arquitecto autónomo de esquemas OpenAPI y DDL estrictos.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-white font-bold mb-1">// SÍNTESIS EN DAG</p>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      Motor de síntesis de código en Grafo Dirigido Acíclico con esqueletización de AST y bucles de autocorrección sintáctica.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-white font-bold mb-1">// OLLAMA AIR-GAPPED</p>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      Despliegue local de modelos Qwen, DeepSeek y Llama para entornos empresariales de máxima confidencialidad.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-white font-bold mb-1">// SPEC-DRIVEN TEST</p>
                    <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                      Desarrollo asistido en IDEs bajo cobertura rigurosa con suites de testing automatizado (Vitest, xUnit, JUnit).
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Academic Credentials & Languages */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Educación */}
          <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#00FF94] border border-white/[0.06]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Formación Académica
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <p className="text-xs font-mono text-[#00FF94]">{FOUNDER_PROFILE.education.period}</p>
              <h4 className="text-sm font-bold text-white leading-snug">
                {FOUNDER_PROFILE.education.degree}
              </h4>
              <p className="text-xs text-zinc-400 font-sans">
                {FOUNDER_PROFILE.education.institution}
              </p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#00FF94] border border-white/[0.06]">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Competencia Lingüística
              </h3>
            </div>

            <div className="space-y-2">
              {FOUNDER_PROFILE.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono"
                >
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-zinc-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Timezone Beacon */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-3">
            <div className="flex items-center justify-between text-zinc-500">
              <span>LOCAL TIMEZONE:</span>
              <span className="text-white">UTC+1 (MADRID/VALENCIA)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-500">
              <span>WORK MODE:</span>
              <span className="text-[#00FF94]">HYBRID // REMOTE // CONTRACT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
