'use client';

import { useEffect, useState } from 'react';
import { BUSINESS } from '@/lib/business';
import { phoneDisplay } from '@/lib/typo';
import { Wordmark } from '@/components/ui/Wordmark';

const LINKS = [
  { href: '#menu', label: 'Menu', onPhone: true },
  { href: '#opinie', label: 'Opinie', onPhone: false },
  { href: '#kontakt', label: 'Kontakt', onPhone: true },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-char bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink/85 to-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-[86rem] items-center justify-between px-5 sm:px-8"
        aria-label="Główna"
      >
        <a href="#top" aria-label="Zapieczeni, strona główna" className="shrink-0">
          <Wordmark width={132} className="h-auto w-[7.5rem]" />
        </a>

        <ul className="flex items-center gap-5 sm:gap-8">
          {LINKS.map((link) => (
            <li key={link.href} className={link.onPhone ? 'hidden sm:block' : 'hidden md:block'}>
              <a
                href={link.href}
                className="text-[0.8rem] caps-tight text-cream-dim transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${BUSINESS.phone}`}
          aria-label={`Zadzwoń pod numer ${phoneDisplay(BUSINESS.phoneDisplay)}`}
          className="nums border border-ember px-3 py-[0.4rem] text-[0.78rem] text-ember-lite transition-colors hover:bg-ember hover:text-white"
        >
          {phoneDisplay(BUSINESS.phoneDisplay)}
        </a>
      </nav>
    </header>
  );
}
