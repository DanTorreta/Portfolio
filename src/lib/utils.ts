import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategoryBadgeColor(category: string): string {
  switch (category) {
    case 'SaaS B2B':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'Inteligencia Artificial':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'PWA & Móvil':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'IoT & Industrial':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'Gaming & Interactivo':
      return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    default:
      return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
}

export function formatStatusBadgeColor(status: string): string {
  switch (status) {
    case 'En Producción (Live)':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'Listo para Comercializar / Venta':
      return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
    case 'Beta Privada':
      return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    case 'En Desarrollo Activo':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    default:
      return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  }
}
