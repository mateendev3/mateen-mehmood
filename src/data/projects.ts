import type { Project } from '../types/index.ts';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECTS
 *  Every card, filter, case-study page (/projects/<slug>), sitemap entry and
 *  "related projects" list is generated from this array.
 *
 *  Add a project:
 *    1. Put images in  public/images/projects/<slug>/
 *    2. Copy the TEMPLATE below into the array and fill it in.
 *    3. Set `published: true` (and `featured: true` to show it on the homepage).
 *
 *  `published: false` projects only appear in `npm run dev`, marked "Draft",
 *  so you can preview them before they go live.
 *
 *  Honesty rule: describe *your* contribution in `myRole`, mention the team in
 *  `teamContext`, and only list `results` you can stand behind.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  TEMPLATE
 *  {
 *    slug: 'my-app',
 *    title: 'My App',
 *    subtitle: 'One-line tagline',
 *    summary: 'Short description for cards and search results.',
 *    category: 'Mobile Apps',            // 'Mobile Apps' | 'Web Applications' | 'Custom Software' | 'AI & Automation'
 *    platforms: ['iOS', 'Android'],
 *    technologies: ['Flutter', 'Firebase'],
 *    year: '2024',
 *    coverImage: '/images/projects/my-app/cover.png',
 *    coverAlt: 'My App home screen on an iPhone',
 *    overview: 'What the app does and who it serves.',
 *    challenge: 'The problem being solved.',
 *    solution: 'How it was approached.',
 *    myRole: ['Built the Flutter app', 'Integrated the payments API'],
 *    teamContext: 'Worked with a designer and a backend developer.',
 *    features: [{ title: 'Feature', description: 'What it does.', image: { src: '...', alt: '...', orientation: 'portrait' } }],
 *    gallery: [{ src: '/images/projects/my-app/1.png', alt: 'Onboarding screen', orientation: 'portrait' }],
 *    results: ['Genuine outcome'],
 *    links: { appStore: 'https://...', playStore: 'https://...' },
 *    featured: true,
 *    published: true,
 *  },
 */
export const projects: Project[] = [
  // ── SAMPLE DATA ── Replace these with your real projects. They are unpublished,
  // so they never appear on the live site.
  {
    slug: 'sample-mobile-app',
    title: 'Sample Mobile App',
    subtitle: 'Placeholder case study — replace with a real project',
    summary:
      'Example entry that shows how a mobile project card and case study look. Not real work — replace or delete.',
    category: 'Mobile Apps',
    platforms: ['iOS', 'Android'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    year: '2025',
    overview:
      'Use this section to explain what the product does, who it serves, and the context you worked in.',
    challenge: 'Describe the problem the client or product faced, in one or two short paragraphs.',
    solution: 'Explain your technical approach and the key decisions you made.',
    myRole: ['Example: Flutter feature development', 'Example: API integration', 'Example: App Store release'],
    teamContext: 'Example: Worked alongside a product designer and two backend engineers.',
    features: [
      { title: 'Example feature', description: 'Short description of a feature you built.' },
      { title: 'Another feature', description: 'Add an optional screenshot to any feature.' },
      { title: 'Third feature', description: 'Keep each description to one or two sentences.' },
    ],
    gallery: [],
    results: [],
    links: {},
    featured: true,
    published: false,
  },
  {
    slug: 'sample-web-dashboard',
    title: 'Sample Web Dashboard',
    subtitle: 'Placeholder case study — replace with a real project',
    summary: 'Example web application entry used to preview filtering and related projects. Not real work.',
    category: 'Web Applications',
    platforms: ['Web'],
    technologies: ['TypeScript', 'React', 'REST APIs'],
    overview: 'Placeholder overview.',
    myRole: ['Example: Frontend development'],
    features: [],
    gallery: [],
    featured: true,
    published: false,
  },
];
