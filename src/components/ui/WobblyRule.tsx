type Props = {
  className?: string;
  seed?: number;
};

function wobble(seed: number): string {
  const points: string[] = ['M0 4'];
  let x = 0;
  let n = seed;
  while (x < 1200) {
    const step = 60 + ((n = (n * 1103515245 + 12345) % 2147483648) % 40);
    const y = 3.2 + (((n = (n * 1103515245 + 12345) % 2147483648) % 18) / 10);
    x += step;
    points.push(`L${x} ${y.toFixed(2)}`);
  }
  return points.join(' ');
}

export function WobblyRule({ className = '', seed = 7 }: Props) {
  return (
    <svg
      viewBox="0 0 1200 8"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d={wobble(seed)} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
