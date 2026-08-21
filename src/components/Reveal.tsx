'use client';

import { useEffect } from 'react';

const STAGGER: Record<string, number> = {
  'menu-list': 30,
  bars: 60,
};

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const groups = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const below = groups.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);

    for (const group of below) group.dataset.revealState = 'pending';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const group = entry.target as HTMLElement;
          const step = STAGGER[group.dataset.reveal ?? ''] ?? 40;
          [...group.children].forEach((child, i) => {
            (child as HTMLElement).style.setProperty('--d', `${i * step}ms`);
          });
          group.dataset.revealState = 'in';
          observer.unobserve(group);
        }
      },
      { rootMargin: '0px 0px -14% 0px' },
    );

    for (const group of below) observer.observe(group);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sweep = document.querySelector<HTMLElement>('[data-sweep]');
    const head = document.querySelector<HTMLElement>('[data-menu-head]');
    if (!sweep || !head) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = head.getBoundingClientRect();
      const span = window.innerHeight + box.height;
      const travelled = (window.innerHeight - box.top) / span;
      sweep.style.setProperty('--sweep', `${125 - Math.min(1, Math.max(0, travelled)) * 170}%`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
