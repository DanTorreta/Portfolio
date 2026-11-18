'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './Navbar';
import CommandPalette from './CommandPalette';
import ExecutiveSummaryModal from './ExecutiveSummaryModal';
import ProjectArchitectureDrawer from './ProjectArchitectureDrawer';
import { Project } from '@/types/project';

export type PerspectiveMode = 'client' | 'recruiter' | 'tech';
export type ThemeMode = 'dark' | 'light';
export type LanguageMode = 'es' | 'en';

interface AppContextType {
  openCommandPalette: () => void;
  openExecutiveSummary: () => void;
  openProjectDrawer: (project: Project) => void;
  selectContactTopic: (topic: string) => void;
  contactSubject: string;
  perspective: PerspectiveMode;
  setPerspective: (mode: PerspectiveMode) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  language: LanguageMode;
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function useAppInteractions() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppInteractions must be used within AppProviders');
  }
  return context;
}

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [summaryModalOpen, setSummaryModalOpen] = useState(false);
  const [drawerProject, setDrawerProject] = useState<Project | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('Propuesta General / Ingeniería');
  const [perspective, setPerspective] = useState<PerspectiveMode>('client');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [language, setLanguage] = useState<LanguageMode>('es');

  // Sync theme with DOM html class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Global keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openCommandPalette = () => setCommandPaletteOpen(true);
  const openExecutiveSummary = () => setSummaryModalOpen(true);
  const openProjectDrawer = (project: Project) => setDrawerProject(project);

  const selectContactTopic = (topic: string) => {
    setContactSubject(topic);
    const el = document.getElementById('contacto');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        openCommandPalette,
        openExecutiveSummary,
        openProjectDrawer,
        selectContactTopic,
        contactSubject,
        perspective,
        setPerspective,
        theme,
        toggleTheme,
        language,
        toggleLanguage,
      }}
    >
      <div className={theme === 'light' ? 'theme-light text-zinc-900 bg-[#FAFAFA]' : 'theme-dark text-zinc-300 bg-[#050505]'}>
        <Navbar onOpenCommandPalette={openCommandPalette} />
        
        {children}

        {/* Global Command Palette */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onOpenProjectDrawer={(p) => setDrawerProject(p)}
          onOpenExecutiveSummary={() => setSummaryModalOpen(true)}
        />

        {/* Executive Summary 30s Modal */}
        <ExecutiveSummaryModal
          isOpen={summaryModalOpen}
          onClose={() => setSummaryModalOpen(false)}
          onOpenContact={() => selectContactTopic('Propuesta de Contratación / Empleo')}
        />

        {/* Standalone Project Drawer */}
        <ProjectArchitectureDrawer
          project={drawerProject}
          isOpen={drawerProject !== null}
          onClose={() => setDrawerProject(null)}
          onSelectForContact={(title) => selectContactTopic(`Proyecto: ${title}`)}
        />
      </div>
    </AppContext.Provider>
  );
}
