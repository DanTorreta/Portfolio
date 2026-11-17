'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, FOUNDER_PROFILE } from '@/data/projects';
import { Project } from '@/types/project';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectDrawer: (project: Project) => void;
  onOpenExecutiveSummary: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenProjectDrawer,
  onOpenExecutiveSummary,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter actions
  const navigationItems = [
    { id: 'nav-projects', label: 'Explorar Catálogo de Proyectos', section: '#proyectos', category: 'Navegación' },
    { id: 'nav-experience', label: 'Línea de Tiempo & Experiencia Profesional', section: '#experiencia', category: 'Navegación' },
    { id: 'nav-stack', label: 'Matriz de Stack Tecnológico', section: '#stack', category: 'Navegación' },
    { id: 'nav-product', label: 'Mentalidad de Producto & Eficiencia Cloud', section: '#filosofia-producto', category: 'Navegación' },
    { id: 'nav-contact', label: 'Iniciar Contacto Directo', section: '#contacto', category: 'Navegación' },
  ];

  const quickActions = [
    {
      id: 'action-summary',
      label: '⚡ Modo Resumen Ejecutivo (30s)',
      action: () => {
        onClose();
        onOpenExecutiveSummary();
      },
      category: 'Acciones Rápidas',
    },
    {
      id: 'action-copy-email',
      label: copiedEmail ? '✓ Email Copiado al Portapapeles' : '📋 Copiar Email de Contacto Directo',
      action: async () => {
        await navigator.clipboard.writeText(FOUNDER_PROFILE.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      },
      category: 'Acciones Rápidas',
    },
    {
      id: 'action-cv',
      label: '📄 Descargar CV Profesional (PDF)',
      action: () => {
        window.open('/cv-daniel-martinez-mira.pdf', '_blank');
        onClose();
      },
      category: 'Acciones Rápidas',
    },
    {
      id: 'action-github',
      label: '🐙 Abrir Perfil de GitHub (@DanTorreta)',
      action: () => {
        window.open('https://github.com/DanTorreta', '_blank');
        onClose();
      },
      category: 'Acciones Rápidas',
    },
  ];

  const projectItems = PROJECTS_DATA.map((p) => ({
    id: `project-${p.id}`,
    label: `Auditar Arquitectura: ${p.title} (${p.category})`,
    project: p,
    action: () => {
      onClose();
      onOpenProjectDrawer(p);
    },
    category: 'Proyectos de Ingeniería',
  }));

  // Combined searchable list
  const filteredList = [
    ...quickActions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase())),
    ...projectItems.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()) || p.project.techStack.languages.some(l => l.toLowerCase().includes(query.toLowerCase()))),
    ...navigationItems.filter((n) => n.label.toLowerCase().includes(query.toLowerCase())),
  ];

  const handleSelect = (index: number) => {
    const item = filteredList[index];
    if (!item) return;

    if ('action' in item && typeof item.action === 'function') {
      item.action();
    } else if ('section' in item && typeof item.section === 'string') {
      onClose();
      const el = document.querySelector(item.section);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredList.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredList.length) % Math.max(1, filteredList.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(selectedIndex);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-[#08080a] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10"
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Escribe un comando o busca proyectos, stack, acciones..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-sans"
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04]">
              {filteredList.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-zinc-500">
                  No se encontraron comandos o proyectos coincidentes con &quot;{query}&quot;
                </div>
              ) : (
                filteredList.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(index)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                        isSelected
                          ? 'bg-accent/10 text-white font-medium border border-accent/30'
                          : 'text-zinc-400 hover:text-white border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-accent shadow-[0_0_6px_#00FF94]' : 'bg-zinc-600'}`} />
                        <span className="truncate font-sans">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider shrink-0 ml-2">
                        {item.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ NAVEGAR</span>
                <span>↵ SELECCIONAR</span>
              </div>
              <span className="text-accent">DANIEL MARTÍNEZ MIRA • PORTFOLIO CORE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
