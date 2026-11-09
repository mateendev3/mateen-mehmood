import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { asset } from '../../lib/utils';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function Testimonials() {
  // Hidden until real, publishable feedback is added in src/data/testimonials.ts
  if (testimonials.length === 0) return null;
  return (
    <Section id="testimonials" labelledBy="testimonials-title" className="bg-bg-subtle">
      <SectionHeading id="testimonials-title" eyebrow="Testimonials" title="What clients say" />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name + i} delay={(i % 3) * 0.06}>
            <figure className="card flex h-full flex-col p-7">
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-fg">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <img src={asset(t.avatar)} alt="" loading="lazy" className="size-10 rounded-full object-cover" />
                ) : (
                  <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-accent-soft font-semibold text-accent">
                    {t.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block font-semibold">
                    {t.sourceUrl ? (
                      <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        {t.name}
                      </a>
                    ) : (
                      t.name
                    )}
                  </span>
                  {(t.role || t.company) && (
                    <span className="block text-sm text-fg-muted">{[t.role, t.company].filter(Boolean).join(', ')}</span>
                  )}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
