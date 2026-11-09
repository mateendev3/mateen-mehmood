import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { activeServices } from '../data/services';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { projectsForCategories } from '../lib/content';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { TechChip } from '../components/ui/TechLogo';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { FinalCta } from '../components/home/FinalCta';

export default function Services() {
  useDocumentMeta(pageMeta.services);
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="AI, mobile & web — built to solve real problems."
        description="From AI-powered apps to solid mobile and web foundations — services I deliver personally, end to end."
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {activeServices.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-fg-muted backdrop-blur transition-colors hover:border-border-strong hover:text-fg"
                >
                  <Icon name={s.icon} className="size-4 text-accent" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="container-page space-y-6 pb-8">
        {activeServices.map((service) => {
          const related = projectsForCategories(service.relatedCategories);
          return (
            <Reveal key={service.id}>
              <section
                id={service.id}
                aria-labelledby={`${service.id}-title`}
                className="card scroll-mt-28 grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14"
              >
                <div className="flex flex-col">
                  <div className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon name={service.icon} className="size-6" />
                  </div>
                  <h2 id={`${service.id}-title`} className="mt-6 text-2xl font-bold sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-fg-muted">{service.description}</p>

                  {related.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold text-fg">Related work</h3>
                      <ul className="mt-3 space-y-2">
                        {related.map((p) => (
                          <li key={p.slug}>
                            <Link to={`/projects/${p.slug}`} className="group inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-accent">
                              {p.title}
                              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <Button to={`/contact?service=${service.id}`}>
                      Discuss this service <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wide text-fg-subtle uppercase">What I can build</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.solutions.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-fg">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-fg-subtle uppercase">Deliverables</h3>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-fg-muted">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.technologies.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide text-fg-subtle uppercase">Technologies</h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <li key={tech}>
                            <TechChip name={tech} size="sm" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      <FinalCta title="Not sure which service fits?" description="Tell me about your idea or your existing app and I'll suggest the most practical way forward." />
    </>
  );
}
