import { Link } from 'react-router';
import { ArrowUpRight, Globe } from 'lucide-react';
import type { Project } from '../../types';
import { cn } from '../../lib/utils';
import { Chip } from '../ui/Chip';
import { TechLogo } from '../ui/TechLogo';
import { ProjectCover } from './ProjectCover';

export function ProjectCard({
  project,
  className,
  headingLevel = 'h3',
  wide = false,
}: {
  project: Project;
  className?: string;
  headingLevel?: 'h2' | 'h3';
  /** Spotlight layout: image left, details right (used when only one project is featured). */
  wide?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        'group card relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lift)]',
        wide && 'md:grid md:grid-cols-[1.35fr_1fr]',
        className,
      )}
    >
      <div className={cn('relative border-b border-border', wide && 'md:border-r md:border-b-0')}>
        <ProjectCover project={project} className={cn(wide && 'md:h-full')} />
        {!project.published && (
          <Chip tone="warning" className="absolute top-3 left-3 backdrop-blur">
            Draft · dev only
          </Chip>
        )}
      </div>

      <div className={cn('flex flex-1 flex-col p-6', wide && 'md:justify-center md:p-10')}>
        {project.status && (
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
            <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
            {project.status}
          </span>
        )}
        <Heading className={cn('font-semibold tracking-tight', wide ? 'text-xl md:text-3xl md:font-bold' : 'text-xl')}>
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 mb-5 line-clamp-2 text-[0.9375rem] leading-relaxed text-fg-muted">{project.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <ul className="flex min-w-0 flex-wrap gap-1.5" aria-label="Industries">
            {(project.industries.length ? project.industries : [project.category]).slice(0, 2).map((industry) => (
              <li key={industry} className="rounded-md bg-surface-2 px-2 py-1 text-xs font-medium text-fg-muted ring-1 ring-border">
                {industry}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-3">
            {project.platforms.length > 0 && (
              <ul className="flex items-center gap-2 text-fg-subtle" aria-label="Platforms">
                {project.platforms.map((platform) => (
                  <li key={platform} title={platform}>
                    <PlatformIcon platform={platform} />
                    <span className="sr-only">{platform}</span>
                  </li>
                ))}
              </ul>
            )}
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-full border border-border text-fg-muted transition-colors duration-300 group-hover:border-transparent group-hover:bg-primary group-hover:text-primary-fg"
            >
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
            </span>
          </div>
        </div>
      </div>
      {/* Visible focus ring for the stretched link */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-accent opacity-0 transition-opacity group-has-[a:focus-visible]:opacity-100" />
    </article>
  );
}

/** Small monochrome platform mark: Apple for iOS, Android robot, globe for web. */
function PlatformIcon({ platform }: { platform: string }) {
  const key = platform.toLowerCase();
  if (key === 'ios') return <TechLogo name="iOS" mono className="size-4" />;
  if (key === 'android') return <TechLogo name="Android" mono className="size-4" />;
  return <Globe className="size-4" strokeWidth={1.75} aria-hidden="true" />;
}
