import { PrismaCategorieTransaction } from '@/shared/types/types-transaction';
import { CategorieTransactionRepository } from '../ports/categorie-transaction-repo';

export const getAllCategories = (repository: CategorieTransactionRepository) => async (): Promise<PrismaCategorieTransaction[]> => {
  return repository.findAll();
};
