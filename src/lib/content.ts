import { projects } from '../data/projects';
import { profile } from '../data/profile';
import type { Project, ProjectCategory } from '../types';
import { PROJECT_CATEGORIES } from '../types';

/** Drafts (published: false) are visible during `npm run dev` only. */
export const showDrafts = import.meta.env.DEV;

export const visibleProjects: Project[] = projects
  .filter((p) => p.published || showDrafts)
  .map((p, i) => ({ p, i }))
  .sort((a, b) => (a.p.order ?? Infinity) - (b.p.order ?? Infinity) || a.i - b.i)
  .map(({ p }) => p);

export const featuredProjects = visibleProjects.filter((p) => p.featured).slice(0, 4);

export function getProject(slug: string | undefined) {
  return visibleProjects.find((p) => p.slug === slug);
}

/** Only categories that actually contain projects, in canonical order. */
export const projectCategories: ProjectCategory[] = PROJECT_CATEGORIES.filter((c) =>
  visibleProjects.some((p) => p.category === c),
);

export function relatedProjects(project: Project, limit = 3) {
  const score = (p: Project) =>
    (p.category === project.category ? 10 : 0) +
    p.technologies.filter((t) => project.technologies.includes(t)).length;
  return visibleProjects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({ p, s: score(p) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ p }) => p);
}

export function projectsForCategories(categories: ProjectCategory[] = [], limit = 3) {
  return visibleProjects.filter((p) => categories.includes(p.category)).slice(0, limit);
}

export const socials = profile.socials.filter((s) => s.url.trim() !== '');
export const hasEmail = profile.email.trim() !== '';
export const formspreeId = (import.meta.env.VITE_FORMSPREE_ID || profile.contact.formspreeId || '').trim();
