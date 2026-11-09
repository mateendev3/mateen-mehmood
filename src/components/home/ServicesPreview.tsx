import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { activeServices } from '../../data/services';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function ServicesPreview() {
  return (
    <Section id="services" labelledBy="services-title" className="bg-bg-subtle">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="How I can help"
        description="AI-powered apps, mobile and web development, and support for products already live — here's what you can hire me for."
        action={
          <Button to="/services" variant="secondary">
            View All Services <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        }
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {activeServices.map((service, i) => (
          <Reveal as="li" key={service.id} delay={(i % 3) * 0.06}>
            <article className="group card relative flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lift)]">
              <div className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
                <Icon name={service.icon} className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-fg-muted">{service.summary}</p>
              <Link
                to={`/services#${service.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] group-hover:text-accent"
              >
                Learn more<span className="sr-only"> about {service.title}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
