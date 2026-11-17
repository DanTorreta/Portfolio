export type ProjectCategory = 
  | 'SaaS B2B'
  | 'Inteligencia Artificial'
  | 'PWA & Móvil'
  | 'Herramientas & DevTools'
  | 'IoT & Industrial'
  | 'Gaming & Interactivo';

export type ProjectStatus = 
  | 'En Producción (Live)'
  | 'Listo para Comercializar / Venta'
  | 'Beta Privada'
  | 'En Desarrollo Activo';

export type MonetizationModel = 
  | 'Suscripción SaaS (MRR)'
  | 'Licencia de Software / Pago Único'
  | 'Freemium + Addons'
  | 'Comisión por Transacción'
  | 'Venta B2B Directa / Enterprise';

export interface TechItem {
  name: string;
  category: 'Lenguaje' | 'Framework' | 'Base de Datos' | 'Cloud / Infra' | 'IA / Machine Learning' | 'Herramienta';
  icon?: string;
  color?: string;
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  description: string;
  isCover?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  completionPercentage: number;
  
  // Explicación de producto
  problemStatement: {
    summary: string;
    painPoints: string[];
  };
  solutionStatement: {
    summary: string;
    benefits: string[];
  };
  
  // Público objetivo y mercado
  targetAudience: {
    profile: string;
    userTypes: string[];
    marketOpportunity: string;
  };
  
  // Viabilidad comercial y monetización
  monetization: {
    isMonetizable: boolean;
    model: MonetizationModel;
    pricingStrategy: string;
    estimatedRevenue?: string;
    commercialPotential: string;
    forSale?: {
      available: boolean;
      type: 'Código Fuente' | 'SaaS Completo con Clientes' | 'Licencia Exclusiva' | 'Consultoría / Implantación';
      contactNote: string;
    };
  };
  
  // Tecnologías y lenguajes
  techStack: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    cloudAndDevops: string[];
    architectureHighlights: string[];
  };
  
  // Funcionalidades clave
  keyFeatures: {
    title: string;
    description: string;
  }[];
  
  // Fotos y multimedia
  screenshots: ProjectScreenshot[];
  
  // Métricas destacadas
  metrics?: ProjectMetric[];
  
  // Enlaces directos
  links: {
    liveUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
  };
}
