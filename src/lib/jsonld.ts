import { BUSINESS, SITE_URL } from './business';
import { categories, type MenuCategory } from '@/data/menu';

type Offer = { '@type': 'Offer'; price: string; priceCurrency: 'PLN'; name?: string };

function offers(item: MenuCategory['items'][number]): Offer[] {
  const currency = 'PLN' as const;
  if (item.price.kind === 'dual') {
    const list: Offer[] = [];
    if (item.price.small !== null)
      list.push({ '@type': 'Offer', name: 'mała', price: String(item.price.small), priceCurrency: currency });
    if (item.price.large !== null)
      list.push({ '@type': 'Offer', name: 'duża', price: String(item.price.large), priceCurrency: currency });
    return list;
  }
  if (item.price.value === null) return [];
  return [{ '@type': 'Offer', price: String(item.price.value), priceCurrency: currency }];
}

function menuSections() {
  return categories
    .filter((category) => category.items.length > 0)
    .map((category) => ({
      '@type': 'MenuSection',
      name: category.label,
      hasMenuItem: category.items.map((item) => {
        const list = offers(item);
        return {
          '@type': 'MenuItem',
          name: item.name,
          ...(item.desc ? { description: item.desc } : {}),
          ...(list.length > 0 ? { offers: list } : {}),
        };
      }),
    }));
}

export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    name: BUSINESS.name,
    description: 'Kraftowe zapiekanki, hot dogi i bowle z frytą w Andrespolu.',
    servesCuisine: ['Polska', 'Fast food', 'Street food'],
    priceRange: '$',
    telephone: BUSINESS.phone,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.region,
      addressCountry: 'PL',
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '12:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '197',
    },
    hasMenu: {
      '@type': 'Menu',
      name: 'Menu Zapieczeni',
      hasMenuSection: menuSections(),
    },
    sameAs: [BUSINESS.facebook, BUSINESS.instagram],
  };
}
