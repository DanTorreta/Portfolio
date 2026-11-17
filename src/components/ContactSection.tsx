'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, Terminal, Copy } from 'lucide-react';
import { PROJECTS_DATA, FOUNDER_PROFILE } from '@/data/projects';
import MagneticButton from './MagneticButton';

interface ContactSectionProps {
  initialSubject?: string;
}

export default function ContactSection({ initialSubject }: ContactSectionProps) {
  const [selectedProject, setSelectedProject] = useState<string>('Propuesta General / Ingeniería');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    if (initialSubject) {
      setSelectedProject(initialSubject);
    }
  }, [initialSubject]);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(FOUNDER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[PORTFOLIO CONTACT] Asunto: ${selectedProject} - De: ${name}`);
    const mailtoBody = encodeURIComponent(`Hola Daniel,\n\nSoy ${name} (${email}).\n\nEstoy interesado en: "${selectedProject}".\n\nMensaje:\n${message}\n\nUn saludo cordial.`);
    window.location.href = `mailto:${FOUNDER_PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Credentials & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIRECT INQUIRY // DANIEL MARTÍNEZ MIRA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight mb-4 font-sans">
              ¿Hablamos sobre un proyecto o posición técnica?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              Disponible para <strong>contratación en roles Senior / Mid-Senior</strong>, proyectos de alta exigencia técnica o adquisición y licenciamiento de cualquiera de mis 7 productos.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Email with Instant Copy Action */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08] hover:border-[#00FF94]/50 transition-colors group">
              <a
                href={`mailto:${FOUNDER_PROFILE.email}`}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">CORREO DIRECTO</p>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00FF94] transition-colors truncate">
                    {FOUNDER_PROFILE.email}
                  </p>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="shrink-0 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
                title="Copiar email al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-[#00FF94]" />
                    <span className="text-[#00FF94] font-bold">COPIADO</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>COPIAR</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <a
              href={`tel:${FOUNDER_PROFILE.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08] hover:border-[#00FF94]/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94] group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">TELÉFONO // WHATSAPP</p>
                <p className="text-sm font-semibold text-white group-hover:text-[#00FF94] transition-colors">
                  {FOUNDER_PROFILE.phone}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">UBICACIÓN FÍSICA</p>
                <p className="text-sm font-semibold text-white font-sans">
                  {FOUNDER_PROFILE.location}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
            <span>DISPONIBILIDAD INMEDIATA • RESPUESTA &lt; 24H</span>
          </div>
        </div>

        {/* Right Column: Terminal Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#09090B]/90 border border-white/[0.1] backdrop-blur-2xl shadow-2xl relative">
          
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] font-mono text-xs">
            <span className="text-white font-bold tracking-wider">// COMUNICACIÓN DIRECTA</span>
            <span className="text-[#00FF94]">TERMINAL_READY</span>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#00FF94]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-mono">// CONSULTA PREPARADA</h4>
              <p className="text-xs text-zinc-400 font-sans max-w-sm mx-auto">
                Se ha generado el mensaje en tu cliente de correo. También puedes escribir directamente a <strong className="text-white font-mono">{FOUNDER_PROFILE.email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-[#00FF94] hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
              {/* Project selector */}
              <div>
                <label className="block text-zinc-400 mb-2">
                  01 // ASUNTO O PROYECTO DE INTERÉS
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono"
                >
                  <option value="Propuesta General / Ingeniería">Propuesta General / Contratación de Ingeniería</option>
                  <option value="Propuesta de Contratación / Empleo">Propuesta de Contratación / Empleo Full-Time</option>
                  <option value="Adquisición de Software / Licencia">Adquisición de Software / Licenciamiento</option>
                  <option value="Consultoría Técnica">Consultoría de Arquitectura y Rendimiento</option>
                  {PROJECTS_DATA.map((p) => (
                    <option key={p.id} value={p.title}>
                      Proyecto: {p.title} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-zinc-400 mb-2">
                  02 // NOMBRE O EMPRESA
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Roberto Gómez o Acme Corp"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-700"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-400 mb-2">
                  03 // EMAIL DE CONTACTO
                </label>
                <input
                  type="email"
                  required
                  placeholder="contacto@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-700"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-zinc-400 mb-2">
                  04 // DETALLES DE LA PROPUESTA
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe la posición técnica, consulta arquitectónica o términos del acuerdo..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-700 resize-none"
                />
              </div>

              <MagneticButton strength={0.2} className="w-full">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all shadow-[0_0_20px_rgba(0,255,148,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ENVIAR MENSAJE A DANIEL</span>
                </button>
              </MagneticButton>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
