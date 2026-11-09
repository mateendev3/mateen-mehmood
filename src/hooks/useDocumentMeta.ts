import { useEffect } from 'react';
import type { PageMeta } from '../types';
import { absoluteUrl, canonicalPath } from '../lib/seo';
import { asset } from '../lib/utils';

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync during
 * client-side navigation. The build step (build/static-seo.ts) writes the same
 * tags into each page's static HTML for crawlers and link previews.
 */
export function useDocumentMeta(meta: PageMeta) {
  const { title, description, path, image } = meta;

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    const url = absoluteUrl(__SITE_URL__, canonicalPath(path));
    if (url) {
      setMeta('property', 'og:url', url);
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    }
    if (image) {
      setMeta('property', 'og:image', absoluteUrl(__SITE_URL__, image) || new URL(asset(image), location.href).href);
    }
  }, [title, description, path, image]);
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
