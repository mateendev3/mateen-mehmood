import { useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion } from 'motion/react';
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code,
  Database,
  Globe,
  Send,
  Smartphone,
  Sparkles,
  Zap,
  type LucideProps,
} from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Decorative hero animation: a phone running an AI-assistant conversation,
 * surrounded by slowly orbiting technology icons and two floating cards
 * (a web dashboard + a model status chip). Purely visual — hidden from
 * assistive tech. Pauses when off-screen and stays static under reduced motion.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative grid size-[30rem] place-items-center select-none">
      <Orbits />
      <Phone />

      <FloatCard className="top-10 -right-8" delay={0.9} floatDelay="0s">
        <div className="flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-fg">
          <span className="animate-pulse-dot size-2 rounded-full bg-success" />
          AI model connected
        </div>
      </FloatCard>

      <FloatCard className="bottom-4 -left-16" delay={1.1} floatDelay="2s">
        <DashboardCard />
      </FloatCard>
    </div>
  );
}

/* ── Orbit rings ─────────────────────────────────────────────────────────── */

type OrbitIcon = { icon: ComponentType<LucideProps>; angle: number };

const rings: { size: string; radius: string; duration: string; reverse?: boolean; dashed?: boolean; icons: OrbitIcon[] }[] = [
  {
    size: 'size-[19rem]',
    radius: '9.5rem',
    duration: '48s',
    icons: [
      { icon: Bot, angle: 200 },
      { icon: Zap, angle: 20 },
    ],
  },
  {
    size: 'size-[24.5rem]',
    radius: '12.25rem',
    duration: '70s',
    reverse: true,
    dashed: true,
    icons: [
      { icon: Smartphone, angle: 140 },
      { icon: Globe, angle: 320 },
    ],
  },
  {
    size: 'size-[30rem]',
    radius: '15rem',
    duration: '95s',
    icons: [
      { icon: BrainCircuit, angle: 250 },
      { icon: Database, angle: 165 },
      { icon: Cloud, angle: 70 },
      { icon: Code, angle: 345 },
    ],
  },
];

function Orbits() {
  return (
    <>
      <div className="absolute size-[17rem] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
      {rings.map((ring) => (
        <div
          key={ring.size}
          className={cn(
            'absolute rounded-full border',
            ring.size,
            ring.dashed ? 'border-dashed border-border-strong' : 'border-border',
            ring.reverse ? 'animate-orbit-reverse' : 'animate-orbit',
          )}
          style={{ animationDuration: ring.duration }}
        >
          {ring.icons.map(({ icon: Icon, angle }) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 size-0"
              style={{ transform: `rotate(${angle}deg) translateX(${ring.radius}) rotate(${-angle}deg)` }}
            >
              {/* Counter-rotate so the icon stays upright while the ring turns. */}
              <div
                className={cn('absolute -top-5 -left-5 size-10', ring.reverse ? 'animate-orbit' : 'animate-orbit-reverse')}
                style={{ animationDuration: ring.duration }}
              >
                <div className="glass grid size-10 place-items-center rounded-xl text-accent shadow-[var(--shadow-soft)]">
                  <Icon className="size-[1.1rem]" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

/* ── Phone with AI chat ──────────────────────────────────────────────────── */

type Message = { from: 'user' | 'ai'; text: string; extra?: 'chart' | 'action' };

const conversation: Message[] = [
  { from: 'user', text: 'How were sales this week?' },
  { from: 'ai', text: 'Up 18% on last week:', extra: 'chart' },
  { from: 'user', text: 'Thank our new customers' },
  { from: 'ai', text: '34 emails ready to send.', extra: 'action' },
];

/** Timeline: how many messages are visible, whether the AI is "typing", and how long to hold. */
const frames = [
  { shown: 0, typing: false, ms: 700 },
  { shown: 1, typing: false, ms: 650 },
  { shown: 1, typing: true, ms: 1300 },
  { shown: 2, typing: false, ms: 2600 },
  { shown: 3, typing: false, ms: 650 },
  { shown: 3, typing: true, ms: 1300 },
  { shown: 4, typing: false, ms: 4200 },
];

function useConversation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const timer = window.setTimeout(() => {
      if (frame === frames.length - 1) {
        setFrame(0);
        setCycle((c) => c + 1);
      } else {
        setFrame((f) => f + 1);
      }
    }, frames[frame].ms);
    return () => window.clearTimeout(timer);
  }, [frame, inView, reduceMotion]);

  const current = reduceMotion ? frames[frames.length - 1] : frames[frame];
  return { ref, cycle, ...current };
}

function Phone() {
  const { ref, cycle, shown, typing } = useConversation();

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 h-[28rem] w-[13.5rem] rounded-[2.5rem] border border-border-strong bg-surface p-[7px] shadow-[0_30px_80px_-20px_var(--glow),var(--shadow-lift)]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[2.1rem] bg-bg">
        {/* Dynamic island */}
        <div className="absolute top-2 left-1/2 h-[1.15rem] w-[4.5rem] -translate-x-1/2 rounded-full bg-black" />

        {/* App header */}
        <div className="flex items-center gap-2 border-b border-border px-3.5 pt-9 pb-2.5">
          <span className="grid size-7 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] text-white">
            <Sparkles className="size-3.5" />
          </span>
          <div className="leading-tight">
            <p className="text-[0.72rem] font-semibold text-fg">AI Assistant</p>
            <p className="flex items-center gap-1 text-[0.6rem] text-success">
              <span className="size-1.5 rounded-full bg-success" /> Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <AnimatePresence mode="wait">
          <m.div
            key={cycle}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="flex flex-1 flex-col gap-2 overflow-hidden px-3 py-3 text-[0.68rem] leading-snug"
          >
            <AnimatePresence>
              {conversation.slice(0, shown).map((msg, i) => (
                <Bubble key={i} message={msg} />
              ))}
              {typing && <TypingBubble key="typing" />}
            </AnimatePresence>
          </m.div>
        </AnimatePresence>

        {/* Input */}
        <div className="m-2.5 mt-0 flex items-center gap-2 rounded-full border border-border bg-surface-2 py-1 pr-1 pl-3 text-[0.65rem] text-fg-subtle">
          <span className="flex-1">Ask anything…</span>
          <span className="grid size-6 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] text-white">
            <Send className="size-3" />
          </span>
        </div>
      </div>
    </m.div>
  );
}

const bubbleMotion = {
  initial: { opacity: 0, y: 10, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, transition: { duration: 0.15 } },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

function Bubble({ message }: { message: Message }) {
  if (message.from === 'user') {
    return (
      <m.div {...bubbleMotion} className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-primary px-3 py-2 text-white">
        {message.text}
      </m.div>
    );
  }
  return (
    <m.div
      {...bubbleMotion}
      className="max-w-[90%] self-start rounded-2xl rounded-bl-md border border-border bg-surface-2 px-3 py-2 text-fg"
    >
      {message.text}
      {message.extra === 'chart' && <MiniChart />}
      {message.extra === 'action' && (
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] px-2.5 py-1 text-[0.6rem] font-semibold text-white">
            Send all
          </span>
          <span className="rounded-full border border-border-strong px-2.5 py-1 text-[0.6rem] font-medium text-fg-muted">Preview</span>
        </div>
      )}
    </m.div>
  );
}

const bars = [38, 52, 44, 63, 58, 80, 96];

function MiniChart() {
  return (
    <div className="mt-1.5 flex h-10 items-end gap-1 rounded-lg bg-bg/60 px-2 pt-2 pb-1.5">
      {bars.map((h, i) => (
        <m.span
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: `${h}%` }}
          className={cn(
            'flex-1 origin-bottom rounded-sm',
            i === bars.length - 1 ? 'bg-[linear-gradient(to_top,var(--primary),var(--accent-2))]' : 'bg-accent/35',
          )}
        />
      ))}
    </div>
  );
}

function TypingBubble() {
  return (
    <m.div {...bubbleMotion} className="flex gap-1 self-start rounded-2xl rounded-bl-md border border-border bg-surface-2 px-3 py-2.5">
      {[0, 150, 300].map((delay) => (
        <span key={delay} className="animate-typing size-1.5 rounded-full bg-fg-subtle" style={{ animationDelay: `${delay}ms` }} />
      ))}
    </m.div>
  );
}

/* ── Floating cards ──────────────────────────────────────────────────────── */

function FloatCard({
  children,
  className,
  delay,
  floatDelay,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
  floatDelay: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn('absolute z-20', className)}
    >
      <div style={{ animationDelay: floatDelay }} className="glass animate-float rounded-2xl shadow-[var(--shadow-lift)]">
        {children}
      </div>
    </m.div>
  );
}

function DashboardCard() {
  return (
    <div className="w-[12.5rem] p-3">
      <div className="flex items-center gap-1">
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="ml-1.5 flex items-center gap-1 text-[0.6rem] font-medium text-fg-muted">
          <Globe className="size-2.5" /> dashboard.app
        </span>
      </div>
      <div className="mt-2.5 flex items-end justify-between">
        <div>
          <p className="text-[0.6rem] text-fg-subtle">Active users</p>
          <p className="font-display text-base font-bold text-fg">12.4k</p>
        </div>
        <span className="rounded-full bg-success/10 px-1.5 py-0.5 text-[0.6rem] font-semibold text-success">+18%</span>
      </div>
      <svg viewBox="0 0 176 44" className="mt-1.5 h-11 w-full overflow-visible">
        <defs>
          <linearGradient id="hero-spark" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--primary)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
          <linearGradient id="hero-spark-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--accent-2)" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 36 L22 31 L44 33 L66 24 L88 27 L110 17 L132 20 L154 9 L176 4 L176 44 L0 44 Z" fill="url(#hero-spark-fill)" />
        <m.path
          d="M0 36 L22 31 L44 33 L66 24 L88 27 L110 17 L132 20 L154 9 L176 4"
          fill="none"
          stroke="url(#hero-spark)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1.3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 }}
        />
      </svg>
    </div>
  );
}
