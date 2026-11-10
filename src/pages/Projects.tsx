import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ChevronDown, FolderOpen, Search, X } from 'lucide-react';
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
  // Most common industries become tabs; the rest live in a compact "More" menu so the bar never wraps.
  const PRIMARY_TABS = 5;
  const primary = projectIndustries.slice(0, PRIMARY_TABS);
  const secondary = projectIndustries.slice(PRIMARY_TABS);
  const activeInMore = secondary.some((i) => i.name === industry);
  const tab = (active: boolean) =>
    cn(
      'relative -mb-px inline-flex shrink-0 items-center gap-1.5 border-b-2 px-1 pt-1 pb-3 text-sm font-medium whitespace-nowrap transition-colors',
      active ? 'border-accent text-fg' : 'border-transparent text-fg-muted hover:border-border-strong hover:text-fg',
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
              <div className="mb-10 flex flex-col-reverse gap-4 border-b border-border md:flex-row md:items-end md:justify-between md:gap-8">
                <nav aria-label="Filter projects by industry" className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">
                  <ul className="flex items-center gap-6">
                    {[{ name: ALL, count: visibleProjects.length }, ...primary].map(({ name, count }) => {
                      const active = name === industry;
                      return (
                        <li key={name}>
                          <button type="button" aria-pressed={active} onClick={() => setParam('industry', name)} className={tab(active)}>
                            {name === ALL ? 'All' : name}
                            <span className="text-xs font-normal text-fg-subtle tabular-nums">{count}</span>
                          </button>
                        </li>
                      );
                    })}
                    {secondary.length > 0 && (
                      <li>
                        <label className={cn(tab(activeInMore), 'cursor-pointer pr-5')}>
                          {activeInMore ? industry : 'More'}
                          {activeInMore && (
                            <span className="text-xs font-normal text-fg-subtle tabular-nums">
                              {secondary.find((i) => i.name === industry)?.count}
                            </span>
                          )}
                          <ChevronDown className="pointer-events-none absolute right-0 bottom-[0.9rem] size-3.5 text-fg-subtle" aria-hidden="true" />
                          <select
                            aria-label="More industries"
                            value={activeInMore ? industry : ''}
                            onChange={(e) => setParam('industry', e.target.value || ALL)}
                            className="absolute inset-0 cursor-pointer opacity-0"
                          >
                            <option value="">{activeInMore ? 'All industries' : 'More industries'}</option>
                            {secondary.map(({ name, count }) => (
                              <option key={name} value={name}>
                                {name} ({count})
                              </option>
                            ))}
                          </select>
                        </label>
                      </li>
                    )}
                  </ul>
                </nav>

                <div className="relative w-full md:mb-1 md:w-64">
                  <label htmlFor="project-search" className="sr-only">
                    Search projects
                  </label>
                  <Search className="pointer-events-none absolute top-1/2 left-0 size-4 -translate-y-1/2 text-fg-subtle" aria-hidden="true" />
                  <input
                    id="project-search"
                    type="search"
                    placeholder="Search projects"
                    value={query}
                    onChange={(e) => setParam('q', e.target.value)}
                    className="h-10 w-full border-b border-transparent bg-transparent pr-2 pl-6 text-sm text-fg outline-none placeholder:text-fg-subtle focus:border-accent"
                  />
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
