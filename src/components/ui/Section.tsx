import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Reveal } from './Reveal';

export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-20 sm:py-24 lg:py-28', className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  as: Heading = 'h2',
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}) {
  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col gap-6 sm:mb-14',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <Heading
          id={id}
          className={cn(
            'font-bold',
            Heading === 'h1' ? 'text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]' : 'text-3xl sm:text-4xl',
          )}
        >
          {title}
        </Heading>
        {description && <p className="mt-4 text-lg leading-relaxed text-fg-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
