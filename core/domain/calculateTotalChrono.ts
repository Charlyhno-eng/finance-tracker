/**
 * Calculates the total values by summing corresponding elements
 * from the account, crypto, and stock arrays.
 *
 * @param {number[]} account - Array of account values.
 * @param {number[]} crypto - Array of cryptocurrency values.
 * @param {number[]} stock - Array of stock values.
 * @returns {number[]} Array containing the sum of the corresponding elements.
 */
export function calculateTotalChrono(account: number[],crypto: number[],stock: number[]): number[] {
  return account.map((value, index) => value + crypto[index] + stock[index]);
}
