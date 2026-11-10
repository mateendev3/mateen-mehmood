import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { FolderOpen, Search, X } from 'lucide-react';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { projectIndustries, visibleProjects } from '../lib/content';
import { cn } from '../lib/utils';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { ProjectCard } from '../components/projects/ProjectCard';
import { FinalCta } from '../components/home/FinalCta';

const ALL = 'All';

export default function Projects() {
  useDocumentMeta(pageMeta.projects);
  const [params, setParams] = useSearchParams();
  const industry = params.get('industry') ?? ALL;
  const query = params.get('q') ?? '';

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== ALL) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return visibleProjects.filter((p) => {
      if (industry !== ALL && !p.industries.includes(industry)) return false;
      if (!q) return true;
      return [p.title, p.subtitle, p.summary, p.category, p.client, ...p.industries, ...p.technologies, ...p.platforms]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(q));
    });
  }, [industry, query]);

  const hasProjects = visibleProjects.length > 0;
  const showFilters = visibleProjects.length > 3 || projectIndustries.length > 1;
  const chip = (active: boolean) =>
    cn(
      'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
      active
        ? 'border-transparent bg-fg text-bg'
        : 'border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg',
    );

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & case studies"
        description="A selection of apps and software I've worked on — what each product does, the challenge behind it and the part I played."
      />

      <section aria-label="Project list" className="container-page pb-8">
        {!hasProjects ? (
          <EmptyState
            icon={<FolderOpen className="size-6" aria-hidden="true" />}
            title="Case studies are on their way"
            description="I'm preparing detailed write-ups of recent work. In the meantime, I'm happy to walk you through relevant projects on a call."
            action={<Button to="/contact">Get in touch</Button>}
          />
        ) : (
          <>
            {showFilters && (
              <div className="mb-10 space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p id="industry-filter-label" className="text-sm font-semibold text-fg">
                    Filter by industry
                  </p>
                  <div className="relative w-full sm:w-72">
                    <label htmlFor="project-search" className="sr-only">
                      Search projects
                    </label>
                    <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-fg-subtle" aria-hidden="true" />
                    <input
                      id="project-search"
                      type="search"
                      placeholder="Search apps, clients, tech…"
                      value={query}
                      onChange={(e) => setParam('q', e.target.value)}
                      className="h-11 w-full rounded-full border border-border bg-surface pr-4 pl-10 text-sm text-fg outline-none placeholder:text-fg-subtle focus:border-accent focus:ring-4 focus:ring-accent-soft"
                    />
                  </div>
                </div>
                <div role="group" aria-labelledby="industry-filter-label" className="flex flex-wrap gap-2">
                  <button type="button" aria-pressed={industry === ALL} onClick={() => setParam('industry', ALL)} className={chip(industry === ALL)}>
                    All projects
                    <span className={cn('text-xs', industry === ALL ? 'text-bg/70' : 'text-fg-subtle')}>{visibleProjects.length}</span>
                  </button>
                  {projectIndustries.map(({ name, count }) => {
                    const active = name === industry;
                    return (
                      <button key={name} type="button" aria-pressed={active} onClick={() => setParam('industry', name)} className={chip(active)}>
                        {name}
                        <span className={cn('text-xs', active ? 'text-bg/70' : 'text-fg-subtle')}>{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <p className="sr-only" aria-live="polite">
              {results.length} {results.length === 1 ? 'project' : 'projects'} shown
            </p>

            {results.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 3) * 0.06}>
                    <ProjectCard project={project} headingLevel="h2" />
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={<Search className="size-6" aria-hidden="true" />}
                title="No matching projects"
                description="Try a different search term or category."
                action={
                  <Button variant="secondary" onClick={() => setParams({}, { replace: true, preventScrollReset: true })}>
                    <X className="size-4" aria-hidden="true" /> Clear filters
                  </Button>
                }
              />
            )}
          </>
        )}
      </section>

      <FinalCta />
    </>
  );
}
