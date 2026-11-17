import React from "react";
import { TECH_SKILLS, TechSkillItem } from "@/data/projects";
import { Code2, Terminal, Cpu, Database, Cloud } from "lucide-react";

export default function TechStackSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Lenguajes de Programación":
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case "Frameworks & Frontend Moderno":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Backend, APIs & Bases de Datos":
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cloud className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="stack" className="py-16 md:py-24 bg-[#070b13] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Capacidades de Ingeniería de Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lenguajes de Programación & Stack Tecnológico
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            No utilizo tecnologías por moda: cada lenguaje, base de datos y framework es seleccionado estratégicamente para garantizar escalabilidad, seguridad, bajo coste operativo y velocidad de salida al mercado.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_SKILLS.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Group Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {group.skills.length} herramientas dominadas
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-sm">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${skill.badgeColor}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                        {skill.description}
                      </p>

                      {skill.featuredIn && skill.featuredIn.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-white/5 text-[11px]">
                          <span className="text-slate-500 text-[10px]">Utilizado en:</span>
                          {skill.featuredIn.map((proj) => (
                            <span
                              key={proj}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/20"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
