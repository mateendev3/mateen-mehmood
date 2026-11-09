import { ArrowRight, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { hasEmail } from '../../lib/content';
import { mailto } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function FinalCta({
  title = "Have a project in mind? Let's build it together.",
  description = "Whether you're starting a new application or improving an existing one, I'd be happy to discuss your project.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-16 text-center shadow-[var(--shadow-lift)] sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
              <div className="absolute -top-24 left-1/2 h-72 w-[42rem] max-w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            </div>
            <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fg-muted">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg">
                Let's Talk <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
              </Button>
              {hasEmail && (
                <Button href={mailto(profile.email, 'Project enquiry')} variant="secondary" size="lg">
                  <Mail className="size-4" aria-hidden="true" /> Send an Email
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
