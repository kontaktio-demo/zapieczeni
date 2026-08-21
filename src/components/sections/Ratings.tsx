import { BUSINESS } from '@/lib/business';
import { Stars } from '@/components/ui/Stars';
import { pl } from '@/lib/typo';

const EXCERPTS = [
  { words: 'polecam, pyszne, smaczne', date: '14.07.2026' },
  { words: 'polecam, obsługa, miły', date: '06.07.2026' },
  { words: 'polecam, pyszne, miejsce', date: '24.05.2026' },
];

export function Ratings() {
  return (
    <section id="opinie" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <h2 className="sr-only">{pl('Opinie w Google')}</h2>

        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="nums text-[4.5rem] font-bold leading-none tracking-tight text-cream">
                4,8
              </span>
              <span className="nums text-[0.9rem] text-cream-dim">/ 5</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
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

          <dl className="nums flex gap-6 md:col-span-3 md:gap-8">
            {BUSINESS.ratingBreakdown.map((row) => (
              <div key={row.stars}>
                <dt className="text-[0.68rem] caps text-cream-dim">{row.stars}★</dt>
                <dd className="mt-1 text-[1.05rem] text-cream">{row.count}</dd>
              </div>
            ))}
          </dl>

          <ul className="md:col-span-5">
            {EXCERPTS.map((item) => (
              <li
                key={item.date}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-char py-[0.85rem] first:border-t-0 first:pt-0"
              >
                <span className="text-[0.95rem] text-cream">{pl(`„${item.words}”`)}</span>
                <span className="nums text-[0.74rem] text-cream-dim">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
