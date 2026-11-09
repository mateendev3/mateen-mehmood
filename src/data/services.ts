import type { Service } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SERVICES
 *  Shown on the homepage (cards) and on /services (full detail), in this order.
 *  Set `enabled: false` to hide a service without deleting it.
 *  `hero` adds the service as a tab in the homepage "What can I build for you?" card.
 *  Only list technologies you genuinely work with.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const services: Service[] = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'smartphone',
    summary: 'Flutter, React Native, native iOS & Android — including AI-powered features.',
    description:
      'Cross-platform with Flutter or React Native, or fully native with Swift and Kotlin — I pick what fits your product. I design the architecture, build the features (AI-powered ones included), integrate your backend and take care of the store releases.',
    solutions: [
      'Flutter cross-platform apps',
      'React Native apps',
      'Native iOS (Swift) & Android (Kotlin)',
      'AI features: assistants, smart search & more',
      'App Store & Google Play releases',
      'Improvements to existing apps',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart', 'Java', 'Firebase'],
    deliverables: [
      'Production-ready iOS & Android builds',
      'Clean, documented source code',
      'Store listing & release support',
    ],
    relatedCategories: ['Mobile Apps'],
    enabled: true,
    hero: { label: 'Mobile', preview: 'mobile' },
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'globe',
    summary: 'Modern websites, full-stack web applications and SaaS platforms.',
    description:
      'End-to-end web development: fast, responsive frontends, the APIs and databases behind them, and AI-powered features where they add value — from marketing sites and dashboards to complete SaaS platforms.',
    solutions: [
      'Frontends with React, Next.js & Vue',
      'Backends & REST / GraphQL APIs',
      'SaaS platforms & web apps',
      'AI features: copilots, chat & insights',
      'Dashboards & admin panels',
      'Responsive marketing websites',
    ],
    technologies: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'FastAPI',
      'Go',
      'PostgreSQL',
      'MongoDB',
    ],
    deliverables: ['Deployed, responsive web app', 'Source code & setup docs', 'Hand-off walkthrough'],
    relatedCategories: ['Web Applications'],
    enabled: true,
    hero: { label: 'Web', preview: 'web' },
  },
  {
    id: 'ai-integration',
    title: 'AI Development & Integration',
    icon: 'sparkles',
    summary: 'AI chatbots, assistants, smart search, LLM integrations and automation.',
    description:
      'I build and integrate AI where it adds real value: chatbots and assistants, smart search over your own data, LLM-powered features inside your apps, and automations that take repetitive work off your team.',
    solutions: [
      'AI chatbots & assistants',
      'LLM / AI API integration',
      'Smart search & knowledge bases (RAG)',
      'Business workflow automation',
      'AI features for mobile & web apps',
      'Prompt design & evaluation',
    ],
    technologies: ['Python', 'Node.js', 'FastAPI', 'LangChain', 'LLM APIs', 'Prompt engineering'],
    deliverables: ['Working AI feature or automation', 'Usage, cost & privacy considerations', 'Documentation'],
    relatedCategories: ['AI & Automation'],
    enabled: true,
    hero: { label: 'AI', preview: 'automation' },
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: 'layers',
    summary: 'Business systems, dashboards, ERP, CRM and custom software solutions.',
    description:
      'When off-the-shelf tools don’t fit, I build software around how your business actually works — internal systems, dashboards and platforms that connect to the tools you already use.',
    solutions: [
      'Business management systems',
      'ERP & CRM solutions',
      'Dashboards & reporting',
      'Admin panels & internal tools',
      'SaaS products',
      'Digitising manual workflows',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'NestJS', 'Python', 'PostgreSQL', 'MongoDB'],
    deliverables: ['Software tailored to your process', 'Technical documentation', 'Post-launch support options'],
    relatedCategories: ['Custom Software'],
    enabled: true,
    hero: { label: 'Custom Software', preview: 'business' },
  },
  {
    id: 'api-integrations',
    title: 'API & Third-Party Integrations',
    icon: 'puzzle',
    summary: 'Payment gateways, authentication, cloud services and external APIs.',
    description:
      'Connect your product to the services it depends on — reliably and securely. From payments and sign-in to cloud storage and partner APIs, I handle the integration work end to end.',
    solutions: [
      'Payment gateways (Stripe & more)',
      'Authentication & social sign-in',
      'Push notifications & messaging',
      'Cloud services & storage',
      'Third-party SDKs & external APIs',
      'Custom REST / GraphQL APIs',
    ],
    technologies: ['Stripe', 'Firebase', 'Node.js', 'GraphQL', 'REST APIs'],
    deliverables: ['Tested, documented integrations', 'Error handling & monitoring hooks', 'Hand-off notes'],
    relatedCategories: ['Custom Software', 'Mobile Apps', 'Web Applications'],
    enabled: true,
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance, Support & QA',
    icon: 'wrench',
    summary: 'Bug fixing, performance optimisation, testing and ongoing improvements.',
    description:
      'Live products need care: OS updates, dependency upgrades, crash fixes, regression testing and new features. I can step into your codebase and keep it moving — with confidence at every release.',
    solutions: [
      'Bug fixing & debugging',
      'Performance optimisation',
      'Framework & dependency upgrades',
      'Functional, regression & release testing',
      'Feature enhancements',
      'Existing codebase maintenance',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'React', 'Node.js', 'Firebase'],
    deliverables: ['Resolved issues with clear notes', 'Upgraded, tested builds', 'Recommendations for next steps'],
    relatedCategories: ['Mobile Apps', 'Web Applications'],
    enabled: true,
  },
];

export const activeServices = services.filter((s) => s.enabled);
