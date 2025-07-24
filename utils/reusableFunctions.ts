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
