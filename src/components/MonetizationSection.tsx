import React from "react";
import Link from "next/link";
import { DollarSign, Rocket, CheckCircle, Shield, Briefcase, ArrowRight, Zap, Target } from "lucide-react";

export default function MonetizationSection() {
  return (
    <section id="monetizacion" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-3">
          <DollarSign className="w-3.5 h-3.5" />
          <span>Visión de Negocio & Comercialización</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Software Diseñado para Facturar y Ser Vendido
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          A diferencia de proyectos meramente académicos o demos simples, cada una de mis aplicaciones está concebida bajo métricas de negocio reales, validación de dolor en el cliente y arquitectura lista para facturar en producción.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-card rounded-2xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">1. Foco en Dolor Real (B2B & B2C)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Cada app ataca una ineficiencia medible: talleres que pierden horas en papeleo, profesionales con citas desiertas o industrias que sufren averías imprevistas. Si hay dolor, hay disposición a pagar.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">2. Infraestructura Serverless & Escalable</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Construido en Vercel, Next.js, Supabase y Docker con coste de servidores cercano a cero en reposo y escalado elástico cuando los clientes crecen. Márgenes brutos de software superiores al 85%.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">3. Listo para Cobrar</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Integración de pasarelas de pago (Stripe Connect), gestión de suscripciones recurrentes (MRR), soporte multi-inquilino (multi-tenant) y políticas de seguridad preparadas para auditoría.
          </p>
        </div>
      </div>

      {/* Sale / Acquisition Options Box */}
      <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-[#0d1627] to-[#090d16]">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
            Oportunidades de Compra & Traspaso
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            ¿Interesado en adquirir el código o el negocio completo de alguna de las apps?
          </h3>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Como ingeniero y creador de producto, estoy abierto a acuerdos comerciales flexibles: desde la compra del código fuente libre de royalties para integrarlo en tu empresa, hasta la adquisición del proyecto completo (SaaS llave en mano) o consultoría de implantación.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">Venta de Código Fuente Completo</p>
                <p className="text-[11px] text-slate-400">Entrega de repositorio Git limpio, documentación y guías de despliegue.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">Marca Blanca (White-Label)</p>
                <p className="text-[11px] text-slate-400">Personalización con tu propia marca, dominio y pasarela para revenderlo.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">Cesión de Propiedad Intelectual</p>
                <p className="text-[11px] text-slate-400">Transferencia legal total del software para inversores o fondos de micro-SaaS.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white">Soporte Técnico de Despliegue</p>
                <p className="text-[11px] text-slate-400">Acompañamiento en la puesta en marcha sobre tu propia cuenta de Vercel y Cloud.</p>
              </div>
            </div>
          </div>

          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Iniciar Conversación sobre un Proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
