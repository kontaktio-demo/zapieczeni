const WORDS = [
  'kraftowe zapiekanki',
  'hot dogi',
  'bowle z frytą',
  'na wynos',
  'Andrespol',
  'robione na miejscu',
];

function Diamond() {
  return (
    <svg width="7" height="7" viewBox="0 0 7 7" aria-hidden="true" className="shrink-0 text-ember">
      <path d="M3.5 0L7 3.5 3.5 7 0 3.5z" fill="currentColor" />
    </svg>
  );
}

export function Marquee() {
  const run = [...WORDS, ...WORDS];

  return (
    <div className="marquee relative overflow-hidden border-y border-char py-4">
      <div className="marquee-track flex w-max items-center gap-7 will-change-transform">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex items-center gap-7" aria-hidden={pass === 1}>
            {run.map((word, i) => (
              <span key={i} className="flex items-center gap-7">
                <span className="whitespace-nowrap font-display text-[0.82rem] caps text-cream-dim">
                  {word}
                </span>
                <Diamond />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
