import type { ReactNode } from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';

/** Top-of-page intro used by inner pages. Includes the soft grid backdrop. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn('relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16', className)}>
      <Backdrop />
      <div className="container-page relative">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{description}</p>}
          {children}
        </m.div>
      </div>
    </header>
  );
}

export function Backdrop({ glow = true }: { glow?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid mask-fade absolute inset-0" />
      {glow && (
        <div className="animate-drift absolute -top-40 left-1/2 h-[28rem] w-[min(60rem,140vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
      )}
    </div>
  );
}
