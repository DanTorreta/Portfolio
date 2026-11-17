# 🚀 Portfolio de Ingeniería de Software & Apps Comerciales (Indie Maker)

Este portfolio ha sido diseñado específicamente para un **ingeniero de software y creador de producto (founder / indie hacker)** cuyo objetivo es construir, exponer y comercializar sus propias aplicaciones web, móviles y SaaS.

---

## 🎯 Características Principales

1. **Página Individual para Cada Proyecto (`/projects/[slug]`)**:
   - **¿De qué va la app?**: Visión general, propuesta de valor y pitch técnico.
   - **¿Qué problema resuelve?**: Explicación clara de la ineficiencia de mercado y puntos de dolor concretos.
   - **¿Para quién va dirigida?**: Público objetivo, buyer persona y oportunidad de mercado.
   - **Viabilidad Comercial y Monetización**: Modelo de precios (SaaS MRR, pago único, freemium), estimación de ingresos y estado de venta del código/negocio.
   - **Fotos y Galería de Pantallas**: Capturas de pantalla en alta resolución con descripción de cada vista.
   - **Enlaces Directos**: Botones a la aplicación desplegada en vivo, demo interactiva y repositorio de código.
   - **Stack Tecnológico y Arquitectura**: Desglose por lenguajes (TypeScript, Python, SQL, Dart, etc.), frameworks, base de datos, cloud y decisiones de arquitectura.
   - **Caja de Adquisición / Venta**: Llamada a la acción para compradores de software o licencias.

2. **Página Principal de Alto Impacto (`/`)**:
   - **Hero para Founders & Engineers**: Estadísticas clave, propuesta de valor y llamadas a la acción.
   - **Catálogo Filtrable con Buscador**: Filtrado instantáneo por categoría (SaaS B2B, IA, PWA, IoT, Gaming) o por estado ("Listos para Comercializar").
   - **Matriz de Lenguajes de Programación**: Sección dedicada a tus lenguajes y tecnologías clave, indicando en qué apps se utilizaron.
   - **Filosofía de Negocio & Opciones de Compra**: Explica cómo vendes tu software (código fuente, marca blanca, traspaso total).
   - **Formulario de Contacto Directo**: Formulario con selector de proyecto que abre tu correo listo para recibir ofertas.

3. **Optimizado para Vercel**:
   - Desarrollado sobre **Next.js (App Router)** con TypeScript y Tailwind CSS.
   - Generación Estática (SSG) de todas las rutas: tiempo de carga instantáneo (<100ms) y coste de servidor $0 en Vercel Hobby tier.

---

## 📁 Cómo Agregar o Modificar tus Proyectos

Toda la información del portfolio está centralizada de forma modular y tipada en un único archivo:
👉 [`src/data/projects.ts`](file:///c:/Users/danie/Documents/Repositorios/Portfolio/src/data/projects.ts)

Para añadir un nuevo proyecto, simplemente abre dicho archivo y añade un nuevo objeto al array `PROJECTS_DATA`:

```typescript
{
  id: "mi-nueva-app",
  slug: "mi-nueva-app",
  title: "Mi Nueva App SaaS",
  tagline: "Resumen impactante en una frase",
  shortDescription: "Descripción detallada del producto...",
  category: "SaaS B2B", // 'SaaS B2B' | 'Inteligencia Artificial' | 'PWA & Móvil' | etc.
  status: "Listo para Comercializar / Venta",
  featured: true,
  completionPercentage: 100,
  problemStatement: {
    summary: "¿Qué problema del mundo real soluciona?",
    painPoints: ["Punto 1", "Punto 2"]
  },
  solutionStatement: {
    summary: "¿Cómo lo resuelve tu software?",
    benefits: ["Beneficio 1", "Beneficio 2"]
  },
  targetAudience: {
    profile: "¿Quién compra o usa esta app?",
    userTypes: ["Tipo 1", "Tipo 2"],
    marketOpportunity: "Tamaño o potencial de mercado"
  },
  monetization: {
    isMonetizable: true,
    model: "Suscripción SaaS (MRR)",
    pricingStrategy: "49€/mes plan profesional",
    estimatedRevenue: "10.000€ MRR proyectado",
    commercialPotential: "Alta retención...",
    forSale: {
      available: true,
      type: "Código Fuente",
      contactNote: "Abierto a ofertas de compra."
    }
  },
  techStack: {
    languages: ["TypeScript", "Python"],
    frameworks: ["Next.js", "FastAPI"],
    databases: ["PostgreSQL"],
    cloudAndDevops: ["Vercel", "Docker"],
    architectureHighlights: ["Arquitectura serverless de alta disponibilidad."]
  },
  keyFeatures: [
    { title: "Función A", description: "Detalle de la función..." }
  ],
  screenshots: [
    {
      url: "https://...",
      title: "Captura de pantalla",
      description: "Detalle de lo que se ve en la captura",
      isCover: true
    }
  ],
  links: {
    liveUrl: "https://miapp.vercel.app",
    githubUrl: "https://github.com/..."
  }
}
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (comprobación de tipos y SSG)
npm run build

# Iniciar servidor de producción local
npm run start
```

---

## 🌐 Cómo Desplegar en Vercel en 2 Minutos

### Método 1: A través de GitHub (Recomendado)
1. Inicializa git y sube este repositorio a tu cuenta de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio listo para despliegue"
   git remote add origin https://github.com/TU_USUARIO/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
3. Haz clic en **"Add New..." -> "Project"**.
4. Selecciona tu repositorio `portfolio` y pulsa **"Deploy"**.
5. ¡Listo! Vercel detectará automáticamente Next.js y compilará tu web con dominio SSL gratuito `tu-portfolio.vercel.app` y despliegues automáticos en cada push.

### Método 2: Vercel CLI
```bash
npx vercel
```
Sigue las instrucciones en la consola para vincularlo a tu cuenta y proyecto.
