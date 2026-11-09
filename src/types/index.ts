/**
 * Shared content types.
 *
 * Everything in src/data/* is plain, JSON-compatible data typed with these
 * interfaces. Icons are referenced by name (see src/components/ui/Icon.tsx)
 * so data files never import React components.
 */

export type IconName =
  | 'smartphone'
  | 'globe'
  | 'layers'
  | 'sparkles'
  | 'wrench'
  | 'shield-check'
  | 'search'
  | 'clipboard'
  | 'code'
  | 'rocket'
  | 'life-buoy'
  | 'puzzle'
  | 'message'
  | 'gauge'
  | 'git-branch'
  | 'briefcase'
  | 'calendar'
  | 'mail'
  | 'map-pin'
  | 'clock';

export type SocialKey =
  | 'linkedin'
  | 'github'
  | 'pubdev'
  | 'medium'
  | 'stackoverflow'
  | 'youtube'
  | 'upwork'
  | 'email';

export interface SocialLink {
  key: SocialKey;
  label: string;
  url: string;
  /** Shown in the compact icon rows (hero, About). All links appear in the footer and on Contact. */
  featured?: boolean;
}

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  /** Absolute public URL without trailing slash, e.g. https://mateen.dev. Used for canonical/OG/sitemap. */
  siteUrl: string;
  /** Public email. Leave empty to hide every email button. */
  email: string;
  /** Optional city/country shown on About & Contact. */
  location?: string;
  /** Optional timezone note, e.g. "PKT (UTC+5)". */
  timezone?: string;
  /** Path inside /public, e.g. "/images/profile/mateen.jpg". Empty = monogram fallback. */
  photo?: string;
  photoAlt?: string;
  /** Set to null to hide the availability badge entirely. Only show it while it is accurate. */
  availability: { status: AvailabilityStatus; label: string } | null;
  /** Only URLs that exist. Empty `url` values are ignored. */
  socials: SocialLink[];
  /** Verified numbers only — omit anything you can't back up. */
  stats: Stat[];
  hero: {
    /** Small pill above the headline, e.g. "10 years · Mobile · Web · AI". */
    badge?: string;
    greeting: string;
    /** Headline = before + one rotating phrase (cycles with a gentle animation) + after. */
    headline: { before: string; rotating: string[]; after: string };
    description: string;
    /** Short technology names that scroll in the strip under the hero. */
    marquee: string[];
  };
  about: {
    headline: string;
    summary: string;
    /** Paragraphs for the About page "My journey" section. */
    journey: string[];
    strengths: { title: string; description: string; icon: IconName }[];
    approach: { title: string; description: string; icon: IconName }[];
  };
  whyMe: { title: string; description: string; icon: IconName }[];
  process: { title: string; description: string; icon: IconName }[];
  contact: {
    /**
     * Formspree form ID (the part after https://formspree.io/f/).
     * Not a secret — it's safe in frontend code. Can also be set via VITE_FORMSPREE_ID.
     * When empty, the contact form opens the visitor's email app instead (needs `email`).
     */
    formspreeId: string;
    responseTime?: string;
  };
}

export interface Service {
  /** Used as the anchor on /services, e.g. /services#mobile-app-development */
  id: string;
  title: string;
  icon: IconName;
  /** One or two sentences for cards. */
  summary: string;
  /** Longer description for the Services page. */
  description: string;
  solutions: string[];
  technologies: string[];
  deliverables: string[];
  /** Must match a Project.category value to show related projects. */
  relatedCategories?: ProjectCategory[];
  /** Set false to hide a service without deleting it. */
  enabled: boolean;
  /**
   * Show this service as a tab in the homepage hero explorer.
   * `label` is the short tab name; `preview` picks the animated illustration.
   */
  hero?: { label: string; preview: ServicePreviewKind };
}

export type ServicePreviewKind = 'ai-mobile' | 'ai-web' | 'mobile' | 'web' | 'automation';

export const PROJECT_CATEGORIES = [
  'Mobile Apps',
  'Web Applications',
  'Custom Software',
  'AI & Automation',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectImage {
  /** Path inside /public, e.g. "/images/projects/my-app/home.png", or a full URL. */
  src: string;
  alt: string;
  /** "portrait" renders inside a phone-shaped frame; "landscape" spans wider. Default: landscape. */
  orientation?: 'portrait' | 'landscape';
  caption?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  image?: ProjectImage;
}

export interface ProjectLinks {
  appStore?: string;
  playStore?: string;
  website?: string;
  demo?: string;
  github?: string;
  other?: { label: string; url: string }[];
}

export interface Project {
  /** URL segment: /projects/<slug>. Lowercase, hyphenated, unique. */
  slug: string;
  title: string;
  subtitle?: string;
  /** 1–2 sentence description used on cards and in meta descriptions. */
  summary: string;
  category: ProjectCategory;
  platforms: string[];
  technologies: string[];
  /** Optional year or range, e.g. "2024" or "2022 – 2024". */
  year?: string;
  /** Optional client / company name — only if you're allowed to name them. */
  client?: string;

  /** Card image (16:10 works best). Leave empty to use the built-in device illustration. */
  coverImage?: string;
  coverAlt?: string;
  /** Optional large image for the case-study hero. Falls back to coverImage. */
  heroImage?: string;

  overview: string;
  challenge?: string;
  solution?: string;
  /** Be specific and honest about your own contribution. */
  myRole: string[];
  /** e.g. "Part of a 6-person team" — helps make your role clear. */
  teamContext?: string;

  features: ProjectFeature[];
  gallery: ProjectImage[];
  /** Genuine outcomes only. */
  results?: string[];
  links?: ProjectLinks;

  /** Show on the homepage "Featured work" section. */
  featured: boolean;
  /** Unpublished projects are only visible in `npm run dev` (with a Draft badge). */
  published: boolean;
  /** Lower numbers appear first. */
  order?: number;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}

export interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  /** Path inside /public or a full URL. */
  avatar?: string;
  /** Link to the source (e.g. LinkedIn recommendation or Upwork review). */
  sourceUrl?: string;
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
}
