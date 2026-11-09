import fs from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { projects } from '../src/data/projects.ts';
import { profile } from '../src/data/profile.ts';
import { pageMeta } from '../src/data/site.ts';
import { absoluteUrl, canonicalPath, notFoundMeta, projectPageMeta } from '../src/lib/seo.ts';
import type { PageMeta } from '../src/types/index.ts';

interface Options {
  base: string;
  siteUrl: string;
}

/**
 * Static-hosting SEO for a single-page app on GitHub Pages:
 *  - writes dist/<route>/index.html for every page and published project, each
 *    with its own <title>, description, canonical and Open Graph tags, so
 *    direct visits return HTTP 200 and link previews/crawlers see real metadata;
 *  - writes dist/404.html (SPA fallback for unknown URLs, marked noindex);
 *  - writes sitemap.xml and robots.txt.
 */
export function staticSeo({ siteUrl }: Options): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'static-seo',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    writeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

      const pages: PageMeta[] = [
        ...Object.values(pageMeta),
        ...projects.filter((p) => p.published).map(projectPageMeta),
      ];

      for (const page of pages) {
        const html = injectHead(template, renderHead(page, siteUrl, page.path === '/'));
        const target =
          page.path === '/'
            ? path.join(outDir, 'index.html')
            : path.join(outDir, page.path.replace(/^\//, ''), 'index.html');
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
      }

      fs.writeFileSync(
        path.join(outDir, '404.html'),
        injectHead(template, renderHead(notFoundMeta, siteUrl, false, true)),
      );

      const robots = ['User-agent: *', 'Allow: /'];
      if (siteUrl) {
        robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
        const today = new Date().toISOString().slice(0, 10);
        const urls = pages
          .map(
            (p) =>
              `  <url><loc>${escape(absoluteUrl(siteUrl, canonicalPath(p.path)))}</loc><lastmod>${today}</lastmod></url>`,
          )
          .join('\n');
        fs.writeFileSync(
          path.join(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
      } else {
        config.logger.warn(
          '\n[static-seo] No SITE_URL / profile.siteUrl set — skipping sitemap.xml, canonical and og:url tags.',
        );
      }
      fs.writeFileSync(path.join(outDir, 'robots.txt'), `${robots.join('\n')}\n`);

      config.logger.info(`[static-seo] Pre-rendered head tags for ${pages.length} routes.`);
    },
  };
}

function renderHead(page: PageMeta, siteUrl: string, isHome: boolean, noindex = false) {
  const url = absoluteUrl(siteUrl, canonicalPath(page.path));
  const imagePath = page.image || profile.photo;
  const image = imagePath ? absoluteUrl(siteUrl, imagePath) : '';
  const tags = [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : '',
    url && !noindex ? `<link rel="canonical" href="${escape(url)}" />` : '',
    `<meta property="og:type" content="${isHome ? 'profile' : 'website'}" />`,
    `<meta property="og:site_name" content="${escape(profile.name)}" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    url && !noindex ? `<meta property="og:url" content="${escape(url)}" />` : '',
    image ? `<meta property="og:image" content="${escape(image)}" />` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
  ];

  if (isHome) {
    const sameAs = profile.socials.map((s) => s.url).filter(Boolean);
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      description: page.description,
      ...(url ? { url } : {}),
      ...(image ? { image } : {}),
      ...(profile.email ? { email: `mailto:${profile.email}` } : {}),
      ...(sameAs.length ? { sameAs } : {}),
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`);
  }

  return tags.filter(Boolean).join('\n    ');
}

function injectHead(html: string, head: string) {
  const replaced = html.replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head);
  if (replaced === html) throw new Error('[static-seo] <!--seo--> markers not found in index.html');
  return replaced;
}

function escape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
