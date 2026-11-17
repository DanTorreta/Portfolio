'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import MonetizationSection from '@/components/MonetizationSection';
import ContactSection from '@/components/ContactSection';
import { PROJECTS_DATA } from '@/data/projects';
import { useAppInteractions } from '@/components/AppProviders';

export default function HomeView() {
  const { selectContactTopic, contactSubject } = useAppInteractions();

  return (
    <div className="space-y-4">
      <Hero />
      <ProjectShowcase
        projects={PROJECTS_DATA}
        onSelectForContact={selectContactTopic}
      />
      <ExperienceSection />
      <TechStackSection />
      <MonetizationSection onSelectForContact={selectContactTopic} />
      <ContactSection initialSubject={contactSubject} />
    </div>
  );
}
