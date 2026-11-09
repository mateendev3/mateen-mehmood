import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, m, useInView, useReducedMotion } from 'motion/react';
import { ArrowRight, Bot, Check, Database, Mail, ShoppingCart, Sparkles } from 'lucide-react';
import { activeServices } from '../../data/services';
import type { Service, ServicePreviewKind } from '../../types';
import { cn } from '../../lib/utils';
import { TechLogo, hasTechLogo } from '../ui/TechLogo';

const ROTATE_MS = 5500;
const ease = [0.22, 1, 0.36, 1] as const;

type HeroService = Service & { hero: NonNullable<Service['hero']> };

/**
 * "What can I build for you?" — an interactive service explorer for the hero.
 * Tabs come from services with a `hero` entry in src/data/services.ts.
 * Auto-advances (with a progress bar) until the visitor hovers or picks a tab;
 * pauses off-screen and under reduced motion.
 */
export function HeroVisual() {
  const items = activeServices.filter((s): s is HeroService => !!s.hero);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false); // visitor picked a tab → stop auto-play
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const autoplay = !locked && !hovered && inView && !reduceMotion && items.length > 1;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, index, items.length]);

  if (items.length === 0) return null;
  const active = items[index];

  const select = (i: number, focus = false) => {
    setIndex(i);
    setLocked(true);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const last = items.length - 1;
    const map: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (event.key in map) {
      event.preventDefault();
      select(map[event.key], true);
    }
  };

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      className="relative w-[30rem]"
    >
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[conic-gradient(from_180deg,var(--primary),var(--accent-2),var(--primary))] opacity-[0.18] blur-3xl"
      />

      <div className="glass rounded-[1.75rem] p-5 shadow-[0_30px_80px_-24px_var(--glow),var(--shadow-lift)]">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-fg">What can I build for you?</p>
          <span className="flex items-center gap-1.5 text-xs text-fg-subtle">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            {locked ? 'Your pick' : 'Tap to explore'}
          </span>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Services" onKeyDown={onKeyDown} className="mt-3.5 flex gap-1">
          {items.map((item, i) => {
            const selected = i === index;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={cn(
                  'relative flex h-8 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-2 text-xs font-semibold whitespace-nowrap transition-colors',
                  selected
                    ? 'border-transparent bg-fg text-bg'
                    : 'border-border bg-surface/60 text-fg-muted hover:border-border-strong hover:text-fg',
                )}
              >
                {item.hero.label}
                {selected && autoplay && (
                  <m.span
                    key={`progress-${index}`}
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] bg-[linear-gradient(90deg,var(--primary),var(--accent-2))]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${index}`}
          aria-live={locked ? 'polite' : 'off'}
          className="mt-4"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease }}
            >
              <div aria-hidden="true" className="relative h-36 overflow-hidden rounded-2xl border border-border bg-surface-2">
                <div className="bg-grid absolute inset-0 opacity-60" />
                <Preview kind={active.hero.preview} />
              </div>

              <h3 className="mt-4 text-lg font-bold">{active.title}</h3>
              <p className="mt-1 line-clamp-2 min-h-[2.875rem] text-sm leading-relaxed text-fg-muted">{active.summary}</p>

              <ul className="mt-3 grid min-h-[4.4rem] grid-cols-2 content-start gap-x-3 gap-y-1.5">
                {active.solutions.slice(0, 4).map((item, i) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-1.5 text-xs text-fg"
                  >
                    <Check className="mt-px size-3.5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </m.li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                <StackLogos technologies={active.technologies} />
                <Link
                  to={`/contact?service=${active.id}`}
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-fg shadow-[0_8px_20px_-8px_var(--glow)] transition-colors hover:bg-primary-hover"
                >
                  Start a project like this
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </m.div>
  );
}

/* ── Animated previews ───────────────────────────────────────────────────── */

function Preview({ kind }: { kind: ServicePreviewKind }) {
  switch (kind) {
    case 'ai-mobile':
      return <AiMobilePreview />;
    case 'ai-web':
      return <AiWebPreview />;
    case 'mobile':
      return <MobilePreview />;
    case 'web':
      return <WebPreview />;
    case 'automation':
      return <AutomationPreview />;
    case 'business':
      return <BusinessPreview />;
  }
}

const pop = (delay: number) => ({
  initial: { opacity: 0, y: 8, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, delay, ease },
});

const gradient = 'bg-[linear-gradient(135deg,var(--primary),var(--accent-2))]';

function PhoneShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'absolute top-4 w-32 rounded-t-[1.4rem] border border-b-0 border-border-strong bg-surface p-1.5 pb-0 shadow-[var(--shadow-lift)]',
        className,
      )}
    >
      <div className="relative h-[8.5rem] overflow-hidden rounded-t-[1.05rem] bg-bg px-2 pt-5">
        <div className="absolute top-1.5 left-1/2 h-2.5 w-10 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

function BrowserShell({ children, url }: { children: ReactNode; url: string }) {
  return (
    <div className="absolute inset-x-6 top-4 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-border-strong bg-surface shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-1 border-b border-border px-2.5 py-1.5">
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="ml-2 rounded-full bg-surface-2 px-2 py-px text-[0.55rem] text-fg-subtle">{url}</span>
      </div>
      {children}
    </div>
  );
}

function AiMobilePreview() {
  return (
    <>
      <PhoneShell className="left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-1.5 text-[0.55rem] leading-tight">
          <m.div {...pop(0.15)} className="max-w-[80%] self-end rounded-xl rounded-br-sm bg-primary px-2 py-1 text-white">
            Plan my week
          </m.div>
          <m.div {...pop(0.6)} className="flex gap-0.5 self-start rounded-xl rounded-bl-sm border border-border bg-surface-2 px-2 py-1.5">
            {[0, 150, 300].map((d) => (
              <span key={d} className="animate-typing size-1 rounded-full bg-fg-subtle" style={{ animationDelay: `${d}ms` }} />
            ))}
          </m.div>
          <m.div {...pop(1.3)} className="max-w-[90%] self-start rounded-xl rounded-bl-sm border border-border bg-surface-2 px-2 py-1 text-fg">
            Done — 3 meetings and 2 focus blocks added.
          </m.div>
        </div>
      </PhoneShell>
      <m.span
        {...pop(1.6)}
        className={cn(
          'absolute top-8 right-8 flex items-center gap-1 rounded-full px-2 py-1 text-[0.6rem] font-semibold text-white shadow-[var(--shadow-lift)]',
          gradient,
        )}
      >
        <Sparkles className="size-3" /> AI assistant
      </m.span>
    </>
  );
}

function AiWebPreview() {
  return (
    <BrowserShell url="app.yourproduct.com">
      <div className="flex h-full">
        <div className="flex-1 space-y-1.5 p-2.5">
          <div className="h-1.5 w-1/2 rounded-full bg-border-strong" />
          <div className="h-1.5 w-4/5 rounded-full bg-border" />
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-9 rounded-md bg-accent-soft" />
            <div className="h-9 rounded-md bg-surface-2 ring-1 ring-border" />
            <div className="h-9 rounded-md bg-surface-2 ring-1 ring-border" />
          </div>
        </div>
        <m.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex w-[44%] flex-col gap-1 border-l border-border bg-surface-2 p-2 text-[0.55rem] leading-tight"
        >
          <span className="flex items-center gap-1 font-semibold text-fg">
            <Bot className="size-3 text-accent" /> Copilot
          </span>
          <m.div {...pop(0.7)} className="self-end rounded-lg bg-primary px-1.5 py-1 text-white">
            Summarise this report
          </m.div>
          <m.div {...pop(1.3)} className="rounded-lg border border-border bg-surface px-1.5 py-1 text-fg">
            Revenue +18%, churn down 4%. Top risk: late invoices.
          </m.div>
        </m.div>
      </div>
    </BrowserShell>
  );
}

function MobilePreview() {
  return (
    <>
      <PhoneShell className="left-[9%]">
        <m.div {...pop(0.1)} className={cn('h-8 rounded-lg', gradient)} />
        <div className="mt-1.5 space-y-1">
          {[0, 1, 2].map((i) => (
            <m.div key={i} {...pop(0.3 + i * 0.15)} className="flex items-center gap-1.5 rounded-md bg-surface-2 p-1 ring-1 ring-border">
              <span className="size-3.5 rounded bg-accent-soft" />
              <span className="h-1 flex-1 rounded-full bg-border-strong" />
            </m.div>
          ))}
        </div>
      </PhoneShell>
      <PhoneShell className="top-7 left-[35%] rotate-6">
        <div className="grid grid-cols-2 gap-1">
          {[0, 1, 2, 3].map((i) => (
            <m.div
              key={i}
              {...pop(0.5 + i * 0.1)}
              className={cn('h-10 rounded-md', i === 0 ? gradient : 'bg-surface-2 ring-1 ring-border')}
            />
          ))}
        </div>
      </PhoneShell>
      <div className="absolute top-4 right-4 flex flex-col items-start gap-1.5">
        {['Flutter', 'React Native', 'iOS', 'Android'].map((tech, i) => (
          <m.span
            key={tech}
            {...pop(0.6 + i * 0.12)}
            className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-1 text-[0.6rem] font-semibold whitespace-nowrap text-fg shadow-[var(--shadow-soft)]"
          >
            <TechLogo name={tech} className="size-3" />
            {tech}
          </m.span>
        ))}
      </div>
    </>
  );
}

const webBars = [40, 62, 48, 75, 58, 88, 70, 96];

function WebPreview() {
  const card = 'rounded-xl border border-border bg-surface p-2 shadow-[var(--shadow-soft)]';
  return (
    <>
      {/* Frontend */}
      <div className="absolute top-4 bottom-0 left-4 w-[57%] overflow-hidden rounded-t-xl border border-b-0 border-border-strong bg-surface shadow-[var(--shadow-lift)]">
        <div className="flex items-center gap-1 border-b border-border px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="size-1.5 rounded-full bg-border-strong" />
          <span className="ml-2 flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 text-[0.55rem] font-semibold text-fg-muted">
            <TechLogo name="React" className="size-2.5" />
            <TechLogo name="Next.js" className="size-2.5" />
            <TechLogo name="Vue.js" className="size-2.5" />
            Frontend
          </span>
        </div>
        <div className="space-y-1.5 p-2">
          <div className="grid grid-cols-2 gap-1.5">
            {[
              ['Revenue', '$48k'],
              ['Growth', '+18%'],
            ].map(([label, value], i) => (
              <m.div key={label} {...pop(0.1 + i * 0.1)} className="rounded-md bg-surface-2 px-1.5 py-1 ring-1 ring-border">
                <p className="text-[0.5rem] text-fg-subtle">{label}</p>
                <p className="text-[0.7rem] font-bold text-fg">{value}</p>
              </m.div>
            ))}
          </div>
          <div className="flex h-9 items-end gap-1 rounded-md bg-surface-2 p-1.5 ring-1 ring-border">
            {webBars.map((h, i) => (
              <m.span
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease }}
                style={{ height: `${h}%` }}
                className={cn('flex-1 origin-bottom rounded-sm', i === webBars.length - 1 ? gradient : 'bg-accent/30')}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Data flowing between frontend and API */}
      <div className="absolute top-[2.6rem] right-[calc(31%+0.75rem)] left-[calc(57%+1.25rem)] h-px bg-border-strong">
        <m.span
          className={cn('absolute -top-[3px] size-[7px] rounded-full shadow-[0_0_10px_var(--accent)]', gradient)}
          animate={{ left: ['0%', '100%', '0%'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Backend */}
      <div className="absolute top-4 right-4 flex w-[31%] flex-col gap-2">
        <m.div {...pop(0.4)} className={card}>
          <p className="text-[0.55rem] font-semibold text-fg-subtle">API</p>
          <div className="mt-1 flex gap-1.5">
            {['Node.js', 'NestJS', 'Python', 'Go'].map((t) => (
              <TechLogo key={t} name={t} className="size-3.5" />
            ))}
          </div>
        </m.div>
        <m.div {...pop(0.6)} className={card}>
          <p className="text-[0.55rem] font-semibold text-fg-subtle">Database</p>
          <div className="mt-1 flex gap-1.5">
            {['PostgreSQL', 'MongoDB', 'Firebase'].map((t) => (
              <TechLogo key={t} name={t} className="size-3.5" />
            ))}
          </div>
        </m.div>
      </div>
    </>
  );
}

const orders = [
  { name: 'Acme Corp', amount: '$4,200', status: 'Paid', tone: 'bg-success/15 text-success' },
  { name: 'Northwind', amount: '$1,850', status: 'Pending', tone: 'bg-amber-500/15 text-amber-600 dark:text-amber-400' },
  { name: 'Globex Ltd', amount: '$7,940', status: 'Shipped', tone: 'bg-accent-soft text-accent' },
];

/** Mini ERP / CRM: sidebar navigation + orders table with statuses popping in. */
function BusinessPreview() {
  return (
    <BrowserShell url="erp.yourcompany.com">
      <div className="flex h-full text-[0.55rem]">
        <div className="w-[26%] space-y-1 border-r border-border bg-surface-2 p-2">
          {['Dashboard', 'Orders', 'Customers', 'Reports'].map((item, i) => (
            <div
              key={item}
              className={cn('rounded-md px-1.5 py-1 font-medium', i === 1 ? 'bg-accent-soft text-accent' : 'text-fg-subtle')}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-2">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-semibold text-fg">Orders</span>
            <m.span {...pop(0.2)} className={cn('rounded-full px-1.5 py-0.5 font-semibold text-white', gradient)}>
              + New
            </m.span>
          </div>
          <div className="space-y-1">
            {orders.map((o, i) => (
              <m.div
                key={o.name}
                {...pop(0.3 + i * 0.15)}
                className="flex items-center gap-2 rounded-md bg-surface-2 px-1.5 py-1 ring-1 ring-border"
              >
                <span className="flex-1 font-medium text-fg">{o.name}</span>
                <span className="text-fg-muted">{o.amount}</span>
                <span className={cn('w-12 rounded-full py-px text-center font-semibold', o.tone)}>{o.status}</span>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </BrowserShell>
  );
}

function AutomationPreview() {
  const node = 'flex flex-col items-center gap-1 text-[0.55rem] font-semibold text-fg';
  const box = 'grid size-10 place-items-center rounded-xl border border-border-strong bg-surface shadow-[var(--shadow-soft)]';
  const result =
    'flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2 py-1 text-[0.55rem] font-semibold text-fg shadow-[var(--shadow-soft)]';
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <m.div {...pop(0.1)} className={node}>
        <span className={box}>
          <ShoppingCart className="size-4 text-fg-muted" />
        </span>
        New order
      </m.div>
      <Connector delay={0.4} />
      <m.div {...pop(0.5)} className={node}>
        <span className={cn(box, 'size-12 border-transparent text-white', gradient)}>
          <Sparkles className="size-5" />
        </span>
        AI agent
      </m.div>
      <Connector delay={0.9} />
      <div className="flex flex-col gap-2">
        <m.div {...pop(1.0)} className={result}>
          <Mail className="size-3 text-accent" /> Email sent
        </m.div>
        <m.div {...pop(1.15)} className={result}>
          <Database className="size-3 text-accent" /> CRM updated
        </m.div>
      </div>
    </div>
  );
}

/** Line between workflow nodes with a pulse of "data" travelling along it. */
function Connector({ delay }: { delay: number }) {
  return (
    <div className="relative mx-2 mb-4 h-px w-10 bg-border-strong">
      <m.span
        className={cn('absolute -top-[3px] size-[7px] rounded-full shadow-[0_0_10px_var(--accent)]', gradient)}
        initial={{ left: '0%', opacity: 0 }}
        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.2, delay, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
      />
    </div>
  );
}

/** Overlapping brand logos for the selected service's stack, e.g. (Flutter)(React)(Swift) +2 */
function StackLogos({ technologies }: { technologies: string[] }) {
  const withLogo = technologies.filter(hasTechLogo).slice(0, 5);
  const extra = technologies.length - withLogo.length;
  return (
    <div className="flex min-w-0 items-center gap-2">
      <ul aria-label="Technologies" className="flex -space-x-1.5">
        {withLogo.map((tech, i) => (
          <m.li
            key={tech}
            title={tech}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
            className="grid size-7 place-items-center rounded-full border border-border bg-surface text-fg shadow-[var(--shadow-soft)]"
          >
            <TechLogo name={tech} className="size-3.5" />
            <span className="sr-only">{tech}</span>
          </m.li>
        ))}
      </ul>
      {extra > 0 && <span className="text-[0.7rem] font-medium text-fg-subtle">+{extra} more</span>}
    </div>
  );
}
