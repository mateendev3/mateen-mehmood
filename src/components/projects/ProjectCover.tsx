import type { Project } from '../../types';
import { asset, cn } from '../../lib/utils';
import { DeviceIllustration } from './DeviceIllustration';

export function ProjectCover({
  project,
  hero = false,
  className,
  eager = false,
}: {
  project: Project;
  hero?: boolean;
  className?: string;
  eager?: boolean;
}) {
  const src = hero ? project.heroImage || project.coverImage : project.coverImage;
  return (
    <div className={cn('relative aspect-[16/10] overflow-hidden', className)}>
      {src ? (
        <img
          src={asset(src)}
          alt={project.coverAlt || `${project.title} preview`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          {...(eager ? { fetchPriority: 'high' as const } : {})}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <DeviceIllustration
          variant={project.category === 'Mobile Apps' ? 'phone' : 'browser'}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
    </div>
  );
}
