import { Project } from "../types/project";

export interface TechSkillItem {
  name: string;
  level: string;
  badgeColor: string;
  description: string;
  featuredIn?: string[];
}

export interface TechSkillCategory {
  category: string;
  skills: TechSkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  stack: string[];
  responsibilities: string[];
}

export const FOUNDER_PROFILE = {
  name: "Daniel Martínez Mira",
  shortName: "Daniel",
  title: "Ingeniero de Software • Full-Stack Developer • AI Engineering",
  location: "Paterna, Comunidad Valenciana, España",
  phone: "(+34) 644-877-890",
  email: "danielmartinezmira02@gmail.com",
  photoUrl: "/images/daniel.png",
  cvUrl: "/cv-daniel-martinez-mira.pdf",
  bio: "Ingeniero de Software y Desarrollador Full-Stack con más de 2 años de experiencia profesional especializada en el ciclo completo de vida del software (SDLC). Especialista en crear arquitecturas cloud escalables, aplicaciones SaaS listas para monetizar, sistemas embebidos de alta precisión y flujos agénticos con Inteligencia Artificial.",
  education: {
    degree: "Grado en Ingeniería Informática (Mención en Programación Multimedia)",
    institution: "Universitat de València",
    period: "Septiembre 2021 – Junio 2026",
  },
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Valenciano / Catalán", level: "Avanzado" },
    { name: "Inglés", level: "B2+ (Competencia profesional)" },
  ],
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  metrics: [
    { label: "Experiencia Profesional", value: "+2 Años" },
    { label: "Apps y SaaS Propios", value: "7 Proyectos" },
    { label: "Lenguajes & Stacks", value: "10+ Tecnologías" },
    { label: "Enfoque de Negocio", value: "100% Monetizable" },
  ],
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Ingeniero de Software Full-Stack & Embebidos",
    company: "Balterra Ingeniería SL",
    period: "Abril 2024 – Abril 2026",
    type: "Jornada completa",
    stack: [
      "ASP.NET Core",
      "C#",
      "Java Spring Boot",
      "React Native",
      "C/C++",
      "SQL Server",
      "Oracle PL/SQL",
      "Hardware Industrial",
      "Git",
      "Scrum",
    ],
    responsibilities: [
      "Diseño, desarrollo y mantenimiento evolutivo de aplicaciones web corporativas y APIs RESTful/SOAP utilizando ASP.NET Core (C#) y Java (Spring Boot/MVC), aplicando Clean Architecture y arquitectura hexagonal.",
      "Programación, calibración e integración de lectores ópticos y periféricos industriales para escaneo de códigos QR y barras en sistemas de trazabilidad auditables en tiempo real.",
      "Creación y despliegue de aplicaciones móviles multiplataforma en React Native integradas con hardware de escaneo.",
      "Modelado relacional y optimización avanzada de consultas (query tuning, índices y planes de ejecución) en SQL Server y Oracle Database 19c.",
      "Programación de firmware y componentes a bajo nivel en C/C++ sobre microcontroladores y buses industriales (SPI, I2C, UART, CAN, Ethernet).",
      "Aseguramiento de calidad y suites de testing automatizado (xUnit, JUnit, Vitest) asistidos por flujos generativos.",
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "workshop-os-saas",
    slug: "taller-gestion-saas",
    title: "Workshop OS - Plataforma B2B & PWA para Talleres (Proyecto Privado)",
    tagline: "Software empresarial B2B bajo acceso restringido para control operativo, fichaje laboral legal y facturación.",
    shortDescription: "Aplicación web y PWA full-stack desarrollada para digitalización de talleres y PYMEs técnicas. Incluye fichaje laboral geolocalizado, órdenes de trabajo, portal de citas y facturación automatizada. Proyecto en fase privada con acceso restringido.",
    category: "SaaS B2B",
    status: "Beta Privada",
    featured: true,
    completionPercentage: 95,
    problemStatement: {
      summary: "Las PYMEs y talleres mecánicos sufren pérdidas del 30% de su tiempo productivo por el uso de libretas de papel, softwares lentos de escritorio y falta de integración legal en el control horario de empleados.",
      painPoints: [
        "Incumplimiento de la normativa laboral de registro diario de jornada y horas extra.",
        "Desconexión entre presupuestos, piezas del taller y la factura final del cliente.",
        "Dificultad de los clientes para reservar citas sin colapsar el teléfono del negocio.",
        "Interfaces anticuadas que los mecánicos u operarios no pueden usar desde el móvil o tablet."
      ]
    },
    solutionStatement: {
      summary: "Esta plataforma resuelve el ciclo operativo completo mediante una PWA moderna instalable en cualquier dispositivo, sincronización en tiempo real y asistente con IA para consultas rápidas.",
      benefits: [
        "Fichaje legal con geolocalización y generación de informes oficiales con 1 clic.",
        "Control exhaustivo de órdenes de trabajo con historial de vehículos y repuestos.",
        "Portal de reservas online con confirmación automática vía email/WhatsApp.",
        "Facturación integrada con exportación de presupuestos a PDF al instante."
      ]
    },
    targetAudience: {
      profile: "Talleres mecánicos independientes, empresas de mantenimiento técnico y pequeñas empresas de servicios.",
      userTypes: [
        "Gerentes que necesitan trazabilidad financiera y cumplimiento legal.",
        "Jefes de equipo que asignan tareas y supervisan tiempos de ejecución.",
        "Operarios que actualizan el estado de cada trabajo desde su móvil.",
        "Clientes finales que reservan cita y consultan el estado de su vehículo."
      ],
      marketOpportunity: "Más de 40.000 talleres solo en España y cientos de miles de PYMEs que requieren modernización urgente ante normativas de facturación y control horario."
    },
    monetization: {
      isMonetizable: true,
      model: "Suscripción SaaS (MRR)",
      pricingStrategy: "Planes por suscripción: Básico (49€/mes), Profesional (99€/mes) y Flotas (189€/mes), o venta de licencia con implantación personalizada.",
      estimatedRevenue: "15.000€ - 30.000€ MRR con 200-300 talleres activos.",
      commercialPotential: "Producto con ratio de retención muy alto al convertirse en el núcleo operativo diario de la empresa.",
      forSale: {
        available: true,
        type: "SaaS Completo con Clientes",
        contactNote: "Abierto a venta del código fuente exclusivo, traspaso del proyecto o búsqueda de inversor/socio comercial."
      }
    },
    techStack: {
      languages: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5/CSS3"],
      frameworks: ["Next.js (App Router)", "React 18", "Tailwind CSS"],
      databases: ["PostgreSQL (Supabase)", "Redis Cache"],
      cloudAndDevops: ["Vercel Edge", "Supabase Auth, Storage & Realtime", "Row Level Security (RLS)"],
      architectureHighlights: [
        "Arquitectura PWA offline-ready con Service Workers para entornos de taller con baja conectividad.",
        "Seguridad de base de datos con políticas RLS (Row Level Security) para aislamiento multi-tenant estricto.",
        "Generador de PDFs en el Edge para facturas y órdenes de reparación instantáneas.",
        "Asistente conversacional con IA integrado en producción para consultas de catálogo y estado."
      ]
    },
    keyFeatures: [
      {
        title: "Control Horario Legal & Fichaje",
        description: "Registro de entradas, salidas, descansos y cálculo automático de horas extraordinarias conforme a ley."
      },
      {
        title: "Órdenes de Trabajo y Taller",
        description: "Asignación de mecánicos, repuestos consumidos, cronómetro de mano de obra e historial de matrículas."
      },
      {
        title: "Portal de Citas y Clientes",
        description: "Calendario self-service con alertas automáticas y recepción de clientes sin colas."
      },
      {
        title: "Facturación y Presupuestos",
        description: "Conversión de órdenes de trabajo en facturas fiscales con cálculo automático de IVA y retenciones."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        title: "Dashboard Central de Control",
        description: "Panel principal con métricas de taller, facturación diaria y operarios en activo.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
        title: "Módulo de Reparaciones y Vehículos",
        description: "Gestión técnica de piezas, diagnosis y tiempos dedicados por cada mecánico."
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "Módulo Financiero y Facturación",
        description: "Generación de remesas, balances mensuales e informes contables exportables."
      }
    ],
    metrics: [
      { label: "Tiempo de Respuesta", value: "<100ms" },
      { label: "Disponibilidad", value: "99.9%" },
      { label: "Ahorro de Gestión", value: "12h/semana por taller" }
    ],
    links: {
      // Proyecto en desarrollo privado: URLs omitidas para proteger confidencialidad
    },
    architecture: {
      topology: [
        { id: "client", label: "PWA Offline-First", role: "Frontend & Local Cache", technology: "Next.js 14 / Workbox", detail: "Service Worker con cache runtime para fichajes de operarios en fosos o talleres sin cobertura 4G/5G.", status: "active" },
        { id: "edge", label: "Vercel Edge Gateway", role: "Routing & Auth Guard", technology: "Edge Middleware", detail: "Verificación de tokens JWT y enrutamiento dinámico según el subdominio del taller (multi-tenant tenant isolation).", status: "cached" },
        { id: "api", label: "Edge Functions API", role: "Business Services", technology: "Next.js Server Actions", detail: "Procesamiento de órdenes de reparación, cálculo de márgenes y generación PDF de presupuestos en streaming.", status: "active" },
        { id: "db", label: "PostgreSQL Multi-Tenant", role: "Primary Datastore", technology: "Supabase + RLS", detail: "Aislamiento a nivel de fila por empresa (organization_id). Cero riesgo de fuga de datos entre talleres clientes.", status: "cached" },
        { id: "workers", label: "WhatsApp & Notificaciones", role: "Event Dispatcher", technology: "Edge Cron & Webhooks", detail: "Disparo automático de recordatorios de cita previa y alertas de inspección técnica vencida.", status: "worker" }
      ],
      dataFlow: [
        { from: "client", to: "edge", protocol: "HTTPS / TLS 1.3" },
        { from: "edge", to: "api", protocol: "Internal RPC" },
        { from: "api", to: "db", protocol: "Pooled Postgres / TCP" },
        { from: "api", to: "workers", protocol: "Async Event Webhooks" }
      ],
      tradeoffs: [
        {
          choice: "Next.js Server Actions + PostgreSQL RLS vs Backend dedicado en Express",
          why: "Elimina la necesidad de mantener un servidor Node.js 24/7. Coste $0 de infraestructura en reposo y tipado end-to-end de base de datos a interfaz.",
          discardedAlternative: "Servidor VPS con Express y base de datos local que requería parches manuales de seguridad y coste de hosting fijo de 40€/mes.",
          costLatencyNotes: "p95 de lectura: 42ms. Coste operativo: $0/mes en fase MVP hasta superar los 50.000 usuarios activos."
        },
        {
          choice: "Service Workers con IndexedDB para fichaje offline vs Conexión síncrona obligatoria",
          why: "Los mecánicos en talleres subterráneos sufren caídas de red frecuentes. Los fichajes se almacenan localmente y se sincronizan con UUID idempotente al recuperar señal.",
          discardedAlternative: "Bloqueo de la interfaz ante pérdida de conexión que provocaba registros duplicados y quejas de operarios.",
          costLatencyNotes: "Sincronización en segundo plano con backoff exponencial. Cero pérdida de registros laborales."
        }
      ],
      securityAndHardening: [
        "Row Level Security (RLS) habilitada en el 100% de las tablas relacionales para aislamiento multi-tenant.",
        "Cookies httpOnly con directivas SameSite=Strict y protección CSRF nativa en todas las mutaciones.",
        "Validación estricta de esquemas Zod en cliente y servidor para evitar inyección de datos arbitrarios.",
        "Exportación y backup diario automático de base de datos cifrado en reposo con AES-256."
      ]
    }
  },
  {
    id: "fidelizacion-comercio",
    slug: "fidelizacion-comercios",
    title: "Plataforma de Fidelización & Control Horario para Comercios",
    tagline: "Ecosistema móvil y web multiplataforma (Flutter + Next.js) con programas de puntos y registro presencial.",
    shortDescription: "Ecosistema completo formado por una app móvil cliente desarrollada en Flutter con Supabase y un panel de administración web en Next.js con TypeScript, complementado con control horario para trabajadores en tiendas físicas.",
    category: "PWA & Móvil",
    status: "Listo para Comercializar / Venta",
    featured: true,
    completionPercentage: 92,
    problemStatement: {
      summary: "Los comercios locales y cadenas minoristas pierden clientes recurrentes ante las grandes superficies por carecer de sistemas de fidelización digitales modernos y fáciles de usar.",
      painPoints: [
        "Tarjetas de plástico o cartón selladas que los clientes pierden constantemente.",
        "Falta de datos sobre el comportamiento de compra y frecuencia de visitas de los clientes.",
        "Ausencia de un canal de comunicación directo para enviar promociones personalizadas.",
        "Gestión fragmentada entre el programa de clientes y el control horario del personal de tienda."
      ]
    },
    solutionStatement: {
      summary: "Una app móvil ágil para el cliente final que acumula puntos mediante escaneo QR y un panel SaaS centralizado donde el comerciante gestiona promociones y horarios de empleados.",
      benefits: [
        "Aumento del 25% en recurrencia de compra mediante recompensas gamificadas.",
        "Escaneo instantáneo de códigos QR en caja con validación en milisegundos.",
        "Panel administrativo en tiempo real con analítica de ventas y fidelización.",
        "Módulo de control horario integrado para los empleados de la tienda física."
      ]
    },
    targetAudience: {
      profile: "Comercios minoristas, franquicias de restauración, cafeterías, tiendas de ropa y clínicas estéticas.",
      userTypes: [
        "Clientes finales que disfrutan de descuentos y acumulan puntos en su smartphone.",
        "Comerciantes y gerentes que supervisan la efectividad de sus campañas.",
        "Empleados de tienda que validan compras y registran su jornada laboral."
      ],
      marketOpportunity: "Mercado masivo de 'Retail Loyalty' que busca digitalizar el comercio de proximidad con soluciones accesibles."
    },
    monetization: {
      isMonetizable: true,
      model: "Suscripción SaaS (MRR)",
      pricingStrategy: "Cuota de 39€ a 89€/mes por comercio, o venta de licencia como solución de marca blanca (white-label) para franquicias.",
      estimatedRevenue: "12.000€/mes con una red de 200 comercios adheridos.",
      commercialPotential: "Fácil venta a asociaciones comerciales locales y cooperativas de tiendas.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Código completo de la app Flutter y del panel Next.js listo para desplegar con marca propia."
      }
    },
    techStack: {
      languages: ["Dart", "TypeScript", "SQL"],
      frameworks: ["Flutter", "Next.js", "React", "Tailwind CSS"],
      databases: ["PostgreSQL (Supabase)", "Firebase Cloud Firestore"],
      cloudAndDevops: ["Vercel", "Supabase Realtime", "Firebase Auth & Cloud Messaging"],
      architectureHighlights: [
        "App móvil Flutter multiplataforma compilada nativamente para Android e iOS.",
        "Notificaciones Push dirigidas con Firebase Cloud Messaging según proximidad.",
        "Panel de administración web ultra-rápido en Next.js con Server Components."
      ]
    },
    keyFeatures: [
      {
        title: "Monedero Digital de Puntos",
        description: "Acumulación y canje automático de saldo mediante escaneo QR dinámico protegido contra capturas."
      },
      {
        title: "Campañas y Promociones Push",
        description: "Envío segmentado de cupones de cumpleaños y descuentos especiales a los clientes más fieles."
      },
      {
        title: "Fichaje de Empleados en Tienda",
        description: "Registro de presencia y descansos con validación de geofencing en el local comercial."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
        title: "App Móvil de Fidelización (Cliente)",
        description: "Interfaz del monedero digital con tarjeta virtual de puntos y promociones activas.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
        title: "Panel Web Administrativo",
        description: "Configuración de catálogos de premios y visualización de ventas generadas por cupones."
      }
    ],
    metrics: [
      { label: "Velocidad de Escaneo", value: "<150ms" },
      { label: "Incremento en Recurrencia", value: "+25%" },
      { label: "Retención de Clientes", value: "82%" }
    ],
    links: {
      liveUrl: "https://fidelizacion-demo.vercel.app",
      githubUrl: "https://github.com/dani/fidelizacion-comercios"
    }
  },
  {
    id: "recomendador-multimedia",
    slug: "recomendador-multimedia",
    title: "Plataforma de Recomendación Multimedia Inteligente (TFG)",
    tagline: "Motor de filtrado colaborativo y recomendación por análisis de contenido con arquitectura desacoplada.",
    shortDescription: "Trabajo Fin de Grado en Ingeniería Informática: plataforma web completa con un motor de recomendación inteligente desacoplado. Combina algoritmos de filtrado colaborativo en Python con persistencia relacional en PostgreSQL y una interfaz de usuario reactiva.",
    category: "Inteligencia Artificial",
    status: "En Producción (Live)",
    featured: true,
    completionPercentage: 100,
    problemStatement: {
      summary: "Los catálogos multimedia masivos sufren del problema de 'parálisis por análisis': el usuario pasa más de 20 minutos buscando qué ver o consumir antes de decidirse.",
      painPoints: [
        "Recomendaciones genéricas basadas únicamente en popularidad global y no en afinidad personal.",
        "Problema de 'Cold Start' (arranque en frío) cuando un usuario nuevo entra al sistema.",
        "Sistemas monolíticos lentos que no procesan el feedback social de los usuarios en tiempo real."
      ]
    },
    solutionStatement: {
      summary: "Implementación de un modelo híbrido que fusiona filtrado colaborativo (matriz de factorización) y análisis de atributos de contenido en Python, servido a través de una API asíncrona de alta velocidad.",
      benefits: [
        "Recomendaciones hiperpersonalizadas con precisión superior al 92%.",
        "Módulos sociales desacoplados para compartir listas y valoraciones entre usuarios.",
        "Tiempo de inferencia y cálculo de afinidad menor a 80ms por consulta.",
        "Arquitectura modular escalable con frontend independiente en React."
      ]
    },
    targetAudience: {
      profile: "Plataformas de streaming, distribuidoras de contenido digital, bibliotecas de medios y proyectos educativos.",
      userTypes: [
        "Usuarios finales que buscan recomendaciones precisas y listas personalizadas.",
        "Administradores de plataformas que quieren incrementar el tiempo de permanencia en su servicio."
      ],
      marketOpportunity: "La personalización es el factor número uno de retención en plataformas digitales multimedia."
    },
    monetization: {
      isMonetizable: true,
      model: "Licencia de Software / Pago Único",
      pricingStrategy: "Venta del motor como API / Microservicio plug-and-play para empresas de contenido o licencia de software completa.",
      estimatedRevenue: "Contratos de integración técnica (2.500€ - 8.000€ por implantación).",
      commercialPotential: "Motor transferible a e-commerce, música, vídeo bajo demanda o plataformas de aprendizaje.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Código completo del motor de recomendación en Python y del cliente web en React con documentación técnica académica."
      }
    },
    techStack: {
      languages: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
      frameworks: ["React", "FastAPI / Flask", "Tailwind CSS", "NumPy / Pandas / Scikit-Learn"],
      databases: ["PostgreSQL", "Redis"],
      cloudAndDevops: ["Docker", "Vercel", "GitHub Actions"],
      architectureHighlights: [
        "Algoritmos de filtrado colaborativo con cálculo vectorial de similitud coseno.",
        "Desacoplamiento total entre motor analítico (Python) y capa de presentación (React).",
        "Persistencia normalizada en PostgreSQL con índices optimizados para lecturas concurrentes."
      ]
    },
    keyFeatures: [
      {
        title: "Motor Híbrido de Recomendación",
        description: "Ponderación en tiempo real entre gustos de usuarios similares y metadatos de los ítems."
      },
      {
        title: "Funcionalidades Sociales Desacopladas",
        description: "Perfiles públicos, listas colaborativas, comentarios y seguimiento de amigos."
      },
      {
        title: "Panel Analítico de Métricas",
        description: "Monitoreo del CTR de recomendaciones y matriz de calor de preferencias de la comunidad."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        title: "Feed de Recomendaciones Inteligentes",
        description: "Parrilla adaptativa con porcentaje de afinidad calculado dinámicamente para cada usuario.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "Explorador de Contenido y Filtrado",
        description: "Búsqueda semántica con filtrado por categorías, géneros y valoraciones ponderadas."
      }
    ],
    metrics: [
      { label: "Calificación Académica", value: "Sobresaliente" },
      { label: "Latencia de Recomendación", value: "75ms" },
      { label: "Precisión del Modelo", value: "92.4%" }
    ],
    links: {
      demoUrl: "https://recomendador-demo.vercel.app",
      githubUrl: "https://github.com/dani/tfg-recomendador-multimedia"
    }
  },
  {
    id: "red-social-musical",
    slug: "red-social-musical",
    title: "SoundSpace - Red Social & Colaboración Musical en Tiempo Real",
    tagline: "App móvil para músicos y creadores con streaming de audio de baja latencia y perfiles colaborativos.",
    shortDescription: "Aplicación móvil multiplataforma desarrollada en Flutter con Supabase orientada a la interacción social entre productores, compositores e intérpretes. Permite compartir pistas de audio, maquetas privadas y co-crear música sin lag.",
    category: "PWA & Móvil",
    status: "Listo para Comercializar / Venta",
    featured: false,
    completionPercentage: 88,
    problemStatement: {
      summary: "Los músicos independientes dependen de aplicaciones de mensajería (WhatsApp o Drive) que comprimen el audio y dispersan las versiones de sus maquetas y proyectos.",
      painPoints: [
        "Pérdida de calidad acústica al compartir archivos WAV/FLAC por mensajería habitual.",
        "Falta de protección de derechos de autor y trazabilidad de versiones colaborativas.",
        "Dificultad para encontrar colaboradores musicales afines por género, instrumento o ciudad."
      ]
    },
    solutionStatement: {
      summary: "SoundSpace ofrece una experiencia fluida con reproductor de alta fidelidad, almacenamiento de pistas en Supabase Storage, perfiles artísticos verificados y canales de feedback con marcas de tiempo.",
      benefits: [
        "Streaming de audio sin pérdidas con reproductor persistente en segundo plano.",
        "Comentarios situados exactamente sobre la forma de onda del tema (waveform).",
        "Autenticación segura y permisos de escucha privada para material inédito.",
        "Experiencia nativa ultra-fluida a 60fps construida con Flutter."
      ]
    },
    targetAudience: {
      profile: "Músicos independientes, productores, sellos discográficos emergentes y comunidades de creadores sonoros.",
      userTypes: [
        "Productores que buscan vocalistas o instrumentistas para sus producciones.",
        "Compositores que muestran maquetas a clientes o discográficas con acceso controlado.",
        "Fans y oyentes que desean descubrir música antes de que llegue a Spotify."
      ],
      marketOpportunity: "La industria de la música independiente es el segmento de mayor crecimiento en el sector audiovisual digital."
    },
    monetization: {
      isMonetizable: true,
      model: "Freemium + Addons",
      pricingStrategy: "Cuenta básica gratuita; Plan PRO para artistas a 9.99€/mes (almacenamiento ilimitado en alta fidelidad y analíticas de reproducción).",
      estimatedRevenue: "Gran viralidad en nicho musical (1.000 artistas PRO = 10.000€/mes).",
      commercialPotential: "Interés para academias de música, sellos independientes o empresas de streaming.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Repositorio de Flutter y backend en Supabase preparado para su comercialización."
      }
    },
    techStack: {
      languages: ["Dart", "SQL", "TypeScript"],
      frameworks: ["Flutter", "Supabase Client", "Tailwind CSS (Admin)"],
      databases: ["PostgreSQL (Supabase)", "Supabase Storage"],
      cloudAndDevops: ["Supabase Cloud", "Vercel (Panel Admin)", "GitHub Actions"],
      architectureHighlights: [
        "Decodificación y renderizado de forma de onda (waveform) en tiempo real en dispositivo.",
        "Sincronización multi-dispositivo con bajas latencias a través de Supabase Realtime.",
        "Gestión de estado reactiva y desacoplada mediante patrones BLoC / Provider."
      ]
    },
    keyFeatures: [
      {
        title: "Reproductor con Waveform Interactivo",
        description: "Visualización gráfica de la pista y navegación táctil rápida a puntos clave de la canción."
      },
      {
        title: "Marcas de Tiempo en Comentarios",
        description: "Anotaciones de feedback técnico sobre el segundo exacto de la pista musical."
      },
      {
        title: "Colaboraciones y Créditos",
        description: "Fichas de proyecto con reparto de autoría y descarga de stems o pistas aisladas."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        title: "Reproductor y Perfil Artístico",
        description: "Interfaz del reproductor con onda de audio, metadatos y controles de reproducción.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Rendimiento", value: "60 FPS Nativos" },
      { label: "Calidad de Audio", value: "24-bit / 48kHz" },
      { label: "Latencia de Carga", value: "<200ms" }
    ],
    links: {
      demoUrl: "https://soundspace-demo.vercel.app",
      githubUrl: "https://github.com/dani/soundspace-app"
    }
  },
  {
    id: "suite-industrial",
    slug: "suite-industrial-trazabilidad",
    title: "Suite B2B de Trazabilidad & Alineamiento Industrial",
    tagline: "Arquitectura robusta en C#, ASP.NET Core y C/C++ para captura de datos con escáneres ópticos y buses de campo.",
    shortDescription: "Solución de ingeniería desarrollada bajo estándares de Clean Architecture y principios SOLID. Integra lectores ópticos de códigos QR/barras, bases de datos empresariales (SQL Server, Oracle 19c) y sistemas embebidos en C/C++ para trazabilidad auditable en tiempo real.",
    category: "IoT & Industrial",
    status: "Listo para Comercializar / Venta",
    featured: true,
    completionPercentage: 90,
    problemStatement: {
      summary: "Los entornos de producción industrial sufren errores humanos críticos al registrar piezas manualmente o al utilizar sistemas no auditables que provocan devoluciones y pérdidas millonarias.",
      painPoints: [
        "Falta de sincronización entre el escaneo físico en la línea de montaje y el ERP corporativo.",
        "Altas latencias en bases de datos que ralentizan las cadenas de empaquetado.",
        "Dificultad para integrar escáneres ópticos heterogéneos y microcontroladores bajo protocolos estándar."
      ]
    },
    solutionStatement: {
      summary: "Sistema de trazabilidad 'end-to-end' con APIs de alto rendimiento en ASP.NET Core, procedimientos almacenados optimizados y firmware en C/C++ que garantizan registro instantáneo con trazabilidad total.",
      benefits: [
        "Eliminación total del error de registro manual mediante lectura óptica industrial.",
        "Reducción drástica del tiempo de transacción en base de datos mediante query tuning avanzado.",
        "Compatibilidad con buses industriales (Ethernet, CAN, UART, SPI, I2C).",
        "Cuadros de mando web y apps móviles en React Native para supervisión en planta."
      ]
    },
    targetAudience: {
      profile: "Plantas de fabricación industrial, empresas logísticas de distribución y cadenas de ensamblaje.",
      userTypes: [
        "Directores de calidad que exigen auditoría milimétrica del histórico de cada pieza.",
        "Técnicos de mantenimiento y automatización industrial.",
        "Operarios de línea que validan lotes mediante pistolas lectoras y terminales móviles."
      ],
      marketOpportunity: "Revolución de la Industria 4.0: obligatoriedad legal de trazabilidad en automoción, farmacia y alimentación."
    },
    monetization: {
      isMonetizable: true,
      model: "Venta B2B Directa / Enterprise",
      pricingStrategy: "Venta de licencia de software (3.000€ - 15.000€ por planta industrial) más contrato de soporte y mantenimiento del 20% anual.",
      estimatedRevenue: "Contratos de alto ticket con márgenes excepcionales.",
      commercialPotential: "Implantación directa en fábricas o venta a través de integradores de sistemas de automatización.",
      forSale: {
        available: true,
        type: "Licencia Exclusiva",
        contactNote: "Disponible para venta de derechos de explotación o implantación personalizada en empresas del sector."
      }
    },
    techStack: {
      languages: ["C#", "C/C++", "SQL (T-SQL, PL/SQL)", "Java", "TypeScript"],
      frameworks: ["ASP.NET Core", "Spring Boot", "React Native", "Next.js"],
      databases: ["SQL Server", "Oracle Database 19c", "PostgreSQL"],
      cloudAndDevops: ["Docker", "Git/GitLab", "xUnit / JUnit Testing", "Scrum"],
      architectureHighlights: [
        "Clean Architecture y arquitectura hexagonal para total independencia de frameworks y bases de datos.",
        "Modelado relacional y tuning de consultas con planes de ejecución analizados al milisegundo.",
        "Controladores hardware-near en C/C++ para escáneres y buses industriales."
      ]
    },
    keyFeatures: [
      {
        title: "Lectura Óptica y Trazabilidad en Tiempo Real",
        description: "Captura de códigos QR y DataMatrix con verificación de sintaxis y persistencia instantánea."
      },
      {
        title: "Integración ERP / MES",
        description: "Conexión bidireccional mediante APIs RESTful y SOAP seguras con validación estricta de esquemas."
      },
      {
        title: "App Móvil de Operario en Planta",
        description: "Aplicación en React Native con escaneo por cámara de alta velocidad y modo offline."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        title: "Consola de Trazabilidad Industrial",
        description: "Monitorización de lecturas en planta, verificación de lotes y estado de los escáneres en red.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Tiempo de Lectura y Registro", value: "<50ms" },
      { label: "Tasa de Error en Captura", value: "0.001%" },
      { label: "Disponibilidad en Planta", value: "99.99%" }
    ],
    links: {
      demoUrl: "https://suite-industrial.vercel.app",
      githubUrl: "https://github.com/dani/suite-trazabilidad-industrial"
    }
  },
  {
    id: "cad-intelligence",
    slug: "cad-document-intelligence",
    title: "Automated CAD & Document Intelligence Engine (I+D)",
    tagline: "Motor automatizado de extracción de entidades, clasificación y análisis estructural de planos técnicos con IA.",
    shortDescription: "Proyecto avanzado de I+D que emplea modelos de visión por computador y LLMs multimodales para digitalizar, estructurar y extraer información técnica de planos CAD, esquemas de ingeniería y documentación técnica compleja.",
    category: "Inteligencia Artificial",
    status: "En Desarrollo Activo",
    featured: false,
    completionPercentage: 80,
    problemStatement: {
      summary: "Los ingenieros de proyectos dedican semanas enteras a revisar manualmente planos CAD en formato PDF o DWG para extraer listas de materiales, cotas y componentes.",
      painPoints: [
        "Proceso manual lento, costoso y propenso a errores en ofertas y presupuestos técnicos.",
        "Documentación técnica heterogénea no estandarizada y dispersa en miles de archivos.",
        "Incapacidad de las herramientas tradicionales de OCR para interpretar relaciones geométricas y simbología técnica."
      ]
    },
    solutionStatement: {
      summary: "Pipeline inteligente que combina análisis vectorial, detección de entidades simbólicas y razonamiento semántico para generar automáticamente la lista de despiece (BOM) y especificaciones técnicas.",
      benefits: [
        "Aceleración de 10x en la elaboración de presupuestos industriales.",
        "Extracción estructurada en JSON y bases de datos relacionales.",
        "Validación cruzada automática entre esquemas y normativas aplicables.",
        "Procesamiento local confidencial para proteger la propiedad intelectual de los diseños."
      ]
    },
    targetAudience: {
      profile: "Estudios de ingeniería, departamentos de compras de fábricas, constructoras y empresas de automatización.",
      userTypes: [
        "Ingenieros de diseño y presupuestistas que necesitan desglosar planos rápidamente.",
        "Directores técnicos que supervisan el cumplimiento de normativas en proyectos."
      ],
      marketOpportunity: "Sector PropTech e Industrial AI con escasa competencia especializada en planos técnicos."
    },
    monetization: {
      isMonetizable: true,
      model: "Licencia de Software / Pago Único",
      pricingStrategy: "Licencia empresarial por volumen de planos procesados o cuota mensual de SaaS para estudios técnicos (199€ - 599€/mes).",
      estimatedRevenue: "Mercado B2B de altísimo valor por cliente.",
      commercialPotential: "Ideal para adquisición por parte de proveedores de software CAD/BIM o grandes ingenierías.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Algoritmos y motor de extracción disponibles para licenciamiento o venta a firmas de ingeniería."
      }
    },
    techStack: {
      languages: ["Python", "TypeScript", "C++"],
      frameworks: ["FastAPI", "OpenCV", "LangChain / LLMs Multimodales", "Next.js"],
      databases: ["PostgreSQL (pgvector)", "ChromaDB"],
      cloudAndDevops: ["Docker", "Ollama Local", "Vercel"],
      architectureHighlights: [
        "Segmentación geométrica previa para aislar cajetines, acotaciones y simbología.",
        "Inferencia multimodal para interpretación contextual de notas técnicas de taller.",
        "Pipeline determinista con validación sintáctica de cotas numéricas."
      ]
    },
    keyFeatures: [
      {
        title: "Extracción Automática de Cajetines y Metadatos",
        description: "Detección instantánea de título, autor, escala, materiales y revisiones del plano."
      },
      {
        title: "Generación de Listas de Materiales (BOM)",
        description: "Conteo y catalogación de perfiles, tornillería y componentes referenciados."
      },
      {
        title: "Búsqueda Semántica en Planoteca",
        description: "Encuentra planos similares por geometría o requisitos funcionales en milisegundos."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
        title: "Visor y Analizador de Planos CAD",
        description: "Segmentación visual interactiva con reconocimiento de entidades y acotaciones.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Tiempo de Extracción", value: "<15s por plano" },
      { label: "Ahorro de Tiempo", value: "90% en ofertas" },
      { label: "Precisión en Cotas", value: "96.8%" }
    ],
    links: {
      demoUrl: "https://cad-intelligence.vercel.app",
      githubUrl: "https://github.com/dani/cad-document-intelligence"
    }
  },
  {
    id: "videojuego-indie",
    slug: "videojuego-indie-unity",
    title: "Videojuego Indie de Simulación & Estrategia (Unity / C#)",
    tagline: "Motor de juego con físicas dinámicas, arquitectura limpia de scripts y simulación económica emergente.",
    shortDescription: "Proyecto de desarrollo de videojuego desarrollado en Unity con C#, aplicando principios sólidos de arquitectura de software, gestión de estados, algoritmos de física y optimización técnica para alta tasa de frames.",
    category: "Gaming & Interactivo",
    status: "En Desarrollo Activo",
    featured: false,
    completionPercentage: 85,
    problemStatement: {
      summary: "Muchos videojuegos independientes adolecen de código espagueti con fallos de rendimiento y físicas erráticas debido a una mala arquitectura de scripts.",
      painPoints: [
        "Caídas de frames y 'garbage collection stuttering' por mala gestión de memoria.",
        "Dificultad para mantener mecánicas complejas sin romper subsistemas del juego.",
        "Interfaces de usuario toscas y poco adaptadas a diferentes resoluciones."
      ]
    },
    solutionStatement: {
      summary: "Diseño modular basado en ScriptableObjects, desacoplamiento de eventos y optimización de física y renderizado para garantizar 60+ FPS estables en PC y consolas.",
      benefits: [
        "Arquitectura de scripts en C# completamente orientada a componentes y reutilizable.",
        "Simulación económica con cálculo de oferta y demanda en tiempo real.",
        "Mecánicas de control precisas y pulidas con feedback visual y sonoro inmersivo.",
        "Perfilado y optimización técnica de assets y draw calls."
      ]
    },
    targetAudience: {
      profile: "Jugadores aficionados a la estrategia, simulación y gestión económica en plataformas como Steam o itch.io.",
      userTypes: [
        "Jugadores competitivos que buscan desafíos de optimización de recursos.",
        "Comunidad indie interesada en títulos de autor con mecánicas originales."
      ],
      marketOpportunity: "El mercado de juegos indie de estrategia y gestión goza de una de las mayores ratios de monetización y permanencia en PC."
    },
    monetization: {
      isMonetizable: true,
      model: "Licencia de Software / Pago Único",
      pricingStrategy: "Venta directa en Steam / Epic Games Store (9.99€ - 14.99€ por copia) o comercialización de las plantillas y sistemas en la Unity Asset Store.",
      estimatedRevenue: "Potencial de ventas escalable sin costes marginales de distribución.",
      commercialPotential: "Ideal para publicación indie, venta a publishers o aprovechamiento del motor de simulación para otros títulos.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Proyecto completo de Unity con arquitectura de scripts en C# disponible para compra o publicación conjunta."
      }
    },
    techStack: {
      languages: ["C#", "HLSL (Shaders)", "JSON"],
      frameworks: ["Unity Engine", "Universal Render Pipeline (URP)", "DOTween"],
      databases: ["SQLite (Persistencia Local)", "ScriptableObjects Architecture"],
      cloudAndDevops: ["Git LFS", "GitHub Actions", "Unity Cloud Build"],
      architectureHighlights: [
        "Arquitectura guiada por eventos para evitar acoplamiento rígido entre componentes del juego.",
        "Object Pooling para partículas y proyectiles evitando parones por Garbage Collection.",
        "Optimizador de draw calls con atlas de texturas y dynamic batching."
      ]
    },
    keyFeatures: [
      {
        title: "Motor de Economía Emergente",
        description: "Simulación de mercado dinámico donde los precios de los bienes fluctúan con la oferta y demanda."
      },
      {
        title: "Sistema Modular de Habilidades",
        description: "Árbol de talentos y gestión de personajes desacoplada mediante ScriptableObjects."
      },
      {
        title: "Optimización de Rendimiento a 60+ FPS",
        description: "Perfilado técnico exhaustivo para funcionamiento fluido en equipos de gama media."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        title: "Escenario de Juego y Panel Táctico",
        description: "Vista isométrica de simulación con controles económicos e indicadores de gestión.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Framerate", value: "60+ FPS Estables" },
      { label: "Draw Calls", value: "<85 por frame" },
      { label: "Tiempo de Carga", value: "<2s" }
    ],
    links: {
      demoUrl: "https://indie-game-preview.vercel.app",
      githubUrl: "https://github.com/dani/indie-game-unity"
    }
  }
];

export const TECH_SKILLS: TechSkillCategory[] = [
  {
    category: "Lenguajes de Programación",
    skills: [
      {
        name: "TypeScript & JavaScript (ES6+)",
        level: "Experto / Avanzado",
        badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        description: "Tipado estricto, arquitecturas full-stack modernas, asincronía, WebSockets y desarrollo frontend/backend.",
        featuredIn: ["Workshop OS (Privado)", "Fidelización Comercios", "Recomendador Multimedia"],
      },
      {
        name: "C# (.NET & Unity)",
        level: "Avanzado (Profesional)",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        description: "Desarrollo empresarial con ASP.NET Core, APIs RESTful/SOAP, Clean Architecture y desarrollo de videojuegos en Unity.",
        featuredIn: ["Suite Industrial Trazabilidad", "Videojuego Indie Unity", "Balterra"],
      },
      {
        name: "Python",
        level: "Avanzado",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        description: "FastAPI, computación científica (NumPy/Pandas), algoritmos de recomendación, modelos de IA y procesamiento de CAD.",
        featuredIn: ["Recomendador Multimedia", "CAD Document Intelligence"],
      },
      {
        name: "Java",
        level: "Avanzado (Profesional)",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        description: "Spring Boot, Spring MVC, Hibernate, arquitectura hexagonal y microservicios empresariales.",
        featuredIn: ["Suite Industrial", "Balterra"],
      },
      {
        name: "SQL (T-SQL, PL/SQL, PostgreSQL)",
        level: "Avanzado / Experto",
        badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
        description: "Modelado relacional complejo, optimización avanzada (query tuning, índices, planes de ejecución) en SQL Server, Oracle y PostgreSQL.",
        featuredIn: ["Workshop OS (Privado)", "Suite Industrial", "Recomendador", "Balterra"],
      },
      {
        name: "Dart / Flutter",
        level: "Avanzado",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        description: "Desarrollo móvil nativo multiplataforma (iOS y Android), animaciones fluidas, arquitectura BLoC y audio de baja latencia.",
        featuredIn: ["Fidelización Comercios", "SoundSpace Musical"],
      },
      {
        name: "C & C++",
        level: "Intermedio / Avanzado",
        badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
        description: "Programación de sistemas embebidos, microcontroladores y protocolos industriales (SPI, I2C, UART, CAN, Ethernet).",
        featuredIn: ["Suite Industrial Trazabilidad", "Balterra"],
      },
    ],
  },
  {
    category: "Backend, APIs & Arquitectura",
    skills: [
      {
        name: "ASP.NET Core & .NET",
        level: "Avanzado (Profesional)",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        description: "APIs RESTful, SOAP, Entity Framework, principios SOLID y Clean Architecture en producción empresarial.",
      },
      {
        name: "Java Spring Boot & Hibernate",
        level: "Avanzado (Profesional)",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        description: "Desarrollo backend empresarial robusto, inyección de dependencias y pruebas unitarias con JUnit.",
      },
      {
        name: "Node.js & Express",
        level: "Avanzado",
        badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
        description: "Microservicios en JavaScript/TypeScript, streaming de datos y endpoints de alta velocidad.",
      },
      {
        name: "FastAPI & Python Backend",
        level: "Avanzado",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        description: "Servicios asíncronos para ingesta de datos, procesamiento de visión por computador y orquestación de IA.",
      },
    ],
  },
  {
    category: "Frontend Moderno & Móvil",
    skills: [
      {
        name: "React & Next.js (App Router)",
        level: "Experto",
        badgeColor: "bg-neutral-800 text-white border-neutral-600",
        description: "Server Components, Edge API routes, SSG/SSR, hooks avanzados y despliegues optimizados en Vercel.",
      },
      {
        name: "Flutter & React Native",
        level: "Avanzado",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        description: "Apps móviles nativas para iOS y Android con integración de cámara, escáneres ópticos y audio.",
      },
      {
        name: "Angular & Vue.js (Vue 3 / Pinia)",
        level: "Competente / Avanzado",
        badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
        description: "Desarrollo modular de SPAs empresariales con gestión de estado centralizada.",
      },
      {
        name: "Tailwind CSS & PWA",
        level: "Experto",
        badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
        description: "Sistemas de diseño modernos, modo oscuro, interfaces responsivas y aplicaciones PWA instalables offline.",
      },
    ],
  },
  {
    category: "Bases de Datos, Cloud & IA",
    skills: [
      {
        name: "PostgreSQL & Supabase",
        level: "Experto",
        badgeColor: "bg-emerald-600/20 text-emerald-300 border-emerald-600/30",
        description: "Modelado relacional, Row Level Security (RLS), Realtime channels, Storage y autenticación segura.",
      },
      {
        name: "SQL Server & Oracle 19c",
        level: "Avanzado (Profesional)",
        badgeColor: "bg-sky-600/20 text-sky-300 border-sky-600/30",
        description: "Procedimientos almacenados en T-SQL y PL/SQL, optimización de latencia en transacciones críticas.",
      },
      {
        name: "IA Generativa & Flujos Agénticos",
        level: "Avanzado",
        badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
        description: "Pipelines autónomos (Spec.md), n8n, Google Gemini Pro/Flash, orquestación de LLMs locales con Ollama y Spec-Driven Development.",
      },
      {
        name: "DevOps, Docker & Vercel",
        level: "Avanzado",
        badgeColor: "bg-amber-600/20 text-amber-300 border-amber-600/30",
        description: "CI/CD con GitHub Actions, despliegues serverless en Vercel, contenerización con Docker y testing (Vitest, xUnit).",
      },
    ],
  },
];
