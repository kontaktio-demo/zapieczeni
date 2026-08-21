Inter Tight, przycięty do znaków używanych na stronie (łacina + polskie), woff2.

Źródło: https://github.com/google/fonts/tree/main/ofl/intertight
Licencja: SIL Open Font License 1.1, pełny tekst w OFL.txt.

Regeneracja:

    python -m fontTools.subset InterTight[wght].ttf --flavor=woff2 --no-hinting \
      --unicodes="U+0020-007E,U+00A0-00FF,U+0104-0107,U+0118-0119,U+0141-0144,U+015A-015B,U+0179-017C,U+2013-2014,U+2018-201E,U+2026,U+2039-203A,U+20AC" \
      --layout-features="kern,liga,clig,calt,ccmp,mark,mkmk,tnum,ss01,cv05,locl" \
      --output-file=inter-tight.woff2
