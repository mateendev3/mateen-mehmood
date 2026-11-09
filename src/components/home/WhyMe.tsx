import { profile } from '../../data/profile';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function WhyMe() {
  return (
    <Section id="why-me" labelledBy="why-title">
      <SectionHeading id="why-title" eyebrow="Why work with me" title="What you can count on" align="center" />
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {profile.whyMe.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 0.06} className="flex gap-4">
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
  );
}
