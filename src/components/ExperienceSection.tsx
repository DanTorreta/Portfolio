import React from "react";
import { WORK_EXPERIENCE, FOUNDER_PROFILE } from "@/data/projects";
import { Briefcase, GraduationCap, Cpu, Download, CheckCircle2, Bot, Sparkles, Languages } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20 mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experiencia & Trayectoria Profesional</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ingeniería de Producción, Embebidos & Flujos de IA
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Experiencia profesional contrastada en empresas de ingeniería industrial combinada con el diseño de arquitecturas modernas y flujos agénticos autónomos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Experiencia Corporativa & Flujos Agénticos */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Experiencia Balterra */}
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                  </div>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">{exp.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-white/10">
                    {exp.period}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">{exp.type}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* AI Engineering & Agentic Workflows Box */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-purple-950/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ingeniería de Inteligencia Artificial & Flujos Agénticos</h3>
                <p className="text-xs text-purple-300">Desarrollo autónomo y orquestación avanzada de LLMs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                <p className="font-bold text-white mb-1">Pipeline Spec.md Autónomo</p>
                <p className="text-slate-400">Diseño desacoplado con n8n y Google Gemini Pro/Flash como arquitecto de contratos técnicos y esquemas OpenAPI/DDL deterministas.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                <p className="font-bold text-white mb-1">Síntesis Agéntica en Fases (DAG)</p>
                <p className="text-slate-400">Ejecución en Grafo Dirigido Acíclico (auto_coder / Cline) con esqueletización de AST y bucles de autocorrección sintáctica.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                <p className="font-bold text-white mb-1">Orquestación Local (Ollama)</p>
                <p className="text-slate-400">Despliegue y ejecución de LLMs locales (Qwen, DeepSeek, Llama) para entornos de alta privacidad y auditoría de código.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                <p className="font-bold text-white mb-1">Spec-Driven Development</p>
                <p className="text-slate-400">Uso estratégico de agentes en IDEs (Claude Code, Cursor) bajo rigurosas suites de testing unitario y de integración.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Formación Académica, Idiomas & Descarga CV */}
        <div className="space-y-6">
          
          {/* Educación */}
          <div className="glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Formación Académica</h3>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
              <h4 className="text-sm font-bold text-white">{FOUNDER_PROFILE.education.degree}</h4>
              <p className="text-xs text-indigo-400 font-medium">{FOUNDER_PROFILE.education.institution}</p>
              <p className="text-[11px] font-mono text-slate-400 pt-1">{FOUNDER_PROFILE.education.period}</p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Idiomas</h3>
            </div>

            <div className="space-y-2.5">
              {FOUNDER_PROFILE.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                  <span className="font-semibold text-white">{lang.name}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CV Download Card */}
          <div className="rounded-3xl p-6 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-[#0d1322] to-[#090d16] text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Currículum Vitae Completo</h4>
              <p className="text-xs text-slate-300 mt-1">
                Descarga mi CV en formato PDF con el desglose técnico y referencias profesionales.
              </p>
            </div>
            <a
              href={FOUNDER_PROFILE.cvUrl}
              download="CV_Daniel_Martinez_Mira.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV en PDF</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
