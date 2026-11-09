/// <reference types="vite/client" />

/** Absolute public site URL (no trailing slash), injected at build time. May be empty. */
declare const __SITE_URL__: string;

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID?: string;
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
