import type { PageMeta } from '../types/index.ts';
import { profile } from './profile.ts';

/** Main navigation. Keep it short. */
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

/** SEO metadata for the static pages. Project pages derive theirs from projects.ts. */
export const pageMeta: Record<'home' | 'services' | 'projects' | 'about' | 'contact', PageMeta> = {
  home: {
    path: '/',
    title: `${profile.name} — ${profile.title}`,
    description:
      'AI, mobile and web developer with ten years of experience. I build AI-powered mobile apps, AI-powered web apps, Flutter and native apps for iOS and Android, and modern web platforms.',
  },
  services: {
    path: '/services',
    title: `Services — ${profile.name}`,
    description:
      'AI-powered mobile and web apps, mobile app development, web development, AI integration and ongoing support — services I offer to freelance clients.',
  },
  projects: {
    path: '/projects',
    title: `Projects — ${profile.name}`,
    description: 'Selected AI, mobile and web projects, with case studies covering the challenge, my role and the solution.',
  },
  about: {
    path: '/about',
    title: `About — ${profile.name}`,
    description:
      'AI, mobile and web developer with ten years of experience. Learn about my background, strengths and how I work with freelance clients.',
  },
  contact: {
    path: '/contact',
    title: `Contact — ${profile.name}`,
    description: 'Have a project in mind? Get in touch to discuss your AI, mobile or web project.',
  },
};

/** Dropdown options on the contact form. Services are added automatically from services.ts. */
export const contactOptions = {
  budgets: ['Not sure yet', 'Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+'],
  timelines: ['As soon as possible', 'Within 1 month', '1 – 3 months', '3+ months', 'Flexible'],
};
