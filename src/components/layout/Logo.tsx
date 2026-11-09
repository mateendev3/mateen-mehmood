import { Link } from 'react-router';
import { profile } from '../../data/profile';

export function Logo({ onClick }: { onClick?: () => void }) {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5 rounded-lg" aria-label={`${profile.name} — home`}>
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-fg font-display text-sm font-bold text-bg transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 bg-[linear-gradient(135deg,var(--primary),var(--accent-2))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative group-hover:text-white">{initials}</span>
      </span>
      <span className="whitespace-nowrap font-display text-[0.9375rem] font-semibold tracking-tight text-fg">{profile.name}</span>
    </Link>
  );
}
