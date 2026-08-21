import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Zapieczeni, kraftowe zapiekanki, Andrespol, Rokicińska 120';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const fontDir = join(process.cwd(), 'src', 'app', '_og');

export default async function Image() {
  const [displayFont, bodyFont] = await Promise.all([
    readFile(join(fontDir, 'Fraunces-Black.ttf')),
    readFile(join(fontDir, 'InterTight-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0806',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 900,
            height: 900,
            top: 60,
            left: 150,
            background:
              'radial-gradient(circle, rgba(201,102,47,0.42) 0%, rgba(201,102,47,0.12) 42%, rgba(10,8,6,0) 68%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            fontFamily: 'Fraunces',
            fontSize: 152,
            letterSpacing: -6,
            color: '#F5EADA',
            lineHeight: 1,
          }}
        >
          ZAPIECZENI
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 22,
            fontFamily: 'InterTight',
            fontSize: 34,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#C9662F',
          }}
        >
          kraftowe zapiekanki
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 26,
            marginTop: 74,
            fontFamily: 'InterTight',
            fontSize: 28,
            color: '#B9AC98',
          }}
        >
          <span>Andrespol, Rokicińska 120</span>
          <span style={{ color: '#1E1A15' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#D9A441' }}>
            <svg width="26" height="26" viewBox="0 0 20 20">
              <path
                d="M10 1.6l2.47 5.3 5.53.72-4.06 3.9 1.05 5.68L10 14.5l-5 2.7 1.05-5.68L2 7.62l5.53-.72z"
                fill="#D9A441"
              />
            </svg>
            4,8 z 197 opinii
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Fraunces', data: displayFont, style: 'normal', weight: 900 },
        { name: 'InterTight', data: bodyFont, style: 'normal', weight: 500 },
      ],
    },
  );
}
