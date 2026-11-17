import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS_DATA, FOUNDER_PROFILE } from "@/data/projects";
import GenerativeArtwork from "@/components/GenerativeArtwork";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Users,
  DollarSign,
  Layers,
  Code2,
  Database,
  Cloud,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Terminal
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} // Daniel Martínez Mira`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.screenshots[0]?.url ? [project.screenshots[0].url] : [],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : null;
  const heroImage = project.screenshots.find((s) => s.isCover) || project.screenshots[0];

  return (
    <div className="min-h-screen py-24 md:py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#00FF94] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>// VOLVER AL CATÁLOGO</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>UNIDAD {projectIndex + 1} DE {PROJECTS_DATA.length}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-zinc-200 border border-white/[0.1]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse" />
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
              {project.monetization.model}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
              {project.completionPercentage}% READY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tightest mb-4 uppercase leading-none">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-sans leading-relaxed mb-8 max-w-3xl">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all shadow-[0_0_20px_rgba(0,255,148,0.25)]"
              >
                <span>ABRIR APLICACIÓN EN VIVO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-colors"
              >
                <span>VER DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.1] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>REPOSITORIO</span>
              </a>
            )}

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs text-[#00FF94] bg-[#00FF94]/[0.05] hover:bg-[#00FF94]/[0.1] border border-[#00FF94]/30 transition-colors"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>CONSULTAR ADQUISICIÓN // LICENCIA</span>
            </Link>
          </div>
        </div>

        {/* Hero Visual Viewport */}
        <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden border border-white/[0.1] mb-16 bg-[#09090B]">
          <GenerativeArtwork
            slug={project.slug}
            title={project.title}
            imageUrl={heroImage?.url}
          />
        </div>

        {/* Main Content Layout */}
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00FF94]" />
              <span>01 // VISIÓN GENERAL DEL PRODUCTO</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              {project.shortDescription}
            </p>
          </div>

          {/* Section 2 & 3: Problema & Solución */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problema */}
            <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>02 // ¿QUÉ PROBLEMA RESUELVE?</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {project.problemStatement.summary}
                </p>

                <h3 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  PUNTOS DE DOLOR EN EL MERCADO:
                </h3>
                <ul className="space-y-2">
                  {project.problemStatement.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 font-sans">
                      <span className="text-rose-400 font-mono">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solución */}
            <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-[#00FF94]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#00FF94] font-mono text-xs font-bold uppercase mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>03 // LA SOLUCIÓN IMPLEMENTADA</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {project.solutionStatement.summary}
                </p>

                <h3 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  BENEFICIOS CUANTIFICABLES:
                </h3>
                <ul className="space-y-2">
                  {project.solutionStatement.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 font-sans">
                      <span className="text-[#00FF94] font-mono">✔</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Section 4: Público Objetivo */}
          <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-white mb-4">
              <Users className="w-4 h-4 text-[#00FF94]" />
              <span>04 // PÚBLICO OBJETIVO &amp; MERCADO (ICP)</span>
            </div>
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
              <strong className="text-white">Perfil objetivo:</strong> {project.targetAudience.profile}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                  BUYER PERSONAS:
                </h3>
                <ul className="space-y-2 text-xs text-zinc-400 font-sans">
                  {project.targetAudience.userTypes.map((type, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#00FF94] font-mono">❯</span>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                  OPORTUNIDAD DE MERCADO:
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {project.targetAudience.marketOpportunity}
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Viabilidad Comercial & Monetización */}
          <div className="p-8 rounded-3xl bg-[#09090B]/90 border border-[#00FF94]/30 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#00FF94]">
              <DollarSign className="w-5 h-5" />
              <span>05 // MODELO DE MONETIZACIÓN &amp; NEGOCIO</span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              {project.monetization.commercialPotential}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">MODELO</span>
                <span className="text-sm font-mono font-bold text-[#00FF94] block">{project.monetization.model}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">PRECIOS</span>
                <span className="text-xs font-mono text-zinc-300 block">{project.monetization.pricingStrategy}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">PROYECCIÓN MRR</span>
                <span className="text-xs font-mono text-white block">{project.monetization.estimatedRevenue || "Escalable"}</span>
              </div>
            </div>

            {project.monetization.forSale && (
              <div className="p-4 rounded-2xl bg-[#00FF94]/[0.05] border border-[#00FF94]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#00FF94] uppercase tracking-wider block">
                    DISPONIBLE PARA ADQUISICIÓN / TRASPASO
                  </span>
                  <p className="text-xs text-zinc-300 mt-0.5 font-sans">
                    {project.monetization.forSale.contactNote}
                  </p>
                </div>
                <Link
                  href="/#contacto"
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8]"
                >
                  CONTACTAR OFERTA
                </Link>
              </div>
            )}
          </div>

          {/* Section 6: Fotos & Galería */}
          <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08]">
            <h2 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00FF94]" />
              <span>06 // GALERÍA DE PANTALLAS &amp; ARTEFACTOS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screen, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0E] flex flex-col group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <GenerativeArtwork
                      slug={project.slug}
                      title={screen.title}
                      imageUrl={screen.url}
                    />
                  </div>
                  <div className="p-4 bg-[#09090B] border-t border-white/[0.04]">
                    <h3 className="font-bold text-white text-sm mb-1 font-sans">{screen.title}</h3>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">{screen.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Stack Tecnológico & Arquitectura */}
          <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-white">
              <Code2 className="w-5 h-5 text-[#00FF94]" />
              <span>07 // STACK TECNOLÓGICO &amp; ARQUITECTURA DE CÓDIGO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">LENGUAJES</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.languages.map((l) => (
                    <span key={l} className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white border border-white/[0.08]">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">FRAMEWORKS</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.frameworks.map((f) => (
                    <span key={f} className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white border border-white/[0.08]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">BASES DE DATOS</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.databases.map((d) => (
                    <span key={d} className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white border border-white/[0.08]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">CLOUD &amp; DEVOPS</span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.cloudAndDevops.map((c) => (
                    <span key={c} className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white border border-white/[0.08]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                DECISIONES TÉCNICAS CLAVE:
              </h3>
              <ul className="space-y-2">
                {project.techStack.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                    <ShieldCheck className="w-4 h-4 text-[#00FF94] shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 8: Key Features */}
          <div className="p-8 rounded-3xl bg-[#09090B]/80 border border-white/[0.08]">
            <h2 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00FF94]" />
              <span>08 // FUNCIONALIDADES CLAVE IMPLEMENTADAS</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <h3 className="font-bold text-white text-sm mb-1 font-mono flex items-center gap-2">
                    <span className="text-[#00FF94]">▪</span>
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Project Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-[#00FF94] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ANTERIOR: {prevProject.title.split(" - ")[0]}</span>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-[#00FF94] transition-colors"
            >
              <span>SIGUIENTE: {nextProject.title.split(" - ")[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
