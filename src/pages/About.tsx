import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { asset } from '../lib/utils';
import { visibleProjects } from '../lib/content';
import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
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
  return (
    <>
      {/* ── Introduction ─────────────────────────────────── */}
      <header className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40">
        <Backdrop />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
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

          <Reveal delay={0.1} className="mx-auto w-full max-w-md lg:max-w-none">
            <ProfileCard />
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

/** Professional "at a glance" card: monogram (or photo), key facts, track record and app icons. */
function ProfileCard() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('');
  const apps = visibleProjects.filter((p) => p.icon);
  const highlights = [
    profile.about.highlights[0],
    { value: String(visibleProjects.length), label: 'Apps live on the App Store & Google Play' },
    ...profile.about.highlights.slice(1),
  ].filter(Boolean);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-[conic-gradient(from_180deg,var(--primary),var(--accent-2),var(--primary))] opacity-[0.15] blur-3xl"
      />
      <div className="glass rounded-[1.75rem] p-6 shadow-[0_30px_80px_-24px_var(--glow),var(--shadow-lift)] sm:p-7">
        {/* Identity */}
        <div className="flex items-center gap-4">
          {profile.photo ? (
            <img
              src={asset(profile.photo)}
              alt={profile.photoAlt || profile.name}
              className="size-16 rounded-2xl object-cover ring-1 ring-border"
            />
          ) : (
            <span
              aria-hidden="true"
              className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] font-display text-2xl font-extrabold text-white shadow-[0_10px_30px_-10px_var(--glow)]"
            >
              {initials}
            </span>
          )}
          <div className="min-w-0">
            <p className="font-display text-xl font-bold">{profile.name}</p>
            <p className="text-sm text-fg-muted">{profile.title}</p>
            {profile.location && (
              <p className="mt-1 flex items-center gap-1 text-xs text-fg-subtle">
                <MapPin className="size-3.5" aria-hidden="true" /> {profile.location}
                {profile.timezone && <span>· {profile.timezone}</span>}
              </p>
            )}
          </div>
        </div>

        {/* Track record */}
        <dl className="mt-6 grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col rounded-2xl border border-border bg-surface/70 p-4">
              <dt className="order-2 mt-1 text-xs leading-snug text-fg-muted">{h.label}</dt>
              <dd className="text-gradient order-1 font-display text-3xl font-extrabold tracking-tight">{h.value}</dd>
            </div>
          ))}
        </dl>

        {/* Apps */}
        {apps.length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">Apps I’ve worked on</p>
            <ul className="mt-3 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${apps.length > 9 ? Math.ceil(apps.length / 2) : apps.length}, minmax(0, 1fr))` }}>
              {apps.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/projects/${p.slug}`}
                    title={p.title}
                    className="block max-w-11 rounded-[22%] shadow-[var(--shadow-soft)] ring-1 ring-border transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
                  >
                    <img src={asset(p.icon)} alt={p.title} loading="lazy" className="aspect-square w-full rounded-[22%] object-cover" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
