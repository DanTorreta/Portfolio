import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daniel | Ingeniero de Software & Creador de Apps & SaaS",
  description: "Portfolio de ingeniería de software con proyectos de negocio reales: SaaS B2B, Inteligencia Artificial, PWA y soluciones listas para desplegar, monetizar o adquirir.",
  keywords: [
    "Ingeniero de Software",
    "Portfolio",
    "Indie Maker",
    "SaaS",
    "TypeScript",
    "Next.js",
    "Python",
    "Vercel",
    "Desarrollo Web",
    "Software Comercial"
  ],
  authors: [{ name: "Daniel" }],
  openGraph: {
    title: "Daniel | Ingeniero de Software & Creador de Apps & SaaS",
    description: "Catálogo de proyectos de software con análisis de negocio, monetización, arquitectura técnica y demos en vivo.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
