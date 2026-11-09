import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Project, ProjectImage } from '../types';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getProject, relatedProjects } from '../lib/content';
import { projectPageMeta } from '../lib/seo';
import { asset, cn } from '../lib/utils';
import { Backdrop } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Chip } from '../components/ui/Chip';
import { Reveal } from '../components/ui/Reveal';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectCover } from '../components/projects/ProjectCover';
import { FinalCta } from '../components/home/FinalCta';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  return <CaseStudy project={project} />;
}

function projectLinks(project: Project) {
  const l = project.links ?? {};
  return [
    l.appStore && { label: 'App Store', url: l.appStore },
    l.playStore && { label: 'Google Play', url: l.playStore },
    l.website && { label: 'Live website', url: l.website },
    l.demo && { label: 'Live demo', url: l.demo },
    l.github && { label: 'Source code', url: l.github },
    ...(l.other ?? []),
  ].filter(Boolean) as { label: string; url: string }[];
}

function CaseStudy({ project }: { project: Project }) {
  useDocumentMeta(projectPageMeta(project));
  const links = projectLinks(project);
  const related = relatedProjects(project);
  const portrait = project.gallery.filter((img) => img.orientation === 'portrait');
  const landscape = project.gallery.filter((img) => img.orientation !== 'portrait');

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="relative isolate overflow-hidden pt-28 sm:pt-36">
        <Backdrop />
        <div className="container-page">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Chip tone="accent">{project.category}</Chip>
            {project.platforms.map((p) => (
              <Chip key={p}>{p}</Chip>
            ))}
            {!project.published && <Chip tone="warning">Draft · only visible in development</Chip>}
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl lg:leading-[1.05]">{project.title}</h1>
          {project.subtitle && <p className="mt-5 max-w-2xl text-xl leading-relaxed text-fg-muted">{project.subtitle}</p>}

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link, i) => (
                <Button key={link.url} href={link.url} variant={i === 0 ? 'primary' : 'secondary'}>
                  {link.label} <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          )}

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-[var(--shadow-lift)]">
            <ProjectCover project={project} hero eager className="aspect-[16/9] rounded-[1.35rem]" />
          </div>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="min-w-0 space-y-16">
          <Block title="Overview">
            <Prose text={project.overview} />
          </Block>

          {project.challenge && (
            <Block title="The challenge">
              <Prose text={project.challenge} />
            </Block>
          )}

          {project.myRole.length > 0 && (
            <Block title="My role">
              {project.teamContext && <p className="mb-5 text-lg text-fg-muted">{project.teamContext}</p>}
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.myRole.map((role) => (
                  <li key={role} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {project.solution && (
            <Block title="The solution">
              <Prose text={project.solution} />
            </Block>
          )}

          {project.features.length > 0 && (
            <Block title="Key features">
              <ul className="grid gap-5 sm:grid-cols-2">
                {project.features.map((feature, i) => (
                  <Reveal as="li" key={feature.title} delay={(i % 2) * 0.06} className="card overflow-hidden">
                    {feature.image && <Shot image={feature.image} className="border-b border-border" />}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-fg-muted">{feature.description}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </Block>
          )}

          {project.gallery.length > 0 && (
            <Block title="Screenshots">
              <div className="space-y-6">
                {portrait.length > 0 && (
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                    {portrait.map((img) => (
                      <li key={img.src}>
                        <PhoneFrame image={img} />
                      </li>
                    ))}
                  </ul>
                )}
                {landscape.length > 0 && (
                  <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    {landscape.map((img, i) => (
                      <li key={img.src} className={cn(landscape.length % 2 === 1 && i === 0 && 'sm:col-span-2')}>
                        <figure className="card overflow-hidden">
                          <Shot image={img} />
                          {img.caption && <figcaption className="px-5 py-3 text-sm text-fg-muted">{img.caption}</figcaption>}
                        </figure>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Block>
          )}

          {project.results && project.results.length > 0 && (
            <Block title="Results">
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-lg">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-2))]" aria-hidden="true" />
                    {result}
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        {/* ── Sidebar ─────────────────────────────────────── */}
        <aside aria-label="Project details" className="lg:sticky lg:top-28 lg:self-start">
          <div className="card p-6">
            <dl className="space-y-5 text-sm">
              <Detail label="Category">{project.category}</Detail>
              {project.platforms.length > 0 && <Detail label="Platforms">{project.platforms.join(', ')}</Detail>}
              {project.year && <Detail label="Year">{project.year}</Detail>}
              {project.client && <Detail label="Client">{project.client}</Detail>}
              {project.technologies.length > 0 && (
                <Detail label="Technology stack">
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </Detail>
              )}
              {links.length > 0 && (
                <Detail label="Links">
                  <ul className="mt-1 space-y-2">
                    {links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-accent"
                        >
                          {link.label}
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Detail>
              )}
            </dl>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-border bg-bg-subtle py-20">
          <div className="container-page">
            <h2 id="related-title" className="mb-10 text-3xl font-bold">
              Related projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta title="Building something similar?" description="I'd be glad to hear about your project and share how I'd approach it." />
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <Reveal>
      <section aria-labelledby={id}>
        <h2 id={id} className="mb-5 text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        {children}
      </section>
    </Reveal>
  );
}

/** Splits on blank lines so data files can contain multiple paragraphs. */
function Prose({ text }: { text: string }) {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-fg-muted">
      {text.split(/\n\s*\n/).map((para, i) => (
        <p key={i}>{para.trim()}</p>
      ))}
    </div>
  );
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wider text-fg-subtle uppercase">{label}</dt>
      <dd className="mt-1.5 text-fg">{children}</dd>
    </div>
  );
}

function Shot({ image, className }: { image: ProjectImage; className?: string }) {
  return (
    <img
      src={asset(image.src)}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className={cn('aspect-[16/10] w-full bg-surface-2 object-cover', className)}
    />
  );
}

function PhoneFrame({ image }: { image: ProjectImage }) {
  if (image.frame === false) {
    return (
      <figure>
        <img
          src={asset(image.src)}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-2xl border border-border bg-surface-2 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
        />
        {image.caption && <figcaption className="mt-3 text-center text-sm text-fg-muted">{image.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <figure>
      <div className="rounded-[2rem] border border-border-strong bg-surface p-1.5 shadow-[var(--shadow-lift)]">
        <img
          src={asset(image.src)}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[1.6rem] bg-surface-2"
        />
      </div>
      {image.caption && <figcaption className="mt-3 text-center text-sm text-fg-muted">{image.caption}</figcaption>}
    </figure>
  );
}
