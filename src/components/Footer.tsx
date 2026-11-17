import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05080e] border-t border-white/10 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">{FOUNDER_PROFILE.name}</span>
              <span className="text-[11px] text-slate-400">{FOUNDER_PROFILE.title}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/#proyectos" className="hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="/#experiencia" className="hover:text-white transition-colors">
              Experiencia
            </Link>
            <Link href="/#stack" className="hover:text-white transition-colors">
              Stack Tecnológico
            </Link>
            <Link href="/#monetizacion" className="hover:text-white transition-colors">
              Monetización
            </Link>
            <Link href="/#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>

          {/* Contact pills */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${FOUNDER_PROFILE.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title={FOUNDER_PROFILE.email}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={FOUNDER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={FOUNDER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {FOUNDER_PROFILE.name}. {FOUNDER_PROFILE.location}. Desarrollado con Next.js y Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Desplegado en Vercel Edge Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
