import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { asset } from '../lib/utils';
import { Backdrop } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { Section, SectionHeading } from '../components/ui/Section';
import { SocialLinks } from '../components/ui/SocialLinks';
import { SkillsGrid } from '../components/home/SkillsGrid';
import { FinalCta } from '../components/home/FinalCta';

export default function About() {
  useDocumentMeta(pageMeta.about);
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('');
  const facts = [
    { icon: 'briefcase' as const, label: 'Experience', value: profile.stats[0]?.value ?? '' },
    { icon: 'sparkles' as const, label: 'Focus', value: 'AI · Mobile · Web' },
    profile.location ? { icon: 'map-pin' as const, label: 'Based in', value: profile.location } : null,
    profile.timezone ? { icon: 'clock' as const, label: 'Timezone', value: profile.timezone } : null,
  ].filter((f): f is NonNullable<typeof f> => !!f && !!f.value);

  return (
    <>
      {/* ── Introduction ─────────────────────────────────── */}
      <header className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40">
        <Backdrop />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">About me</p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">{profile.about.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">{profile.about.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact">
                Let's Work Together <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <SocialLinks featuredOnly />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="card overflow-hidden p-2">
              <div className="aspect-square overflow-hidden rounded-[1rem]">
                {profile.photo ? (
                  <img src={asset(profile.photo)} alt={profile.photoAlt || profile.name} className="h-full w-full object-cover" />
                ) : (
                  <div aria-hidden="true" className="grid h-full place-items-center bg-[linear-gradient(135deg,var(--primary),var(--accent-2))]">
                    <span className="font-display text-7xl font-extrabold text-white/95">{initials}</span>
                  </div>
                )}
              </div>
              {facts.length > 0 && (
                <dl className="grid gap-4 p-5">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-center gap-3">
                      <Icon name={fact.icon} className="size-4 text-accent" />
                      <dt className="text-sm text-fg-muted">{fact.label}</dt>
                      <dd className="ml-auto text-sm font-semibold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Journey ──────────────────────────────────────── */}
      <Section labelledBy="journey-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-3">My journey</p>
            <h2 id="journey-title" className="text-3xl font-bold sm:text-4xl">
              Ten years across mobile, web and AI.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-fg-muted">
            {profile.about.journey.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ── What I do best ───────────────────────────────── */}
      <Section labelledBy="strengths-title" className="bg-bg-subtle">
        <SectionHeading id="strengths-title" eyebrow="What I do best" title="Where I add the most value" />
        <ul className="grid gap-5 sm:grid-cols-2">
          {profile.about.strengths.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.06}>
              <div className="card flex h-full gap-5 p-7">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-fg-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Technologies ─────────────────────────────────── */}
      <Section labelledBy="tech-title">
        <SectionHeading id="tech-title" eyebrow="Technologies" title="Tools I work with" />
        <SkillsGrid />
      </Section>

      {/* ── Approach ─────────────────────────────────────── */}
      <Section labelledBy="approach-title" className="bg-bg-subtle">
        <SectionHeading
          id="approach-title"
          eyebrow="My approach"
          title="How I work with clients"
          description="Good software comes from good collaboration. Here's what working with me looks like."
        />
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {profile.about.approach.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.06} className="flex gap-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-accent">
                <Icon name={item.icon} className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-fg-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCta title="Let's connect." description="Have an idea, an app that needs attention, or just a question? I'd be happy to hear from you." />
    </>
  );
}
