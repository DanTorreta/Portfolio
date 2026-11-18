'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, Terminal, Copy, MessageCircle, Linkedin } from 'lucide-react';
import { PROJECTS_DATA, FOUNDER_PROFILE } from '@/data/projects';
import MagneticButton from './MagneticButton';
import { useAppInteractions } from './AppProviders';

interface ContactSectionProps {
  initialSubject?: string;
}

type ContactIntent = 'client_project' | 'job_offer' | 'software_license';

export default function ContactSection({ initialSubject }: ContactSectionProps) {
  const { language } = useAppInteractions();
  const isEs = language === 'es';

  const [intent, setIntent] = useState<ContactIntent>('client_project');
  const [selectedProject, setSelectedProject] = useState<string>('fidelizacion-comercio');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [budgetOrRole, setBudgetOrRole] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    if (initialSubject) {
      if (initialSubject.includes('Contratación') || initialSubject.includes('Empleo') || initialSubject.includes('Hiring')) {
        setIntent('job_offer');
      } else if (initialSubject.includes('Adquisición') || initialSubject.includes('Licencia') || initialSubject.includes('Transfer')) {
        setIntent('software_license');
      } else {
        setIntent('client_project');
      }
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
    const intentLabel =
      intent === 'client_project'
        ? (isEs ? 'Proyecto a Medida' : 'Custom Project')
        : intent === 'job_offer'
        ? (isEs ? 'Oferta de Empleo' : 'Job Offer')
        : (isEs ? `Licencia: ${selectedProject}` : `License: ${selectedProject}`);

    const mailtoSubject = encodeURIComponent(`[PORTFOLIO] ${intentLabel} - ${name}`);
    const mailtoBody = encodeURIComponent(
      `Hola Daniel,\n\nSoy ${name} (${email}).\nTipo de contacto: ${intentLabel}\nDetalle adicional: ${budgetOrRole}\n\nMensaje:\n${message}\n\nUn saludo cordial.`
    );
    window.location.href = `mailto:${FOUNDER_PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Credentials & Direct Action */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>{isEs ? 'CONVERSACIÓN DIRECTA // SIN INTERMEDIARIOS' : 'DIRECT COMMUNICATION // ZERO MIDDLEMEN'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest uppercase leading-tight mb-4 font-sans">
              {isEs ? '¿Hablamos sobre tu idea o posición?' : 'Let’s Discuss Your Idea or Role'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              {isEs
                ? 'Respondo habitualmente en menos de 24 horas. Disponible tanto para contratación directa como para proyectos freelance o adquisición de software.'
                : 'I typically reply within 24 hours. Open for full-time engineering roles, high-impact freelance builds, or software IP licensing.'}
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Email with 1-Click Copy */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08] hover:border-[#00FF94]/50 transition-colors">
              <a
                href={`mailto:${FOUNDER_PROFILE.email}`}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{isEs ? 'CORREO DIRECTO' : 'DIRECT EMAIL'}</p>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">
                    {FOUNDER_PROFILE.email}
                  </p>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="shrink-0 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 ml-2"
                title="Copiar email al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-[#00FF94]" />
                    <span className="text-[#00FF94] font-bold">{isEs ? 'COPIADO' : 'COPIED'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>{isEs ? 'COPIAR' : 'COPY'}</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/34653430127?text=Hola%20Daniel,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08] hover:border-[#00FF94]/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#00FF94]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">WHATSAPP / CHAT</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00FF94] transition-colors">
                    +34 653 43 01 27
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 group-hover:text-[#00FF94]">ABRIR CHAT ↗</span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/daniel-martinez-mira-153b6b236/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08] hover:border-[#00FF94]/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">LINKEDIN</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00FF94] transition-colors">
                    Daniel Martínez Mira
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 group-hover:text-[#00FF94]">CONECTAR ↗</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#09090B]/80 border border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{isEs ? 'UBICACIÓN' : 'LOCATION'}</p>
                <p className="text-sm font-semibold text-white font-sans">
                  Paterna, Valencia, España (Remoto / Presencial)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Smart Intent-Driven Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#09090B]/90 border border-white/[0.1] backdrop-blur-2xl shadow-2xl relative">
          
          {/* Clean 1-Line Intent Selector Chips */}
          <div className="mb-6">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2.5">
              {isEs ? 'MOTIVO DE CONTACTO:' : 'INQUIRY TYPE:'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setIntent('client_project')}
                className={`py-2.5 px-3 rounded-xl border transition-all text-xs font-mono font-semibold flex items-center justify-center gap-2 ${
                  intent === 'client_project'
                    ? 'bg-[#00FF94] text-black border-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.3)]'
                    : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>💡</span>
                <span>{isEs ? 'Crear App / Web' : 'Build an App'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIntent('job_offer')}
                className={`py-2.5 px-3 rounded-xl border transition-all text-xs font-mono font-semibold flex items-center justify-center gap-2 ${
                  intent === 'job_offer'
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>🤝</span>
                <span>{isEs ? 'Oferta de Empleo' : 'Job Offer'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIntent('software_license')}
                className={`py-2.5 px-3 rounded-xl border transition-all text-xs font-mono font-semibold flex items-center justify-center gap-2 ${
                  intent === 'software_license'
                    ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>📦</span>
                <span>{isEs ? 'Comprar Software' : 'Software License'}</span>
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#00FF94]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/30 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-mono">
                {isEs ? '// MENSAJE PREPARADO' : '// INQUIRY PREPARED'}
              </h4>
              <p className="text-xs text-zinc-400 font-sans max-w-sm mx-auto">
                {isEs
                  ? 'Se ha abierto tu cliente de correo con los datos redactados. También puedes escribir o llamar al teléfono directo.'
                  : 'Your email client has been prepared. You can also connect via WhatsApp or direct phone.'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-[#00FF94] hover:underline"
              >
                {isEs ? 'Enviar otra consulta' : 'Send another inquiry'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {/* Intent Specific Field */}
              {intent === 'software_license' && (
                <div>
                  <label className="block text-zinc-400 mb-1.5">
                    {isEs ? 'PROYECTO QUE DESEAS ADQUIRIR O LICENCIAR:' : 'PROJECT YOU WISH TO LICENSE:'}
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono"
                  >
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-zinc-400 mb-1.5">
                  {isEs ? 'TU NOMBRE O EMPRESA:' : 'YOUR NAME OR COMPANY:'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEs ? 'Ej. María Pérez o Innova Tech SL' : 'e.g. Sarah Jenkins or Acme Corp'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-400 mb-1.5">
                  {isEs ? 'CORREO DE CONTACTO:' : 'YOUR EMAIL ADDRESS:'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="nombre@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-600"
                />
              </div>

              {/* Dynamic Contextual Field */}
              <div>
                <label className="block text-zinc-400 mb-1.5">
                  {intent === 'client_project'
                    ? (isEs ? 'PRESUPUESTO APROXIMADO O TIMELINE:' : 'TARGET BUDGET OR TIMELINE:')
                    : intent === 'job_offer'
                    ? (isEs ? 'POSICIÓN / TIPO DE JORNADA:' : 'ROLE TITLE / WORK MODEL:')
                    : (isEs ? 'TIPO DE ACUERDO DESEADO:' : 'TARGET DEAL STRUCTURE:')}
                </label>
                <input
                  type="text"
                  placeholder={
                    intent === 'client_project'
                      ? (isEs ? 'Ej. Lanzamiento en 1-2 meses / Presupuesto flexible' : 'e.g. 1-2 months launch / flexible budget')
                      : intent === 'job_offer'
                      ? (isEs ? 'Ej. Senior Full-Stack Engineer / Remoto o Híbrido' : 'e.g. Senior Software Engineer / Remote')
                      : (isEs ? 'Ej. Compra de código fuente o Marca blanca' : 'e.g. Source code buyout or White-label')
                  }
                  value={budgetOrRole}
                  onChange={(e) => setBudgetOrRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-600"
                />
              </div>

              {/* Message with adaptive placeholder */}
              <div>
                <label className="block text-zinc-400 mb-1.5">
                  {isEs ? 'CUÉNTAME BREVEMENTE TU PROPUESTA O IDEA:' : 'TELL ME ABOUT YOUR PROJECT OR OFFER:'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    intent === 'client_project'
                      ? (isEs ? 'Cuéntame qué problema resuelve tu app, para quién es y qué necesitas que construyamos...' : 'Tell me what your app does, who it is for, and how I can help build it...')
                      : intent === 'job_offer'
                      ? (isEs ? 'Detalla las características del equipo, el stack tecnológico y los retos principales del puesto...' : 'Share details on your team, tech stack, and primary technical challenges...')
                      : (isEs ? 'Indica si buscas exclusividad, despliegue en tu propia nube o consultoría de integración...' : 'Specify if you need full IP exclusivity, custom cloud setup, or integration support...')
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] text-white border border-white/[0.08] focus:outline-none focus:border-[#00FF94] text-xs font-mono placeholder-zinc-600 resize-none"
                />
              </div>

              <MagneticButton strength={0.2} className="w-full pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all shadow-[0_0_20px_rgba(0,255,148,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isEs ? 'ENVIAR MENSAJE DIRECTO A DANIEL' : 'SEND DIRECT MESSAGE TO DANIEL'}</span>
                </button>
              </MagneticButton>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
