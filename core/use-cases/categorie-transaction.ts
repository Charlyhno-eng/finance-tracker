import { CategorieTransaction } from '@/infrastructure/repositories/client';
import { CategorieTransactionRepository } from '../ports/categorie-transaction-repo';

export const getAllCategories = (repository: CategorieTransactionRepository) => async (): Promise<CategorieTransaction[]> => {
  return repository.findAll();
};
