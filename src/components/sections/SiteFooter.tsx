import { BUSINESS } from '@/lib/business';
import { pl, phoneDisplay } from '@/lib/typo';

export function SiteFooter() {
  return (
    <footer className="border-t border-char pt-14">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pb-10 text-[0.8rem] text-cream-dim">
          <p className="nums">
            {pl(`${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`)}
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            aria-label={`Zadzwoń pod numer ${BUSINESS.phoneDisplay}`}
            className="nums transition-colors hover:text-cream"
          >
            {phoneDisplay(BUSINESS.phoneDisplay)}
          </a>
          <div className="flex gap-6">
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              Facebook
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-char py-5 text-[0.72rem] text-cream-dim/70">
          <p className="nums">© 2026 Zapieczeni</p>
          <p>
            realizacja:{' '}
            <a
              href="https://kontaktio.pl"
              target="_blank"
              rel="noopener"
              className="underline decoration-char underline-offset-4 transition-colors hover:text-cream"
            >
              Kontaktio
            </a>
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="mt-2 h-[clamp(3.5rem,10vw,8rem)] overflow-hidden">
        <span className="block whitespace-nowrap text-center font-display text-[clamp(4.5rem,15.5vw,13.5rem)] font-black leading-[0.74] tracking-[-0.05em] text-cream/[0.055]">
          ZAPIECZENI
        </span>
      </div>
    </footer>
  );
}
