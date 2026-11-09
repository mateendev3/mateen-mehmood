import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-fg shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_8px_24px_-8px_var(--glow)] hover:bg-primary-hover hover:shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_12px_32px_-8px_var(--glow)]',
  secondary:
    'border border-border-strong bg-surface/60 text-fg backdrop-blur hover:border-fg-subtle/50 hover:bg-surface',
  ghost: 'text-fg-muted hover:bg-accent-soft hover:text-fg',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-12 px-6 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  (
    | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className' | 'children'>)
    | ({ href: string; to?: never } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>)
    | ({ to?: never; href?: never } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>)
  );

/** One button for internal links (`to`), external links (`href`) and actions. */
export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('to' in props && props.to !== undefined) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    const external = /^https?:/.test(props.href);
    return (
      <a
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(props as ComponentPropsWithoutRef<'a'>)}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<'button'>;
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
