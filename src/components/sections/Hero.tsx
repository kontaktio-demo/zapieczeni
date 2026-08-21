import Image from 'next/image';
import { BUSINESS } from '@/lib/business';
import { Stars } from '@/components/ui/Stars';
import { Wordmark } from '@/components/ui/Wordmark';
import { OpenStatus } from '@/components/OpenStatus';
import { pl, phoneDisplay } from '@/lib/typo';

export function Hero() {
  return (
    <section id="top" className="relative grid min-h-[100dvh] lg:grid-cols-2">
      <div className="relative order-1 min-h-[52vh] lg:order-2 lg:min-h-full">
        <Image
          src="/foto/hero-zapiekanka.webp"
          alt="Zapiekanka z bekonem, serem i sosem, trzymana nad drewnianym stołem"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/20 lg:to-transparent"
        />
      </div>

      <div className="order-2 flex flex-col justify-center px-5 pb-14 pt-8 sm:px-8 lg:order-1 lg:py-24 lg:pl-[max(2rem,calc((100vw-86rem)/2+2rem))] lg:pr-14">
        <h1 className="sr-only">Zapieczeni, kraftowe zapiekanki, Andrespol</h1>

        <Wordmark width={360} priority className="h-auto w-[min(21rem,78vw)]" />

        <p className="mt-8 text-[1.35rem] font-medium leading-tight text-cream sm:text-[1.6rem]">
          {pl(`${BUSINESS.street}, ${BUSINESS.city}`)}
        </p>

        <div className="mt-3">
          <OpenStatus />
        </div>

        <a
          href={BUSINESS.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="nums mt-4 inline-flex items-center gap-2 self-start text-[0.86rem] text-cream-dim transition-colors hover:text-cream"
        >
          <Stars value={BUSINESS.rating} size={14} className="text-gold" />
          <span>{pl('4,8 z 197 opinii w Google')}</span>
        </a>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="nums border border-ember bg-ember px-7 py-[0.95rem] text-center text-[0.84rem] font-semibold caps-tight text-ink transition-colors hover:border-ember-lite hover:bg-ember-lite"
          >
            {`${pl('Zadzwoń i zamów')} ${phoneDisplay(BUSINESS.phoneDisplay)}`}
          </a>
          <a
            href="#menu"
            className="border border-char px-7 py-[0.95rem] text-center text-[0.84rem] font-medium caps-tight text-cream-dim transition-colors hover:border-cream-dim hover:text-cream"
          >
            Zobacz menu
          </a>
        </div>
      </div>
    </section>
  );
}
