import type { PageMeta, Project } from '../types/index.ts';
import { profile } from '../data/profile.ts';

/** Shared between the browser (useDocumentMeta) and the build plugin (build/static-seo.ts). Keep it React-free. */
export function projectPageMeta(project: Project): PageMeta {
  return {
    path: `/projects/${project.slug}`,
    title: `${project.title} — Case Study | ${profile.name}`,
    description: project.summary,
    image: project.heroImage || project.coverImage || undefined,
  };
}

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: `Page not found — ${profile.name}`,
  description: 'The page you are looking for does not exist.',
};

/** "/projects" → "/projects/" (GitHub Pages serves directories with a trailing slash). */
export function canonicalPath(path: string) {
  return path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
}

export function absoluteUrl(siteUrl: string, path: string) {
  if (!siteUrl) return '';
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl.replace(/\/+$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}
