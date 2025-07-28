import { prismaCryptomonnaieRepository } from '@/infrastructure/repositories/prisma-cryptomonnaie-repo';
import { CryptoWithPrice } from '@/shared/types/type-crypto';

/**
 * Fetches the current price in EUR from CoinGecko for a given list of CoinGecko IDs.
 *
 * @param {string[]} ids - An array of CoinGecko asset IDs (e.g. ['bitcoin', 'ethereum']).
 * @returns {Promise<Record<string, number>>} A record mapping each ID to its current price in EUR.
 * @throws Will throw an error if the fetch request fails.
 */
async function fetchPricesFromCoinGecko(ids: string[]): Promise<Record<string, number>> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=eur`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch prices from CoinGecko');
  }

  const data: Record<string, { eur: number }> = await response.json();

  const prices: Record<string, number> = {};
  ids.forEach((id) => {
    prices[id] = data[id]?.eur ?? 0;
  });

  return prices;
}

/**
 * Retrieves all cryptocurrencies from the database and attaches the latest EUR price from CoinGecko.
 *
 * @returns {Promise<CryptoWithPrice[]>} A list of cryptocurrencies enriched with current EUR prices.
 */
export async function getAllCryptosWithPrice(): Promise<CryptoWithPrice[]> {
  const cryptos = await prismaCryptomonnaieRepository.findAll();
  if (cryptos.length === 0) return [];

  const coingeckoIds = cryptos.map(c => c.nom);
  const prices = await fetchPricesFromCoinGecko(coingeckoIds);

  return cryptos.map(c => ({
    id: c.id,
    ticker: c.ticker,
    nom: c.nom,
    amount: c.quantite,
    price: prices[c.nom] ?? 0,
    stacking: c.stacking,
  }));
}
