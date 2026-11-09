import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('card flex flex-col items-center px-6 py-16 text-center', className)}>
      {icon && <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">{icon}</div>}
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="mt-2 max-w-md text-fg-muted">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
