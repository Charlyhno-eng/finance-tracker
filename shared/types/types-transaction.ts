import { TYPE_TRANSACTION } from '../constants';

export type TypeTransaction = typeof TYPE_TRANSACTION[keyof typeof TYPE_TRANSACTION];

export type PrismaTransaction = {
  id: number;
  type: TypeTransaction;
  montant: number;
  date: Date;
  categorieId: number;
};

export type PrismaCategorieTransaction = {
  id: number;
  nom: string;
};

export type TransactionWithCategorie = {
  id: number;
  date: string;
  type: TypeTransaction;
  montant: number;
  categorieId: number;
  categorie: PrismaCategorieTransaction;
};

export type FormState = {
  date: string;
  type: TypeTransaction;
  category: string | number;
  amount: number | '';
};
