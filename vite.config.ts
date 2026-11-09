import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { staticSeo } from './build/static-seo.ts';
import { profile } from './src/data/profile.ts';

/**
 * BASE_PATH controls where the site lives:
 *   - "/"            → https://username.github.io  or a custom domain
 *   - "/portfolio/"  → https://username.github.io/portfolio
 * The GitHub Actions workflow sets it automatically.
 *
 * SITE_URL is the absolute public URL (no trailing slash) used for canonical
 * links, Open Graph tags and the sitemap. Falls back to profile.siteUrl.
 */
const base = normalizeBase(process.env.BASE_PATH ?? '/');
const siteUrl = (process.env.SITE_URL || profile.siteUrl || '').replace(/\/+$/, '');

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), staticSeo({ base, siteUrl })],
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  build: {
    target: 'es2022',
    cssMinify: true,
  },
});

function normalizeBase(value: string) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}
