import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { formatCategoryBadgeColor, formatStatusBadgeColor } from "@/lib/utils";
import { ArrowRight, ExternalLink, DollarSign, Users, AlertCircle, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.screenshots.find((s) => s.isCover) || project.screenshots[0];

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full group">
      {/* Visual Header / Cover Image */}
      <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage.url}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 text-slate-500 font-mono text-xs">
            Sin Vista Previa
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/40 to-transparent" />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md ${formatCategoryBadgeColor(project.category)}`}>
            {project.category}
          </span>
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md ${formatStatusBadgeColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Completion Bar */}
        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 z-10">
          <span className="flex items-center gap-1 font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {project.completionPercentage}% Completado
          </span>
          <span className="flex items-center gap-1 font-mono text-amber-300 font-medium">
            <DollarSign className="w-3.5 h-3.5" />
            {project.monetization.model.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-indigo-400 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
              {project.title}
            </h3>
          </Link>
          <p className="text-xs font-medium text-slate-400 mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Key Value Propositions */}
          <div className="space-y-2.5 mb-5 text-xs">
            {/* Problema */}
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Problema que resuelve:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.problemStatement.summary}
              </p>
            </div>

            {/* Público Objetivo */}
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>Público objetivo:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-1">
                {project.targetAudience.profile}
              </p>
            </div>

            {/* Monetización y Venta */}
            <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                <DollarSign className="w-3.5 h-3.5 shrink-0" />
                <span>Modelo de Monetización:</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.monetization.pricingStrategy}
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer: Tech Stack & CTA */}
        <div className="pt-3 border-t border-white/10">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.languages.concat(project.techStack.frameworks.slice(0, 2)).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-[#0d1322] text-slate-300 border border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-transparent transition-all"
            >
              <span>Explicación & Detalles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir app en vivo"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
