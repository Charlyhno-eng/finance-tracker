/**
 * Calculates the total value of a list of assets, based on their `price` and `amount`.
 *
 * @param assets - An array of objects each containing numeric `price` and `amount` properties.
 * @returns The total monetary value (sum of price × amount for each asset).
 */
export function calculateTotalValue<T extends { price: number; amount: number }>(assets: T[]): number {
  return assets.reduce((acc, asset) => acc + asset.price * asset.amount, 0);
}
