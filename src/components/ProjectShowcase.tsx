"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { Search, Filter, Sparkles, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyMonetizable, setOnlyMonetizable] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const list: string[] = ["TODOS"];
    projects.forEach((p) => {
      const catUpper = p.category.toUpperCase();
      if (!list.includes(catUpper)) {
        list.push(catUpper);
      }
    });
    return list;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== "TODOS" && project.category.toUpperCase() !== selectedCategory) {
        return false;
      }

      // Monetizable filter
      if (onlyMonetizable && !project.monetization.isMonetizable) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const inTitle = project.title.toLowerCase().includes(query);
        const inTagline = project.tagline.toLowerCase().includes(query);
        const inProblem = project.problemStatement.summary.toLowerCase().includes(query);
        const inTech = project.techStack.languages.concat(project.techStack.frameworks).some(t => t.toLowerCase().includes(query));
        const inTarget = project.targetAudience.profile.toLowerCase().includes(query);

        return inTitle || inTagline || inProblem || inTech || inTarget;
      }

      return true;
    });
  }, [projects, selectedCategory, searchQuery, onlyMonetizable]);

  return (
    <section id="proyectos" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>CATÁLOGO // ASYMMETRIC BENTO GRID</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight">
            Proyectos de Ingeniería &amp; Apps SaaS
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            Soluciones de software diseñadas para resolver fricciones de mercado, escalables en la nube y concebidas para generar ingresos sostenibles.
          </p>
        </div>

        {/* Counter Pill */}
        <div className="shrink-0 text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.08] px-4 py-2 rounded-full">
          INDICE: <span className="text-[#00FF94] font-bold">{filteredProjects.length}</span> / {projects.length} UNIDADES
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#09090B]/60 border border-white/[0.06] backdrop-blur-md mb-10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          
          {/* Minimal Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por tecnología, sector, problema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] placeholder-zinc-600 transition-colors"
            />
          </div>

          {/* Quick toggle: Solo comercializables */}
          <button
            onClick={() => setOnlyMonetizable(!onlyMonetizable)}
            className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
              onlyMonetizable
                ? "bg-[#00FF94]/10 text-[#00FF94] border-[#00FF94]/40 font-bold"
                : "bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00FF94]" />
            <span>SOLO LISTOS PARA VENTA / MONETIZAR</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-zinc-600 shrink-0 ml-1 mr-1" />
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-colors duration-200 ${
                  isSelected
                    ? "bg-[#00FF94] text-black font-bold shadow-[0_0_15px_rgba(0,255,148,0.25)]"
                    : "bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.06]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // Asymmetric pattern: First project or featured projects take 2 cols for rich panoramic display
            const isWide = (index === 0 || (index === 3 && filteredProjects.length > 4));
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setActiveProject(p)}
                isWide={isWide}
              />
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white/[0.02] border border-white/[0.06] max-w-md mx-auto">
          <p className="text-sm font-mono text-white mb-2">// 0 COINCIDENCIAS</p>
          <p className="text-xs text-zinc-400 mb-5">
            No se han encontrado proyectos que cumplan los criterios de búsqueda actuales.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("TODOS");
              setSearchQuery("");
              setOnlyMonetizable(false);
            }}
            className="px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8]"
          >
            RESTABLECER FILTROS
          </button>
        </div>
      )}

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
