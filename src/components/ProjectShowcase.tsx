"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "./ProjectCard";
import { Search, Filter, Sparkles, Layers } from "lucide-react";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyMonetizable, setOnlyMonetizable] = useState<boolean>(false);

  const categories = useMemo(() => {
    const list: string[] = ["Todos"];
    projects.forEach((p) => {
      if (!list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== "Todos" && project.category !== selectedCategory) {
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
    <section id="proyectos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Catálogo Completo de Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apps, SaaS y Proyectos de Ingeniería
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Cada proyecto ha sido diseñado desde cero con estándares de arquitectura moderna, resuelven una necesidad comprobable y cuentan con potencial de comercialización.
          </p>
        </div>

        {/* Counter */}
        <div className="shrink-0 text-xs font-mono text-slate-400 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-white/5">
          Mostrando <span className="text-indigo-400 font-bold">{filteredProjects.length}</span> de <span className="text-white">{projects.length}</span> proyectos
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card rounded-2xl p-4 mb-8 border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por app, tecnología, problema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#090d16] text-white border border-white/10 focus:outline-none focus:border-indigo-500 placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Quick toggle: Solo listos para venta/monetizables */}
          <button
            onClick={() => setOnlyMonetizable(!onlyMonetizable)}
            className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
              onlyMonetizable
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-slate-900/60 text-slate-400 border-white/5 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Listos para Comercializar / Vender</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1 mr-1" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center border border-white/10 max-w-lg mx-auto">
          <p className="text-sm font-semibold text-white mb-2">No se encontraron proyectos</p>
          <p className="text-xs text-slate-400 mb-4">
            No hay ningún proyecto que coincida con los criterios de búsqueda o categoría seleccionada.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("Todos");
              setSearchQuery("");
              setOnlyMonetizable(false);
            }}
            className="px-4 py-2 rounded-xl text-xs bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            Restablecer Filtros
          </button>
        </div>
      )}
    </section>
  );
}
