import { CategorieTransaction } from '@/infrastructure/repositories/client';

export type CategorieTransactionRepository = {
  findAll: () => Promise<CategorieTransaction[]>;
};
