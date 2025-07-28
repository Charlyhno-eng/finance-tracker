export type PrismaAction = {
  id: number;
  ticker: string;
  nom: string;
  quantite: number;
};

export type Stock = {
  id: number;
  ticker: string;
  nom: string;
  price: number;
  amount: number;
};
