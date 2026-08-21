# Zapieczeni

Landing page lokalu Zapieczeni (kraftowe zapiekanki, Andrespol, Rokicińska 120).
Next.js App Router, TypeScript, Tailwind v4, GSAP.

## Uruchomienie

    npm install
    npm run dev

Build produkcyjny: `npm run build`, potem `npm run start`.

## Gdzie co edytować

- `src/data/menu.ts` - pozycje menu, składniki i ceny. Cena `null` renderuje sie
  jako pauza; nie wpisuj zer.
- `src/lib/business.ts` - adres, telefon, social, ocena Google.
- `src/lib/hours.ts` - godziny otwarcia. Zmiana tutaj aktualizuje badge statusu,
  tabelę godzin i dane strukturalne.
- `src/lib/typo.ts` - polski skład tekstu (twarde spacje, półpauzy, waluta).
  Każdy widoczny string przechodzi przez `pl()`.

## Zdjęcia

Strona nie używa zdjęć produktowych. Sloty do podmiany są opisane w
`src/components/sections/Origin.tsx` i `MenuSection.tsx`.
