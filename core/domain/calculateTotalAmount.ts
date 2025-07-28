/**
 * Calculates the total amount from an array of objects with an `amount` property.
 *
 * @param data - An array of items each containing a numeric `amount`.
 * @returns The sum of all `amount` values.
 */
export function calculateTotalAmount<T extends { amount: number }>(data: T[]): number {
  return data.reduce((acc, item) => acc + item.amount, 0);
}
