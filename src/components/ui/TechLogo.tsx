import {
  siAndroid,
  siAndroidstudio,
  siAngular,
  siCelery,
  siApple,
  siDart,
  siDjango,
  siDocker,
  siExpo,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGooglecloud,
  siGo,
  siGraphql,
  siHetzner,
  siJavascript,
  siKotlin,
  siLangchain,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siReactquery,
  siRedis,
  siShadcnui,
  siSqlite,
  siStripe,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVite,
  siVuedotjs,
  siXcode,
  siZod,
  type SimpleIcon,
} from 'simple-icons';
import { cn } from '../../lib/utils';

/**
 * Technology name → brand logo (from Simple Icons, CC0).
 * Names must match the strings used in src/data/*.ts. Anything not listed here
 * simply renders without a logo — add a mapping to give it one.
 */
const logos: Record<string, SimpleIcon> = {
  // Mobile
  Flutter: siFlutter,
  Dart: siDart,
  'React Native': siReact,
  Expo: siExpo,
  Swift: siSwift,
  iOS: siApple,
  Kotlin: siKotlin,
  Android: siAndroid,
  Java: siOpenjdk,
  // Frontend
  React: siReact,
  'Next.js': siNextdotjs,
  'Vue.js': siVuedotjs,
  Angular: siAngular,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Tailwind CSS': siTailwindcss,
  Vite: siVite,
  'React Query': siReactquery,
  'shadcn/ui': siShadcnui,
  Zod: siZod,
  // Backend & data
  'Node.js': siNodedotjs,
  Express: siExpress,
  NestJS: siNestjs,
  Python: siPython,
  FastAPI: siFastapi,
  Django: siDjango,
  Celery: siCelery,
  Hetzner: siHetzner,
  Go: siGo,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  MySQL: siMysql,
  Redis: siRedis,
  SQLite: siSqlite,
  Supabase: siSupabase,
  Firebase: siFirebase,
  GraphQL: siGraphql,
  'REST & GraphQL': siGraphql,
  // AI
  LangChain: siLangchain,
  'Google Cloud Vision': siGooglecloud,
  // Integrations & tools
  Stripe: siStripe,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Xcode: siXcode,
  'Android Studio': siAndroidstudio,
  Postman: siPostman,
  Figma: siFigma,
};

export function hasTechLogo(name: string) {
  return name in logos;
}

/** Very dark brand colours (Next.js, Express, Apple…) would vanish in dark mode — use the text colour instead. */
function isVeryDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.16;
}

export function TechLogo({ name, className, mono = false }: { name: string; className?: string; mono?: boolean }) {
  const icon = logos[name];
  if (!icon) return null;
  const fill = mono || isVeryDark(icon.hex) ? 'currentColor' : `#${icon.hex}`;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('size-4 shrink-0', className)} fill={fill}>
      <path d={icon.path} />
    </svg>
  );
}

/** Pill with a brand logo (when available) and the technology name. */
export function TechChip({ name, className, size = 'md' }: { name: string; className?: string; size?: 'sm' | 'md' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg',
        size === 'md' ? 'px-3 py-1.5 text-sm' : 'px-2.5 py-1 text-[0.8125rem]',
        className,
      )}
    >
      <TechLogo name={name} className={size === 'md' ? 'size-3.5' : 'size-3'} />
      {name}
    </span>
  );
}
