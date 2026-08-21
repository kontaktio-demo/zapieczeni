import { BUSINESS } from '@/lib/business';
import { Ornament } from '@/components/ui/Ornament';
import { Stars } from '@/components/ui/Stars';
import { OpenStatus } from '@/components/OpenStatus';
import { WobblyRule } from '@/components/ui/WobblyRule';
import { pl, phoneDisplay } from '@/lib/typo';

const WORD = 'ZAPIECZENI'.split('');

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-12 pt-28 lg:justify-end lg:pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="ember-glow pointer-events-none absolute left-[26%] top-[42%] h-[38rem] w-[52rem] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto w-full max-w-[86rem] px-5 sm:px-8">
        <h1 className="sr-only">Zapieczeni, kraftowe zapiekanki, Andrespol</h1>

        <span
          aria-hidden="true"
          className="flex -ml-[0.045em] overflow-hidden py-[0.09em] font-display text-[clamp(2.9rem,16vw,15.4rem)] leading-[0.82] text-cream"
        >
          {WORD.map((letter, i) => (
            <span key={i} className="inline-block overflow-hidden py-[0.07em]">
              <span
                data-letter
                className="inline-block"
                style={
                  {
                    '--i': i,
                    fontVariationSettings: `"wght" ${880 + ((i * 37) % 3) * 20}, "WONK" 1, "opsz" ${132 + ((i * 53) % 5) * 3}`,
                    letterSpacing: '-0.035em',
                  } as React.CSSProperties
                }
              >
                {letter}
              </span>
            </span>
          ))}
        </span>

        <div className="mt-3 flex items-center gap-4 sm:mt-4 sm:gap-6">
          <Ornament draw className="h-5 w-[7rem] shrink-0 text-ember sm:h-6 sm:w-[9rem]" />
          <p className="font-accent text-[clamp(1.05rem,3vw,1.75rem)] italic leading-none text-cream-dim">
            kraftowe zapiekanki
          </p>
        </div>

        <WobblyRule className="mt-9 h-2 w-full text-char sm:mt-12" seed={11} />

        <div className="mt-7 grid gap-8 sm:mt-9 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.3rem] leading-tight text-cream">
              {pl(`${BUSINESS.city}, ${BUSINESS.street}`)}
            </p>
            <div className="mt-2">
              <OpenStatus />
            </div>
            <a
              href={BUSINESS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="nums mt-3 inline-flex items-center gap-2 text-[0.82rem] text-cream-dim transition-colors hover:text-cream"
            >
              <Stars value={BUSINESS.rating} size={13} className="text-gold" />
              <span>{pl('4,8 z 197 opinii w Google')}</span>
            </a>
          </div>

          <div
            className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:col-start-7 lg:justify-end"
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              className="nums border border-ember bg-ember px-7 py-[0.95rem] text-center text-[0.84rem] font-medium caps-tight text-ink transition-colors hover:border-ember-lite hover:bg-ember-lite"
            >
              {`${pl('Zadzwoń i zamów')} ${phoneDisplay(BUSINESS.phoneDisplay)}`}
            </a>
            <a
              href="#menu"
              className="border border-char px-7 py-[0.95rem] text-center text-[0.84rem] caps-tight text-cream-dim transition-colors hover:border-cream-dim hover:text-cream"
            >
              Zobacz menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
