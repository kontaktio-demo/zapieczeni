'use client';

import { useState } from 'react';
import { BUSINESS } from '@/lib/business';
import { pl } from '@/lib/typo';

const EMBED = `https://maps.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=16&output=embed`;

export function MapPanel() {
  const [shown, setShown] = useState(false);

  if (shown) {
    return (
      <iframe
        src={EMBED}
        title="Mapa dojazdu do lokalu Zapieczeni"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[22rem] w-full border-0 grayscale-[0.35] invert-[0.92] hue-rotate-180 saturate-[0.7]"
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center gap-6 bg-ink-2 px-6 py-14">
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-char opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#grid)" />
      </svg>

      <svg viewBox="0 0 64 64" aria-hidden="true" className="relative h-16 w-16 text-ember">
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M32 2v9M32 53v9M2 32h9M53 32h9" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>

      <p className="nums relative text-center text-[0.76rem] caps-tight text-cream-dim">
        51,7245848 N &nbsp; 19,6391923 E
      </p>

      <div className="relative flex flex-wrap justify-center gap-3">
        <a
          href={BUSINESS.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ember px-5 py-[0.7rem] text-[0.76rem] font-medium caps-tight text-ink transition-colors hover:bg-ember-lite"
        >
          Wyznacz trasę
        </a>
        <button
          type="button"
          onClick={() => setShown(true)}
          className="border border-char px-5 py-[0.7rem] text-[0.76rem] caps-tight text-cream-dim transition-colors hover:border-cream-dim hover:text-cream"
        >
          Pokaż mapę
        </button>
      </div>

      <p className="relative max-w-[26ch] text-center text-[0.7rem] leading-relaxed text-cream-dim/70">
        {pl('Mapa ładuje się z Google dopiero po kliknięciu.')}
      </p>
    </div>
  );
}
