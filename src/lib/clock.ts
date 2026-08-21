import { warsawNow } from './hours';

export type Now = { day: number; minutes: number };

let current: Now | null = null;
let timer: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function refresh() {
  const next = warsawNow(new Date());
  if (current && current.day === next.day && current.minutes === next.minutes) return;
  current = next;
  listeners.forEach((listener) => listener());
}

export function subscribeClock(listener: () => void) {
  if (!current) current = warsawNow(new Date());
  listeners.add(listener);
  if (!timer) timer = setInterval(refresh, 30_000);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

export function clockSnapshot(): Now | null {
  return current;
}

export function clockServerSnapshot(): Now | null {
  return null;
}
