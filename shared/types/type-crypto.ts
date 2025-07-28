export type PrismaCryptomonnaie = {
  id: number;
  ticker: string;
  nom: string;
  quantite: number;
  stacking: boolean;
};

export type CryptoWithPrice = {
  id: number;
  ticker: string;
  nom: string;
  price: number;
  amount: number;
  stacking: boolean;
};
