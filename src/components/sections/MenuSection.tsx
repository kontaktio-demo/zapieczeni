'use client';

import { useRef, useState } from 'react';
import { categories, sosy, sosyKraftowe, dodatki, type MenuItem, type Price } from '@/data/menu';
import { pl, price as fmt } from '@/lib/typo';
import { WobblyRule } from '@/components/ui/WobblyRule';

const TABS = [
  ...categories.map((c) => ({ id: c.id, label: pl(c.label) })),
  { id: 'dodatki', label: pl('Sosy i dodatki') },
];

function splitInTwo(items: MenuItem[]): [MenuItem[], MenuItem[]] {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
}

function PriceCell({ value }: { value: Price }) {
  if (value.kind === 'dual') {
    return (
      <span className="nums flex shrink-0 text-cream">
        <span className="w-[3.6rem] text-right sm:w-[4.2rem]">
          {value.small === null ? '–' : fmt(value.small)}
        </span>
        <span className="w-[3.6rem] text-right text-gold sm:w-[4.2rem]">
          {value.large === null ? '–' : fmt(value.large)}
        </span>
      </span>
    );
  }
  return (
    <span className="nums w-[3.6rem] shrink-0 text-right text-gold sm:w-[4.2rem]">
      {value.value === null ? '–' : fmt(value.value)}
    </span>
  );
}

function Row({ item }: { item: MenuItem }) {
  return (
    <li
      data-menu-row
      className="menu-row break-inside-avoid border-b border-char/70 py-[0.72rem] last:border-b-0"
    >
      <div className="flex items-baseline gap-2 sm:gap-3">
        <h3 className="menu-name font-display text-[1.02rem] font-semibold leading-tight text-cream transition-colors sm:text-[1.1rem]">
          {pl(item.name)}
        </h3>
        <span className="leader" />
        <PriceCell value={item.price} />
      </div>
      {item.desc && (
        <p className="mt-[0.28rem] max-w-[38ch] text-[0.8rem] leading-[1.5] text-cream-dim">
          {pl(item.desc)}
        </p>
      )}
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(TABS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
    setActive(TABS[clamped].id);
    tabRefs.current[clamped]?.focus();
  };

  return (
    <section id="menu" className="relative overflow-hidden bg-ink-2 pb-16 pt-16 md:pb-20">
      <div aria-hidden="true" className="paper pointer-events-none absolute inset-0" />

      <div data-menu-head className="relative mb-7 overflow-hidden">
        <h2 className="sr-only">Menu</h2>
        <span
          aria-hidden="true"
          className="block whitespace-nowrap pl-5 font-display text-[clamp(4.2rem,17vw,15rem)] font-light leading-[0.8] tracking-[-0.045em] text-cream/[0.1] sm:pl-8"
        >
          Menu
        </span>
        <span
          data-sweep
          aria-hidden="true"
          className="menu-sweep pointer-events-none absolute inset-0 whitespace-nowrap pl-5 font-display text-[clamp(4.2rem,17vw,15rem)] font-light leading-[0.8] tracking-[-0.045em] sm:pl-8"
        >
          Menu
        </span>
      </div>

      <div className="sticky top-14 z-30 border-y border-char bg-ink-2/95 backdrop-blur-sm">
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
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={
                  'relative shrink-0 whitespace-nowrap border-b-2 px-3 py-[0.82rem] text-[0.76rem] caps-tight transition-colors sm:px-4 ' +
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

      <div className="relative mx-auto max-w-[86rem] px-5 pt-10 sm:px-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            role="tabpanel"
            id={`panel-${cat.id}`}
            aria-labelledby={`tab-${cat.id}`}
            hidden={cat.id !== active}
          >
            {cat.intro && cat.id !== 'zapiekanki' && (
              <p className="mb-8 max-w-[54ch] text-[0.92rem] leading-[1.65] text-cream-dim">
                {pl(cat.intro)}
              </p>
            )}

            {cat.items.length > 0 ? (
              <div data-menu-list className="grid gap-x-14 md:grid-cols-2">
                {splitInTwo(cat.items).map((column, index) => (
                  <div key={index}>
                    {cat.priceHeadings && (
                      <div
                        className={
                          'items-baseline gap-3 border-b border-char pb-2 ' +
                          (index === 0 ? 'flex' : 'hidden md:flex')
                        }
                      >
                        <span className="flex-1" />
                        <span className="nums flex shrink-0 text-[0.68rem] caps text-cream-dim">
                          <span className="w-[3.6rem] text-right sm:w-[4.2rem]">
                            {cat.priceHeadings[0]}
                          </span>
                          <span className="w-[3.6rem] text-right sm:w-[4.2rem]">
                            {cat.priceHeadings[1]}
                          </span>
                        </span>
                      </div>
                    )}
                    <ul className="mt-1">
                      {column.map((item) => (
                        <Row key={item.name} item={item} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="max-w-[46ch] border-l-2 border-ember pl-5 text-[0.95rem] leading-[1.7] text-cream-dim">
                {pl(cat.note ?? '')}
              </p>
            )}

            {cat.id === 'zapiekanki' && (
              <p className="mt-8 max-w-[52ch] text-[0.78rem] leading-[1.6] text-cream-dim">
                {pl('Ceny w dwóch kolumnach: mała i duża. Opakowanie na wynos 2 zł.')}
              </p>
            )}
          </div>
        ))}

        <div
          role="tabpanel"
          id="panel-dodatki"
          aria-labelledby="tab-dodatki"
          hidden={active !== 'dodatki'}
          className="grid gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <h3 className="mb-4 text-[0.72rem] caps text-ember">Sosy</h3>
            <ul className="flex flex-wrap gap-2">
              {sosy.map((s) => (
                <li
                  key={s}
                  className="border border-char px-3 py-[0.35rem] text-[0.82rem] text-cream-dim"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-10 text-[0.72rem] caps text-ember">{pl('Sosy kraftowe')}</h3>
            <ul className="flex flex-wrap gap-2">
              {sosyKraftowe.map((s) => (
                <li
                  key={s}
                  className="border border-gold/40 px-3 py-[0.35rem] text-[0.82rem] text-gold"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h3 className="mb-2 text-[0.72rem] caps text-ember">Dodatkowe składniki</h3>
            <ul>
              {dodatki.map((item) => (
                <li
                  key={item.name}
                  className="menu-row flex items-baseline gap-3 border-b border-char py-[0.6rem] last:border-b-0"
                >
                  <span className="menu-name text-[0.92rem] text-cream transition-colors">
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

      <WobblyRule className="mx-auto mt-14 h-2 w-full max-w-[86rem] text-char" seed={53} />
    </section>
  );
}
