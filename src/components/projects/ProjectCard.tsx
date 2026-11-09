import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { cn } from '../../lib/utils';
import { Chip } from '../ui/Chip';
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
  const shownTech = project.technologies.slice(0, 4);
  const extraTech = project.technologies.length - shownTech.length;

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
        <p className="text-sm text-fg-subtle">
          <span className="font-medium text-accent">{project.category}</span>
          {project.platforms.length > 0 && <span> · {project.platforms.join(', ')}</span>}
        </p>
        <Heading className={cn('mt-2 font-semibold', wide ? 'text-xl md:text-3xl md:font-bold' : 'text-xl')}>
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 line-clamp-3 text-fg-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {shownTech.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
          {extraTech > 0 && (
            <li>
              <Chip>+{extraTech}</Chip>
            </li>
          )}
        </ul>

        <span
          className={cn(
            'inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-fg transition-colors group-hover:text-accent',
            wide ? 'md:pt-8' : 'mt-auto',
          )}
        >
          View case study
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
      {/* Visible focus ring for the stretched link */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-accent opacity-0 transition-opacity group-has-[a:focus-visible]:opacity-100" />
    </article>
  );
}
