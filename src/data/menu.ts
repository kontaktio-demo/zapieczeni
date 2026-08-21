export type Price =
  | { kind: 'dual'; small: number | null; large: number | null }
  | { kind: 'flat'; value: number | null };

export type Confidence = 'pewne' | 'niepewne';

export type MenuItem = {
  name: string;
  desc: string | null;
  price: Price;
  tag: 'wege' | 'ostre' | null;
  confidence: Confidence;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string | null;
  priceHeadings: [string, string] | null;
  items: MenuItem[];
  footnote: string | null;
  photos: { src: string; alt: string }[];
};

const dual = (small: number | null, large: number | null): Price => ({ kind: 'dual', small, large });
const flat = (value: number | null): Price => ({ kind: 'flat', value });

export const zapiekanki: MenuCategory = {
  id: 'zapiekanki',
  label: 'Zapiekanki',
  intro: 'Każda w dwóch rozmiarach. Mała na szybko, duża na głodnego.',
  priceHeadings: ['mała', 'duża'],
  footnote: 'Opakowanie na wynos 2 zł.',
  photos: [
    { src: '/foto/zapiekanka-w-dloni.webp', alt: 'Zapiekanka z rukolą i sosem czosnkowym przed lokalem Zapieczeni' },
    { src: '/foto/zapiekanki-z-gory.webp', alt: 'Dwie zapiekanki i bowl z frytą na drewnianym stole' },
  ],
  items: [
    { name: 'Maryna', desc: 'sos pomidorowy, ser', price: dual(19, 29), tag: 'wege', confidence: 'pewne' },
    { name: 'Klasyk', desc: 'sos pomidorowy, farsz pieczarkowy, ser', price: dual(23, 33), tag: 'wege', confidence: 'pewne' },
    { name: 'Klasyk z salami', desc: 'sos pomidorowy, farsz pieczarkowy, ser, salami', price: dual(24, 34), tag: null, confidence: 'pewne' },
    { name: 'Hawajska', desc: 'sos pomidorowy, ser, kurczak, ananas', price: dual(24, 34), tag: null, confidence: 'pewne' },
    { name: 'Mascarpone', desc: 'sos pomidorowy, ser, nduja, karmelizowana cebula, mascarpone', price: dual(26, 36), tag: 'ostre', confidence: 'pewne' },
    { name: 'Wiejska', desc: 'sos pomidorowy, farsz pieczarkowy, ser, bekon, ogórek kiszony, cebula', price: dual(26, 36), tag: null, confidence: 'pewne' },
    { name: 'Diavola', desc: 'sos pomidorowy, farsz pieczarkowy, ser, salami ostre, jalapeño', price: dual(25, 35), tag: 'ostre', confidence: 'pewne' },
    { name: 'Big Mac', desc: 'sos pomidorowy, ser, wołowina, ogórek konserwowy, cebula, sałata lodowa, sos Big Mac', price: dual(27, 37), tag: null, confidence: 'pewne' },
    { name: 'Mięsna', desc: 'sos pomidorowy, farsz pieczarkowy, ser, kurczak, salami, bekon', price: dual(27, 37), tag: null, confidence: 'pewne' },
    { name: 'Parma', desc: 'sos pomidorowy, ser, prosciutto crudo, rukola, parmezan', price: dual(26, 36), tag: null, confidence: 'pewne' },
    { name: 'Góralska', desc: 'sos pomidorowy, farsz pieczarkowy, ser, bekon, oscypek, cebula, żurawina', price: dual(27, 37), tag: null, confidence: 'pewne' },
    { name: 'Serowa', desc: 'sos serowy, ser, camembert, parmezan', price: dual(26, 36), tag: 'wege', confidence: 'pewne' },
    { name: 'Karkowy Sztos', desc: 'sos czosnkowy, ser, grillowana karkówka, sałatka z pomidora, ogórka kiszonego i cebuli czerwonej, świeży koperek', price: dual(29, 39), tag: null, confidence: 'niepewne' },
  ],
};

export const bowle: MenuCategory = {
  id: 'bowle',
  label: 'Bowle z frytą',
  intro: 'Frytki, scoopsy albo frytki z przyprawą jako baza, reszta na wierzch.',
  priceHeadings: null,
  footnote: 'Sama porcja frytek, scoopsów albo frytek z przyprawą (250 g) 13 zł.',
  photos: [
    { src: '/foto/bowl-z-kukurydza.webp', alt: 'Bowl z frytą, kukurydzą i pomidorkami przed lokalem Zapieczeni' },
    { src: '/foto/bowle-na-lezakach.webp', alt: 'Dwa bowle z frytą trzymane w dłoniach przy leżakach' },
  ],
  items: [
    { name: 'Złote Bataty', desc: 'frytki z batatów 300 g, parmezan, natka, sos czosnkowy', price: flat(24), tag: 'wege', confidence: 'pewne' },
    { name: 'Bekonowy Raj', desc: 'scoopsy 300 g, sos serowy, bekon, szczypiorek', price: flat(24), tag: null, confidence: 'pewne' },
    { name: 'Wołowy Szał', desc: 'frytki 300 g, wołowina, ser, surówka z czerwonej kapusty, jalapeño, sos czosnkowy, sos sriracha, natka pietruszki', price: flat(33), tag: 'ostre', confidence: 'pewne' },
    { name: 'Truflowy Szwagier', desc: 'scoopsy 300 g, twaróg, bekon, sos truflowy, świeże zioła, pieprz', price: flat(29), tag: null, confidence: 'pewne' },
    { name: 'Texas BBQ', desc: 'frytki z przyprawą 300 g, udo z kurczaka w panierce, sałata lodowa, pikle, majonez, BBQ, szczypiorek', price: flat(33), tag: null, confidence: 'pewne' },
    { name: 'Swojski Konkret', desc: 'frytki 300 g, grillowana karkówka, ogórek kiszony, pomidor, cebula czerwona, sos czosnkowy, musztarda, koperek', price: flat(33), tag: null, confidence: 'pewne' },
    { name: 'Słodka Pokusa', desc: 'frytki z batatów 250 g, banan, sos czekoladowy, lody waniliowe, mięta', price: flat(23), tag: null, confidence: 'pewne' },
  ],
};

export const hotDogi: MenuCategory = {
  id: 'hot-dogi',
  label: 'Hot dogi',
  intro: null,
  priceHeadings: null,
  footnote: null,
  photos: [{ src: '/foto/hot-dog.webp', alt: 'Hot dog ze szczypiorkiem i musztardą na drewnianym stole' }],
  items: [
    { name: 'Klasyk', desc: 'bułka, kiełbaska, pikle, ketchup, musztarda, cebulka prażona, szczypiorek', price: flat(21), tag: null, confidence: 'pewne' },
    { name: 'Swojak', desc: 'bułka, kiełbaska, kapusta kiszona, pomidor, ogórek kiszony, cebula czerwona, ketchup, musztarda, koperek', price: flat(24), tag: null, confidence: 'pewne' },
    { name: 'Mafia', desc: 'bułka, kiełbaska, ser, salami ostre, jalapeño, majonez, sriracha, cebulka prażona', price: flat(24), tag: 'ostre', confidence: 'pewne' },
    { name: 'New York', desc: 'bułka, kiełbaska, pomidor, pikle, sałata lodowa, ketchup, majonez, szczypiorek', price: flat(23), tag: null, confidence: 'pewne' },
  ],
};

export const sosy = ['ketchup', 'majonez', 'musztarda', 'sriracha', 'BBQ'] as const;

export const sosyKraftowe = ['truflowy', 'czosnkowy', 'Big Mac', 'serowy'] as const;

export const dodatki: MenuItem[] = [
  { name: 'Mięso', desc: null, price: dual(4, 6), tag: null, confidence: 'niepewne' },
  { name: 'Sery', desc: null, price: dual(4, 6), tag: null, confidence: 'niepewne' },
  { name: 'Warzywa', desc: null, price: dual(3, 4), tag: null, confidence: 'niepewne' },
  { name: 'Opakowanie na wynos', desc: null, price: flat(2), tag: null, confidence: 'pewne' },
];

export const categories: MenuCategory[] = [zapiekanki, bowle, hotDogi];

export const uncertainItems = [
  ...categories.flatMap((c) => c.items.filter((i) => i.confidence === 'niepewne').map((i) => `${c.label}: ${i.name}`)),
  ...dodatki.filter((i) => i.confidence === 'niepewne').map((i) => `Dodatki: ${i.name}`),
];
