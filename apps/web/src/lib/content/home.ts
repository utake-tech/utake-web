// Home page content — single source of truth.
// Sections import only what they need from here; no content lives in components.

export interface HeroStat {
  value: string;
  label: [string, string];
  gradient?: boolean;
}

export interface HeroContent {
  badge: string;
  headline: string;
  headlineGradient: string;
  /** HTML string — only <strong> tags; content is trusted (static, not user input) */
  body: string;
  cta: { primary: string; secondary: string };
  stats: HeroStat[];
}

// ─── Problemas ───────────────────────────────────────────────────────────────

export interface Problem {
  num: string;
  label: string;
  /** Inner SVG path(s) — rendered inside a 24×24 Lucide outline icon */
  icon: string;
}

export interface ProblemasContent {
  badge: string;
  headline: string;
  body: string;
  items: Problem[];
}

export const problemasContent: ProblemasContent = {
  badge: "El reto",
  headline: "Cuando la IA acelera el delivery, también acelera los riesgos.",
  body: "Ayudamos a equipos que ya usan IA o quieren adoptarla sin perder calidad, arquitectura ni contexto.",
  items: [
    {
      num: "01",
      label: "Código generado más rápido que la revisión.",
      icon: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    },
    {
      num: "02",
      label: "Specs ambiguos.",
      icon: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    },
    {
      num: "03",
      label: "Arquitectura sin límites.",
      icon: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    },
    {
      num: "04",
      label: "Contexto perdido en el repositorio.",
      icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    },
    {
      num: "05",
      label: "Deuda técnica creciendo silenciosamente.",
      icon: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    },
  ],
};

// ─── Soluciones ──────────────────────────────────────────────────────────────

export interface Solucion {
  icon: string;
  title: string;
  when: string;
  deliver: string;
}

export interface SolucionesContent {
  badge: string;
  headline: string;
  body: string;
  items: Solucion[];
}

export const solucionesContent: SolucionesContent = {
  badge: "Servicios",
  headline: "¿Qué podemos construir para ti?",
  body: "Desde el sistema desde cero hasta el mantenimiento de lo que ya tienes. Sin intermediarios, todo con ingenieros senior.",
  items: [
    {
      icon: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
      title: "Ingeniería de Software a Medida",
      when: "Quieres construir un producto desde cero y necesitas que la arquitectura soporte crecimiento sin acumular deuda técnica.",
      deliver: "Sistema diseñado con decisiones técnicas documentadas, arquitectura escalable y base de código lista para equipos y producción.",
    },
    {
      icon: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
      title: "DevOps & CI/CD",
      when: "Tu equipo entrega código pero los despliegues son manuales, lentos o propensos a errores humanos.",
      deliver: "Pipelines de CI/CD con tests automáticos, observabilidad y rollback — infraestructura como código desde el día uno.",
    },
    {
      icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
      title: "Mantenimiento & Evolución",
      when: "Heredaste un sistema en producción y necesitas evolucionar funcionalidades sin romper lo que ya funciona.",
      deliver: "Refactorización incremental, features nuevas con cobertura de tests y deuda técnica mapeada y priorizada.",
    },
  ],
};

// ─── Metodología ─────────────────────────────────────────────────────────────

export interface MetodologiaContent {
  quoteMain: string;
  quoteGradient: string;
  body: string;
  tags: string[];
}

export const metodologiaContent: MetodologiaContent = {
  quoteMain: "El spec no crea claridad.",
  quoteGradient: "La claridad crea el spec.",
  body: "Usamos IA para acelerar el pensamiento técnico previo:",
  tags: ["tradeoffs", "supuestos", "arquitectura", "contexto", "validación"],
};

// ─── Servicios ───────────────────────────────────────────────────────────────

export interface Service {
  icon: string;
  title: string;
  when: string;
  deliver: string;
}

export interface ServiciosContent {
  badge: string;
  headline: string;
  body: string;
  items: Service[];
}

export const serviciosContent: ServiciosContent = {
  badge: "Dónde ayudamos",
  headline: "Las capas que el código generado por IA necesita",
  body: "Si la IA genera más rápido, la validación, la arquitectura y el contexto tienen que escalar al mismo ritmo. Esos son nuestros frentes de trabajo.",
  items: [
    {
      icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
      title: "Design-First Development",
      when: "Arrancas algo nuevo o vas a generar código con IA a gran escala.",
      deliver: "Diseño, tradeoffs y supuestos resueltos antes de la primera línea.",
    },
    {
      icon: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
      title: "Autonomous Quality Engineering",
      when: "La IA genera más rápido de lo que tu equipo puede revisar.",
      deliver: "Una capa que valida, revisa y documenta el output, con métricas y monitoreo.",
    },
    {
      icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
      title: "Architecture Thinking",
      when: "El sistema crece y empieza a perder límites y consistencia.",
      deliver: "Restricciones que se hacen cumplir solas (fitness functions) y production readiness.",
    },
    {
      icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
      title: "Product-Aware Engineering",
      when: "Cada decisión técnica debe alinearse con el negocio.",
      deliver: "Frameworks ligeros para evaluar tradeoffs con criterio de producto.",
    },
    {
      icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
      title: "Context Engineering",
      when: "El conocimiento vive en una sola cabeza o se pierde en el repo.",
      deliver: "Repository intelligence que sintetiza y distribuye el contexto del proyecto.",
    },
    {
      icon: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
      title: "Agentic Custom Workflows",
      when: "Quieres que la IA mejore cómo tu equipo construye, de punta a punta.",
      deliver: "Agentes y workflows a medida integrados en tu proceso.",
    },
  ],
};

// ─── Equipo ───────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  specialty: string;
  exp: string;
  bio: string;
  photo: string;
  linkedin: string;
}

export interface EquipoContent {
  badge: string;
  headline: string;
  body: string;
  members: TeamMember[];
}

export const equipoContent: EquipoContent = {
  badge: "Seniority",
  headline: "Fundada por tres ingenieros de software senior",
  body: "Sin juniors, sin intermediarios. Cada decisión técnica la toma alguien con más de ocho años construyendo software de producción.",
  members: [
    {
      name: "Herald Olivares",
      specialty: "Backend & Arquitectura",
      exp: "+12 años",
      bio: "Senior Software Engineer y MSc en Ingeniería de Software (U. de los Andes). Backend y sistemas distribuidos escalables (Python, Django, AWS) con spec-driven development y workflows agénticos de IA. Experiencia trabajando con clientes en Estados Unidos.",
      photo: "/team/team-herald.jpeg",
      linkedin: "https://www.linkedin.com/in/herald-matias-olivares-zarsoza",
    },
    {
      name: "Joel Sulca",
      specialty: "Frontend & Microfrontends",
      exp: "+8 años",
      bio: "Lead Engineer especializado en arquitecturas de microfrontends y librerías core cross-team para banca. Spec-driven development e ingeniería asistida por IA: validación automatizada, CI/CD y workflows agénticos integrados al ciclo de desarrollo.",
      photo: "/team/team-joel.jpeg",
      linkedin: "https://www.linkedin.com/in/joel-sulca-cordova",
    },
    {
      name: "Leonardo Aquino",
      specialty: "Liderazgo Técnico",
      exp: "+10 años",
      bio: "Technical Leader con +10 años entregando software para sector público y privado. Lidera equipos frontend y alinea cada decisión técnica con producto y negocio. Gestiona roadmaps técnicos y coordina con stakeholders en proyectos de alto impacto.",
      photo: "/team/team-leonardo.jpeg",
      linkedin: "https://www.linkedin.com/in/leonardo-jose-aquino-carhuatocto-2a46a040",
    },
  ],
};

// ─── Empezar ──────────────────────────────────────────────────────────────────

export interface StarterStep {
  num: string;
  title: string;
  results: string[];
}

export interface EmpezarContent {
  badge: string;
  headline: string;
  body: string;
  steps: StarterStep[];
}

export const empezarContent: EmpezarContent = {
  badge: "Primeros pasos",
  headline: "Tres formas de empezar",
  body: "No vendemos un proyecto cerrado. Empezamos por una primera conversación con un entregable concreto.",
  steps: [
    {
      num: "01",
      title: "Diagnóstico técnico AI-First",
      results: ["Mapa de riesgos", "Oportunidades", "Siguientes pasos"],
    },
    {
      num: "02",
      title: "Architecture & Spec Sprint",
      results: ["Spec", "Tradeoffs", "Decisiones arquitectónicas", "Roadmap"],
    },
    {
      num: "03",
      title: "Agentic Workflow Pilot",
      results: ["Workflow funcional", "Validadores", "Plan de producción"],
    },
  ],
};

// ─── Contacto ─────────────────────────────────────────────────────────────────

export interface ContactoContent {
  badge: string;
  headline: string;
  body: string;
  cta: string;
  ctaNote: string;
}

export const contactoContent: ContactoContent = {
  badge: "Contacto",
  headline: "Cuéntanos qué quieres construir.",
  body: "Sin importar en qué etapa estás — idea nueva, sistema existente o equipo que necesita refuerzo — empezamos con una conversación.",
  cta: "Conversemos",
  ctaNote: "Te respondemos en menos de 24 h con preguntas reales, no con una cotización genérica.",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterContent {
  tagline: string;
  disciplinaLinks: { label: string; href: string }[];
  empresaLinks: { label: string; href: string }[];
  copyright: string;
}

export const footerContent: FooterContent = {
  tagline: "Construimos software inteligente para el futuro. Spec-driven, AI-first, sin deuda técnica.",
  disciplinaLinks: [
    { label: "Spec-Driven Architecture", href: "#servicios" },
    { label: "Quality Engineering", href: "#servicios" },
    { label: "Product-Aware Engineering", href: "#servicios" },
  ],
  empresaLinks: [
    { label: "Equipo", href: "#equipo" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Contacto", href: "#contacto" },
  ],
  copyright: "© 2026 UTAKE TECH · Consultoría boutique AI-First",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroContent: HeroContent = {
  badge: "Ingeniería de software · AI-First",
  headline: "No solo aceleramos software con IA. Diseñamos sistemas",
  headlineGradient: "confiables, mantenibles y listos para crecer",
  body: "Ayudamos a equipos de producto e ingeniería a convertir ideas, specs y código generado por IA en software con <strong>arquitectura, calidad y contexto real de negocio</strong> — usando la IA como <strong>Socio de Pensamiento</strong>, no como un simple generador.",
  cta: {
    primary: "Agendar reunión",
    secondary: "Ver cómo trabajamos",
  },
  stats: [
    { value: "+8", label: ["Años de experiencia", "por ingeniero"] },
    { value: "3", label: ["Ingenieros senior", "fundadores"] },
    { value: "0", label: ["Deuda técnica", "de origen"], gradient: true },
  ],
};
