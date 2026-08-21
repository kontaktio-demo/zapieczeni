const NBSP = ' ';
const NDASH = '–';

const SINGLE_LETTER = /(?<=^|[\s(„])([aiouwzAIOUWZ]) /g;
const SHORT_WORDS = /(?<=^|[\s(„])(że|to|do|na|od|po|za|we|ze) (\S{1,10})(?=[\s.,;:!?)”]|$)/g;

export function pl(input: string): string {
  return input
    .replace(/—/g, NDASH)
    .replace(/(\d{1,2}:\d{2})\s*[-–]\s*(\d{1,2}:\d{2})/g, `$1${NDASH}$2`)
    .replace(/(\d)\.(\d)/g, '$1,$2')
    .replace(/(\d)\s*zł/g, `$1${NBSP}zł`)
    .replace(/ [-–] /g, `${NBSP}${NDASH} `)
    .replace(SINGLE_LETTER, `$1${NBSP}`)
    .replace(SHORT_WORDS, `$1${NBSP}$2`);
}

export function noWidow(input: string): string {
  const text = pl(input);
  const lastSpace = text.lastIndexOf(' ');
  if (lastSpace === -1) return text;
  return `${text.slice(0, lastSpace)}${NBSP}${text.slice(lastSpace + 1)}`;
}

export function price(value: number): string {
  return `${value}${NBSP}zł`;
}

export function phoneDisplay(value: string): string {
  return value.replace(/ /g, NBSP);
}

export function quote(input: string): string {
  return `„${pl(input)}”`;
}
