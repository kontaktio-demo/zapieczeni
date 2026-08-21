import { BUSINESS } from '@/lib/business';
import { Stars } from '@/components/ui/Stars';
import { pl } from '@/lib/typo';

const EXCERPTS = [
  { words: 'polecam, pyszne, smaczne', date: '14.07.2026' },
  { words: 'polecam, obsługa, miły', date: '06.07.2026' },
  { words: 'polecam, pyszne, miejsce', date: '24.05.2026' },
];

export function Ratings() {
  const max = Math.max(...BUSINESS.ratingBreakdown.map((r) => r.count));

  return (
    <section id="opinie" className="relative overflow-hidden py-20 md:py-24">
      <h2 className="sr-only">{pl('Opinie w Google')}</h2>

      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-end gap-3">
              <span
                aria-hidden="true"
                className="nums -ml-[0.035em] block pb-[0.1em] font-display text-[clamp(6rem,17vw,12rem)] font-black leading-[0.86] tracking-[-0.05em] text-cream"
                style={{ fontVariationSettings: '"opsz" 28, "WONK" 0' }}
              >
                4,8
              </span>
              <span className="nums mb-[0.9em] text-[0.9rem] text-cream-dim">/ 5</span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Stars value={BUSINESS.rating} size={16} className="text-gold" />
              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.84rem] text-cream-dim underline decoration-char underline-offset-4 transition-colors hover:text-cream hover:decoration-ember"
              >
                {pl('197 opinii w Google')}
              </a>
            </div>
          </div>

          <div data-reveal="bars" className="md:col-span-6 md:col-start-7 md:pb-3">
            {BUSINESS.ratingBreakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-4 py-[0.3rem]">
                <span className="nums w-3 shrink-0 text-right text-[0.74rem] text-cream-dim">
                  {row.stars}
                </span>
                <span className="h-[4px] flex-1 bg-char">
                  <span
                    className="block h-full bg-ember"
                    style={{ width: `${Math.round((row.count / max) * 100)}%` }}
                  />
                </span>
                <span className="nums w-9 shrink-0 text-right text-[0.74rem] text-cream-dim">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-4 md:grid-cols-12">
          <p className="text-[0.7rem] caps text-ember md:col-span-3 md:pt-5">{pl('Z opinii w Google')}</p>
          <ul className="md:col-span-8 md:col-start-4">
            {EXCERPTS.map((item) => (
              <li
                key={item.date}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-char py-[0.9rem]"
              >
                <span className="font-accent text-[1.2rem] italic text-cream">
                  {pl(`„${item.words}”`)}
                </span>
                <span className="nums text-[0.74rem] text-cream-dim">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
