'use client';

import React from 'react';
import { Terminal, Rocket, Briefcase, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useAppInteractions } from './AppProviders';

interface MonetizationSectionProps {
  onSelectForContact?: (topic: string) => void;
}

export default function MonetizationSection({ onSelectForContact }: MonetizationSectionProps) {
  const { language } = useAppInteractions();
  const isEs = language === 'es';

  return (
    <section id="filosofia-producto" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{isEs ? 'MÉTODO DE TRABAJO & VALOR' : 'WORK METHODOLOGY & VALUE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest uppercase leading-tight font-sans text-white">
            {isEs ? '¿Cómo Trabajo?' : 'How I Work'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            {isEs
              ? 'Tanto si buscas incorporar un ingeniero a tu equipo como si necesitas crear tu producto desde cero, aporto autonomía, rigor técnico y foco en resultados.'
              : 'Whether you want to hire a senior engineer or build your product from scratch, I bring full autonomy, technical rigor, and measurable outcomes.'}
          </p>
        </div>

        <div className="shrink-0 text-xs font-mono px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#00FF94]">
          // FAST ITERATION & HIGH VALUE
        </div>
      </div>

      {/* 2 Clean Side-by-Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        
        {/* Track 1: Custom Projects / Clients */}
        <div className="p-8 rounded-3xl bg-[#09090B]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center text-[#00FF94]">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00FF94] font-bold tracking-wider">
                  {isEs ? 'PARA EMPRENDEDORES & PYMES' : 'FOR BUSINESSES & FOUNDERS'}
                </span>
                <h3 className="text-xl font-bold text-white font-sans">
                  {isEs ? 'Desarrollo de Proyectos a Medida' : 'Custom App Development'}
                </h3>
              </div>
            </div>

            {/* 3 Short Core Bullets */}
            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-[#00FF94] font-bold">01</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Prototipo Rápido y Validación' : 'Rapid Prototype & Validation'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Diseño de interfaz y flujos interactivos para validar tu idea antes de programar.' : 'Interactive UI flows to test and validate your product vision before coding.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-[#00FF94] font-bold">02</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Desarrollo en Semanas (Coste $0 Reposo)' : 'Fast Build ($0 Cold-Start Cost)'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Arquitectura moderna en Next.js y base de datos serverless que no genera facturas ociosas.' : 'Modern Next.js and serverless stack with zero idle hosting costs.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-[#00FF94] font-bold">03</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Lanzamiento Listo para Facturar' : 'Launch Ready for Revenue'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Integración de pasarela de pago (Stripe), dominio propio y entrega de código limpia.' : 'Stripe payment integration, custom domain setup, and clean code handoff.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <MagneticButton className="w-full">
              <button
                type="button"
                onClick={() => {
                  if (onSelectForContact) onSelectForContact(isEs ? 'Crear App / Web' : 'Build an App');
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,148,0.25)]"
              >
                <span>{isEs ? 'CUÉNTAME TU PROYECTO →' : 'START YOUR PROJECT →'}</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Track 2: Tech Teams / Hiring */}
        <div className="p-8 rounded-3xl bg-[#09090B]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
                  {isEs ? 'PARA EMPRESAS & EQUIPOS TECH' : 'FOR HIRING & TECH TEAMS'}
                </span>
                <h3 className="text-xl font-bold text-white font-sans">
                  {isEs ? 'Para Empresas / Equipos de Ingeniería' : 'Full-Stack & Multimedia Hire'}
                </h3>
              </div>
            </div>

            {/* 3 Short Core Bullets */}
            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[#00FF94] font-mono font-bold">✔</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Autonomía de Extremo a Extremo' : 'End-to-End Ownership'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Dominio completo desde la base de datos SQL hasta la interfaz a 120 FPS sin micro-gestión.' : 'Complete ownership from SQL relational models to 120 FPS UI interactions.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[#00FF94] font-mono font-bold">✔</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Experiencia Industrial & Alta Disponibilidad' : 'Industrial & Robust Backend'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Experiencia en Balterra SL con .NET Core, Angular, C++, Docker y sistemas de visión.' : 'Production experience at Balterra SL with .NET Core, Angular, C++, and Docker.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[#00FF94] font-mono font-bold">✔</span>
                <div>
                  <h4 className="font-bold text-white font-mono text-[11px] uppercase">
                    {isEs ? 'Mentalidad de Negocio & Eficiencia Cloud' : 'Product Discipline & Cloud Efficiency'}
                  </h4>
                  <p className="text-zinc-400 mt-0.5">
                    {isEs ? 'Foco en valor para el usuario, tiempos de carga mínimos y control del gasto en servidores.' : 'Focus on real user value, minimal core web vitals latency, and cloud cost control.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <MagneticButton className="w-full">
              <button
                type="button"
                onClick={() => {
                  if (onSelectForContact) onSelectForContact(isEs ? 'Oferta de Empleo' : 'Job Offer');
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl font-mono text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                <span>{isEs ? 'PROPUESTA DE EMPLEO / ENTREVISTA →' : 'DISCUSS A JOB OFFER →'}</span>
              </button>
            </MagneticButton>
          </div>
        </div>

      </div>

      {/* Discrete Bottom Note: Code licensing & transfer */}
      <div className="text-center">
        <p className="text-xs font-mono text-zinc-500">
          {isEs ? (
            <>¿Te interesa adquirir o licenciar el código de alguna de mis aplicaciones?{' '}
              <button
                type="button"
                onClick={() => {
                  if (onSelectForContact) onSelectForContact('Comprar Software');
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-zinc-400 hover:text-[#00FF94] underline transition-colors ml-1"
              >
                Consultar opciones de cesión o marca blanca →
              </button>
            </>
          ) : (
            <>Interested in licensing or buying source code from any of my apps?{' '}
              <button
                type="button"
                onClick={() => {
                  if (onSelectForContact) onSelectForContact('Software License');
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-zinc-400 hover:text-[#00FF94] underline transition-colors ml-1"
              >
                Inquire about IP buyout or white-label →
              </button>
            </>
          )}
        </p>
      </div>

    </section>
  );
}
