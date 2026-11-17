import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "@/components/AppProviders";
import Footer from "@/components/Footer";
import { FOUNDER_PROFILE } from "@/data/projects";

export const metadata: Metadata = {
  title: `${FOUNDER_PROFILE.name} // Software Engineer & Systems Architect`,
  description: `${FOUNDER_PROFILE.title}. Portfolio de proyectos de ingeniería de software, sistemas embebidos, flujos agénticos con IA y aplicaciones de negocio listas para monetizar o adquirir.`,
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
    "AI Engineering",
    "Ollama",
    "Supabase"
  ],
  authors: [{ name: FOUNDER_PROFILE.name }],
  openGraph: {
    title: `${FOUNDER_PROFILE.name} // Software Engineer & Product Architect`,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-zinc-300 font-sans antialiased selection:bg-[#00FF94] selection:text-black">
        <AppProviders>
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
