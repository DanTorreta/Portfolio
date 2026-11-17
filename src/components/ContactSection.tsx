"use client";

import React, { useState } from "react";
import { Mail, Send, Github, Linkedin, MessageSquare, Check, Sparkles } from "lucide-react";
import { PROJECTS_DATA, FOUNDER_PROFILE } from "@/data/projects";

export default function ContactSection() {
  const [selectedProject, setSelectedProject] = useState<string>("crold");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Preparamos mailto o feedback visual
    const mailtoSubject = encodeURIComponent(`Interés en proyecto: ${selectedProject} - De: ${name}`);
    const mailtoBody = encodeURIComponent(`Hola Daniel,\n\nSoy ${name} (${email}).\n\nEstoy interesado en tu proyecto "${selectedProject}".\n\nMensaje:\n${message}\n\nUn saludo.`);
    window.location.href = `mailto:${FOUNDER_PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#070b13] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Info Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contacto Directo con el Desarrollador</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              ¿Hablamos sobre un proyecto o una oportunidad de negocio?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Tanto si deseas adquirir una de las aplicaciones, licenciar el código para tu propia empresa, o estás buscando un ingeniero de software con mentalidad de producto para un desarrollo clave, contáctame directamente.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${FOUNDER_PROFILE.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-indigo-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Correo Electrónico</p>
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {FOUNDER_PROFILE.email}
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={FOUNDER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium">GitHub Repos</span>
                </a>

                <a
                  href={FOUNDER_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Fast status badge */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Respuesta habitual en menos de 24 horas laborables.</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Enviar Mensaje Directo
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Selecciona el proyecto que te interesa o envíame una propuesta general.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">¡Mensaje preparado!</h4>
                <p className="text-xs text-slate-300">
                  Se ha generado el correo en tu cliente de mensajería. También puedes escribir directamente a{" "}
                  <strong className="text-emerald-400 font-mono">{FOUNDER_PROFILE.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Project selector */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Proyecto de Interés
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] text-white border border-white/10 focus:outline-none focus:border-indigo-500 text-xs"
                  >
                    <option value="General / Todos">Propuesta General / Consultoría de Software</option>
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Tu Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Roberto Gómez o Acme Corp"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] text-white border border-white/10 focus:outline-none focus:border-indigo-500 text-xs placeholder-slate-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nombre@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] text-white border border-white/10 focus:outline-none focus:border-indigo-500 text-xs placeholder-slate-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Mensaje / Consulta
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntame si estás interesado en comprar el código, adquirir el SaaS, plantear una oferta o solicitar una demo privada..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1322] text-white border border-white/10 focus:outline-none focus:border-indigo-500 text-xs placeholder-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 shadow-md shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta Directa</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
