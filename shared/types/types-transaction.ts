import { TYPE_TRANSACTION } from '../constants';

export type TypeTransaction = typeof TYPE_TRANSACTION[keyof typeof TYPE_TRANSACTION];

export type TransactionFromApi = {
  id: number;
  date: string;
  type: TypeTransaction;
  categorie: { id: number; nom: string; };
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
