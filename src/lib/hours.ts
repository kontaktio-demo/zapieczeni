export type DayHours = { open: number; close: number };

export const DAY_NAMES = [
  'niedziela',
  'poniedziałek',
  'wtorek',
  'środa',
  'czwartek',
  'piątek',
  'sobota',
] as const;

export const HOURS: DayHours[] = [
  { open: 12 * 60, close: 22 * 60 },
  { open: 11 * 60, close: 22 * 60 },
  { open: 11 * 60, close: 22 * 60 },
  { open: 11 * 60, close: 22 * 60 },
  { open: 11 * 60, close: 22 * 60 },
  { open: 11 * 60, close: 23 * 60 },
  { open: 11 * 60, close: 23 * 60 },
];

export const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];

export function toClock(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export type Status = {
  open: boolean;
  closesAt: string | null;
  minutesLeft: number | null;
  nextOpenDay: number | null;
  nextOpenAt: string | null;
};

export function statusAt(day: number, minutes: number): Status {
  const today = HOURS[day];

  if (minutes >= today.open && minutes < today.close) {
    return {
      open: true,
      closesAt: toClock(today.close),
      minutesLeft: today.close - minutes,
      nextOpenDay: null,
      nextOpenAt: null,
    };
  }

  if (minutes < today.open) {
    return {
      open: false,
      closesAt: null,
      minutesLeft: null,
      nextOpenDay: day,
      nextOpenAt: toClock(today.open),
    };
  }

  const nextDay = (day + 1) % 7;
  return {
    open: false,
    closesAt: null,
    minutesLeft: null,
    nextOpenDay: nextDay,
    nextOpenAt: toClock(HOURS[nextDay].open),
  };
}

export function warsawNow(now: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);

  const lookup = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const weekdays: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  const hour = Number(lookup('hour')) % 24;
  return {
    day: weekdays[lookup('weekday')] ?? 0,
    minutes: hour * 60 + Number(lookup('minute')),
  };
}
