import Image from 'next/image';
import { BUSINESS, AMENITIES } from '@/lib/business';
import { OpeningHours } from '@/components/OpeningHours';
import { GoogleMap } from '@/components/GoogleMap';
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
    <section id="kontakt" className="scroll-mt-20 border-t border-char bg-ink-2">
      <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="mb-3 text-[0.7rem] caps text-ember">Adres</p>
            <p className="text-[1.35rem] font-medium leading-snug text-cream">{BUSINESS.street}</p>
            <p className="nums text-[0.95rem] text-cream-dim">
              {pl(`${BUSINESS.postalCode} ${BUSINESS.city}`)}
            </p>
            <p className="mt-2 text-[0.85rem] text-cream-dim">
              {pl('Obok Żabki. Nie dowozimy, odbiór na miejscu albo na wynos.')}
            </p>

            <p className="mb-3 mt-9 text-[0.7rem] caps text-ember">Telefon</p>
            <a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Zadzwoń pod numer ${phoneDisplay(BUSINESS.phoneDisplay)}`}
              className="nums text-[clamp(1.7rem,4.6vw,2.4rem)] font-semibold leading-none text-cream transition-colors hover:text-ember-lite"
            >
              {phoneDisplay(BUSINESS.phoneDisplay)}
            </a>

            <div className="mt-8 flex gap-3">
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

          <div className="md:col-span-6 md:col-start-7">
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

      <div className="grid border-t border-char md:grid-cols-2">
        <figure className="relative m-0 h-[16rem] md:h-[24rem]">
          <Image
            src="/foto/lokal-zewnatrz.webp"
            alt="Lokal Zapieczeni od ulicy: kontener z szyldem i tablicą menu"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent px-6 pb-4 pt-10 text-[0.8rem] text-cream">
            {pl('Rokicińska 120, obok Żabki. Parking przy ulicy, za darmo.')}
          </figcaption>
        </figure>

        <div className="h-[16rem] border-t border-char md:h-[24rem] md:border-l md:border-t-0">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
