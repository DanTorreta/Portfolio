"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Target, Zap, Shield, ArrowRight, Check, DollarSign } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function MonetizationSection() {
  return (
    <section id="monetizacion" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#00FF94] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>BUSINESS VIABILITY // REVENUE &amp; COMMERCIAL ACQUISITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tightest uppercase leading-tight">
            Software Diseñado para Facturar y Ser Vendido
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl font-sans">
            A diferencia de demos académicas o plantillas conceptuales, cada una de mis aplicaciones está programada bajo métricas de negocio reales, validación de demanda y arquitectura lista para cobros en producción.
          </p>
        </div>

        <div className="shrink-0 text-xs font-mono px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-[#00FF94]">
          // 85%+ GROSS MARGIN ARCHITECTURE
        </div>
      </div>

      {/* 3 Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">1. Foco en Dolor Real (B2B &amp; B2C)</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Cada app ataca una ineficiencia medible: talleres que pierden horas en papeleo, profesionales con citas desiertas o industrias con averías imprevistas. Si hay dolor cuantificable, existe disposición de pago.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">2. Serverless &amp; Costes $0 en Reposo</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Construido en Vercel Edge, Next.js, Supabase y Docker con coste de servidores cercano a cero en reposo y escalado elástico inmediato al aumentar clientes.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#09090B]/80 border border-white/[0.08] backdrop-blur-md space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00FF94]">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">3. Arquitectura Lista para Facturar</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Integración de pasarelas de pago (Stripe Connect), gestión de suscripciones recurrentes (MRR), soporte multi-inquilino (multi-tenant con RLS) y políticas de seguridad preparadas para auditoría.
          </p>
        </div>
      </div>

      {/* Acquisition Options Box */}
      <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/[0.1] bg-[#09090B]/90 backdrop-blur-2xl">
        
        {/* Subtle corner marker */}
        <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-[#00FF94]">
          [ MODELOS_DE_TRAPASO // V2.0 ]
        </div>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono font-bold text-[#00FF94] tracking-widest uppercase block">
            OPORTUNIDADES DE COMPRA &amp; ACUERDOS COMERCIALES
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tightest uppercase leading-tight">
            ¿Interesado en adquirir el código o el negocio completo de alguna de las aplicaciones?
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            Como ingeniero y creador de producto, ofrezco total flexibilidad en acuerdos de traspaso: desde la adquisición del repositorio Git completo libre de royalties, hasta la compra de la solución SaaS llave en mano o consultoría técnica de implantación personalizada.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5">✔</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Venta de Código Fuente Completo</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Repositorio Git limpio, esquemas de base de datos y guías de despliegue.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5">✔</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Marca Blanca (White-Label)</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Personalización con tu propia marca, dominio y pasarela para revenderlo.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5">✔</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Cesión de Propiedad Intelectual</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Transferencia legal total del software para fondos o inversores de micro-SaaS.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[#00FF94] font-mono mt-0.5">✔</span>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Acompañamiento Técnico</p>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Soporte directo en la puesta en producción sobre tu infraestructura Vercel y Cloud.</p>
              </div>
            </div>
          </div>

          <MagneticButton>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold bg-[#00FF94] text-black hover:bg-[#5CFFB8] transition-all shadow-[0_0_25px_rgba(0,255,148,0.3)]"
            >
              <span>INICIAR CONVERSACIÓN DE ADQUISICIÓN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>

      </div>

    </section>
  );
}
