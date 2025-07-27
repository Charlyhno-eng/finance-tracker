import { CoinListItem } from '@/shared/types/type-gestion';

export async function searchCoinBySymbol(symbol: string): Promise<CoinListItem[]> {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des données');
  }

  const allCoins: CoinListItem[] = await response.json();

  return allCoins.filter((coin) =>
    coin.symbol.toLowerCase() === symbol.toLowerCase()
  );
}
