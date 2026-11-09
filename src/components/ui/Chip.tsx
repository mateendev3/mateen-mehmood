import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function Chip({ children, className, tone = 'neutral' }: { children: ReactNode; className?: string; tone?: 'neutral' | 'accent' | 'warning' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.8125rem] font-medium leading-tight',
        tone === 'neutral' && 'border-border bg-surface-2 text-fg-muted',
        tone === 'accent' && 'border-transparent bg-accent-soft text-accent',
        tone === 'warning' && 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
