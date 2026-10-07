export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Treats empty strings and "-" placeholders in data files as missing values. */
export function hasValue(value: string | undefined | null): value is string {
  return !!value && value.trim() !== "" && value.trim() !== "-";
}

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/** Turns "April 2026" into a sortable number (202603). Unknown formats sort last. */
export function monthYearToNumber(date: string): number {
  const [month, year] = date.trim().toLowerCase().split(/\s+/);
  const m = MONTHS.indexOf(month);
  const y = Number(year);
  if (m === -1 || Number.isNaN(y)) return 0;
  return y * 100 + m;
}

export function padIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Splits "1st Place - Some Tournament" into a placement and a title. */
export function splitPlacement(text: string): { placement?: string; title: string } {
  const match = text.match(/^(\d+(?:st|nd|rd|th)\s+Place)\s*[-–—]\s*(.+)$/i);
  if (!match) return { title: text };
  return { placement: match[1], title: match[2] };
}
