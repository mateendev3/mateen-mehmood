import { socials, hasEmail } from '../../lib/content';
import { profile } from '../../data/profile';
import { cn } from '../../lib/utils';
import { SocialIcon } from './Icon';

/** Renders only the profile links that are actually configured. Returns null when none exist. */
export function SocialLinks({
  className,
  includeEmail = true,
  featuredOnly = false,
}: {
  className?: string;
  includeEmail?: boolean;
  /** Only show links marked `featured` in profile.ts (keeps compact rows tidy). */
  featuredOnly?: boolean;
}) {
  const links = [
    ...(featuredOnly ? socials.filter((s) => s.featured) : socials),
    ...(includeEmail && hasEmail ? [{ key: 'email' as const, label: 'Email', url: `mailto:${profile.email}` }] : []),
  ];
  if (links.length === 0) return null;

  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((link) => (
        <li key={link.key}>
          <a
            href={link.url}
            {...(link.key === 'email' ? {} : { target: '_blank', rel: 'me noopener noreferrer' })}
            aria-label={link.key === 'email' ? `Email ${profile.firstName}` : `${profile.firstName} on ${link.label}`}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-fg"
          >
            <SocialIcon name={link.key} className="size-[1.05rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
