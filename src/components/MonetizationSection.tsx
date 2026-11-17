'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Target, Zap, Shield, ArrowRight, Server, Layers, Cpu } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface MonetizationSectionProps {
  onSelectForContact?: (topic: string) => void;
}

export default function MonetizationSection({ onSelectForContact }: MonetizationSectionProps) {
  return (
    <section id="filosofia-producto" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>PRODUCT-MINDED ENGINEERING // CLOUD EFFICIENCY &amp; HIGH ROI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight font-sans">
            Ingeniería Orientada a Producto &amp; Eficiencia Cloud
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            Un buen ingeniero no solo escribe código limpio: entiende el modelo de negocio, optimiza el coste de infraestructura a $0 en reposo y construye sistemas preparados para generar valor desde el día uno.
          </p>
        </div>

        <div className="shrink-0 text-xs font-mono px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#00FF94]">
          // ZERO-WASTE CLOUD ARCHITECTURE
        </div>
      </div>

      {/* 3 Pillars for CTOs & Tech Leads */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight font-sans">1. Coste $0 en Reposo (Serverless &amp; Edge)</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Despliegues en Vercel Edge, microservicios serverless y bases de datos con escalado a cero (Neon/Supabase). Se elimina el desperdicio de instancias ociosas y se reduce la factura cloud de 10x a 50x durante validación.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight font-sans">2. Multi-Tenancy &amp; Aislamiento Estricto</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Políticas de Row Level Security (RLS) en PostgreSQL y particionado de datos para que múltiples organizaciones convivan en un mismo clúster con seguridad matemática, facilitando modelos SaaS B2B sin duplicar infraestructura.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight font-sans">3. Resiliencia &amp; Observabilidad</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Pipelines asíncronos desacoplados (colas de mensajes, background jobs), telemetría de rendimiento y diseño de APIs idempotentes para soportar transacciones financieras y pagos sin inconsistencias de estado.
          </p>
        </div>
      </div>

      {/* Collaboration & Acquisition Matrix */}
      <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/[0.1] bg-[#09090B]/90 backdrop-blur-2xl">
        
        <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-[#00FF94]">
          [ MODOS_DE_CONTRATACIÓN_Y_ACUERDOS ]
        </div>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono font-bold text-[#00FF94] tracking-widest uppercase block">
            MODALIDADES DE INTEGRACIÓN
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tightest uppercase leading-tight font-sans">
            ¿Buscas incorporar este perfil a tu equipo o licenciar alguna solución?
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            Mi prioridad principal es sumarme como <strong>Senior / Mid-Senior Software Engineer o Tech Lead de Producto</strong> a una compañía con retos técnicos ambiciosos. Al mismo tiempo, todas mis aplicaciones están estructuradas con propiedad intelectual limpia para permitir transferencias de código o consultorías técnicas si una empresa desea explotarlas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5 font-bold">01</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Contratación Full-Time / Lead</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Integración inmediata como Staff / Senior Engineer aportando visión integral de producto y arquitectura.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5 font-bold">02</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Traspaso de Repositorio &amp; Código</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Venta completa de la base de código de cualquiera de las 7 aplicaciones con documentación de despliegue.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5 font-bold">03</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Licencia White-Label</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Adaptación de un producto existente con tu branding y pasarela propia para distribución comercial.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5 font-bold">04</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Consultoría de Arquitectura Cloud</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Auditoría de rendimiento web, reducción de costes cloud e implementación de sistemas interactivos.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton>
              <button
                onClick={() => {
                  if (onSelectForContact) {
                    onSelectForContact('Propuesta de Contratación / Empleo');
                  }
                  const el = document.getElementById('contacto');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all shadow-[0_0_25px_rgba(0,255,148,0.3)]"
              >
                <span>CONTACTAR PARA OFERTA O ENTREVISTA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>

            <button
              onClick={() => {
                if (onSelectForContact) {
                  onSelectForContact('Adquisición de Software / Licencia');
                }
                const el = document.getElementById('contacto');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>CONSULTAR POR ADQUISICIÓN DE CÓDIGO →</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
