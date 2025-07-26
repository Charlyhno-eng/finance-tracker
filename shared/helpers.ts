/**
 * Formats a Date object into a French long date string.
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string, e.g. "lundi 24 juillet 2023".
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a month string in "YYYY-MM" format into a localized short month and year string.
 *
 * @param {string} monthStr - The month string in the format "YYYY-MM".
 * @returns {string} The formatted month and year (e.g., "Jan 2025").
 */
export const formatMonth = (monthStr: string) => {
  const [year, month] = monthStr.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Generates an array of the last 12 months formatted in French as "jan. 2024".
 *
 * @returns {string[]} An array of 12 strings representing the last 12 months,
 *   formatted with abbreviated month and year, e.g. ["jan. 2024", "fév. 2024", ..., "déc. 2024"].
 */
export function getLast12MonthsLabels(): string[] {
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'short',
    year: 'numeric',
  });

  const labels: string[] = [];
  const today = new Date();

  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const formatted = formatter.format(date)
      .replace('.', '')
      .replace(/^\w/, (c) => c.toLowerCase());
    labels.push(formatted);
  }

  return labels;
}

/**
 * Generates an array of hexadecimal color strings in neon blue and purple tones,
 * based on a predefined palette. If the requested number of colors exceeds the
 * palette size, the colors are reused in a loop.
 *
 * @param {number} count - The total number of colors to generate.
 * @returns {string[]} An array of hex color strings.
 */
export function generateColors(count: number): string[] {
  const baseColors = [
    '#7F00FF',
    '#00BFFF',
    '#8A2BE2',
    '#1E90FF',
    '#9932CC',
    '#00FFFF',
    '#DA70D6',
    '#6495ED',
    '#BA55D3',
    '#5F9EA0',
  ];

  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length]);
  }

  return colors;
}
