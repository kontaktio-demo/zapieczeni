import { pl } from '@/lib/typo';

const FACTS = [
  'Na wynos i na miejscu',
  'Karty i zbliżeniowo',
  'Darmowy parking przy ulicy',
  'Czynne 7 dni w tygodniu',
];

export function InfoBar() {
  return (
    <div className="border-y border-char bg-ink-2">
      <ul className="mx-auto flex max-w-[86rem] flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-3 sm:px-8">
        {FACTS.map((fact) => (
          <li key={fact} className="text-[0.72rem] caps-tight text-cream-dim">
            {pl(fact)}
          </li>
        ))}
      </ul>
    </div>
  );
}
