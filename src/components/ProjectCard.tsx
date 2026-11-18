'use client';

import React from 'react';
import { Project } from '@/types/project';
import SpotlightCard from './SpotlightCard';
import GenerativeArtwork from './GenerativeArtwork';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useAppInteractions } from './AppProviders';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  className?: string;
  isWide?: boolean;
}

export default function ProjectCard({
  project,
  onOpenDetails,
  className = '',
  isWide = false,
}: ProjectCardProps) {
  const { language } = useAppInteractions();
  const isEs = language === 'es';

  // Crisp 2-line descriptions
  const crispDescriptions: Record<string, string> = {
    'taller-gestion-saas': isEs
      ? 'Plataforma empresarial para talleres mecánicos: digitaliza el control de órdenes de trabajo, cálculo de márgenes y fichaje laboral geolocalizado conforme a ley.'
      : 'B2B operational platform for auto shops: digitizes repair orders, margin calculations, and compliant geolocation time tracking.',
    'fidelizacion-comercios': isEs
      ? 'Sistema de fidelización por código QR para comercio y hostelería: los clientes acumulan sellos y recompensas desde su navegador móvil sin descargar apps.'
      : 'QR-based customer loyalty platform: customers collect digital stamps and rewards straight from their mobile browser with zero app installs.',
    'soundspace-musical': isEs
      ? 'Entorno colaborativo en tiempo real para músicos y productores: sincronización de audio estéreo, sintetizadores y jams con latencia inferior a 40ms.'
      : 'Real-time collaborative audio platform for musicians: syncs stereo stems, web synthesizers, and live jam sessions with sub-40ms latency.',
    'recomendador-multimedia': isEs
      ? 'Motor de recomendación de contenidos basado en Inteligencia Artificial: calcula afinidad de preferencias procesando embeddings vectoriales en milisegundos.'
      : 'AI-driven content recommendation engine: evaluates user affinity profiles processing high-dimensional vector embeddings in milliseconds.',
    'suite-industrial': isEs
      ? 'Panel SCADA y telemetría industrial en tiempo real: monitorización de líneas de producción, prevención de averías críticas y trazabilidad auditable.'
      : 'Industrial SCADA and real-time telemetry dashboard: monitors manufacturing lines, prevents machine downtime, and logs auditable traces.',
    'cad-intelligence': isEs
      ? 'Asistente de IA multimodal para planos técnicos DWG/PDF: indexación semántica, extracción automática de cotas y consulta de normativas de ingeniería.'
      : 'Multimodal AI copilot for DWG/PDF blueprints: semantic indexing, automated dimension extraction, and regulatory engineering search.',
    'videojuego-indie': isEs
      ? 'Videojuego de acción y estrategia programado en Unity 6: físicas y combate personalizados, optimización de draw calls y renderizado a 60 FPS estables.'
      : 'Action-strategy indie game built in Unity 6: custom physics and combat mechanics, draw call batching, and solid 60 FPS rendering.',
  };

  const description = crispDescriptions[project.slug] || project.shortDescription;

  return (
    <SpotlightCard
      className={`group flex flex-col justify-between p-6 transition-all duration-300 hover:border-white/[0.18] ${
        isWide ? 'md:col-span-2 md:flex-row md:items-stretch gap-8' : ''
      } ${className}`}
    >
      {/* Dynamic Animated Visual Artwork (Zero Clutter) */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-white/[0.08] shrink-0 bg-[#07070A] ${
          isWide ? 'w-full md:w-5/12 min-h-[220px]' : 'w-full h-48 mb-5'
        }`}
      >
        <GenerativeArtwork slug={project.slug} title={project.title} />

        {/* Clean Status Badge */}
        <div className="absolute top-3 right-3 pointer-events-none z-10">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/80 text-[#00FF94] border border-[#00FF94]/30 backdrop-blur-md">
            {project.status}
          </span>
        </div>
      </div>

      {/* Clean Content Column */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <div className="mb-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Title & Live Link */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <button
              onClick={() => onOpenDetails(project)}
              className="text-left group-hover:text-[#00FF94] transition-colors"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tightest leading-tight text-white font-sans">
                {project.title}
              </h3>
            </button>

            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={isEs ? 'Abrir aplicación' : 'Open live app'}
                className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Pure, Concise 2-Line Description */}
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom Bar: Stack pills + Direct CTA */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          {/* Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.languages.concat(project.techStack.frameworks.slice(0, 2)).slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Trigger Detail Drawer */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-mono font-bold bg-[#00FF94]/10 hover:bg-[#00FF94] text-[#00FF94] hover:text-black border border-[#00FF94]/30 hover:border-transparent transition-all duration-200"
          >
            <span>{isEs ? 'VER ARQUITECTURA & DEMO' : 'VIEW ARCHITECTURE & DEMO'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </SpotlightCard>
  );
}
