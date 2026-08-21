'use client';

import { useSyncExternalStore } from 'react';
import { statusAt, DAY_NAMES } from '@/lib/hours';
import { subscribeClock, clockSnapshot, clockServerSnapshot, type Now } from '@/lib/clock';
import { pl } from '@/lib/typo';

function describe(now: Now) {
  const status = statusAt(now.day, now.minutes);

  if (status.open) {
    if (status.minutesLeft !== null && status.minutesLeft <= 60) {
      return { open: true, label: `Otwarte, zamykamy za ${status.minutesLeft} min` };
    }
    return { open: true, label: `Otwarte teraz, do ${status.closesAt}` };
  }

  const when =
    status.nextOpenDay === now.day
      ? 'dziś'
      : status.nextOpenDay === (now.day + 1) % 7
        ? 'jutro'
        : DAY_NAMES[status.nextOpenDay ?? 0];

  return { open: false, label: `Zamknięte, otwieramy ${when} o ${status.nextOpenAt}` };
}

export function OpenStatus() {
  const now = useSyncExternalStore(subscribeClock, clockSnapshot, clockServerSnapshot);
  const view = now ? describe(now) : null;

  return (
    <span
      className="inline-flex min-h-[1.5rem] items-center gap-2 text-[0.8rem] caps-tight text-cream-dim"
      aria-live="polite"
    >
      {view && (
        <>
          <span
            className={
              'h-[7px] w-[7px] shrink-0 rounded-full ' +
              (view.open ? 'bg-[#5FBF6A] live-dot' : 'bg-cream-dim/50')
            }
          />
          {pl(view.label)}
        </>
      )}
    </span>
  );
}
