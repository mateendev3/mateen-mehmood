import { Section, SectionHeading } from '../ui/Section';
import { SkillsGrid } from './SkillsGrid';

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className="bg-bg-subtle">
      <SectionHeading
        id="skills-title"
        eyebrow="Technologies"
        title="Tools I work with"
        description="The stack I use to build intelligent, dependable products across AI, mobile and web."
      />
      <SkillsGrid />
    </Section>
  );
}
