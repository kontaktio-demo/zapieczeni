'use client';

import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function Motion() {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 768px)',
        },
        (context) => {
          const { motion, desktop } = context.conditions as {
            motion: boolean;
            desktop: boolean;
          };
          if (!motion) return;

          const letters = gsap.utils.toArray<HTMLElement>('[data-letter]');
          const ornamentPath = document.querySelector<SVGPathElement>('[data-ornament="draw"]');

          const intro = gsap.timeline({ delay: 0.15 });

          intro.from(letters, {
            yPercent: 112,
            rotateX: -62,
            duration: 1.15,
            ease: 'expo.out',
            stagger: 0.04,
          });

          if (ornamentPath) {
            const len = ornamentPath.getTotalLength();
            gsap.set(ornamentPath, { strokeDasharray: len, strokeDashoffset: len });
            intro.to(
              ornamentPath,
              { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' },
              '-=0.45',
            );
          }

          intro.from(
            '[data-hero-meta]',
            { y: 14, opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.09 },
            '-=1.1',
          );

          gsap.from('[data-menu-row]', {
            x: -10,
            opacity: 0.15,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.03,
            scrollTrigger: { trigger: '[data-menu-list]', start: 'top 84%' },
          });

          gsap.from('[data-bar]', {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: { trigger: '[data-bars]', start: 'top 82%' },
          });

          if (desktop) {
            gsap.fromTo(
              '[data-sweep]',
              { '--sweep': '125%' },
              {
                '--sweep': '-45%',
                ease: 'none',
                scrollTrigger: {
                  trigger: '[data-menu-head]',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.innerWidth < 768) return;

    const lenis = new Lenis({ lerp: 0.09 });
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
