import type { Service } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SERVICES
 *  Shown on the homepage (cards) and on /services (full detail), in this order.
 *  Set `enabled: false` to hide a service without deleting it.
 *  Only list technologies you genuinely work with.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const services: Service[] = [
  {
    id: 'ai-mobile-apps',
    title: 'AI-Powered Mobile Apps',
    icon: 'smartphone',
    summary: 'iOS and Android apps with intelligence built in — assistants, smart search, recommendations and more.',
    description:
      'Mobile apps that do more than display data. I build Flutter and native apps with AI features designed in from the start — or add them to the app you already have — with the right balance of on-device and cloud intelligence.',
    solutions: [
      'In-app AI assistants & chat',
      'Smart search & recommendations',
      'Content generation & summarisation',
      'Image & text understanding features',
      'Adding AI to existing apps',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'LLM APIs'],
    deliverables: ['Production-ready iOS & Android builds', 'Integrated, tested AI features', 'Store release support'],
    relatedCategories: ['Mobile Apps', 'AI & Automation'],
    enabled: true,
    hero: { label: 'AI Mobile', preview: 'ai-mobile' },
  },
  {
    id: 'ai-web-apps',
    title: 'AI-Powered Web Apps',
    icon: 'globe',
    summary: 'Web platforms and SaaS products with AI at their core — chat, copilots, automation and insights.',
    description:
      'From AI copilots inside dashboards to complete AI-first SaaS products, I build web applications where AI is part of the product — backed by solid APIs and sensible cost and privacy decisions.',
    solutions: [
      'AI copilots & chat interfaces',
      'AI-first SaaS products',
      'Document & data processing',
      'Knowledge-base assistants',
      'AI features for existing platforms',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'LLM APIs'],
    deliverables: ['Deployed web application', 'Integrated AI features & prompts', 'Source code & documentation'],
    relatedCategories: ['Web Applications', 'AI & Automation'],
    enabled: true,
    hero: { label: 'AI Web', preview: 'ai-web' },
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'layers',
    summary: 'Flutter, React Native and native iOS & Android apps — from first prototype to store release.',
    description:
      'Cross-platform with Flutter or React Native, or fully native with Swift and Kotlin — I pick what fits your product. I design the app architecture, build the features, integrate your backend and take care of the release process so your app reaches users on both platforms.',
    solutions: [
      'Flutter cross-platform apps',
      'React Native apps',
      'Native iOS (Swift) & Android (Kotlin)',
      'App Store & Google Play releases',
      'Mobile API & backend integration',
      'Improvements to existing apps',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart', 'Java', 'Firebase'],
    deliverables: ['Production-ready iOS & Android builds', 'Clean, documented source code', 'Store listing & release support'],
    relatedCategories: ['Mobile Apps'],
    enabled: true,
    hero: { label: 'Mobile', preview: 'mobile' },
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    summary: 'Full-stack web apps — modern React / Next.js frontends with fast, secure Node.js and Python backends.',
    description:
      'End-to-end web development: fast, responsive frontends, the APIs and databases behind them, and everything in between — from marketing sites and dashboards to complete SaaS platforms.',
    solutions: [
      'Frontends with React, Next.js & Vue',
      'Backends & REST / GraphQL APIs',
      'Dashboards & admin panels',
      'Databases & cloud integration',
      'SaaS platforms & web apps',
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
    relatedCategories: ['Web Applications', 'Custom Software'],
    enabled: true,
    hero: { label: 'Web', preview: 'web' },
  },
  {
    id: 'ai-integration',
    title: 'AI Development & Integration',
    icon: 'sparkles',
    summary: 'Practical AI for your business — LLM integrations, chatbots and workflow automation.',
    description:
      'I integrate AI where it adds real value: connecting large language models to your data and tools, building chatbots and assistants, and automating repetitive work across your systems.',
    solutions: [
      'LLM / AI API integration',
      'AI chatbots & assistants',
      'Business workflow automation',
      'Prompt design & evaluation',
      'Custom AI tools & agents',
    ],
    technologies: ['Python', 'Node.js', 'FastAPI', 'LangChain', 'LLM APIs', 'Prompt engineering'],
    deliverables: ['Working AI feature or automation', 'Usage, cost & privacy considerations', 'Documentation'],
    relatedCategories: ['AI & Automation'],
    enabled: true,
    hero: { label: 'Automation', preview: 'automation' },
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance, Support & QA',
    icon: 'wrench',
    summary: 'Bug fixes, upgrades, testing and new features for products that are already live.',
    description:
      'Live products need care: OS updates, dependency upgrades, crash fixes, regression testing and new features. I can step into your codebase and keep it moving — with confidence at every release.',
    solutions: [
      'Bug fixing & debugging',
      'Performance improvements',
      'Framework & dependency upgrades',
      'Feature enhancements',
      'Functional, regression & release testing',
      'Existing codebase maintenance',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'React', 'Node.js', 'Firebase'],
    deliverables: ['Resolved issues with clear notes', 'Upgraded, tested builds', 'Recommendations for next steps'],
    relatedCategories: ['Mobile Apps', 'Web Applications'],
    enabled: true,
  },

  // Hidden for now — covered by the services above. Set `enabled: true` to show them separately.
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    icon: 'layers',
    summary: 'Business software, SaaS products and admin systems tailored to how you actually work.',
    description:
      'When off-the-shelf tools don’t fit, I build focused software around your workflow — and connect it to the services you already rely on.',
    solutions: ['Business software', 'SaaS applications', 'Admin systems', 'Custom digital platforms', 'API-based integrations'],
    technologies: ['Node.js', 'Go', 'REST APIs', 'Firebase'],
    deliverables: ['Working software tailored to your process', 'Technical documentation', 'Post-launch support options'],
    relatedCategories: ['Custom Software'],
    enabled: false,
  },
  {
    id: 'testing-qa',
    title: 'Testing & Quality Assurance',
    icon: 'shield-check',
    summary: 'Functional, regression and release testing so every update ships with confidence.',
    description:
      'A structured testing pass before release catches the issues users would otherwise find first. I test, debug and help set up a repeatable release checklist.',
    solutions: ['Mobile application testing', 'Functional testing', 'Debugging', 'Release testing', 'Regression testing'],
    technologies: ['Xcode', 'Android Studio', 'Real-device testing'],
    deliverables: ['Test report with prioritised issues', 'Fixes (if in scope)', 'Release checklist'],
    relatedCategories: ['Mobile Apps'],
    enabled: false,
  },
];

export const activeServices = services.filter((s) => s.enabled);
