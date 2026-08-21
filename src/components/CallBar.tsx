'use client';

import { useEffect, useState } from 'react';
import { BUSINESS } from '@/lib/business';
import { pl, phoneDisplay } from '@/lib/typo';

export function CallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={
        'fixed inset-x-0 bottom-0 z-40 bg-ember px-5 text-center text-[0.85rem] font-medium caps-tight text-ink transition-transform duration-300 md:hidden ' +
        (visible ? 'translate-y-0' : 'translate-y-full')
      }
      style={{ paddingTop: '0.95rem', paddingBottom: 'calc(0.95rem + env(safe-area-inset-bottom))' }}
    >
      <span className="nums">{`${pl('Zadzwoń i zamów')} ${phoneDisplay(BUSINESS.phoneDisplay)}`}</span>
    </a>
  );
}
