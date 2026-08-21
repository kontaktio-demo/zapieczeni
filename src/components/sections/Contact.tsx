import { BUSINESS, AMENITIES } from '@/lib/business';
import { OpeningHours } from '@/components/OpeningHours';
import { MapPanel } from '@/components/MapPanel';
import { pl, phoneDisplay } from '@/lib/typo';

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.55V13h2.72v8z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-char bg-ink-2">
      <div className="grid md:grid-cols-12">
        <div className="px-5 py-16 sm:px-8 md:col-span-7 md:py-20 md:pl-[max(2rem,calc((100vw-86rem)/2+2rem))]">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[0.7rem] caps text-ember">Adres</p>
              <p className="font-display text-[1.35rem] leading-snug text-cream">
                {BUSINESS.street}
              </p>
              <p className="nums text-[0.95rem] text-cream-dim">
                {pl(`${BUSINESS.postalCode} ${BUSINESS.city}`)}
              </p>

              <p className="mb-3 mt-9 text-[0.7rem] caps text-ember">Telefon</p>
              <a
                href={`tel:${BUSINESS.phone}`}
                aria-label={`Zadzwoń pod numer ${phoneDisplay(BUSINESS.phoneDisplay)}`}
                className="nums font-display text-[clamp(1.7rem,4.6vw,2.4rem)] leading-none text-cream transition-colors hover:text-ember-lite"
              >
                {phoneDisplay(BUSINESS.phoneDisplay)}
              </a>

              <div className="mt-9 flex gap-3">
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zapieczeni na Facebooku"
                  className="border border-char p-[0.6rem] text-cream-dim transition-colors hover:border-ember hover:text-ember-lite"
                >
                  <Facebook />
                </a>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zapieczeni na Instagramie"
                  className="border border-char p-[0.6rem] text-cream-dim transition-colors hover:border-ember hover:text-ember-lite"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[0.7rem] caps text-ember">Godziny</p>
              <OpeningHours />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-char pt-6">
            {AMENITIES.map((item) => (
              <li key={item} className="text-[0.78rem] text-cream-dim">
                {pl(item)}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-char md:col-span-5 md:border-l md:border-t-0">
          <MapPanel />
        </div>
      </div>
    </section>
  );
}
