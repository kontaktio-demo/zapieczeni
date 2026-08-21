import Image from 'next/image';

// TODO: podmienić na oryginalny plik logo od klienta
// Obecny plik jest wycięty z grafiki lokalu (photos-src/src-748764451.jpg).

type Props = {
  width: number;
  priority?: boolean;
  className?: string;
};

const RATIO = 720 / 195;

export function Wordmark({ width, priority = false, className = '' }: Props) {
  return (
    <Image
      src="/logo/zapieczeni-wordmark.png"
      alt="Zapieczeni, kraftowe zapiekanki"
      width={width}
      height={Math.round(width / RATIO)}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );
}
