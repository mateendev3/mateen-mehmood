import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
      className={cn(
        'relative grid size-10 place-items-center rounded-full text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg',
        className,
      )}
    >
      <Sun
        className={cn('absolute size-[1.15rem] transition-all duration-300', isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100')}
        aria-hidden="true"
      />
      <Moon
        className={cn('absolute size-[1.15rem] transition-all duration-300', isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0')}
        aria-hidden="true"
      />
    </button>
  );
}
