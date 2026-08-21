# Zapieczeni

Landing page lokalu Zapieczeni (kraftowe zapiekanki, Andrespol, Rokicińska 120).
Next.js App Router, TypeScript, Tailwind v4. Bez bibliotek animacyjnych i UI.

## Uruchomienie

    npm install
    npm run dev

Build produkcyjny: `npm run build`, potem `npm run start`.

## Gdzie co edytować

- `src/data/menu.ts` – pozycje menu, składniki i ceny. Cena `null` renderuje się
  jako półpauza; nie wpisuj zer, gdy ceny nie znasz.
- `src/lib/business.ts` – adres, telefon, social, ocena Google, kanoniczny URL.
- `src/lib/hours.ts` – godziny otwarcia. Zmiana tutaj aktualizuje badge statusu,
  tabelę godzin i dane strukturalne.
- `src/lib/typo.ts` – polski skład tekstu (twarde spacje, półpauzy, waluta).
  Każdy widoczny string przechodzi przez `pl()`.
- `src/app/fonts/` – kroje przycięte do potrzebnych znaków, sposób regeneracji
  opisany w `fonts/README.md`.

## Zdjęcia

Strona jest zbudowana na typografii i nie używa zdjęć produktowych. Realne zdjęcia
lokalu można wstawić w `Origin.tsx` (obok tekstu) i w `Contact.tsx` (zamiast mapy).
