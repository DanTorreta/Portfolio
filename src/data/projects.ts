import { Project } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "crold-saas",
    slug: "crold",
    title: "Crold - Sistema de Gestión Integral & PWA",
    tagline: "Software B2B integral para talleres mecánicos, control horario, reservas y facturación.",
    shortDescription: "Plataforma empresarial de alto rendimiento diseñada para digitalizar la operativa diaria de talleres mecánicos y pymes: desde el control presencial de empleados y citas online, hasta gestión de órdenes de trabajo y facturación.",
    category: "SaaS B2B",
    status: "Listo para Comercializar / Venta",
    featured: true,
    completionPercentage: 95,
    problemStatement: {
      summary: "Los talleres mecánicos y pymes de servicios pierden hasta un 30% de su productividad mensual utilizando hojas de cálculo, libretas de papel o softwares anticuados que no se adaptan al móvil.",
      painPoints: [
        "Falta de control legal y automatizado del horario de los trabajadores.",
        "Dificultad para coordinar reservas y recepciones de vehículos en tiempo real.",
        "Desconexión entre el presupuesto, la orden de trabajo en el taller y la factura emitida.",
        "Softwares tradicionales excesivamente costosos, lentos y con interfaces complejas de aprender."
      ]
    },
    solutionStatement: {
      summary: "Crold centraliza el ciclo de vida completo de un taller en una interfaz moderna tipo PWA, accesible desde el móvil del mecánico, la tablet de recepción o el ordenador de administración.",
      benefits: [
        "Fichaje y control horario conforme a la normativa laboral con un solo toque.",
        "Gestión fluida de citas con notificaciones automáticas y portal de clientes.",
        "Órdenes de trabajo digitales con seguimiento de piezas y tiempos dedicados.",
        "Facturación automatizada con exportación a PDF y control de cobros."
      ]
    },
    targetAudience: {
      profile: "Talleres mecánicos independientes, cadenas de mantenimiento rápido y pymes de reparación técnica.",
      userTypes: [
        "Propietarios de talleres que necesitan control financiero y legal del negocio.",
        "Jefes de taller que asignan órdenes y supervisan tiempos de mecánicos.",
        "Mecánicos que actualizan el estado de cada vehículo desde su teléfono o tablet.",
        "Clientes finales que reservan citas y consultan presupuestos online."
      ],
      marketOpportunity: "Más de 40.000 talleres solo en España y cientos de miles en Latinoamérica que necesitan urgentemente digitalización ante normativas fiscales y laborales."
    },
    monetization: {
      isMonetizable: true,
      model: "Suscripción SaaS (MRR)",
      pricingStrategy: "Tiered SaaS por tamaño de taller (Básico 49€/mes, Pro 99€/mes, Flotas 189€/mes) o venta de licencia completa con instalación personalizada.",
      estimatedRevenue: "15.000€ - 30.000€ MRR con 200-300 talleres activos.",
      commercialPotential: "Altísima retención (churn bajo) debido a que se convierte en el software medular de la empresa diaria.",
      forSale: {
        available: true,
        type: "SaaS Completo con Clientes",
        contactNote: "Abierto a venta del código fuente exclusivo, cesión de la propiedad intelectual o búsqueda de socio comercial / inversor para expansión."
      }
    },
    techStack: {
      languages: ["TypeScript", "SQL", "HTML5", "CSS3"],
      frameworks: ["Next.js (App Router)", "React 18", "Tailwind CSS"],
      databases: ["PostgreSQL (Supabase)", "Redis Cache"],
      cloudAndDevops: ["Vercel Edge", "Supabase Auth & Storage", "Row Level Security (RLS)"],
      architectureHighlights: [
        "Arquitectura modular PWA offline-first para operarios en zona de taller con cobertura reducida.",
        "Row Level Security (RLS) en base de datos para aislamiento estricto multi-inquilino (multi-tenant).",
        "Generación dinámica de PDFs en el Edge para facturas y albaranes instantáneos.",
        "Webhooks sincronizados para notificaciones y pasarelas de pago."
      ]
    },
    keyFeatures: [
      {
        title: "Control Horario y Registro Legal",
        description: "Fichaje geolocalizado, cálculo de horas extraordinarias y reportes oficiales para inspecciones laborales."
      },
      {
        title: "Órdenes de Trabajo y Taller",
        description: "Control de repuestos, mano de obra, diagnóstico por vehículo con historial de matrículas."
      },
      {
        title: "Sistema de Reservas y Clientes",
        description: "Portal interactivo para que los clientes soliciten cita con recordatorios automatizados."
      },
      {
        title: "Facturación y Presupuestos",
        description: "Conversión de presupuesto a orden y factura con desglose de IVA y soporte fiscal."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        title: "Dashboard Principal de Gestión",
        description: "Vista de control centralizada con métricas de taller, citas de la jornada y facturación en curso.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
        title: "Módulo de Taller y Vehículos",
        description: "Fichas técnicas de vehículos con historial de reparaciones y tiempos invertidos por operario."
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        title: "Analítica y Reportes Financieros",
        description: "Gráficos de rendimiento de horas productivas, márgenes de piezas y previsión de ingresos."
      }
    ],
    metrics: [
      { label: "Tiempo de Respuesta", value: "<120ms" },
      { label: "Disponibilidad", value: "99.9%" },
      { label: "Ahorro de Gestión", value: "12h / semana" }
    ],
    links: {
      liveUrl: "https://crold.vercel.app",
      demoUrl: "https://demo.crold.vercel.app",
      githubUrl: "https://github.com/dani/crold"
    }
  },
  {
    id: "nutricion-ai",
    slug: "nutricion-app",
    title: "NutricionApp - Asistente & Salud con Inteligencia Artificial",
    tagline: "Generador de planes nutricionales adaptativos y análisis de composición por visión computacional.",
    shortDescription: "Aplicación móvil y web que combina modelos de lenguaje y visión artificial para calcular requerimientos calóricos exactos, planificar listas de la compra inteligentes y monitorizar el progreso físico del usuario.",
    category: "Inteligencia Artificial",
    status: "En Producción (Live)",
    featured: true,
    completionPercentage: 90,
    problemStatement: {
      summary: "Seguir un plan dietético saludable fracasa en el 80% de las personas debido a la rigidez de los menús estáticos y a la dificultad de calcular porciones reales de comida diaria.",
      painPoints: [
        "Falta de personalización según horarios, alergias, presupuesto o preferencias personales.",
        "Tedio insoportable al tener que pesar cada alimento e introducirlo manualmente en apps antiguas.",
        "Coste elevado de consultas semanales con nutricionistas para personas con objetivos estándar."
      ]
    },
    solutionStatement: {
      summary: "NutricionApp automatiza la prescripción nutricional en base a los objetivos individuales (pérdida de grasa, ganancia muscular o salud metabólica) adaptando el menú semanal según los ingredientes que el usuario tiene en la nevera.",
      benefits: [
        "Planificación semanal dinámica en segundos con IA generativa.",
        "Cálculo automático de macros con recetas paso a paso personalizadas.",
        "Lista de la compra sincronizada para evitar el desperdicio de comida.",
        "Ajuste automático de calorías según la evolución semanal del peso."
      ]
    },
    targetAudience: {
      profile: "Personas interesadas en fitness y estilo de vida saludable, así como nutricionistas que buscan una herramienta para atender a más clientes.",
      userTypes: [
        "Atletas y aficionados al gimnasio que requieren precisión estricta en macronutrientes.",
        "Profesionales ocupados que necesitan menús rápidos sin dedicar horas a cocinar o pensar.",
        "Dietistas y entrenadores personales (B2B) que gestionan clientes de forma escalable."
      ],
      marketOpportunity: "Mercado global de apps de salud y fitness valorado en más de 9.000 millones de USD con crecimiento anual superior al 15%."
    },
    monetization: {
      isMonetizable: true,
      model: "Freemium + Addons",
      pricingStrategy: "Versión gratuita básica; suscripción Premium a 9.99€/mes (o 69.99€/año) para planes avanzados con IA, y modalidad B2B para dietistas a 49€/mes.",
      estimatedRevenue: "Potencial B2C masivo (5.000 usuarios de pago = 50.000€/mes).",
      commercialPotential: "Gran viralidad en redes sociales (TikTok / Instagram) y alta retención cuando el usuario ve resultados físicos medibles.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Disponible para venta de derechos de la app o partnership para escalar la base de usuarios con inversión de marketing."
      }
    },
    techStack: {
      languages: ["TypeScript", "Python", "Dart / Flutter"],
      frameworks: ["Next.js", "React Native / Flutter", "FastAPI"],
      databases: ["Supabase PostgreSQL", "Vector DB (pgvector)"],
      cloudAndDevops: ["Vercel", "Google Cloud / Gemini API", "Docker"],
      architectureHighlights: [
        "Orquestación de prompts con streaming de respuestas en tiempo real.",
        "Base de datos de alimentos USDA enriquecida con búsqueda semántica vectorial.",
        "Sincronización multi-dispositivo en tiempo real con WebSockets."
      ]
    },
    keyFeatures: [
      {
        title: "Generador de Dietas con IA",
        description: "Algoritmo que equilibra micronutrientes y macros ajustándose a intolerancias y presupuesto."
      },
      {
        title: "Lista de la Compra Inteligente",
        description: "Agrupación automática de ingredientes por secciones de supermercado con cantidades exactas."
      },
      {
        title: "Panel de Evolución Biométrica",
        description: "Registro de peso, pliegues corporales, fotos de progreso con estimación de composición corporal."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
        title: "Planificador Semanal de Comidas",
        description: "Vista de calendario semanal interactivo con macros diarios calculados y desglose por receta.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
        title: "Ficha de Receta con Macronutrientes",
        description: "Detalle paso a paso con equivalencias calóricas y sugerencia de sustitutos según despensa."
      }
    ],
    metrics: [
      { label: "Precisión en Macros", value: "98.5%" },
      { label: "Tiempo en Generar Plan", value: "3.2s" },
      { label: "Satisfacción de Usuario", value: "4.8/5" }
    ],
    links: {
      liveUrl: "https://nutricion-app.vercel.app",
      githubUrl: "https://github.com/dani/nutricion-app"
    }
  },
  {
    id: "agenda-v2",
    slug: "agenda-inteligente",
    title: "Agenda Inteligente v2 - Automatización de Citas & Pagos",
    tagline: "Plataforma self-service para profesionales independientes que elimina el absentismo con recordatorios automáticos.",
    shortDescription: "Solución de agendamiento sin fricción para fisioterapeutas, psicólogos, barberos y consultores. Permite a los clientes reservar, pagar fianza por Stripe y recibir confirmaciones vía WhatsApp o SMS sin intervención humana.",
    category: "SaaS B2B",
    status: "Listo para Comercializar / Venta",
    featured: true,
    completionPercentage: 92,
    problemStatement: {
      summary: "Los profesionales de servicios pierden miles de euros al año en 'no-shows' (clientes que reservan y no se presentan) y pasan más de 2 horas al día respondiendo mensajes para cuadrar huecos en la agenda.",
      painPoints: [
        "Pérdidas económicas directas por huecos vacíos en horas punta.",
        "Interrupciones constantes durante sesiones o consultas para contestar llamadas de clientes.",
        "Doble reserva accidental al gestionar calendarios manuales."
      ]
    },
    solutionStatement: {
      summary: "Agenda v2 ofrece un link público personalizado donde los clientes ven la disponibilidad real sincronizada con Google Calendar, eligen servicio y abonan un depósito que asegura su asistencia.",
      benefits: [
        "Reducción del 90% en ausencias gracias al cobro previo o fianza con Stripe.",
        "Recordatorios automáticos por WhatsApp y correo 24h y 2h antes de la cita.",
        "Sincronización bidireccional inmediata con Google Calendar y Outlook.",
        "Panel de control financiero con ingresos diarios, semanales y mensuales."
      ]
    },
    targetAudience: {
      profile: "Profesionales autónomos y pequeñas clínicas de salud, estética, bienestar o consultoría legal y financiera.",
      userTypes: [
        "Psicólogos, terapeutas y nutricionistas que cobran por hora o sesión.",
        "Clínicas dentales o fisioterapeutas con múltiples especialistas en plantilla.",
        "Salones de belleza y barberías con servicios simultáneos."
      ],
      marketOpportunity: "Cientos de miles de autónomos que actualmente usan WhatsApp o lápiz y papel para agendar servicios."
    },
    monetization: {
      isMonetizable: true,
      model: "Suscripción SaaS (MRR)",
      pricingStrategy: "29€/mes plan individual; 59€/mes plan equipo con multi-calendario; o venta directa del software como marca blanca (white-label).",
      estimatedRevenue: "12.000€/mes con una cartera de 300 profesionales activos.",
      commercialPotential: "Muy alta escalabilidad internacional; producto localizable a cualquier idioma y pasarela de pago en minutos.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Código listo para montar tu propio servicio SaaS bajo tu propia marca y dominio comercial."
      }
    },
    techStack: {
      languages: ["TypeScript", "Node.js", "SQL"],
      frameworks: ["Next.js 14", "Tailwind CSS", "shadcn/ui"],
      databases: ["PostgreSQL", "Prisma ORM"],
      cloudAndDevops: ["Vercel", "Stripe Connect API", "Twilio / WhatsApp Cloud API"],
      architectureHighlights: [
        "Algoritmo de cálculo de ranuras libres en O(n) con prevención de colisiones concurrentes.",
        "Integración con webhooks de Stripe para confirmar reservas solo tras cobro validado.",
        "Diseño mobile-first optimizado para cargar en menos de 1 segundo en redes 4G."
      ]
    },
    keyFeatures: [
      {
        title: "Página de Reserva Personalizable",
        description: "Enlace propio con logo, descripción de servicios, tarifas y selector visual de horas."
      },
      {
        title: "Cobros Integrados con Stripe",
        description: "Pago completo del servicio o fianza de compromiso retenida en tarjeta de crédito."
      },
      {
        title: "Integración con WhatsApp y Calendarios",
        description: "Disparador automático de notificaciones y sincronización en tiempo real."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
        title: "Selector de Horas y Servicios del Cliente",
        description: "Experiencia de usuario limpia para agendar en 3 clics desde cualquier smartphone.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        title: "Panel de Gestión de Calendario",
        description: "Vista de agenda mensual con métricas de facturación acumulada y tasa de asistencia."
      }
    ],
    metrics: [
      { label: "Reducción de No-Shows", value: "-87%" },
      { label: "Tiempo de Carga", value: "0.8s" },
      { label: "Conversión de Reserva", value: "34%" }
    ],
    links: {
      liveUrl: "https://agenda-v2.vercel.app",
      githubUrl: "https://github.com/dani/agenda-v2"
    }
  },
  {
    id: "motor-industrial",
    slug: "motor-industrial",
    title: "Motor Industrial IoT - Monitorización & Telemetría Predictiva",
    tagline: "Plataforma telemática en tiempo real para supervisión de motores, maquinaria pesada y plantas industriales.",
    shortDescription: "Sistema de ingeniería industrial conectado a sensores IoT (vibración, temperatura, RPM y consumo eléctrico) que detecta anomalías térmicas y mecánicas antes de que ocurra una avería catastrófica.",
    category: "IoT & Industrial",
    status: "Listo para Comercializar / Venta",
    featured: false,
    completionPercentage: 88,
    problemStatement: {
      summary: "Una parada no programada de un motor en una cadena de producción puede costar más de 20.000€ la hora en pérdidas operativas y reparaciones de urgencia.",
      painPoints: [
        "Mantenimiento reactivo: se repara cuando la máquina ya se ha roto.",
        "Falta de telemetría remota que alerte a los técnicos fuera de su turno presencial.",
        "Dificultad para correlacionar picos de temperatura con desgaste de rodamientos o sobrecargas."
      ]
    },
    solutionStatement: {
      summary: "Motor Industrial IoT monitoriza flujos de datos continuos desde PLCs y microcontroladores, aplicando umbrales estadísticos y detección de anomalías con alertas instantáneas a los ingenieros de planta.",
      benefits: [
        "Visualización de telemetría en tiempo real con latencias de visualización inferiores a 100ms.",
        "Alertas por SMS/Email automáticas en caso de sobrecalentamiento o vibración irregular.",
        "Histórico exhaustivo para auditorías de rendimiento y eficiencia energética.",
        "Exportación de datos para mantenimiento predictivo planificado."
      ]
    },
    targetAudience: {
      profile: "Directores de mantenimiento, empresas de automatización industrial, plantas de fabricación y gestores de flotas de maquinaria.",
      userTypes: [
        "Ingenieros de planta que supervisan el estado de las líneas productivas.",
        "Técnicos de mantenimiento electromecánico que reciben avisos de fallo preventivo.",
        "Gerentes de operaciones interesados en el OEE (Overall Equipment Effectiveness)."
      ],
      marketOpportunity: "Sector Industria 4.0 en plena expansión con miles de fábricas buscando sensorizar maquinaria existente (retrofit)."
    },
    monetization: {
      isMonetizable: true,
      model: "Venta B2B Directa / Enterprise",
      pricingStrategy: "Venta de licencia de software (1.500€ - 5.000€ por planta) + cuota de mantenimiento anual del 15-20%, o venta llave en mano a integradores.",
      estimatedRevenue: "Contratos de alto valor unitario (10 clientes industriales = 30.000€ - 60.000€).",
      commercialPotential: "El ROI para la fábrica es inmediato: con evitar una sola avería crítica la inversión queda completamente amortizada.",
      forSale: {
        available: true,
        type: "Licencia Exclusiva",
        contactNote: "Proyecto disponible para venta de código a empresas de ingeniería industrial o integradores de automatismos."
      }
    },
    techStack: {
      languages: ["Python", "TypeScript", "C++ / MicroPython", "SQL"],
      frameworks: ["FastAPI", "React", "Next.js", "Tailwind CSS"],
      databases: ["TimescaleDB / InfluxDB (Series Temporales)", "PostgreSQL"],
      cloudAndDevops: ["MQTT Broker (Mosquitto)", "Docker", "AWS IoT Core / Vercel"],
      architectureHighlights: [
        "Protocolo MQTT optimizado para bajo consumo de ancho de banda en entornos de fábrica ruidosos.",
        "Ingesta de series temporales de alta velocidad (miles de muestras por segundo).",
        "Gráficos dinámicos interactivos con WebGL y Canvas para evitar congelamiento de la UI."
      ]
    },
    keyFeatures: [
      {
        title: "Telemetría en Vivo (MQTT & WebSockets)",
        description: "Medición continua de RPM, corriente, temperatura de carcasa y análisis espectral de vibraciones."
      },
      {
        title: "Reglas de Alerta Configurables",
        description: "Definición de umbrales con disparadores escalonados (aviso amarillo, parada crítica roja)."
      },
      {
        title: "Análisis de Ciclos y Desgaste",
        description: "Cálculo automático de horas de trabajo efectivas y cuenta atrás para lubricación y revisiones."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        title: "Tablero SCADA Telemétrico",
        description: "Visualización en vivo del estado de los motores con diales de temperatura y acelerómetros.",
        isCover: true
      },
      {
        url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
        title: "Registro de Series Temporales y Gráficos",
        description: "Correlación de datos temporales para identificar desgaste antes de la parada física."
      }
    ],
    metrics: [
      { label: "Muestras / segundo", value: "2.500+" },
      { label: "Latencia Telemetría", value: "45ms" },
      { label: "Reducción Paradas", value: "35%" }
    ],
    links: {
      demoUrl: "https://motor-iot-demo.vercel.app",
      githubUrl: "https://github.com/dani/motor-industrial"
    }
  },
  {
    id: "factoria-agentes",
    slug: "factoria-agentes-ia",
    title: "Factoría de Agentes IA - Orquestador Autónomo Multi-LLM",
    tagline: "Plataforma para diseñar, probar y desplegar flujos de agentes autónomos que automatizan tareas complejas.",
    shortDescription: "Entorno de desarrollo y orquestación que permite encadenar agentes inteligentes con roles especializados (investigador, redactor, validador de código, analista de datos) usando modelos locales (Ollama) o en la nube.",
    category: "Herramientas & DevTools",
    status: "Beta Privada",
    featured: false,
    completionPercentage: 85,
    problemStatement: {
      summary: "Usar ChatGPT de forma aislada requiere copiar y pegar prompts infinitas veces; la automatización de procesos reales exige flujos autónomos que se autoverifiquen.",
      painPoints: [
        "Falta de memoria y contexto compartido entre diferentes fases de un trabajo.",
        "Dependencia cara de APIs cerradas sin posibilidad de correr agentes en servidores locales seguros.",
        "Dificultad técnica para integrar herramientas como lectura de archivos, búsquedas web y ejecución de scripts."
      ]
    },
    solutionStatement: {
      summary: "La Factoría de Agentes proporciona un pipeline modular donde un agente coordinador delega subtareas, evalúa resultados y entrega un informe completo sin supervisión humana continua.",
      benefits: [
        "Arquitectura multi-agente con evaluación reflexiva (auto-corrección de errores).",
        "Conexión plug-and-play con modelos abiertos (Llama 3, Mistral) y modelos propietarios (Claude, Gemini, GPT).",
        "Ejecución de código en sandbox seguro para analistas de datos automáticos.",
        "Exportación de resultados a formatos Markdown, JSON o PDF estructurado."
      ]
    },
    targetAudience: {
      profile: "Desarrolladores, agencias de marketing, consultoras de software e investigadores que necesitan automatizar tareas analíticas de alto volumen.",
      userTypes: [
        "Ingenieros de IA que construyen productos basados en agentes.",
        "Empresas que quieren privacidad total ejecutando agentes en sus propios servidores locales.",
        "Creadores de contenido y analistas de datos financieros."
      ],
      marketOpportunity: "El mercado de orquestación de agentes IA es la categoría con mayor tracción en el ecosistema tecnológico actual."
    },
    monetization: {
      isMonetizable: true,
      model: "Licencia de Software / Pago Único",
      pricingStrategy: "Venta de licencia de código por 299€ para desarrolladores, o SaaS por consumo de tokens (19€ - 99€/mes).",
      estimatedRevenue: "Excelente como producto de infoproducto técnico o SaaS especializado.",
      commercialPotential: "Gran interés de compra directa por parte de agencias que quieren revender automatizaciones a sus propios clientes.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Paquete completo con documentación, servidor FastAPI y UI en Next.js listo para distribuir."
      }
    },
    techStack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["FastAPI", "LangChain / CrewAI", "Next.js", "Tailwind CSS"],
      databases: ["ChromaDB (Vectorial)", "SQLite / PostgreSQL"],
      cloudAndDevops: ["Docker", "Ollama Local", "Vercel"],
      architectureHighlights: [
        "Bucle de decisión ReAct (Reasoning + Acting) con memoria a corto y largo plazo.",
        "Fallback inteligente automático: si el modelo local falla, escala a la nube.",
        "Interfaz visual con nodos para configurar roles y herramientas de cada agente."
      ]
    },
    keyFeatures: [
      {
        title: "Editor Visual de Agentes",
        description: "Configuración de personalidad, herramientas asignadas (Google Search, Python Sandbox, SQL) y temperatura."
      },
      {
        title: "Ejecución Asíncrona con Streaming",
        description: "Monitoreo en vivo de los pensamientos del agente y llamadas a herramientas (tool calls)."
      },
      {
        title: "Soporte Local y Offline",
        description: "Compatibilidad nativa con Ollama y GPUs locales para empresas preocupadas por la privacidad."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        title: "Consola de Orquestación de Agentes",
        description: "Visualización de turnos de diálogo, inspección de memoria contextual y registro de llamadas.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Tiempo de Resolución", value: "3x más rápido" },
      { label: "Autonomía", value: "15 pasos sin fallo" },
      { label: "Modelos Soportados", value: "10+ LLMs" }
    ],
    links: {
      githubUrl: "https://github.com/dani/mi-factoria-agentes"
    }
  },
  {
    id: "narco-game",
    slug: "narco-game",
    title: "Narco Game - Simulador Económico & Estrategia Web",
    tagline: "Juego de rol táctico online con economía en tiempo real, gestión de recursos y multijugador asíncrono.",
    shortDescription: "Videojuego web inmersivo que pone a prueba la toma de decisiones estratégicas, el cálculo de riesgos financieros, el control de territorios y la gestión de rutas de distribución en un mercado simulado de alta volatilidad.",
    category: "Gaming & Interactivo",
    status: "En Desarrollo Activo",
    featured: false,
    completionPercentage: 75,
    problemStatement: {
      summary: "Los juegos de navegador actuales suelen estar saturados de mecánicas 'pay-to-win' agresivas o carecen de profundidad económica real que recompense la inteligencia estratégica.",
      painPoints: [
        "Falta de simuladores económicos que reflejen oferta y demanda dinámica.",
        "Juegos móviles con interfaces saturadas de publicidad invasiva.",
        "Pocas opciones de juegos web tácticos que puedan jugarse desde cualquier dispositivo sin instalar gigabytes de datos."
      ]
    },
    solutionStatement: {
      summary: "Narco Game combina un motor de economía emergente donde los precios fluctúan según las acciones colectivas de los jugadores, con un sistema de combate táctico por turnos y alianzas entre jugadores.",
      benefits: [
        "Economía viva con inflación, escasez de suministros y mercados secundarios.",
        "Cero barrera de entrada: carga instantánea en navegador móvil y escritorio.",
        "Mecánicas de riesgo vs. recompensa calculadas matemáticamente.",
        "Comunidad activa con eventos semanales y guerras territoriales."
      ]
    },
    targetAudience: {
      profile: "Aficionados a juegos de simulación, gestión de recursos y estrategia económica (fans de títulos clásicos como Dope Wars o SimCity).",
      userTypes: [
        "Jugadores casuales que revisan su imperio varias veces al día desde el móvil.",
        "Estrategas competitivos que calculan márgenes y coordinan cárteles/alianzas online."
      ],
      marketOpportunity: "Los juegos de simulación y estrategia web/móvil retienen un público extremadamente fiel con un gasto medio por usuario (ARPU) muy saludable."
    },
    monetization: {
      isMonetizable: true,
      model: "Freemium + Addons",
      pricingStrategy: "Monetización ética: pases de temporada cosméticos (4.99€/temporada), aceleradores de tiempo no lesivos y suscripción VIP de conveniencia.",
      estimatedRevenue: "3.000€ - 8.000€/mes con una comunidad de 2.000 jugadores diarios.",
      commercialPotential: "Ideal para monetización publicitaria no intrusiva (anuncios recompensados) y microtransacciones.",
      forSale: {
        available: true,
        type: "Código Fuente",
        contactNote: "Motor de juego y lógica de backend adaptable a cualquier temática de simulación económica o RPG."
      }
    },
    techStack: {
      languages: ["TypeScript", "JavaScript", "SQL"],
      frameworks: ["Next.js", "React", "Canvas API / PixiJS", "Tailwind CSS"],
      databases: ["PostgreSQL (Supabase)", "Redis"],
      cloudAndDevops: ["Vercel", "WebSockets / Realtime Channels"],
      architectureHighlights: [
        "Motor de ticks para simulación de tiempo en el servidor, evitando trampas de cliente.",
        "Sincronización en tiempo real con WebSockets para avisos de ataques y cambios de precios.",
        "Cálculos de inventario y transacciones blindados con transacciones ACID en base de datos."
      ]
    },
    keyFeatures: [
      {
        title: "Mercado y Precios Dinámicos",
        description: "Algoritmo de oferta y demanda que reacciona a las compras y ventas de los jugadores en cada ciudad."
      },
      {
        title: "Gestión de Territorios y Propiedades",
        description: "Adquisición de laboratorios, almacenes, empresas tapadera y flotas de transporte."
      },
      {
        title: "Sistema de Alianzas y Guerras",
        description: "Creación de organizaciones criminales con chat privado y control de rutas compartidas."
      }
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        title: "Mapa Táctico y Panel Económico",
        description: "Vista de ciudades disponibles con cotizaciones de precios en tiempo real y rutas comerciales.",
        isCover: true
      }
    ],
    metrics: [
      { label: "Ticks de Servidor", value: "60 / min" },
      { label: "Transacciones ACID", value: "100% Seguras" },
      { label: "Tiempo de Carga", value: "0.5s" }
    ],
    links: {
      liveUrl: "https://narco-game.vercel.app",
      githubUrl: "https://github.com/dani/narco-game"
    }
  }
];

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

export const TECH_SKILLS: TechSkillCategory[] = [
  {
    category: "Lenguajes de Programación",
    skills: [
      { name: "TypeScript", level: "Avanzado / Experto", badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30", description: "Tipado estricto, interfaces complejas, desarrollo full-stack.", featuredIn: ["Crold", "NutricionApp", "Agenda v2", "Narco Game"] },
      { name: "JavaScript (ES6+)", level: "Avanzado / Experto", badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", description: "Asincronía, WebSockets, Canvas, optimización en navegador.", featuredIn: ["Todos los proyectos"] },
      { name: "Python", level: "Avanzado", badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", description: "FastAPI, análisis de datos, modelos de IA, telemetría IoT.", featuredIn: ["Factoría de Agentes IA", "Motor Industrial IoT", "NutricionApp"] },
      { name: "SQL (PostgreSQL)", level: "Avanzado", badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30", description: "Modelado relacional, RLS, índices, optimización de queries complejas.", featuredIn: ["Crold", "Agenda v2", "Motor Industrial", "Narco Game"] },
      { name: "Dart / Flutter", level: "Intermedio / Avanzado", badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30", description: "Desarrollo de apps móviles multiplataforma nativas.", featuredIn: ["NutricionApp"] },
      { name: "C++ / MicroPython", level: "Intermedio", badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30", description: "Microcontroladores ESP32/Arduino para sensorización IoT.", featuredIn: ["Motor Industrial IoT"] }
    ]
  },
  {
    category: "Frameworks & Frontend Moderno",
    skills: [
      { name: "Next.js (App Router)", level: "Experto", badgeColor: "bg-neutral-800 text-white border-neutral-600", description: "Server Components, Edge API routes, SSG/SSR, despliegues en Vercel." },
      { name: "React 18 / 19", level: "Experto", badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30", description: "Custom hooks, gestión de estado, React Server Actions, performance." },
      { name: "Tailwind CSS", level: "Experto", badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30", description: "Diseño responsivo, dark mode, arquitecturas de diseño limpias." },
      { name: "PWA (Progressive Web Apps)", level: "Avanzado", badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30", description: "Service Workers, cache offline, instalación móvil sin App Store." }
    ]
  },
  {
    category: "Backend, APIs & Bases de Datos",
    skills: [
      { name: "Node.js & Express", level: "Avanzado", badgeColor: "bg-green-500/20 text-green-300 border-green-500/30", description: "APIs RESTful, autenticación JWT, microservicios." },
      { name: "FastAPI (Python)", level: "Avanzado", badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", description: "Microservicios de alta velocidad asíncronos para IA e IoT." },
      { name: "Supabase & PostgreSQL", level: "Experto", badgeColor: "bg-emerald-600/20 text-emerald-300 border-emerald-600/30", description: "Auth, Storage, Realtime, Triggers y seguridad RLS." },
      { name: "Redis", level: "Intermedio / Avanzado", badgeColor: "bg-red-500/20 text-red-300 border-red-500/30", description: "Caché en memoria, rate limiting y colas de trabajo." }
    ]
  },
  {
    category: "Infraestructura, DevOps & Cloud",
    skills: [
      { name: "Vercel Platform", level: "Experto", badgeColor: "bg-neutral-800 text-white border-neutral-600", description: "CI/CD automático, Edge Functions, variables de entorno, analítica." },
      { name: "Docker & Contenedores", level: "Intermedio / Avanzado", badgeColor: "bg-blue-600/20 text-blue-300 border-blue-600/30", description: "Contenerización de microservicios y bases de datos locales." },
      { name: "Git & GitHub Actions", level: "Avanzado", badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30", description: "Flujos de trabajo GitFlow, testing automatizado, despliegues." },
      { name: "Stripe Connect & Pagos", level: "Avanzado", badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", description: "Pasarelas de cobro, suscripciones recurrentes, webhooks seguros." }
    ]
  }
];

export const FOUNDER_PROFILE = {
  name: "Daniel",
  title: "Ingeniero de Software & Creador de Productos Digitales (Indie Maker)",
  bio: "Ingeniero enfocado en transformar problemas reales de empresas y usuarios en aplicaciones web, móviles y SaaS escalables y monetizables. Diseño y programo la arquitectura de extremo a extremo: desde la base de datos y la lógica de backend hasta interfaces intuitivas y modelos de negocio viables.",
  status: "Construyendo y comercializando aplicaciones de software.",
  availability: "Abierto a venta de proyectos, licencias de software, contratos de desarrollo a medida y oportunidades estratégicas.",
  email: "contacto@danidev.pro", // Placeholder editable por Daniel
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  metrics: [
    { label: "Apps y Proyectos Desarrollados", value: "6+" },
    { label: "Lenguajes & Stacks Dominados", value: "8+" },
    { label: "Enfoque", value: "100% Monetizable" },
    { label: "Despliegue", value: "Vercel & Cloud" }
  ]
};
