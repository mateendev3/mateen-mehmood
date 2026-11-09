import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { FolderOpen, Search, X } from 'lucide-react';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { projectCategories, visibleProjects } from '../lib/content';
import { cn } from '../lib/utils';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { ProjectCard } from '../components/projects/ProjectCard';
import { FinalCta } from '../components/home/FinalCta';

const ALL = 'All Projects';

export default function Projects() {
  useDocumentMeta(pageMeta.projects);
  const [params, setParams] = useSearchParams();
  const category = params.get('category') ?? ALL;
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
      if (category !== ALL && p.category !== category) return false;
      if (!q) return true;
      return [p.title, p.subtitle, p.summary, p.category, ...p.technologies, ...p.platforms]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(q));
    });
  }, [category, query]);

  const hasProjects = visibleProjects.length > 0;
  const showFilters = visibleProjects.length > 3 || projectCategories.length > 1;

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
              <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                  {[ALL, ...projectCategories].map((c) => {
                    const active = c === category;
                    return (
                      <button
                        key={c}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setParam('category', c)}
                        className={cn(
                          'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                          active
                            ? 'border-transparent bg-fg text-bg'
                            : 'border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg',
                        )}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
                <div className="relative w-full lg:w-72">
                  <label htmlFor="project-search" className="sr-only">
                    Search projects
                  </label>
                  <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-fg-subtle" aria-hidden="true" />
                  <input
                    id="project-search"
                    type="search"
                    placeholder="Search by name or technology"
                    value={query}
                    onChange={(e) => setParam('q', e.target.value)}
                    className="h-11 w-full rounded-full border border-border bg-surface pr-4 pl-10 text-sm text-fg outline-none placeholder:text-fg-subtle focus:border-accent focus:ring-4 focus:ring-accent-soft"
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
