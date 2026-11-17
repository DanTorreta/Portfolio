import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS_DATA, FOUNDER_PROFILE } from "@/data/projects";
import { formatCategoryBadgeColor, formatStatusBadgeColor } from "@/lib/utils";
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
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight
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
    title: `${project.title} | Daniel Portfolio`,
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
    <div className="min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los proyectos</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Proyecto {projectIndex + 1} de {PROJECTS_DATA.length}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${formatCategoryBadgeColor(project.category)}`}>
              {project.category}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${formatStatusBadgeColor(project.status)}`}>
              {project.status}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-mono">
              <DollarSign className="w-3.5 h-3.5" />
              {project.monetization.model}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10 font-mono">
              {project.completionPercentage}% Completado
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-indigo-300/90 font-medium mb-6 leading-relaxed">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-600 hover:to-cyan-600 transition-all hover:-translate-y-0.5"
              >
                <span>Visitar Aplicación en Vivo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
              >
                <span>Ver Demo Interactiva</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repositorio de Código</span>
              </a>
            )}

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Consultar Adquisición / Licencia</span>
            </Link>
          </div>
        </div>

        {/* Hero Visual Display */}
        {heroImage && (
          <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-14 shadow-2xl bg-slate-900">
            <Image
              src={heroImage.url}
              alt={heroImage.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel max-w-xl">
              <p className="text-white font-bold text-sm">{heroImage.title}</p>
              <p className="text-slate-300 text-xs mt-1">{heroImage.description}</p>
            </div>
          </div>
        )}

        {/* Main Content Layout */}
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>¿De qué va la aplicación? (Visión General)</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Section 2 & 3: Problema & Solución (Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problema */}
            <div className="rounded-3xl p-6 sm:p-8 border border-rose-500/20 bg-rose-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-lg mb-3">
                  <AlertCircle className="w-5 h-5" />
                  <h2>¿Qué problema resuelve?</h2>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.problemStatement.summary}
                </p>

                <h3 className="text-xs uppercase tracking-wider font-semibold text-rose-300/80 mb-3">
                  Puntos de dolor identificados:
                </h3>
                <ul className="space-y-2.5">
                  {project.problemStatement.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solución */}
            <div className="rounded-3xl p-6 sm:p-8 border border-emerald-500/20 bg-emerald-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <h2>La Solución Implementada</h2>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.solutionStatement.summary}
                </p>

                <h3 className="text-xs uppercase tracking-wider font-semibold text-emerald-300/80 mb-3">
                  Beneficios medibles para el usuario:
                </h3>
                <ul className="space-y-2.5">
                  {project.solutionStatement.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Section 4: Público Objetivo */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-xl mb-4">
              <Users className="w-5 h-5" />
              <h2>¿Para quién va dirigida? (Público Objetivo & Mercado)</h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              <strong className="text-white">Perfil principal:</strong> {project.targetAudience.profile}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                  Tipos de Usuarios / Buyer Personas:
                </h3>
                <ul className="space-y-2">
                  {project.targetAudience.userTypes.map((type, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Oportunidad de Mercado:
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.targetAudience.marketOpportunity}
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Viabilidad Comercial & Modelo de Monetización */}
          <div className="rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-[#0d1627] to-[#090d16]">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-xl mb-4">
              <DollarSign className="w-6 h-6" />
              <h2>¿Puede llegar a ser monetizable? (Modelo de Negocio)</h2>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {project.monetization.commercialPotential}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[#0d1322] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Modelo de Monetización</span>
                <span className="text-sm font-bold text-emerald-300 block">{project.monetization.model}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1322] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Estrategia de Precios</span>
                <span className="text-xs font-medium text-slate-200 block">{project.monetization.pricingStrategy}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d1322] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Estimación de Ingresos</span>
                <span className="text-xs font-medium text-amber-300 block">{project.monetization.estimatedRevenue || "Escalable según tracción"}</span>
              </div>
            </div>

            {project.monetization.forSale && (
              <div className="p-4 rounded-2xl bg-emerald-900/20 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Disponible para Compra / Traspaso
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {project.monetization.forSale.contactNote}
                  </p>
                </div>
                <Link
                  href="/#contacto"
                  className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
                >
                  Contactar Oferta
                </Link>
              </div>
            )}
          </div>

          {/* Section 6: Fotos & Galería de Capturas */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Fotos & Galería de Pantallas de la Aplicación</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screen, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex flex-col group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={screen.url}
                      alt={screen.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 bg-slate-900/90 border-t border-white/5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">{screen.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{screen.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Lenguajes de Programación & Stack Tecnológico */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-xl mb-6">
              <Code2 className="w-6 h-6" />
              <h2>Lenguajes de Programación & Arquitectura de Software</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Lenguajes */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-3">
                  <Code2 className="w-4 h-4" />
                  <span>Lenguajes</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.languages.map((lang) => (
                    <span key={lang} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-950/60 text-indigo-200 border border-indigo-500/30 font-mono">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-3">
                  <Layers className="w-4 h-4" />
                  <span>Frameworks</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.frameworks.map((fw) => (
                    <span key={fw} className="text-xs px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-200 border border-cyan-500/30 font-mono">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Base de Datos */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-3">
                  <Database className="w-4 h-4" />
                  <span>Bases de Datos</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.databases.map((db) => (
                    <span key={db} className="text-xs px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-200 border border-emerald-500/30 font-mono">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud & Despliegue</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.cloudAndDevops.map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-200 border border-amber-500/30 font-mono">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decisiones de Arquitectura */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Decisiones Clave de Arquitectura & Rendimiento:
              </h3>
              <ul className="space-y-2">
                {project.techStack.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 8: Funcionalidades Clave */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Funcionalidades Clave Desarrolladas</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior: {prevProject.title}</span>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <span>Siguiente: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
