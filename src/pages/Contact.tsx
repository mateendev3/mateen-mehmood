import { AlertTriangle, ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { pageMeta } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { hasEmail, hasFormService, socials } from '../lib/content';
import { cn, mailto } from '../lib/utils';
import { PageHeader } from '../components/ui/PageHeader';
import { Icon, SocialIcon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../components/contact/ContactForm';

export default function Contact() {
  useDocumentMeta(pageMeta.contact);
  const canReceive = hasEmail || hasFormService;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell me a little about what you're building or the app you need help with. I'll get back to you to discuss next steps."
      />

      <section aria-label="Contact options" className="container-page pb-24">
        {import.meta.env.DEV && !canReceive && (
          <p className="mb-8 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-800 dark:text-amber-200">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              <strong>Dev notice:</strong> set <code>email</code>, <code>contact.formsubmit</code> or <code>contact.formspreeId</code> in{' '}
              <code>src/data/profile.ts</code> to enable the contact form and email buttons. This notice is not shown in production.
            </span>
          </p>
        )}

        <div className={cn('grid gap-8', canReceive && 'lg:grid-cols-[0.8fr_1.2fr] lg:gap-12')}>
          <Reveal className="space-y-5">
            {profile.availability && (
              <div className="card flex items-center gap-3 p-5">
                <span
                  className={cn(
                    'size-2.5 rounded-full',
                    profile.availability.status === 'available' && 'animate-pulse-dot bg-success',
                    profile.availability.status === 'limited' && 'bg-amber-500',
                    profile.availability.status === 'unavailable' && 'bg-fg-subtle',
                  )}
                  aria-hidden="true"
                />
                <p className="font-medium">{profile.availability.label}</p>
              </div>
            )}

            {hasEmail && (
              <a
                href={mailto(profile.email, 'Project enquiry')}
                className="group card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-fg-muted">Email me directly</span>
                  <span className="block truncate font-semibold">{profile.email}</span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-fg-subtle transition-colors group-hover:text-accent" aria-hidden="true" />
              </a>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="group card flex items-center gap-3 p-4 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-fg">
                  <SocialIcon name={social.key} className="size-[1.15rem]" />
                </span>
                <span className="min-w-0 leading-tight font-semibold">{social.label}</span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-fg-subtle transition-colors group-hover:text-accent" aria-hidden="true" />
              </a>
            ))}
            </div>

            {(profile.contact.responseTime || profile.location || profile.timezone) && (
              <ul className="space-y-3 px-1 pt-2 text-fg-muted">
                {profile.contact.responseTime && (
                  <li className="flex items-center gap-3">
                    <Icon name="clock" className="size-4 text-accent" /> {profile.contact.responseTime}
                  </li>
                )}
                {(profile.location || profile.timezone) && (
                  <li className="flex items-center gap-3">
                    <Icon name="map-pin" className="size-4 text-accent" />
                    {[profile.location, profile.timezone].filter(Boolean).join(' · ')}
                  </li>
                )}
              </ul>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
