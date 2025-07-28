import { CoinListItem } from '@/shared/types/type-gestion';

/**
 * Searches for cryptocurrencies on CoinGecko that match a given symbol.
 *
 * @param {string} symbol - The symbol of the cryptocurrency to search for (e.g., 'btc', 'eth').
 * @returns {Promise<CoinListItem[]>} A promise that resolves to an array of matching CoinGecko coin items.
 * @throws Will throw an error if the request to CoinGecko fails.
 */
export async function searchCoinBySymbol(symbol: string): Promise<CoinListItem[]> {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
  if (!response.ok) {
    throw new Error('Failed to load CoinGecko data');
  }

  const allCoins: CoinListItem[] = await response.json();

  return allCoins.filter((coin) =>
    coin.symbol.toLowerCase() === symbol.toLowerCase()
  );
}
