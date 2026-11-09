import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';

export function Credibility() {
  if (profile.stats.length === 0) return null;
  return (
    <section aria-label="Experience at a glance" className="pb-4">
      <div className="container-page">
        <Reveal>
          <dl className="card grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-6 py-6 sm:px-8 sm:py-7">
                <dt className="order-2 text-sm text-fg-muted">{stat.label}</dt>
                <dd className="order-1 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
