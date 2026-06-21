// ============================================================================
// Site Content Data — Angélica Rojas Portfolio
// All copy and structured data is centralized here for easy maintenance.
// ============================================================================

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  results: string[];
  tags: string[];
  image?: string;
  pdf?: string;
}

export interface SuccessStory {
  metric: string;
  title: string;
  description: string;
  context: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface SkillCategories {
  strategic: string[];
  creative: string[];
  digital: string[];
  tools: string[];
  leadership: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

// ─── Site Config ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Angélica Rojas',
  title: 'Estratega de Comunicación Corporativa',
  tagline: 'Comunicación que transforma marcas, construye reputación y genera resultados.',
  description:
    'Comunicadora Social con más de 15 años liderando estrategias de comunicación corporativa, branding y marketing digital. Especializada en convertir la comunicación en un activo estratégico para organizaciones líderes en América Latina.',
  url: 'https://angelicarojas.com',
  email: 'contacto@angelicarojas.com',
  phone: '+57 300 123 4567',
  location: 'Bogotá, Colombia',
} as const;

export const socialLinks: SocialLink[] = [
  { name: 'linkedin',  href: 'https://linkedin.com/in/angelicarojas',  label: 'LinkedIn' },
  { name: 'instagram', href: 'https://instagram.com/angelicarojas',    label: 'Instagram' },
  { name: 'twitter',   href: 'https://x.com/angelicarojas',            label: 'X (Twitter)' },
  { name: 'behance',   href: 'https://behance.net/angelicarojas',      label: 'Behance' },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: 'Inicio',         href: '#inicio' },
  { label: 'Sobre Mí',       href: '#sobre-mi' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Portafolio',     href: '#portafolio' },
  { label: 'Experiencia',    href: '#experiencia' },
  { label: 'Contacto',       href: '#contacto' },
];

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero = {
  headline: 'Comunicación estratégica que transforma marcas y construye reputación.',
  subheadline:
    'Más de 15 años diseñando estrategias de comunicación corporativa, branding y marketing digital para organizaciones líderes en América Latina.',
  cta: {
    primary:   { label: 'Ver Portafolio', href: '#portafolio' },
    secondary: { label: 'Hablemos',       href: '#contacto' },
  },
  stats: [
    { value: '15+', label: 'Años de experiencia' },
    { value: '80+', label: 'Proyectos estratégicos' },
    { value: '35+', label: 'Marcas transformadas' },
    { value: '12',  label: 'Países alcanzados' },
  ] as HeroStat[],
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about = {
  headline: 'Transformo la comunicación en un activo estratégico',
  paragraphs: [
    'Soy Angélica Rojas, Comunicadora Social y Periodista con más de 15 años de trayectoria liderando estrategias de comunicación corporativa, branding y marketing digital en sectores como tecnología, servicios financieros, salud y consumo masivo.',
    'Mi enfoque combina pensamiento estratégico con ejecución creativa. He dirigido equipos multidisciplinarios en agencias de comunicación y departamentos corporativos, siempre con una visión orientada a resultados medibles y construcción de reputación sostenible.',
    'Creo firmemente que la comunicación bien ejecutada no solo informa: posiciona, diferencia y genera valor tangible para las organizaciones. Cada proyecto que lidero parte de un diagnóstico profundo y una estrategia clara que conecta los objetivos del negocio con las audiencias correctas.',
  ],
  highlights: [
    { value: '50+', label: 'Campañas lideradas' },
    { value: '15+', label: 'Equipos dirigidos' },
    { value: '200%', label: 'ROI promedio en campañas' },
  ] as HeroStat[],
};

// ─── Specialties ─────────────────────────────────────────────────────────────

export const specialties: Specialty[] = [
  {
    title: 'Comunicación Estratégica',
    description:
      'Diseño de planes integrales de comunicación alineados con objetivos corporativos, asegurando coherencia en todos los puntos de contacto con stakeholders clave.',
    icon: 'strategy',
  },
  {
    title: 'Comunicación Corporativa',
    description:
      'Gestión de la identidad y reputación organizacional mediante narrativas institucionales sólidas, relaciones con medios y comunicación interna efectiva.',
    icon: 'corporate',
  },
  {
    title: 'Branding & Posicionamiento',
    description:
      'Construcción y fortalecimiento de marcas con propósito, desde la definición de identidad verbal y visual hasta la activación en canales estratégicos.',
    icon: 'branding',
  },
  {
    title: 'Marketing Digital',
    description:
      'Estrategias de contenido, campañas de performance, SEO, email marketing y gestión de comunidades digitales con enfoque en conversión y engagement.',
    icon: 'digital',
  },
  {
    title: 'Copywriting & Contenidos',
    description:
      'Creación de contenidos persuasivos y de alto impacto para medios digitales, editoriales, campañas publicitarias y comunicación corporativa.',
    icon: 'content',
  },
  {
    title: 'Gestión de Crisis',
    description:
      'Protocolos de comunicación de crisis, monitoreo de reputación, respuesta rápida ante situaciones sensibles y recuperación de confianza institucional.',
    icon: 'crisis',
  },
  {
    title: 'Producción Multimedia',
    description:
      'Dirección y producción de contenido audiovisual, podcasts, webinars y piezas multimedia para plataformas corporativas y campañas digitales.',
    icon: 'multimedia',
  },
  {
    title: 'Liderazgo & Gestión',
    description:
      'Formación y dirección de equipos creativos multidisciplinarios, gestión de proyectos con metodologías ágiles y optimización de flujos de trabajo.',
    icon: 'leadership',
  },
];

// ─── Portfolio ───────────────────────────────────────────────────────────────

export const portfolio: Project[] = [
  {
    title: 'Rediseño de Comunicación Interna — TechCorp',
    category: 'Comunicación Corporativa',
    description:
      'Lideré la transformación del ecosistema de comunicación interna de una multinacional tecnológica con más de 3.000 colaboradores, implementando una plataforma digital integrada y una nueva narrativa de cultura organizacional.',
    results: ['+40% de engagement interno', '−25% de rotación de personal', 'NPS interno de 78 puntos'],
    tags: ['Comunicación Interna', 'Cultura Organizacional', 'Plataformas Digitales'],
    image: '/assets/images/generica.jpeg',
    pdf: '/assets/docs/caso-exito.pdf',
  },
  {
    title: 'Campaña de Rebranding Global — FinanzasPlus',
    category: 'Branding',
    description:
      'Dirigí el reposicionamiento de marca de una fintech latinoamericana, incluyendo nueva identidad verbal, arquitectura de mensajes, lanzamiento en 5 mercados simultáneos y cobertura mediática internacional.',
    results: ['+120% de reconocimiento de marca', '45 medios con cobertura', '3.2M de impresiones en lanzamiento'],
    tags: ['Rebranding', 'Estrategia de Marca', 'Relaciones Públicas'],
    image: '/assets/images/generica-1.jpeg',
  },
  {
    title: 'Estrategia Digital — Fundación Salud Vital',
    category: 'Marketing Digital',
    description:
      'Diseñé e implementé la estrategia de marketing digital completa para una ONG del sector salud, multiplicando su alcance, base de donantes y presencia en medios digitales.',
    results: ['+300% de tráfico orgánico', '+180% de donaciones online', '85K seguidores nuevos en redes'],
    tags: ['SEO', 'Content Marketing', 'Redes Sociales'],
    pdf: '/assets/docs/para-empezar-entradas.pdf',
  },
  {
    title: 'Gestión de Crisis Reputacional — Grupo Andino',
    category: 'Gestión de Crisis',
    description:
      'Lideré el protocolo de comunicación de crisis para un conglomerado empresarial durante una contingencia mediática de alto impacto, protegiendo la reputación corporativa y restaurando la confianza de stakeholders.',
    results: ['Crisis contenida en 72 horas', 'Recuperación de confianza en 30 días', '0 pérdida de clientes clave'],
    tags: ['Comunicación de Crisis', 'Reputación', 'Stakeholders'],
  },
  {
    title: 'Producción Editorial — Revista Perspectiva',
    category: 'Producción de Contenidos',
    description:
      'Dirección editorial de una publicación corporativa trimestral distribuida en 8 países, con contenido de liderazgo de pensamiento para C-Level del sector financiero.',
    results: ['32 ediciones publicadas', 'Distribución en 8 países', '15K lectores por edición'],
    tags: ['Dirección Editorial', 'Thought Leadership', 'Contenido Premium'],
    image: '/assets/images/generica-3.jpeg',
    pdf: '/assets/docs/wifi-empresas-futuro.pdf',
  },
  {
    title: 'Campaña de Employer Branding — InnovaTech',
    category: 'Employer Branding',
    description:
      'Creación e implementación de la estrategia de marca empleadora para una empresa de tecnología, posicionándola como uno de los mejores lugares para trabajar en el sector.',
    results: ['+200% de aplicaciones calificadas', 'Top 10 Great Place to Work', '−35% de tiempo de contratación'],
    tags: ['Employer Branding', 'Talento', 'Cultura'],
  },
];

// ─── Success Stories ─────────────────────────────────────────────────────────

export const successStories: SuccessStory[] = [
  {
    metric: '+40%',
    title: 'Engagement Interno',
    description:
      'Incremento en la participación activa de colaboradores tras implementar un ecosistema de comunicación interna digital en una multinacional tecnológica.',
    context: 'TechCorp · Comunicación Interna',
  },
  {
    metric: '+300%',
    title: 'Tráfico Orgánico',
    description:
      'Crecimiento del tráfico web orgánico mediante una estrategia integral de SEO y marketing de contenidos para una fundación del sector salud.',
    context: 'Fundación Salud Vital · Marketing Digital',
  },
  {
    metric: '72h',
    title: 'Contención de Crisis',
    description:
      'Tiempo récord de contención en una crisis reputacional de alto impacto mediático para un conglomerado empresarial con presencia regional.',
    context: 'Grupo Andino · Gestión de Crisis',
  },
  {
    metric: '3.2M',
    title: 'Impresiones de Lanzamiento',
    description:
      'Impacto mediático logrado en el lanzamiento simultáneo de rebranding de una fintech en 5 mercados latinoamericanos.',
    context: 'FinanzasPlus · Rebranding Global',
  },
];

// ─── Timeline ────────────────────────────────────────────────────────────────

export const timeline: TimelineEntry[] = [
  {
    period: '2022 — Presente',
    role: 'Directora de Comunicación Estratégica',
    company: 'Consultora Independiente',
    description:
      'Consultoría estratégica en comunicación corporativa, branding y reputación para empresas de tecnología, fintech y organizaciones sin fines de lucro en América Latina.',
    achievements: [
      'Gestión de más de 20 proyectos estratégicos',
      'Consultoría para marcas en 6 países',
      'Formación de equipos de comunicación en startups',
    ],
  },
  {
    period: '2018 — 2022',
    role: 'Head of Corporate Communications',
    company: 'TechCorp Latinoamérica',
    description:
      'Liderazgo del departamento de comunicaciones corporativas para la operación regional, gestionando la reputación institucional, relaciones con medios y comunicación interna.',
    achievements: [
      'Equipo de 12 profesionales a cargo',
      'Implementación de plataforma de comunicación interna',
      'Gestión exitosa de 3 crisis reputacionales',
    ],
  },
  {
    period: '2015 — 2018',
    role: 'Directora de Cuentas',
    company: 'Agencia Narrativa 360',
    description:
      'Dirección estratégica de cuentas clave en una agencia de comunicación integral, liderando proyectos de branding, relaciones públicas y marketing digital.',
    achievements: [
      'Portafolio de 15 clientes corporativos',
      'Crecimiento de facturación del 45%',
      'Implementación de metodología ágil',
    ],
  },
  {
    period: '2012 — 2015',
    role: 'Coordinadora de Comunicación Digital',
    company: 'Grupo Financiero Andino',
    description:
      'Coordinación de la estrategia de comunicación digital y gestión de comunidades para un grupo financiero con presencia en 4 países de la región andina.',
    achievements: [
      'Lanzamiento de canales digitales corporativos',
      'Estrategia de contenido para 4 mercados',
      'Primer equipo de social media del grupo',
    ],
  },
  {
    period: '2009 — 2012',
    role: 'Comunicadora Corporativa',
    company: 'Salud & Bienestar S.A.',
    description:
      'Gestión de comunicaciones corporativas, relaciones con medios y producción de contenido editorial para una empresa líder del sector salud.',
    achievements: [
      'Lanzamiento de revista corporativa trimestral',
      'Cobertura en más de 20 medios nacionales',
      'Desarrollo del primer blog corporativo del sector',
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: SkillCategories = {
  strategic: [
    'Comunicación Estratégica',
    'Planificación de Medios',
    'Gestión de Crisis',
    'Relaciones Públicas',
    'Comunicación Interna',
    'Employer Branding',
    'Gestión de Stakeholders',
    'Reputación Corporativa',
  ],
  creative: [
    'Copywriting',
    'Storytelling',
    'Dirección Editorial',
    'Producción Audiovisual',
    'Dirección de Arte',
    'UX Writing',
    'Content Strategy',
    'Brand Voice',
  ],
  digital: [
    'Marketing Digital',
    'SEO & SEM',
    'Social Media Management',
    'Email Marketing',
    'Analytics & Data',
    'CRM',
    'Marketing Automation',
    'Growth Marketing',
  ],
  tools: [
    'HubSpot',
    'Google Analytics',
    'Semrush',
    'Hootsuite',
    'Adobe Creative Suite',
    'Canva Pro',
    'Mailchimp',
    'Notion',
    'Monday.com',
    'Figma',
    'WordPress',
    'Meta Business Suite',
  ],
  leadership: [
    'Liderazgo de Equipos',
    'Gestión de Proyectos',
    'Metodologías Ágiles',
    'Formación de Talento',
    'Negociación',
    'Presentaciones Ejecutivas',
  ],
};

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      'Angélica no solo ejecuta estrategias de comunicación, las diseña con una visión de negocio que pocas veces he visto en profesionales del área. Su capacidad para conectar objetivos corporativos con narrativas poderosas transformó nuestra presencia de marca.',
    name: 'Andrés Villamizar',
    role: 'CEO',
    company: 'TechCorp Latinoamérica',
  },
  {
    quote:
      'Durante la crisis más compleja que enfrentamos como organización, Angélica fue nuestra brújula estratégica. Su manejo fue impecable: rápido, preciso y siempre dos pasos adelante. Recuperamos la confianza de nuestros stakeholders en tiempo récord.',
    name: 'Patricia Mendoza',
    role: 'VP de Asuntos Corporativos',
    company: 'Grupo Andino',
  },
  {
    quote:
      'Trabajar con Angélica fue un punto de inflexión para nuestra fundación. Pasamos de tener presencia digital mínima a convertirnos en referentes del sector, triplicando nuestro alcance y multiplicando las donaciones online.',
    name: 'Roberto Espinosa',
    role: 'Director Ejecutivo',
    company: 'Fundación Salud Vital',
  },
  {
    quote:
      'La capacidad de Angélica para liderar equipos creativos y extraer lo mejor de cada profesional es extraordinaria. Bajo su dirección, nuestras cuentas clave crecieron en facturación un 45%.',
    name: 'Valentina Ochoa',
    role: 'Socia Directora',
    company: 'Agencia Narrativa 360',
  },
];

// ─── CTA ─────────────────────────────────────────────────────────────────────

export const cta = {
  headline: '¿Listo para transformar tu comunicación en un activo estratégico?',
  description:
    'Cada marca tiene una historia poderosa que contar. Trabajemos juntos para diseñar la estrategia que posicione tu organización, construya reputación y genere resultados medibles.',
  button: { label: 'Iniciemos una conversación', href: '#contacto' },
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contact = {
  headline: 'Hablemos de tu próximo proyecto',
  description:
    'Ya sea que necesites una estrategia de comunicación integral, consultoría en gestión de crisis, o un aliado estratégico para potenciar tu marca — estoy aquí para ayudarte.',
};
