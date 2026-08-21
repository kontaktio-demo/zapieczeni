export const BUSINESS = {
  name: 'Zapieczeni',
  tagline: 'kraftowe zapiekanki',
  street: 'Rokicińska 120',
  postalCode: '95-020',
  city: 'Andrespol',
  region: 'łódzkie',
  phone: '+48513761508',
  phoneDisplay: '513 761 508',
  lat: 51.7245848,
  lng: 19.6391923,
  maps: 'https://www.google.com/maps/search/?api=1&query=51.7245848,19.6391923',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=51.7245848,19.6391923',
  facebook: 'https://www.facebook.com/profile.php?id=61580220466043',
  instagram: 'https://www.instagram.com/zapieczeni_kraftowe_zapiekanki/',
  rating: 4.8,
  reviewCount: 197,
  ratingBreakdown: [
    { stars: 5, count: 179 },
    { stars: 4, count: 4 },
    { stars: 3, count: 2 },
    { stars: 2, count: 8 },
    { stars: 1, count: 4 },
  ],
} as const;

export const SITE_URL = 'https://zapieczeni-kontaktio-demos-projects.vercel.app';

export const AMENITIES = [
  'na wynos',
  'na miejscu',
  'karty płatnicze',
  'płatności zbliżeniowe',
  'darmowy parking przy ulicy',
  'dobre dla dzieci',
] as const;
