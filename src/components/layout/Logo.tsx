import { Link } from 'react-router';
import { profile } from '../../data/profile';

/** Wordmark: first name in lowercase with a gradient full stop — "mateen." */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${profile.name} — home`}
      className="group inline-flex items-baseline rounded-lg font-display text-[1.45rem] leading-none font-extrabold tracking-[-0.045em] text-fg"
    >
      {profile.firstName.toLowerCase()}
      <span className="text-gradient inline-block transition-transform duration-300 group-hover:-translate-y-1">.</span>
    </Link>
  );
}
