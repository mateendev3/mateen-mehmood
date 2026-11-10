import type { Profile } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PERSONAL INFORMATION
 *  Edit this file to update your name, links, hero copy, About text, etc.
 *  Anything left empty ('' / null / []) is hidden from the site automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  name: 'Mateen Mehmood',
  firstName: 'Mateen',
  title: 'AI, Mobile & Web Developer',
  tagline: 'AI-powered mobile and web products, built to last.',

  // Final public URL without trailing slash, e.g. 'https://mateenmehmood.dev'.
  // The GitHub Actions workflow fills this in automatically when left empty.
  siteUrl: '',

  email: 'mateendev3@gmail.com',

  location: 'Islamabad, Pakistan',
  timezone: 'PKT (UTC+5)',

  // Optional: a professional square headshot (800×800+) in public/images/profile/, e.g. '/images/profile/mateen.jpg'.
  // When set it appears as the avatar on the About card. Leave empty to use the monogram.
  photo: '',
  ogImage: '/og-image.jpg',
  photoAlt: 'Portrait of Mateen Mehmood',

  // Only enable while accurate, e.g. { status: 'available', label: 'Available for new projects' }
  availability: null,

  // `featured` links appear in the compact icon rows (hero, About). All links appear in the footer and on Contact.
  socials: [
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/mateenmehmood/', featured: true },
    { key: 'github', label: 'GitHub', url: 'https://github.com/mateendev3/', featured: true },
    { key: 'pubdev', label: 'Pub.dev', url: 'https://pub.dev/publishers/mateenmehmood.dev/packages', featured: true },
    { key: 'medium', label: 'Medium', url: 'https://medium.com/@mateendev3' },
    { key: 'stackoverflow', label: 'Stack Overflow', url: 'https://stackoverflow.com/users/16582308/mateendev3' },
    { key: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@codingwithmateen' },
    { key: 'upwork', label: 'Upwork', url: '' },
  ],

  // Verified numbers only. Add e.g. { value: '50+', label: 'Projects delivered' } once you've counted.
  stats: [
    { value: '10 yrs', label: 'Building software professionally' },
    { value: 'AI · Mobile · Web', label: 'End-to-end product development' },
    { value: 'iOS · Android · Web', label: 'Platforms I ship to' },
  ],

  hero: {
    badge: 'AI · Mobile · Web Developer — 10 years',
    greeting: "Hi, I'm Mateen —",
    headline: {
      before: 'I build',
      rotating: ['AI mobile apps', 'AI web apps', 'mobile apps', 'web platforms', 'AI solutions'],
      after: 'for your business.',
    },
    description:
      'an AI, mobile and web developer with ten years of experience. I build intelligent apps and platforms that help businesses automate, grow and scale.',
    marquee: [
      'Flutter',
      'React Native',
      'Swift',
      'Kotlin',
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Node.js',
      'NestJS',
      'Python',
      'FastAPI',
      'Go',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Docker',
      'LangChain',
    ],
  },

  about: {
    headline: 'Turning ideas into intelligent, reliable products.',
    summary:
      "I'm Mateen, an AI, mobile and web developer with ten years of experience building AI-powered apps, mobile apps and web platforms. I focus on software that is practical, reliable and easy to use — turning complex requirements into intuitive products and helping clients improve them through thoughtful engineering.",
    // Verified from the App Store / Google Play listings of the apps in projects.ts.
    highlights: [
      { value: '10 yrs', label: 'Building software' },
      { value: '22M+', label: 'Downloads across apps I’ve worked on' },
      { value: '6', label: 'Countries — KSA, Pakistan, Sudan, Kenya, USA, France' },
    ],
    journey: [
      "Over the past ten years I've built software across the whole product: native Android and cross-platform Flutter apps for iOS and Android, web platforms, and the backend services that power them with Node.js, Go and Firebase.",
      "More recently, I've been helping clients put AI to practical use — integrating large language models, building assistants and chatbots, and automating repetitive workflows so teams can focus on what matters.",
      "I also share what I learn with the developer community: open-source Flutter packages on pub.dev, articles on Medium, answers on Stack Overflow and tutorials on YouTube.",
      'Through all of it, I care about clean architecture and maintainable code — always in service of the business goal: software that works, ships and keeps working.',
    ],
    strengths: [
      {
        title: 'Mobile app development',
        description: 'Native and cross-platform apps for iOS and Android, from first screen to store release.',
        icon: 'smartphone',
      },
      {
        title: 'Web development',
        description: 'Responsive web apps, dashboards and the APIs and backends behind them.',
        icon: 'globe',
      },
      {
        title: 'AI development & integration',
        description: 'LLM-powered features, chatbots and automations that solve real business problems.',
        icon: 'sparkles',
      },
      {
        title: 'Integrations & existing products',
        description: 'Payments, auth, push and third-party SDKs — plus upgrades and fixes for apps already live.',
        icon: 'puzzle',
      },
    ],
    approach: [
      {
        title: 'Clear communication',
        description: 'Regular progress updates, honest estimates and early warnings — no surprises.',
        icon: 'message',
      },
      {
        title: 'Business-first problem solving',
        description: 'I start from what you need to achieve, then choose the simplest solution that gets there.',
        icon: 'search',
      },
      {
        title: 'Maintainable delivery',
        description: 'Readable, structured code that your future team (or future me) can build on.',
        icon: 'code',
      },
      {
        title: 'Quality built in',
        description: 'Testing and review are part of the process, not an afterthought before launch.',
        icon: 'shield-check',
      },
    ],
  },

  whyMe: [
    {
      title: 'A decade of experience',
      description: 'Ten years building production software used by real customers — not just side projects.',
      icon: 'briefcase',
    },
    {
      title: 'AI, mobile & web in one place',
      description: 'One developer who understands the whole product — the app, the web platform, the API and the AI behind it.',
      icon: 'layers',
    },
    {
      title: 'Clean, maintainable code',
      description: 'Structured, well-architected code that stays easy to extend long after the first release.',
      icon: 'code',
    },
    {
      title: 'Complex integrations',
      description: 'Comfortable wiring products into APIs, payments, auth, AI models and third-party services.',
      icon: 'puzzle',
    },
    {
      title: 'Practical problem solving',
      description: 'Pragmatic decisions that balance quality, timeline and budget.',
      icon: 'gauge',
    },
    {
      title: 'New builds & existing products',
      description: 'Happy to start from scratch or step into an existing codebase and move it forward.',
      icon: 'git-branch',
    },
  ],

  process: [
    {
      title: 'Discovery',
      description: 'Understand your idea, goals, users and constraints.',
      icon: 'search',
    },
    {
      title: 'Planning',
      description: 'Agree on scope, technical approach and deliverables.',
      icon: 'clipboard',
    },
    {
      title: 'Development',
      description: 'Build in small, reviewable steps with regular updates.',
      icon: 'code',
    },
    {
      title: 'Testing & delivery',
      description: 'Test thoroughly, fix issues and prepare the release.',
      icon: 'rocket',
    },
    {
      title: 'Maintenance & support',
      description: 'Ongoing improvements and support, when agreed.',
      icon: 'life-buoy',
    },
  ],

  contact: {
    // Optional: create a free form at https://formspree.io and paste its ID here (e.g. 'xyzabcd').
    // Without it, the contact form opens the visitor's email app with the message pre-filled.
    formspreeId: '',
    // Contact form delivery (first one set wins): Web3Forms → Formspree → FormSubmit → email app.
    // Get a free Web3Forms key at https://web3forms.com (it is emailed to you) and paste it here.
    web3formsKey: '989eab70-9428-40ef-96ce-4206e4c15292',
    formsubmit: 'mateendev3@gmail.com',
    // Optional, e.g. 'I usually reply within 1–2 business days.' Leave empty to hide.
    responseTime: '',
  },
};
