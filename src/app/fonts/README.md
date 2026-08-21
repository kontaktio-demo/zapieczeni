Fonts subsetted to Latin + Polish (fontTools), woff2.

Sources: Fraunces, Inter Tight, Instrument Serif - all SIL Open Font License 1.1,
license text in OFL.txt. Fraunces has the SOFT axis pinned out; wght, opsz and
WONK remain variable.

Regenerate:

    python -m fontTools.varLib.instancer Fraunces.ttf SOFT=0 -o Fraunces-noSOFT.ttf
    python -m fontTools.subset Fraunces-noSOFT.ttf --flavor=woff2 --no-hinting \
      --unicodes="U+0020-007E,U+00A0-00FF,U+0104-0107,U+0118-0119,U+0141-0144,U+015A-015B,U+0179-017C,U+2013-2014,U+2018-201E,U+2026,U+2039-203A,U+20AC" \
      --layout-features="kern,liga,clig,calt,ccmp,mark,mkmk,tnum,locl" \
      --output-file=fraunces.woff2
