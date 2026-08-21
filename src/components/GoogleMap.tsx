import { BUSINESS } from '@/lib/business';

const EMBED = `https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=17&hl=pl&output=embed`;

export function GoogleMap({ className = '' }: { className?: string }) {
  return (
    <iframe
      src={EMBED}
      title="Mapa dojazdu do lokalu Zapieczeni, Rokicińska 120 w Andrespolu"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className={`block h-full w-full border-0 ${className}`}
    />
  );
}
