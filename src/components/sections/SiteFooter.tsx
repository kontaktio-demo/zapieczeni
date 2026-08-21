import { BUSINESS } from '@/lib/business';
import { pl, phoneDisplay } from '@/lib/typo';
import { Wordmark } from '@/components/ui/Wordmark';

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-char">
      <div className="mx-auto max-w-[86rem] px-5 pb-28 pt-14 sm:px-8 md:pb-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark width={200} className="h-auto w-[11.5rem]" />
            <p className="nums mt-5 text-[0.85rem] leading-relaxed text-cream-dim">
              {pl(`${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`)}
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Zadzwoń pod numer ${phoneDisplay(BUSINESS.phoneDisplay)}`}
              className="nums mt-1 inline-block text-[1.05rem] font-medium text-cream transition-colors hover:text-ember-lite"
            >
              {phoneDisplay(BUSINESS.phoneDisplay)}
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Stopka">
            <p className="mb-3 text-[0.7rem] caps text-ember">Strona</p>
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-cream-dim transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-3 text-[0.7rem] caps text-ember">Social</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] text-cream-dim transition-colors hover:text-cream"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] text-cream-dim transition-colors hover:text-cream"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-char pt-6 text-[0.75rem] text-cream-dim">
          <p className="nums">© 2026 Zapieczeni</p>
          <p>
            projekt i realizacja:{' '}
            <a
              href="https://kontaktio.pl"
              target="_blank"
              rel="noopener"
              className="text-cream underline decoration-char underline-offset-4 transition-colors hover:decoration-ember"
            >
              Kontaktio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
