import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '../../lib/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { ProjectCard } from '../projects/ProjectCard';

export function FeaturedProjects() {
  // Hidden until at least one real (published + featured) project exists.
  if (featuredProjects.length === 0) return null;
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Featured projects"
        description="A few products I've helped bring to life — what they do, and the part I played."
        action={
          <Button to="/projects" variant="secondary">
            View All Projects <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        }
      />
      {featuredProjects.length === 1 ? (
        <Reveal>
          <ProjectCard project={featuredProjects[0]} wide />
        </Reveal>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
