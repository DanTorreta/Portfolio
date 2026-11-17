'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './Navbar';
import CommandPalette from './CommandPalette';
import ExecutiveSummaryModal from './ExecutiveSummaryModal';
import ProjectArchitectureDrawer from './ProjectArchitectureDrawer';
import { Project } from '@/types/project';

interface AppContextType {
  openCommandPalette: () => void;
  openExecutiveSummary: () => void;
  openProjectDrawer: (project: Project) => void;
  selectContactTopic: (topic: string) => void;
  contactSubject: string;
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
      }}
    >
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

      {/* Standalone Project Drawer for when opened from Command Palette */}
      <ProjectArchitectureDrawer
        project={drawerProject}
        isOpen={drawerProject !== null}
        onClose={() => setDrawerProject(null)}
        onSelectForContact={(title) => selectContactTopic(`Proyecto: ${title}`)}
      />
    </AppContext.Provider>
  );
}
