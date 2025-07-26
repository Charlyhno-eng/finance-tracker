import { TypeTransaction } from '@/infrastructure/repositories/client';

export type TransactionFromApi = {
  id: number;
  date: string;
  type: TypeTransaction;
  categorie: { nom: string };
  montant: number;
};

export type Category = {
  id: number;
  nom: string;
};

export type FormState = {
  date: string;
  type: TypeTransaction;
  category: string | number;
  amount: number | '';
};
