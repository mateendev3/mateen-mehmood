import { useEffect, useId, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { AnimatePresence, m } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navigation } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and with Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container-page">
        <div
          className={cn(
            'glass flex h-16 items-center justify-between rounded-2xl pr-2 pl-4 transition-shadow duration-300 sm:pl-5',
            scrolled || open ? 'shadow-[var(--shadow-lift)]' : 'shadow-[var(--shadow-soft)]',
          )}
        >
          <Logo />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                        isActive ? 'bg-accent-soft text-fg' : 'text-fg-muted hover:text-fg',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <div className="ml-1 hidden sm:block">
              <Button to="/contact" size="sm">
                Hire Me
              </Button>
            </div>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg md:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <m.nav
              id={menuId}
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass mt-2 origin-top rounded-2xl p-2 shadow-[var(--shadow-lift)] md:hidden"
            >
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          isActive ? 'bg-accent-soft text-fg' : 'text-fg-muted hover:bg-surface-2 hover:text-fg',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-2 sm:hidden">
                <Button to="/contact" className="w-full">
                  Hire Me <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
