import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { FOUNDER_PROFILE } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/[0.08] py-14 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm tracking-tight block font-sans">
                {FOUNDER_PROFILE.name}
              </span>
              <span className="text-[10px] text-zinc-500 tracking-wider">
                SOFTWARE ENGINEER // VALENCIA, ES
              </span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] tracking-wider">
            <Link href="/#proyectos" className="hover:text-[#00FF94] transition-colors">
              // PROYECTOS
            </Link>
            <Link href="/#experiencia" className="hover:text-[#00FF94] transition-colors">
              // EXPERIENCIA
            </Link>
            <Link href="/#stack" className="hover:text-[#00FF94] transition-colors">
              // STACK
            </Link>
            <Link href="/#monetizacion" className="hover:text-[#00FF94] transition-colors">
              // MONETIZACIÓN
            </Link>
            <Link href="/#contacto" className="hover:text-[#00FF94] transition-colors">
              // CONTACTO
            </Link>
          </div>

          {/* Connect Icons */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${FOUNDER_PROFILE.email}`}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-[#00FF94] text-zinc-400 hover:text-black border border-white/[0.08] transition-all"
              title={FOUNDER_PROFILE.email}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={FOUNDER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.08] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={FOUNDER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.08] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <p>© {new Date().getFullYear()} {FOUNDER_PROFILE.name}. TODOS LOS DERECHOS RESERVADOS. NEXT.JS + TAILWIND + FRAMER MOTION.</p>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] shadow-[0_0_6px_#00FF94]" />
            <span>DESPLEGADO EN VERCEL EDGE // 120 FPS CAPABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
