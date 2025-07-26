import { PrismaClient } from '@/infrastructure/repositories/client'
import { TransactionRepository } from '@/core/ports/transaction-repo'

const prisma = new PrismaClient()

// Allows you to retrieve transactions for the current month
const now = new Date();
const start = new Date(now.getFullYear(), now.getMonth(), 1);
const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

export const prismaTransactionRepository: TransactionRepository = {
  save: async (transactionData) => {
    return prisma.transaction.create({ data: transactionData })
  },

  findAll: async () => {
    return prisma.transaction.findMany({
      where: {
        date: { gte: start, lte: end },
      },
      include: { categorie: true },
    });
  },

  findById: async (id) => {
    return prisma.transaction.findUnique({
      where: { id },
      include: { categorie: true },
    });
  },

  delete: async (id) => {
    await prisma.transaction.delete({
      where: { id },
    })
  },
}
