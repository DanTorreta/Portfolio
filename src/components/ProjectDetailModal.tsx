"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import {
  X,
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Users,
  DollarSign,
  Code2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import GenerativeArtwork from "./GenerativeArtwork";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const heroImage = project.screenshots.find((s) => s.isCover) || project.screenshots[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window with Spring Physics */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#09090B] border border-white/[0.1] shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0C0C0F]">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94]" />
              <span className="text-white font-bold tracking-wider">{project.category}</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">{project.status}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 no-scrollbar">
            
            {/* Visual Header */}
            <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/[0.08]">
              <GenerativeArtwork
                slug={project.slug}
                title={project.title}
                imageUrl={heroImage?.url}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/75 text-[#00FF94] border border-[#00FF94]/30 backdrop-blur-md">
                  {project.completionPercentage}% IMPLEMENTADO
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-black/75 border border-white/10 backdrop-blur-md">
                  {project.monetization.model}
                </span>
              </div>
            </div>

            {/* Title & Pitch */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tightest mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                {project.tagline}
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Grid: Problema y Solución */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>¿QUÉ PROBLEMA RESUELVE?</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {project.problemStatement.summary}
                </p>
                <ul className="space-y-1.5">
                  {project.problemStatement.painPoints.map((p, i) => (
                    <li key={i} className="text-[11px] text-zinc-400 flex items-start gap-2">
                      <span className="text-rose-400 font-mono">▪</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-[#00FF94]/20">
                <div className="flex items-center gap-2 text-[#00FF94] font-mono text-xs font-bold mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SOLUCIÓN TÉCNICA</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {project.solutionStatement.summary}
                </p>
                <ul className="space-y-1.5">
                  {project.solutionStatement.benefits.map((b, i) => (
                    <li key={i} className="text-[11px] text-zinc-400 flex items-start gap-2">
                      <span className="text-[#00FF94] font-mono">✔</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Público Objetivo & Monetización */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-2">
                  <Users className="w-4 h-4" />
                  <span>PÚBLICO OBJETIVO & MERCADO</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-2">
                  {project.targetAudience.profile}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono">
                  Oportunidad: {project.targetAudience.marketOpportunity}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#00FF94]/[0.03] border border-[#00FF94]/30">
                <div className="flex items-center gap-2 text-[#00FF94] font-mono text-xs font-bold mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span>MODELO DE NEGOCIO & VENTA</span>
                </div>
                <p className="text-xs text-white font-medium mb-1">
                  {project.monetization.pricingStrategy}
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {project.monetization.commercialPotential}
                </p>
                {project.monetization.forSale && (
                  <div className="mt-3 p-2.5 rounded-xl bg-black/60 border border-[#00FF94]/30 text-[11px] text-[#00FF94]">
                    {project.monetization.forSale.contactNote}
                  </div>
                )}
              </div>
            </div>

            {/* Stack Tecnológico */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold mb-3">
                <Code2 className="w-4 h-4 text-[#00FF94]" />
                <span>STACK &amp; ARQUITECTURA</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.languages.concat(project.techStack.frameworks, project.techStack.databases).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-1 text-xs text-zinc-400">
                {project.techStack.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00FF94] shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Modal Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/[0.08] bg-[#0C0C0F]">
            <div className="flex items-center gap-2">
              {project.links.liveUrl && (
                <a
                  href={project.links.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-colors"
                >
                  <span>ABRIR APP EN VIVO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.githubUrl && (
                <a
                  href={project.links.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORIO</span>
                </a>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#00FF94] transition-colors"
            >
              <span>VER PÁGINA COMPLETA DEDICADA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
