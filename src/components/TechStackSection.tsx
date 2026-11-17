"use client";

import React, { useState } from "react";
import { TECH_SKILLS, TechSkillItem, PROJECTS_DATA } from "@/data/projects";
import { Terminal, Code2, Cpu, Database, Cloud, Sparkles, Layers } from "lucide-react";

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODAS");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = ["TODAS", "LENGUAJES", "BACKEND & APIS", "FRONTEND & MÓVIL", "DATOS & IA"];

  const getFilteredCategories = () => {
    if (selectedCategory === "TODAS") return TECH_SKILLS;
    if (selectedCategory === "LENGUAJES") return TECH_SKILLS.filter(c => c.category.includes("Lenguajes"));
    if (selectedCategory === "BACKEND & APIS") return TECH_SKILLS.filter(c => c.category.includes("Backend"));
    if (selectedCategory === "FRONTEND & MÓVIL") return TECH_SKILLS.filter(c => c.category.includes("Frontend"));
    if (selectedCategory === "DATOS & IA") return TECH_SKILLS.filter(c => c.category.includes("Bases de Datos"));
    return TECH_SKILLS;
  };

  // Find which projects use the hovered tech
  const highlightedProjects = hoveredTech
    ? PROJECTS_DATA.filter((p) => {
        const query = hoveredTech.toLowerCase();
        return (
          p.techStack.languages.some((l) => l.toLowerCase().includes(query)) ||
          p.techStack.frameworks.some((f) => f.toLowerCase().includes(query)) ||
          p.techStack.databases.some((d) => d.toLowerCase().includes(query)) ||
          p.techStack.cloudAndDevops.some((c) => c.toLowerCase().includes(query))
        );
      })
    : [];

  return (
    <section id="stack" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>MATRIZ // ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight">
            Stack Tecnológico &amp; Arquitectura
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            Cada tecnología se selecciona con base en throughput, fiabilidad industrial y escalabilidad de costes en la nube. Pasa el cursor sobre cualquier tecnología para ver sus aplicaciones reales.
          </p>
        </div>

        {/* Dynamic Project Linker Beacon */}
        <div className="shrink-0 text-xs font-mono px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-zinc-400">
          {hoveredTech ? (
            <span>
              UTILIZADO EN: <span className="text-[#00FF94] font-bold">{highlightedProjects.length} PROYECTOS</span>
            </span>
          ) : (
            <span className="text-zinc-500">// SELECCIONA O EXPLORA UN TOOL</span>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#00FF94] text-black font-bold shadow-[0_0_15px_rgba(0,255,148,0.3)]"
                : "bg-white/[0.02] text-zinc-400 hover:text-white border border-white/[0.06]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getFilteredCategories().flatMap((group) =>
          group.skills.map((skill) => {
            const isHovered = hoveredTech === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredTech(skill.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`p-5 rounded-2xl transition-all duration-300 relative group cursor-pointer ${
                  isHovered
                    ? "bg-[#00FF94]/[0.04] border border-[#00FF94]/50 shadow-[0_0_30px_rgba(0,255,148,0.15)] -translate-y-1"
                    : "bg-[#09090B]/60 border border-white/[0.06] hover:border-white/[0.18]"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-extrabold text-white tracking-tight font-sans group-hover:text-[#00FF94] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300 shrink-0">
                    {skill.level.split(" ")[0]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-3 line-clamp-2">
                  {skill.description}
                </p>

                {/* Featured in chips */}
                {skill.featuredIn && skill.featuredIn.length > 0 && (
                  <div className="pt-2 border-t border-white/[0.04] flex flex-wrap gap-1 items-center">
                    <span className="text-[9px] font-mono text-zinc-600 mr-1">APPS:</span>
                    {skill.featuredIn.map((proj) => (
                      <span
                        key={proj}
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded transition-colors ${
                          isHovered
                            ? "bg-[#00FF94]/20 text-[#00FF94] border border-[#00FF94]/30"
                            : "bg-white/[0.02] text-zinc-500 border border-white/[0.04]"
                        }`}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Floating active project spotlight bar when hovered */}
      {hoveredTech && highlightedProjects.length > 0 && (
        <div className="mt-8 p-4 rounded-2xl bg-[#09090B]/90 border border-[#00FF94]/30 flex flex-wrap items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94]" />
            <span>PROYECTOS IMPULSADOS POR <strong className="text-white">{hoveredTech.toUpperCase()}</strong>:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {highlightedProjects.map((p) => (
              <span
                key={p.id}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30"
              >
                {p.title.split(" - ")[0]}
              </span>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
