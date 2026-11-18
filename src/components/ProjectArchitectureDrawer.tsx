'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import Link from 'next/link';
import InteractiveAppPreview from './InteractiveAppPreview';

interface ProjectArchitectureDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForContact?: (projectName: string) => void;
}

type TabType = 'demo' | 'architecture' | 'tradeoffs';

export default function ProjectArchitectureDrawer({
  project,
  isOpen,
  onClose,
  onSelectForContact,
}: ProjectArchitectureDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('demo');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  // Default architecture fallback if not populated
  const topology = project.architecture?.topology || [
    { id: 'client', label: 'Client Layer', role: 'UI / Interaction', technology: 'Next.js 14 / React Native', detail: 'Edge-rendered static assets con hidratación selectiva y client-side caching.', status: 'active' },
    { id: 'edge', label: 'Edge Gateway', role: 'Routing & Security', technology: 'Vercel Edge / Cloudflare Workers', detail: 'Rate limiting por IP, mitigación DDoS y SSL termination en <15ms.', status: 'cached' },
    { id: 'api', label: 'Core Services', role: 'Business Logic', technology: 'Node.js / FastAPI / ASP.NET', detail: 'Endpoints REST / tRPC desacoplados con validación de esquemas Zod/Pydantic.', status: 'active' },
    { id: 'db', label: 'Persistence & Cache', role: 'State Management', technology: 'PostgreSQL + Redis', detail: 'Row Level Security (RLS), pooler PgBouncer y cache invalidation TTL.', status: 'cached' },
    { id: 'workers', label: 'Background & AI', role: 'Async Pipelines', technology: 'Temporal / Celery / BullMQ', detail: 'Procesamiento de jobs diferidos, inferencia LLM y webhooks asíncronos.', status: 'worker' },
  ];

  const tradeoffs = project.architecture?.tradeoffs || [
    {
      choice: 'Arquitectura Serverless / Edge-First',
      why: 'Coste $0 en reposo durante validación de mercado y auto-escalado horizontal instantáneo ante picos de demanda.',
      discardedAlternative: 'Clusters Kubernetes dedicados (EKS/GKE) con coste fijo mensual elevado y sobrecarga de mantenimiento.',
      costLatencyNotes: 'Latencia p95 < 85ms global. Coste de hosting < $15/mes antes de monetización sostenida.',
    },
    {
      choice: 'PostgreSQL con Row-Level Security (RLS) + Type-Safe ORM',
      why: 'Garantiza aislamiento estricto de inquilinos (multi-tenant) a nivel de motor SQL sin riesgo de fugas de datos en capa de aplicación.',
      discardedAlternative: 'Bases de datos documentales NoSQL sin esquemas estrictos que complican la integridad relacional de facturación.',
      costLatencyNotes: 'Conexiones multiplexadas con pooled instances; 0ms cold start con connection pooling.',
    },
  ];

  const securityPoints = project.architecture?.securityAndHardening || [
    'Autenticación criptográfica JWT con rotación de refresh tokens en cookies httpOnly SameSite=Strict.',
    'Sanitización estricta de payloads en el borde (Zod/Pydantic) contra inyecciones SQL y XSS.',
    'Row Level Security (RLS) en base de datos para aislamiento automático de cuentas y organizaciones.',
    'Auditoría y logging de transacciones críticas con trazas opacas sin PII (Personally Identifiable Information).',
  ];

  const currentNodeDetail = topology.find((n) => n.id === selectedNode) || topology[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 cursor-pointer"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-full max-w-4xl bg-[#070709] border-l border-white/10 z-50 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface-1/60 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00FF94]" />
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  SYSTEM ARCHITECTURE SPECIFICATION
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-400">
                  ESC
                </kbd>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Title Bar */}
            <div className="px-6 py-4 border-b border-white/5 bg-[#0a0a0c]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-3">
                    {project.title}
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-accent/30 text-accent bg-accent/10">
                      {project.status}
                    </span>
                  </h2>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{project.tagline}</p>
                </div>

                <div className="flex items-center gap-2">
                  {project.links.liveUrl && (
                    <a
                      href={project.links.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-colors"
                    >
                      LIVE APP ↗
                    </a>
                  )}
                  {project.links.githubUrl && (
                    <a
                      href={project.links.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-colors"
                    >
                      GITHUB ↗
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-3 py-1.5 rounded text-xs font-mono bg-accent/10 hover:bg-accent/20 border border-accent/40 text-accent transition-colors"
                  >
                    PÁGINA COMPLETA ↗
                  </Link>
                </div>
              </div>

              {/* Navigation Tabs (Progressive Technical Disclosure) */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                {[
                  { id: 'demo', label: '[01] DEMO & NEGOCIO' },
                  { id: 'architecture', label: '[02] ARQUITECTURA & FLUJO' },
                  { id: 'tradeoffs', label: '[03] STACK & RENDIMIENTO' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-colors ${
                      activeTab === tab.id
                        ? 'bg-accent text-black font-semibold shadow-[0_0_12px_rgba(0,255,148,0.3)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* TAB 1: ARCHITECTURE */}
              {activeTab === 'architecture' && (
                <div className="space-y-6">
                  {/* Interactive SVG Flow Diagram */}
                  <div className="p-5 rounded-xl bg-[#09090c] border border-white/10 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          TOPOLOGÍA DEL SISTEMA (INTERACTIVA)
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                          SELECCIONA CUALQUIER NODO
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">ESTÁNDAR DISTRIBUIDO</span>
                    </div>

                    {/* SVG Pipeline */}
                    <div className="relative py-4">
                      {/* Interactive Node Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
                        {topology.map((node, index) => {
                          const isSelected = (selectedNode || topology[0].id) === node.id;
                          return (
                            <button
                              key={node.id}
                              onClick={() => setSelectedNode(node.id)}
                              className={`text-left p-3 rounded-lg border transition-all ${
                                isSelected
                                  ? 'bg-accent/10 border-accent shadow-[0_0_15px_rgba(0,255,148,0.15)] ring-1 ring-accent'
                                  : 'bg-surface-1/90 border-white/10 hover:border-white/30'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-mono text-[9px] text-zinc-500">0{index + 1}</span>
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    node.status === 'active'
                                      ? 'bg-accent shadow-[0_0_6px_#00FF94]'
                                      : node.status === 'cached'
                                      ? 'bg-cyan-400'
                                      : 'bg-purple-400'
                                  }`}
                                />
                              </div>
                              <p className="text-xs font-bold font-sans text-white truncate">{node.label}</p>
                              <p className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">{node.technology}</p>
                            </button>
                          );
                        })}
                      </div>

                      {/* Connection Wire Diagram */}
                      <div className="hidden sm:block mt-3 px-2">
                        <svg className="w-full h-8" viewBox="0 0 700 24" fill="none">
                          <line
                            x1="60"
                            y1="12"
                            x2="640"
                            y2="12"
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          {/* Animated Data Packets */}
                          <circle r="3" fill="#00FF94">
                            <animate
                              attributeName="cx"
                              from="60"
                              to="640"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="cy"
                              values="12;12;12"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="3" fill="#00E5FF">
                            <animate
                              attributeName="cx"
                              from="60"
                              to="640"
                              dur="4.5s"
                              begin="1s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    </div>

                    {/* Selected Node Inspector */}
                    <div className="mt-4 p-4 rounded-lg bg-black/60 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/5 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-semibold">{currentNodeDetail.label.toUpperCase()}</span>
                          <span className="text-zinc-500">•</span>
                          <span className="text-zinc-300">{currentNodeDetail.role}</span>
                        </div>
                        <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          TECH: {currentNodeDetail.technology}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {currentNodeDetail.detail}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface-1 border border-white/10">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                        <span>⚡</span> PATRONES Y RESILIENCIA
                      </h4>
                      <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                        {project.techStack.architectureHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5 font-mono">›</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-1 border border-white/10">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                        <span>🛡️</span> SEGURIDAD Y ENDURECIMIENTO
                      </h4>
                      <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                        {securityPoints.map((sec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5 font-mono">›</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TRADEOFFS & STACK */}
              {activeTab === 'tradeoffs' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-[#09090c] border border-white/10">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      DECISIONES TÉCNICAS & COMPROMISOS (WHY NOT X?)
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Cada tecnología fue seleccionada evaluando coste en reposo, velocidad de iteración, escalabilidad horizontal y superficie de mantenimiento.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {tradeoffs.map((item, index) => (
                      <div key={index} className="p-5 rounded-xl bg-surface-1 border border-white/10 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-bold text-sm text-white font-sans flex items-center gap-2">
                            <span className="text-accent font-mono text-xs">0{index + 1}.</span>
                            {item.choice}
                          </h4>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent">
                            DECISIÓN DE PRODUCCIÓN
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans pt-2">
                          <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                            <span className="font-mono text-[10px] text-accent block uppercase mb-1">
                              ✓ JUSTIFICACIÓN & BENEFICIO
                            </span>
                            <p className="text-zinc-300 leading-relaxed">{item.why}</p>
                          </div>

                          <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                            <span className="font-mono text-[10px] text-rose-400 block uppercase mb-1">
                              ✕ ALTERNATIVA DESCARTADA
                            </span>
                            <p className="text-zinc-400 leading-relaxed">{item.discardedAlternative}</p>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[11px] text-zinc-400 flex items-center gap-2">
                          <span className="text-accent">COST & LATENCY:</span>
                          <span>{item.costLatencyNotes}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Complete Stack Summary */}
                  <div className="p-5 rounded-xl bg-surface-1 border border-white/10 space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-white">
                      STACK COMPLETO DEL PROYECTO
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-zinc-500 text-[10px] block">LENGUAJES</span>
                        <span className="text-zinc-200">{project.techStack.languages.join(', ')}</span>
                      </div>
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-zinc-500 text-[10px] block">FRAMEWORKS</span>
                        <span className="text-zinc-200">{project.techStack.frameworks.join(', ')}</span>
                      </div>
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-zinc-500 text-[10px] block">BASES DE DATOS</span>
                        <span className="text-zinc-200">{project.techStack.databases.join(', ')}</span>
                      </div>
                      <div className="p-2.5 rounded bg-black/40 border border-white/5">
                        <span className="text-zinc-500 text-[10px] block">CLOUD & DEVOPS</span>
                        <span className="text-zinc-200">{project.techStack.cloudAndDevops.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 1: DEMO INTERACTIVA & NEGOCIO */}
              {activeTab === 'demo' && (
                <div className="space-y-6">
                  {/* Embedded Interactive Live Simulator */}
                  <div className="p-4 rounded-2xl bg-black/50 border border-accent/20">
                    <div className="flex items-center justify-between mb-3 text-xs font-mono">
                      <span className="text-accent flex items-center gap-1.5 font-bold">
                        <span>▶</span> SIMULADOR DEL PRODUCTO EN VIVO
                      </span>
                      <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        INTERACTÚA CON EL WIDGET
                      </span>
                    </div>
                    <div className="h-56 rounded-xl overflow-hidden border border-white/10">
                      <InteractiveAppPreview slug={project.slug} title={project.title} />
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-surface-1 border border-white/10 space-y-3">
                      <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest block">
                        PROBLEMA REAL IDENTIFICADO
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {project.problemStatement.summary}
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-400 font-sans pt-2 border-t border-white/5">
                        {project.problemStatement.painPoints.map((pain, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-400">×</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-surface-1 border border-white/10 space-y-3">
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">
                        SOLUCIÓN IMPLEMENTADA
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {project.solutionStatement.summary}
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300 font-sans pt-2 border-t border-white/5">
                        {project.solutionStatement.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Target Audience & Market */}
                  <div className="p-5 rounded-xl bg-surface-1 border border-white/10 space-y-3">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                      AUDIENCIA OBJETIVO & MODELO DE NEGOCIO
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <span className="text-zinc-500 font-mono text-[10px] block mb-1">PERFIL IDEAL (ICP):</span>
                        <p className="text-zinc-300">{project.targetAudience.profile}</p>
                      </div>
                      <div>
                        <span className="text-zinc-500 font-mono text-[10px] block mb-1">MODELO DE MONETIZACIÓN:</span>
                        <p className="text-accent font-mono">{project.monetization.model}</p>
                        <p className="text-zinc-400 text-[11px] mt-0.5">{project.monetization.pricingStrategy}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-surface-1 border border-white/10 text-center">
                          <div className="text-xl font-bold font-mono text-accent">{metric.value}</div>
                          <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Action Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0a0a0c] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-400">
                ¿Interesado en auditar el código o una demo técnica?
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (onSelectForContact) {
                      onSelectForContact(project.title);
                    }
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-accent text-black font-mono text-xs font-bold hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(0,255,148,0.2)]"
                >
                  SOLICITAR DEMO / CONTACTAR POR ESTE PROYECTO →
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
