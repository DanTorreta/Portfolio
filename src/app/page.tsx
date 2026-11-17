import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import MonetizationSection from "@/components/MonetizationSection";
import ContactSection from "@/components/ContactSection";
import { PROJECTS_DATA } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <ProjectShowcase projects={PROJECTS_DATA} />
      <ExperienceSection />
      <TechStackSection />
      <MonetizationSection />
      <ContactSection />
    </div>
  );
}
