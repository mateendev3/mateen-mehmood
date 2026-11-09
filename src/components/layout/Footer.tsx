import { Link } from 'react-router';
import { profile } from '../../data/profile';
import { navigation } from '../../data/site';
import { hasEmail } from '../../lib/content';
import { SocialLinks } from '../ui/SocialLinks';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-fg-muted">{profile.tagline}</p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide text-fg">Navigate</h2>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-fg">Work with me</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/contact" className="text-fg-muted transition-colors hover:text-fg">
                Start a project
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-fg-muted transition-colors hover:text-fg">
                Services
              </Link>
            </li>
            {hasEmail && (
              <li>
                <a href={`mailto:${profile.email}`} className="break-all text-fg-muted transition-colors hover:text-fg">
                  {profile.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>{profile.title}</p>
        </div>
      </div>
    </footer>
  );
}
