export type Price =
  | { kind: 'dual'; small: number | null; large: number | null }
  | { kind: 'flat'; value: number | null };

export type MenuItem = {
  name: string;
  desc: string | null;
  price: Price;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string | null;
  priceHeadings: [string, string] | null;
  items: MenuItem[];
  note: string | null;
};

const dual = (small: number | null, large: number | null): Price => ({
  kind: 'dual',
  small,
  large,
});

const flat = (value: number | null): Price => ({ kind: 'flat', value });

export const zapiekanki: MenuCategory = {
  id: 'zapiekanki',
  label: 'Zapiekanki',
  intro:
    'Zapiekanka narodziła się w PRL-u, gdy zamiast pizzy i McDonalda pojawiła się bagietka z pieczarkami, serem i ketchupem. Szybko stała się królową dworców i nocnych powrotów z imprez. Dziś to klasyka polskiego street foodu.',
  priceHeadings: ['mała', 'duża'],
  note: null,
  items: [
    { name: 'Marysia', desc: 'sos pomidorowy, ser', price: dual(19, 25) },
    { name: 'Klasyk', desc: 'sos pomidorowy, farsz pieczarkowy, ser', price: dual(22, 27) },
    {
      name: 'Klasyk z salami',
      desc: 'sos pomidorowy, farsz pieczarkowy, ser, salami',
      price: dual(23, 31),
    },
    { name: 'Hawajska', desc: 'sos pomidorowy, ser, kurczak, ananas', price: dual(24, 32) },
    {
      name: 'Mascarpone',
      desc: 'sos pomidorowy, ser, nduja, karmelizowana cebula, mascarpone',
      price: dual(26, 36),
    },
    {
      name: 'Wiejska',
      desc: 'sos pomidorowy, farsz pieczarkowy, ser, boczek, ogórek kiszony, cebula',
      price: dual(26, 36),
    },
    {
      name: 'Diavola',
      desc: 'sos pomidorowy, farsz pieczarkowy, ser, salami ostre, jalapeño',
      price: dual(24, 34),
    },
    {
      name: 'Big Mac',
      desc: 'sos pomidorowy, ser, wołowina, ogórek kiszony, cebula, sałata lodowa, sos Big Mac',
      price: dual(27, 37),
    },
    {
      name: 'Mięsna',
      desc: 'sos pomidorowy, farsz pieczarkowy, ser, kurczak, salami, boczek',
      price: dual(27, 37),
    },
    {
      name: 'Parma',
      desc: 'sos pomidorowy, prosciutto crudo, rukola, parmezan',
      price: dual(26, 36),
    },
    {
      name: 'Góralska',
      desc: 'sos pomidorowy, farsz pieczarkowy, ser, boczek, oscypek, cebula, żurawina',
      price: dual(27, 37),
    },
    { name: 'Serowa', desc: 'sos serowy, ser, camembert, parmezan', price: dual(26, 36) },
  ],
};

export const hotDogi: MenuCategory = {
  id: 'hot-dogi',
  label: 'Hot dogi',
  intro:
    'Klasyka ulicznego jedzenia w najlepszym wydaniu. Chrupiąca bułka, soczysta kiełbaska i dodatki, które sprawiają, że każdy kęs to mała przyjemność.',
  priceHeadings: null,
  note: null,
  items: [
    {
      name: 'Klasyk',
      desc: 'bułka, kiełbaska, pikle, ketchup, musztarda, cebulka prażona, szczypiorek',
      price: flat(21),
    },
    {
      name: 'Swojski',
      desc: 'bułka, kiełbaska, kapusta kiszona, pomidor, ogórek kiszony, cebula biała, ketchup, musztarda',
      price: flat(24),
    },
    {
      name: 'Meksyk',
      desc: 'bułka, kiełbaska, sałata lodowa, pomidor, jalapeño, cebula biała, nachosy, ketchup',
      price: flat(24),
    },
    {
      name: 'Mafia',
      desc: 'bułka, kiełbaska, ser, salami ostre, jalapeño, majonez, sriracha, cebulka prażona',
      price: flat(24),
    },
    {
      name: 'New York',
      desc: 'bułka, kiełbaska, pomidor, pikle, sriracha, ketchup, majonez',
      price: flat(24),
    },
    {
      name: 'Frytus',
      desc: 'bułka, kiełbaska, coleslaw, frytki, sos czosnkowy, ketchup, szczypiorek',
      price: flat(24),
    },
  ],
};

export const frytki: MenuCategory = {
  id: 'frytki',
  label: 'Frytki i bowle',
  intro:
    'Mówią, że frytki narodziły się w Belgii, ale szybko zdobyły serca całego świata. Chrupiące, złociste i zawsze gotowe.',
  priceHeadings: null,
  items: [],
  note: 'Frytki, bowle z frytą oraz wersja na słodko. Aktualne warianty i ceny potwierdzamy telefonicznie.',
};

export const sosy = ['ketchup', 'majonez', 'musztarda', 'sriracha'] as const;

export const sosyKraftowe = ['truflowy', 'czosnkowy', 'Big Mac', 'serowy'] as const;

export const dodatki: MenuItem[] = [
  { name: 'Mięso', desc: null, price: flat(5) },
  { name: 'Sery', desc: null, price: flat(5) },
  { name: 'Warzywa', desc: null, price: flat(3) },
  { name: 'Opakowanie na wynos', desc: null, price: flat(2) },
];

export const categories: MenuCategory[] = [zapiekanki, hotDogi, frytki];
