# Zapieczeni

Landing page lokalu Zapieczeni (kraftowe zapiekanki, Andrespol, Rokicińska 120).
Next.js App Router, TypeScript, Tailwind v4. Bez bibliotek UI i animacyjnych.

## Uruchomienie

    npm install
    npm run dev

Build produkcyjny: `npm run build`, potem `npm run start`.

## Gdzie co edytować

- `src/data/menu.ts` – pozycje menu, składniki, ceny i pole `confidence`.
  Cena `null` renderuje się jako półpauza; nie wpisuj zer, gdy ceny nie znasz.
- `src/lib/business.ts` – adres, telefon, social, ocena Google, kanoniczny URL.
- `src/lib/hours.ts` – godziny otwarcia. Zmiana tutaj aktualizuje badge statusu,
  tabelę godzin i dane strukturalne.
- `src/lib/typo.ts` – polski skład tekstu. Każdy widoczny string idzie przez `pl()`.

## Zdjęcia

Oryginały leżą w `photos-src/` (poza buildem). Po dorzuceniu nowych plików wpisz
je do `MANIFEST` w `scripts/prepare-photos.py` i uruchom:

    python scripts/prepare-photos.py

Skrypt kadruje, ujednolica kolor i zapisuje mastery do `public/foto/`.
Warianty responsywne generuje `next/image`.

## Logo

`public/logo/zapieczeni-wordmark.png` jest wycięty z grafiki lokalu.
Do podmiany na oryginalny plik od klienta.
