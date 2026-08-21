'use client';

import { useSyncExternalStore } from 'react';
import { HOURS, WEEK_ORDER, DAY_NAMES, toClock, statusAt } from '@/lib/hours';
import { subscribeClock, clockSnapshot, clockServerSnapshot } from '@/lib/clock';
import { pl } from '@/lib/typo';

export function OpeningHours() {
  const now = useSyncExternalStore(subscribeClock, clockSnapshot, clockServerSnapshot);
  const today = now?.day ?? null;

  const status = now ? statusAt(now.day, now.minutes) : null;
  const closingSoon =
    status?.open && status.minutesLeft !== null && status.minutesLeft <= 60
      ? status.minutesLeft
      : null;

  return (
    <div>
      <dl className="nums text-[0.95rem]">
        {WEEK_ORDER.map((day) => {
          const isToday = today === day;
          return (
            <div
              key={day}
              className={
                'flex items-baseline gap-3 border-b border-char py-[0.42rem] last:border-b-0 ' +
                (isToday ? 'text-cream' : 'text-cream-dim')
              }
            >
              <dt className={'w-[7.5rem] shrink-0 ' + (isToday ? 'font-medium' : '')}>
                {DAY_NAMES[day]}
                {isToday && (
                  <span className="ml-2 align-middle text-[0.62rem] caps text-ember-lite">dziś</span>
                )}
              </dt>
              <span className="leader" />
              <dd className={isToday ? 'text-gold' : ''}>
                {toClock(HOURS[day].open)}–{toClock(HOURS[day].close)}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-4 min-h-5 text-[0.78rem] leading-relaxed text-cream-dim">
        {closingSoon !== null
          ? pl(`Zamykamy za ${closingSoon} min. Zadzwoń, przygotujemy na wynos.`)
          : pl('W piątki i soboty do 23:00.')}
      </p>
    </div>
  );
}
