import { PrismaCategorieTransaction } from '@/shared/types/types-transaction';

export type CategorieTransactionRepository = {
  findAll: () => Promise<PrismaCategorieTransaction[]>;
};
