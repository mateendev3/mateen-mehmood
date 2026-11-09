import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { visibleProjects } from '../../lib/content';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { HeroVisual } from './HeroVisual';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

/**
 * Compact hero: on large screens it fills exactly one viewport (capped), with
 * the copy and animated visual centred and the tech strip pinned to the bottom.
 */
export function Hero() {
  const { hero, availability } = profile;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex flex-col overflow-hidden pt-28 sm:pt-32 lg:min-h-[min(100svh,56rem)] lg:pt-24"
    >
      <HeroBackdrop />

      <div className="container-page flex flex-1 items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6 xl:gap-12">
          {/* ── Copy ───────────────────────────────────────── */}
          <div className="max-w-2xl">
            <m.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
              {hero.badge && (
                <p className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-sm font-medium text-fg shadow-[var(--shadow-soft)]">
                  <span className="grid size-6 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] text-white">
                    <Sparkles className="size-3.5" aria-hidden="true" />
                  </span>
                  {hero.badge}
                </p>
              )}
              {availability && (
                <p className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-2 rounded-full',
                      availability.status === 'available' && 'animate-pulse-dot bg-success',
                      availability.status === 'limited' && 'bg-amber-500',
                      availability.status === 'unavailable' && 'bg-fg-subtle',
                    )}
                  />
                  {availability.label}
                </p>
              )}
            </m.div>

            <m.h1
              {...fadeUp(0.08)}
              id="hero-title"
              className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold tracking-[-0.035em] sm:text-[3.25rem] lg:text-[3.4rem] xl:text-[3.75rem]"
            >
              <span className="sr-only">
                {hero.headline.before} {hero.headline.rotating.join(', ')} {hero.headline.after}
              </span>
              <span aria-hidden="true">
                {hero.headline.before}
                <br />
                <RotatingWords words={hero.headline.rotating} />
                <br />
                {hero.headline.after}
              </span>
            </m.h1>

            <m.p {...fadeUp(0.16)} className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
              {hero.greeting && <span className="font-semibold text-fg">{hero.greeting} </span>}
              {hero.description}
            </m.p>

            <m.div {...fadeUp(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg">
                Let's Work Together
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
              </Button>
              {visibleProjects.length > 0 ? (
                <Button to="/projects" variant="secondary" size="lg">
                  Explore My Work
                </Button>
              ) : (
                <Button to="/services" variant="secondary" size="lg">
                  Explore My Services
                </Button>
              )}
            </m.div>

            <m.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <SocialLinks featuredOnly />
              {profile.location && <p className="text-sm text-fg-subtle">Based in {profile.location}</p>}
            </m.div>
          </div>

          {/* ── Animated visual (large screens) ───────────── */}
          <div className="hidden justify-center lg:flex">
            <div className="[zoom:0.8] xl:[zoom:0.9] 2xl:[zoom:1]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      <TechMarquee items={hero.marquee} />
    </section>
  );
}

/** Cycles through phrases with a soft blur/slide. Static (first phrase) under reduced motion. */
function RotatingWords({ words }: { words: string[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion, words.length]);

  return (
    // Every phrase sits in the same grid cell, so the box is always as wide as the longest one — no layout shift.
    <span className="relative inline-grid">
      {words.map((word) => (
        <span key={word} className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {word}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <m.span
          key={words[index]}
          className="text-gradient col-start-1 row-start-1 pb-[0.08em] whitespace-nowrap"
          initial={{ opacity: 0, y: '0.45em', filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: '-0.45em', filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease }}
        >
          {words[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

function TechMarquee({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 font-display text-[0.9375rem] font-semibold whitespace-nowrap text-fg-subtle"
        >
          {item}
          <Sparkles className="size-3 text-accent/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="mt-14 border-y border-border bg-surface/40 py-4 backdrop-blur-sm lg:mt-8">
      <p className="sr-only">Technologies I work with</p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,#000_35%,transparent_80%)]" />
      <div className="animate-drift absolute -top-48 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
      <div
        style={{ animationDelay: '-9s' }}
        className="animate-drift absolute top-10 -right-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent-2)_22%,transparent),transparent)] blur-2xl"
      />
    </div>
  );
}
