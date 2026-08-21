type Props = {
  className?: string;
  draw?: boolean;
};

const PATH =
  'M2 15C9 4 20 3 27 14c7 11 18 10 25-1 7-10 18-11 25 0 7 11 18 12 25 1 7-11 18-10 25 1 7 11 18 10 25-1';

export function Ornament({ className = '', draw = false }: Props) {
  return (
    <svg
      viewBox="0 0 156 26"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: 'rotate(-0.4deg)' }}
    >
      <path
        d={PATH}
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-ornament={draw ? 'draw' : undefined}
      />
    </svg>
  );
}
