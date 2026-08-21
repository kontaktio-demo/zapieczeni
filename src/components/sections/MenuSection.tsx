'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { categories, sosy, sosyKraftowe, dodatki, type MenuItem, type Price } from '@/data/menu';
import { pl, price as fmt } from '@/lib/typo';

const TABS = [
  ...categories.map((c) => ({ id: c.id, label: pl(c.label) })),
  { id: 'dodatki', label: pl('Sosy i dodatki') },
];

function PriceCell({ value }: { value: Price }) {
  if (value.kind === 'dual') {
    return (
      <span className="nums flex shrink-0">
        <span className="w-[3.5rem] text-right text-cream sm:w-[4.1rem]">
          {value.small === null ? '–' : fmt(value.small)}
        </span>
        <span className="w-[3.5rem] text-right text-gold sm:w-[4.1rem]">
          {value.large === null ? '–' : fmt(value.large)}
        </span>
      </span>
    );
  }
  return (
    <span className="nums w-[3.5rem] shrink-0 text-right text-gold sm:w-[4.1rem]">
      {value.value === null ? '–' : fmt(value.value)}
    </span>
  );
}

function Tag({ tag }: { tag: MenuItem['tag'] }) {
  if (!tag) return null;
  const label = tag === 'wege' ? 'wege' : 'ostre';
  const tone = tag === 'wege' ? 'border-[#5FBF6A]/40 text-[#7FCF88]' : 'border-ember/50 text-ember-lite';
  return (
    <span className={`shrink-0 border px-[0.4rem] py-[0.05rem] text-[0.6rem] caps-tight ${tone}`}>
      {label}
    </span>
  );
}

function Row({ item }: { item: MenuItem }) {
  return (
    <li className="menu-row border-b border-char/70 py-[0.8rem] last:border-b-0">
      <div className="flex items-baseline gap-2 sm:gap-3">
        <h3 className="menu-name shrink-0 text-[1rem] font-semibold leading-tight text-cream transition-colors">
          {pl(item.name)}
        </h3>
        <Tag tag={item.tag} />
        <span className="leader" />
        <PriceCell value={item.price} />
      </div>
      {item.desc && (
        <p className="mt-[0.3rem] max-w-[46ch] text-[0.8rem] leading-[1.5] text-cream-dim">
          {pl(item.desc)}
        </p>
      )}
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(TABS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  // krótsza zakładka potrafi wciągnąć stronę pod przyklejony pasek
  const select = (id: string) => {
    setActive(id);
    requestAnimationFrame(() => {
      const top = barRef.current?.getBoundingClientRect().top ?? 0;
      if (top < 56) window.scrollBy({ top: top - 56 });
    });
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: TABS.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const clamped = (next + TABS.length) % TABS.length;
    select(TABS[clamped].id);
    tabRefs.current[clamped]?.focus();
  };

  return (
    <section id="menu" className="scroll-mt-[6.5rem] bg-ink-2 pb-20 pt-16">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <h2 className="text-[2rem] font-bold leading-none tracking-tight text-cream sm:text-[2.6rem]">
          Menu
        </h2>
      </div>

      <div ref={barRef} className="sticky top-14 z-30 mt-6 border-y border-char bg-ink-2/95 backdrop-blur-sm">
        <div
          role="tablist"
          aria-label="Kategorie menu"
          className="mx-auto flex max-w-[86rem] gap-2 overflow-x-auto px-5 sm:gap-1 sm:px-8"
        >
          {TABS.map((tab, i) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={
                  'shrink-0 whitespace-nowrap border-b-2 px-3 py-[0.85rem] text-[0.76rem] font-medium caps-tight transition-colors sm:px-4 ' +
                  (selected
                    ? 'border-ember text-ember-lite'
                    : 'border-transparent text-cream-dim hover:text-cream')
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[86rem] px-5 pt-9 sm:px-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            role="tabpanel"
            id={`panel-${cat.id}`}
            aria-labelledby={`tab-${cat.id}`}
            hidden={cat.id !== active}
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                {cat.intro && (
                  <p className="mb-6 max-w-[52ch] text-[0.92rem] leading-[1.6] text-cream-dim">
                    {pl(cat.intro)}
                  </p>
                )}

                {cat.priceHeadings && (
                  <div className="flex items-baseline gap-3 border-b border-char pb-2">
                    <span className="flex-1" />
                    <span className="nums flex shrink-0 text-[0.66rem] caps text-cream-dim">
                      <span className="w-[3.5rem] text-right sm:w-[4.1rem]">{cat.priceHeadings[0]}</span>
                      <span className="w-[3.5rem] text-right sm:w-[4.1rem]">{cat.priceHeadings[1]}</span>
                    </span>
                  </div>
                )}

                <ul className="mt-1">
                  {cat.items.map((item) => (
                    <Row key={item.name} item={item} />
                  ))}
                </ul>

                {cat.footnote && (
                  <p className="mt-6 text-[0.78rem] leading-[1.6] text-cream-dim">{pl(cat.footnote)}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-1 lg:gap-4">
                {cat.photos.map((photo) => (
                  <div key={photo.src} className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 45vw, 32vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          role="tabpanel"
          id="panel-dodatki"
          aria-labelledby="tab-dodatki"
          hidden={active !== 'dodatki'}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h3 className="mb-3 text-[0.7rem] caps text-ember">Sosy w cenie</h3>
              <ul className="flex flex-wrap gap-2">
                {sosy.map((s) => (
                  <li key={s} className="border border-char px-3 py-[0.35rem] text-[0.82rem] text-cream-dim">
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 mt-9 text-[0.7rem] caps text-ember">Sosy kraftowe</h3>
              <ul className="flex flex-wrap gap-2">
                {sosyKraftowe.map((s) => (
                  <li key={s} className="border border-gold/40 px-3 py-[0.35rem] text-[0.82rem] text-gold">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h3 className="mb-2 text-[0.7rem] caps text-ember">Dodatkowe składniki</h3>
              <div className="flex items-baseline gap-3 border-b border-char pb-2">
                <span className="flex-1" />
                <span className="nums flex shrink-0 text-[0.66rem] caps text-cream-dim">
                  <span className="w-[3.5rem] text-right sm:w-[4.1rem]">mała</span>
                  <span className="w-[3.5rem] text-right sm:w-[4.1rem]">duża</span>
                </span>
              </div>
              <ul>
                {dodatki.map((item) => (
                  <li
                    key={item.name}
                    className="menu-row flex items-baseline gap-3 border-b border-char py-[0.7rem] last:border-b-0"
                  >
                    <span className="menu-name shrink-0 text-[0.92rem] text-cream transition-colors">
                      {pl(item.name)}
                    </span>
                    <span className="leader" />
                    <PriceCell value={item.price} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
