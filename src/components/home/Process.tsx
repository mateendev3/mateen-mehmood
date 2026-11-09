import { profile } from '../../data/profile';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function Process() {
  const steps = profile.process;
  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="Process"
        title="How we'll work together"
        description="A simple, transparent process — you always know what's happening and what comes next."
      />
      <div className="relative">
        {/* Connecting line: vertical on mobile, horizontal on desktop */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[1.375rem] w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent lg:hidden" />
        <span aria-hidden="true" className="absolute top-[1.375rem] right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />
        <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.07} className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <div className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-border-strong bg-surface text-accent shadow-[var(--shadow-soft)]">
                <Icon name={step.icon} className="size-5" />
              </div>
              <div className="lg:mt-6">
                <p className="text-xs font-semibold tracking-widest text-fg-subtle uppercase">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-fg-muted lg:text-[0.9375rem]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
