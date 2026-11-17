'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FOUNDER_PROFILE, WORK_EXPERIENCE } from '@/data/projects';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ExecutiveSummaryModal({
  isOpen,
  onClose,
  onOpenContact,
}: ExecutiveSummaryModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(FOUNDER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#09090b] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#00FF94]" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  RESUMEN EJECUTIVO (30 SEGUNDOS)
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-1 border border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{FOUNDER_PROFILE.name}</h3>
                  <p className="text-xs font-mono text-accent mt-0.5">{FOUNDER_PROFILE.title}</p>
                  <p className="text-xs text-zinc-400 mt-1">{FOUNDER_PROFILE.location} • Disponibilidad Inmediata</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{copied ? '✓ COPIADO' : 'COPIAR EMAIL'}</span>
                  </button>
                  <a
                    href="/cv-daniel-martinez-mira.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-accent text-black text-xs font-mono font-bold hover:bg-accent/90 transition-colors"
                  >
                    VER CV ↗
                  </a>
                </div>
              </div>

              {/* 3 Core Value Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-surface-1/70 border border-white/10">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">01 • FORMACIÓN</span>
                  <h4 className="text-xs font-bold text-white">Ingeniería Informática</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">Especialidad Multimedia por la Universitat de València (UV). Base matemática y algorítmica sólida.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-1/70 border border-white/10">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">02 • TRAYECTORIA</span>
                  <h4 className="text-xs font-bold text-white">{WORK_EXPERIENCE[0].company}</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">{WORK_EXPERIENCE[0].role}. Sistemas industriales de alta disponibilidad, .NET, Angular y visión por computador.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-1/70 border border-white/10">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">03 • PRODUCCIÓN</span>
                  <h4 className="text-xs font-bold text-white">7 Productos Creados</h4>
                  <p className="text-[11px] text-zinc-400 mt-1">Sistemas end-to-end con arquitectura serverless, costes $0 en reposo, SaaS multi-tenant y modelos de monetización.</p>
                </div>
              </div>

              {/* Technical Core Metrics */}
              <div className="p-4 rounded-xl bg-[#060608] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] uppercase text-zinc-500 block">
                  CAPACIDADES DE INGENIERÍA COMPROBADAS
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {['TypeScript / Next.js', 'Python / FastAPI / PyTorch', '.NET Core / C#', 'PostgreSQL / RLS', 'Docker / CI/CD', 'Temporal / BullMQ', 'Unity / C#', 'SaaS Multi-tenancy'].map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                danielmartinezmira2@gmail.com • +34 653 43 01 27
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-4 py-2 rounded-lg bg-accent text-black font-mono text-xs font-bold hover:bg-accent/90 transition-colors"
              >
                IR AL FORMULARIO DE CONTACTO →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
