/* eslint-disable @next/next/no-img-element -- satori renders these, not the DOM */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Zapieczeni, kraftowe zapiekanki, Andrespol, Rokicińska 120';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const root = process.cwd();
  const [font, logo, background] = await Promise.all([
    readFile(join(root, 'src', 'app', '_og', 'InterTight-Medium.ttf')),
    readFile(join(root, 'public', 'logo', 'zapieczeni-wordmark.png')),
    readFile(join(root, 'public', 'foto', 'og-background.jpg')),
  ]);

  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const backgroundSrc = `data:image/jpeg;base64,${background.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#0A0806',
          position: 'relative',
          fontFamily: 'InterTight',
        }}
      >
        <img src={backgroundSrc} alt="" width={1200} height={630} style={{ position: 'absolute', inset: 0 }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10,8,6,0.96) 30%, rgba(10,8,6,0.55) 62%, rgba(10,8,6,0.2) 100%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0 64px 64px', position: 'relative' }}>
          <img src={logoSrc} alt="" width={440} height={119} />
          <div style={{ display: 'flex', marginTop: 34, fontSize: 34, color: '#F5EADA' }}>
            Andrespol, Rokicińska 120
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16, fontSize: 26, color: '#D9A441' }}>
            <svg width="26" height="26" viewBox="0 0 20 20">
              <path
                d="M10 1.6l2.47 5.3 5.53.72-4.06 3.9 1.05 5.68L10 14.5l-5 2.7 1.05-5.68L2 7.62l5.53-.72z"
                fill="#D9A441"
              />
            </svg>
            4,8 z 197 opinii w Google
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'InterTight', data: font, style: 'normal', weight: 500 }] },
  );
}
