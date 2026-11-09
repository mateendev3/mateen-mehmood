import { cn } from '../../lib/utils';

/**
 * Abstract device mock-up used when a project has no cover image yet, and as
 * the hero visual when no profile photo is set. Pure CSS — works in both themes.
 */
export function DeviceIllustration({ variant = 'phone', className }: { variant?: 'phone' | 'browser'; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-surface-2',
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -z-0 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      {variant === 'phone' ? <Phone /> : <Browser />}
    </div>
  );
}

function Phone() {
  return (
    <div className="relative flex aspect-[9/19] h-[78%] flex-col gap-[6%] rounded-[18%/8.5%] border border-border-strong bg-surface p-[7%] shadow-[var(--shadow-lift)]">
      <div className="mx-auto h-[3%] w-1/3 rounded-full bg-border-strong" />
      <div className="h-[22%] rounded-[14%/30%] bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] opacity-90" />
      <div className="space-y-[8%]">
        <div className="h-1.5 w-4/5 rounded-full bg-border-strong" />
        <div className="h-1.5 w-3/5 rounded-full bg-border" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-[8%]">
        <div className="rounded-lg bg-accent-soft" />
        <div className="rounded-lg bg-surface-2 ring-1 ring-border" />
        <div className="rounded-lg bg-surface-2 ring-1 ring-border" />
        <div className="rounded-lg bg-accent-soft" />
      </div>
    </div>
  );
}

function Browser() {
  return (
    <div className="relative flex aspect-[16/10] w-[78%] flex-col overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="ml-3 h-2 w-1/3 rounded-full bg-border" />
      </div>
      <div className="flex flex-1 gap-3 p-3">
        <div className="w-1/5 space-y-2">
          <div className="h-2 rounded-full bg-border-strong" />
          <div className="h-2 w-4/5 rounded-full bg-border" />
          <div className="h-2 w-3/5 rounded-full bg-border" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="h-1/3 rounded-lg bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] opacity-90" />
          <div className="grid flex-1 grid-cols-3 gap-3">
            <div className="rounded-lg bg-accent-soft" />
            <div className="rounded-lg bg-surface-2 ring-1 ring-border" />
            <div className="rounded-lg bg-surface-2 ring-1 ring-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
