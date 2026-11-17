"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import SpotlightCard from "./SpotlightCard";
import GenerativeArtwork from "./GenerativeArtwork";
import { ArrowUpRight, CheckCircle2, AlertCircle, Layers, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  className?: string;
  isWide?: boolean;
}

export default function ProjectCard({
  project,
  onOpenDetails,
  className = "",
  isWide = false,
}: ProjectCardProps) {
  const coverImage = project.screenshots.find((s) => s.isCover) || project.screenshots[0];

  return (
    <SpotlightCard
      className={`group flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 hover:border-white/[0.18] ${
        isWide ? "md:col-span-2 md:flex-row md:items-center gap-6" : ""
      } ${className}`}
    >
      {/* Visual Canvas Viewport */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-white/[0.08] shrink-0 ${
          isWide ? "w-full md:w-5/12 h-56 sm:h-64" : "w-full h-48 mb-5"
        }`}
      >
        <GenerativeArtwork
          slug={project.slug}
          title={project.title}
          imageUrl={coverImage?.url}
        />

        {/* Floating status tag */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/70 text-zinc-300 border border-white/10 backdrop-blur-md">
            {project.category}
          </span>
          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-black/70 text-[#00FF94] border border-[#00FF94]/30 backdrop-blur-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse" />
            {project.monetization.model.split(" ")[0]}
          </span>
        </div>

        {/* Completion badge */}
        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/5 backdrop-blur-sm">
          {project.completionPercentage}% READY
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Title */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <button
              onClick={() => onOpenDetails(project)}
              className="text-left group-hover:text-[#00FF94] transition-colors"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tightest text-white leading-tight">
                {project.title}
              </h3>
            </button>

            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir app en vivo"
                className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Tagline */}
          <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Concise Problem Solved Box */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-5">
            <div className="flex items-center gap-1.5 text-zinc-300 font-mono text-[11px] font-semibold mb-1">
              <AlertCircle className="w-3 h-3 text-[#00FF94]" />
              <span>PROBLEMA RESUELTO:</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
              {project.problemStatement.summary}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Stack pills + Details Button */}
        <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          {/* Languages & Frameworks Pills */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.languages.concat(project.techStack.frameworks.slice(0, 2)).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Trigger Detail Drawer */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold bg-white/[0.06] hover:bg-[#00FF94] text-white hover:text-black border border-white/[0.1] hover:border-transparent transition-all duration-200"
          >
            <span>VER DETALLES</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </SpotlightCard>
  );
}
