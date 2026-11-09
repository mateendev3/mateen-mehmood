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
    technologies: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'LLM APIs', 'Firebase'],
    deliverables: ['Production-ready iOS & Android builds', 'Integrated, tested AI features', 'Store release support'],
    relatedCategories: ['Mobile Apps', 'AI & Automation'],
    enabled: true,
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
    technologies: ['JavaScript', 'Node.js', 'LLM APIs', 'REST APIs', 'Firebase'],
    deliverables: ['Deployed web application', 'Integrated AI features & prompts', 'Source code & documentation'],
    relatedCategories: ['Web Applications', 'AI & Automation'],
    enabled: true,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'layers',
    summary: 'Cross-platform and native apps for iOS and Android — from first prototype to store release.',
    description:
      'I design the app architecture, build the features, integrate your backend and take care of the release process so your app reaches users on both platforms.',
    solutions: [
      'Flutter cross-platform apps',
      'Native iOS and Android development',
      'Mobile API integration',
      'Improvements to existing apps',
      'App Store and Google Play releases',
    ],
    technologies: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'Java', 'Firebase'],
    deliverables: ['Production-ready iOS & Android builds', 'Clean, documented source code', 'Store listing & release support'],
    relatedCategories: ['Mobile Apps'],
    enabled: true,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    summary: 'Responsive websites, web apps, dashboards and the APIs and backends behind them.',
    description:
      'Modern, fast web experiences — a marketing site, a dashboard for your team, a web companion to your mobile app — plus the backend services that power them.',
    solutions: [
      'Responsive websites',
      'Web applications & dashboards',
      'Admin panels & internal tools',
      'Backend & REST API development',
      'Custom business software',
    ],
    technologies: ['JavaScript', 'Node.js', 'Go', 'REST APIs', 'Firebase'],
    deliverables: ['Deployed, responsive web app', 'Source code & setup docs', 'Hand-off walkthrough'],
    relatedCategories: ['Web Applications', 'Custom Software'],
    enabled: true,
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
    technologies: ['LLM APIs', 'Prompt engineering', 'Node.js', 'REST APIs'],
    deliverables: ['Working AI feature or automation', 'Usage, cost & privacy considerations', 'Documentation'],
    relatedCategories: ['AI & Automation'],
    enabled: true,
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
    technologies: ['Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase', 'Git'],
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
