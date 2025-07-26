import { PrismaClient } from '@/infrastructure/repositories/client';
import { CategorieTransactionRepository } from '@/core/ports/categorie-transaction-repo';

const prisma = new PrismaClient();

export const prismaCategorieTransactionRepository: CategorieTransactionRepository = {
  findAll: async () => {
    return prisma.categorieTransaction.findMany({
      orderBy: { nom: 'asc' },
    });
  },
};
