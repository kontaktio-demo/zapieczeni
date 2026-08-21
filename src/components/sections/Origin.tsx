import { zapiekanki, hotDogi, sosyKraftowe } from '@/data/menu';
import { pl } from '@/lib/typo';
import { WobblyRule } from '@/components/ui/WobblyRule';

const FACTS = [
  `${zapiekanki.items.length} zapiekanek, ${hotDogi.items.length} hot dogów. Do tego frytki i bowle.`,
  'Każda zapiekanka w dwóch rozmiarach, małej albo dużej.',
  `Sosy kraftowe: ${sosyKraftowe.join(', ')}.`,
  'Nie dowozimy. Odbiór na miejscu albo na wynos, parking przy ulicy za darmo.',
];

export function Origin() {
  return (
    <section id="skad" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-[86rem] gap-14 md:grid-cols-12 md:gap-10">
        <p className="font-accent text-[clamp(1.5rem,3.6vw,2.6rem)] italic leading-[1.32] text-cream md:col-span-7 md:pt-6">
          {pl(zapiekanki.intro ?? '')}
        </p>

        <ol className="md:col-span-4 md:col-start-9 md:pt-20">
          {FACTS.map((fact, i) => (
            <li key={i} className="flex gap-5 border-t border-char py-5 first:border-t-0 first:pt-0">
              <span className="nums shrink-0 pt-[0.15rem] font-display text-[0.8rem] text-ember">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.95rem] leading-[1.6] text-cream-dim">{pl(fact)}</span>
            </li>
          ))}
        </ol>
      </div>

      <WobblyRule className="mx-auto mt-20 h-2 w-full max-w-[86rem] text-char md:mt-24" seed={31} />
    </section>
  );
}
