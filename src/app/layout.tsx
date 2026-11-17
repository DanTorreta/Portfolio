import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FOUNDER_PROFILE } from "@/data/projects";

export const metadata: Metadata = {
  title: `${FOUNDER_PROFILE.name} | Ingeniero de Software & Creador de Apps`,
  description: `${FOUNDER_PROFILE.title}. Portfolio de proyectos de ingeniería de software y SaaS listos para comercializar, desplegar o adquirir.`,
  keywords: [
    "Daniel Martínez Mira",
    "Ingeniero de Software",
    "Full-Stack Developer",
    "Balterra Ingeniería",
    "ASP.NET Core",
    "C#",
    "Java Spring Boot",
    "React Native",
    "Flutter",
    "TypeScript",
    "Next.js",
    "Python",
    "Vercel",
    "Portfolio Ingeniero",
    "AI Engineering",
    "Ollama",
    "Supabase"
  ],
  authors: [{ name: FOUNDER_PROFILE.name }],
  openGraph: {
    title: `${FOUNDER_PROFILE.name} | Ingeniero de Software & Apps de Negocio`,
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
