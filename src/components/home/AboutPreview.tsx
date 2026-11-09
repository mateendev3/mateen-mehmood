import { ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function AboutPreview() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-3">About me</p>
          <h2 id="about-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {profile.about.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:pt-9">
          <p className="text-lg leading-relaxed text-fg-muted">{profile.about.summary}</p>
          <Button to="/about" variant="secondary" className="mt-8">
            More About Me <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
