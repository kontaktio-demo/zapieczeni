const STAR =
  'M10 1.6l2.47 5.3 5.53.72-4.06 3.9 1.05 5.68L10 14.5l-5 2.7 1.05-5.68L2 7.62l5.53-.72z';

type Props = {
  value: number;
  size?: number;
  className?: string;
};

export function Stars({ value, size = 20, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-[3px] ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(1, Math.max(0, value - i));
        const id = `star-clip-${i}-${size}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="none">
            <defs>
              <clipPath id={id}>
                <rect x="0" y="0" width={20 * fill} height="20" />
              </clipPath>
            </defs>
            <path d={STAR} stroke="currentColor" strokeWidth="1.1" opacity="0.4" />
            <path d={STAR} fill="currentColor" clipPath={`url(#${id})`} />
          </svg>
        );
      })}
    </span>
  );
}
