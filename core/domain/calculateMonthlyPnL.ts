/**
 * Calculates the monthly Profit and Loss (PnL) percentage changes between consecutive values.
 *
 * @param values - An array of numbers representing monthly values (e.g., asset values).
 * @returns An array of monthly PnL percentages, where each value is the percentage change
 *          from the previous month to the current month. The returned array has a length
 *          of `values.length - 1`. If the previous month value is zero, the PnL is set to 0
 *          to avoid division by zero.
 */
export function calculateMonthlyPnL(values: number[]): number[] {
  if (values.length < 2) return [];

  const pnl: number[] = [];

  for (let i = 1; i < values.length; i++) {
    const prev = values[i - 1];
    const curr = values[i];
    if (prev === 0) {
      pnl.push(0); // avoid division by zero
    } else {
      pnl.push(((curr - prev) / prev) * 100);
    }
  }

  return pnl;
}
