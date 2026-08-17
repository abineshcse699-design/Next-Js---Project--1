export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  bullets: string[];
  eyebrow: string;
};

export const services: Service[] = [
  {
    slug: "enterprise-product-engineering",
    number: "01",
    title: "Enterprise Product Engineering",
    shortTitle: "Enterprise Product Engineering",
    eyebrow: "PRODUCT ENGINEERING",
    description:
      "We co-create what's massive for our clients, from ideation through launch with an exceptional engineering framework.",
    details:
      "We help enterprises transform ambitious product ideas into scalable, production-ready digital platforms. Our teams work across product strategy, architecture, engineering, quality and continuous improvement.",
    bullets: [
      "Product discovery & technical strategy",
      "Scalable software architecture",
      "Full-stack product engineering",
      "Cloud-native application development",
      "Continuous delivery & optimization",
    ],
  },

  {
    slug: "ai-ml-genai-llm",
    number: "02",
    title: "Enterprise AI/ML, GenAI & LLM",
    shortTitle: "Enterprise AI / ML, GenAI & LLM",
    eyebrow: "ARTIFICIAL INTELLIGENCE",
    description:
      "We collaborate closely with you to identify the most suitable AI models and build solutions around real business challenges.",
    details:
      "From intelligent automation to enterprise copilots and custom LLM solutions, we design AI systems around measurable business outcomes.",
    bullets: [
      "Generative AI applications",
      "LLM integration & orchestration",
      "RAG architecture",
      "AI agents & automation",
      "Machine learning engineering",
    ],
  },

  {
    slug: "saas-product-engineering",
    number: "03",
    title: "SaaS Product Engineering",
    shortTitle: "SaaS Product Engineering",
    eyebrow: "SAAS",
    description:
      "From fintech and healthcare to e-commerce and enterprise software, we've built SaaS products for demanding organizations.",
    details:
      "We engineer SaaS products that are secure, scalable and designed for long-term growth, from MVP to enterprise scale.",
    bullets: [
      "Multi-tenant SaaS architecture",
      "Subscription & billing systems",
      "API-first platforms",
      "Security & compliance",
      "SaaS modernization",
    ],
  },

  {
    slug: "data-engineering-data-science",
    number: "04",
    title: "Data Engineering & Data Science",
    shortTitle: "Data Engineering & Data Science",
    eyebrow: "DATA",
    description:
      "We build complete data infrastructure while turning complex datasets into useful insights and patterns.",
    details:
      "Our data engineering and science teams create reliable data platforms that make analytics and intelligent decision-making faster.",
    bullets: [
      "Data platform architecture",
      "ETL & ELT pipelines",
      "Data warehouses & lakes",
      "Predictive analytics",
      "Machine learning pipelines",
    ],
  },

  {
    slug: "cloud-engineering",
    number: "05",
    title: "Cloud Engineering — AWS, Azure, GCP",
    shortTitle: "Cloud Engineering",
    eyebrow: "CLOUD",
    description:
      "Comprehensive cloud engineering services across AWS, Azure and GCP, from design through maintenance and support.",
    details:
      "We build resilient cloud platforms designed for performance, security and cost efficiency.",
    bullets: [
      "Cloud architecture",
      "AWS, Azure & GCP",
      "Cloud migration",
      "Kubernetes & containers",
      "Cloud DevOps",
    ],
  },

  {
    slug: "legacy-software-modernization",
    number: "06",
    title: "Legacy Software Modernization",
    shortTitle: "Legacy Software Modernization",
    eyebrow: "MODERNIZATION",
    description:
      "We assess legacy systems, develop a migration strategy and create a smooth transition toward future-ready platforms.",
    details:
      "Modernize aging systems without disrupting business operations. We incrementally transform legacy applications into maintainable, scalable platforms.",
    bullets: [
      "Legacy assessment",
      "Modernization roadmap",
      "Application migration",
      "Monolith to microservices",
      "Platform re-engineering",
    ],
  },

  {
    slug: "business-intelligence",
    number: "07",
    title: "Reporting & Dashboard — BI",
    shortTitle: "Reporting & Dashboard — BI",
    eyebrow: "BUSINESS INTELLIGENCE",
    description:
      "We transform data into actionable insights using modern BI platforms such as Tableau and Power BI.",
    details:
      "Give business teams a clear view of performance with intuitive dashboards and data-driven reporting systems.",
    bullets: [
      "Power BI development",
      "Tableau dashboards",
      "Executive reporting",
      "Data visualization",
      "KPI frameworks",
    ],
  },

  {
    slug: "automotive-engineering",
    number: "08",
    title: "Automotive Engineering Services",
    shortTitle: "Automotive Engineering",
    eyebrow: "AUTOMOTIVE",
    description:
      "End-to-end engineering solutions for the automotive industry and the transition to the digital mobility ecosystem.",
    details:
      "We combine software, cloud and data engineering capabilities to support next-generation mobility products.",
    bullets: [
      "Connected vehicle platforms",
      "Mobility applications",
      "Automotive cloud",
      "Digital engineering",
      "Data platforms",
    ],
  },

  {
    slug: "revenue-cycle-management",
    number: "09",
    title: "Revenue Cycle Management Service",
    shortTitle: "Revenue Cycle Management",
    eyebrow: "HEALTHCARE",
    description:
      "We assist healthcare organizations in streamlining revenue cycle operations and patient care workflows.",
    details:
      "Technology-driven RCM solutions designed around healthcare workflows, operational efficiency and compliance.",
    bullets: [
      "Revenue cycle automation",
      "Healthcare workflows",
      "Claims processing",
      "Analytics & reporting",
      "HIPAA-conscious engineering",
    ],
  },

  {
    slug: "cybersecurity",
    number: "10",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    eyebrow: "SECURITY",
    description:
      "We help build robust and resilient cyber frameworks for modern IT infrastructure.",
    details:
      "Security engineering integrated into applications, infrastructure and cloud environments.",
    bullets: [
      "Security architecture",
      "Application security",
      "Cloud security",
      "Threat monitoring",
      "Security automation",
    ],
  },

  {
    slug: "ui-ux-consulting",
    number: "11",
    title: "UI/UX Consulting",
    shortTitle: "UI/UX Consulting",
    eyebrow: "DESIGN",
    description:
      "We design meaningful digital products that balance user needs with business objectives.",
    details:
      "From product discovery to polished interfaces, we create digital experiences that are intuitive, accessible and conversion-focused.",
    bullets: [
      "UX research",
      "Product design",
      "Design systems",
      "Interaction design",
      "Usability optimization",
    ],
  },

  {
    slug: "devops-quality-engineering",
    number: "12",
    title: "DevOps & Quality Engineering",
    shortTitle: "DevOps & Quality Engineering",
    eyebrow: "DELIVERY",
    description:
      "We help teams get products to market faster with DevOps and automated quality engineering.",
    details:
      "We combine CI/CD, infrastructure automation and intelligent testing to improve software delivery velocity.",
    bullets: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Test automation",
      "Performance testing",
      "Release engineering",
    ],
  },
];