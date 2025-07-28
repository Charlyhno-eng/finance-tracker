import yahooFinance from 'yahoo-finance2';

/**
 * Fetches the current price of a stock or ETF using Yahoo Finance.
 *
 * @param {string} symbol - The Yahoo Finance symbol (e.g., 'MC.PA', 'ASML.AS', '18MF.DE').
 * @returns {Promise<{ name: string; price: number; symbol: string }>} An object containing the asset name, current price, and symbol.
 * @throws Will throw an error if the quote is missing or price is undefined.
 */
export async function getStockQuote(symbol: string): Promise<{ name: string; price: number; symbol: string }> {
  const quote = await yahooFinance.quote(symbol);

  if (!quote || quote.regularMarketPrice === undefined) {
    throw new Error(`Failed to load quote for symbol: ${symbol}`);
  }

  return { name: quote.shortName || symbol, price: quote.regularMarketPrice, symbol };
}
