import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { restaurantJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/business';
import './globals.css';

const interTight = localFont({
  src: './fonts/inter-tight.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter-tight',
  fallback: ['system-ui', 'Segoe UI', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Zapieczeni – kraftowe zapiekanki i hot dogi | Andrespol',
  description:
    'Kraftowe zapiekanki, hot dogi i bowle z frytą w Andrespolu, Rokicińska 120. Robione na miejscu. 4,8/5 w Google. Zamów na wynos: 513 761 508.',
  keywords: [
    'zapiekanki Andrespol',
    'zapiekanki Łódź',
    'hot dogi Andrespol',
    'fast food Andrespol',
    'jedzenie na wynos Andrespol',
    'Rokicińska 120',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: SITE_URL,
    siteName: 'Zapieczeni',
    title: 'Zapieczeni – kraftowe zapiekanki i hot dogi | Andrespol',
    description:
      'Kraftowe zapiekanki, hot dogi i bowle z frytą. Rokicińska 120, Andrespol. 4,8/5 w Google.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapieczeni – kraftowe zapiekanki | Andrespol',
    description: 'Rokicińska 120, Andrespol. Na wynos: 513 761 508.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0806',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${interTight.variable} antialiased`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
