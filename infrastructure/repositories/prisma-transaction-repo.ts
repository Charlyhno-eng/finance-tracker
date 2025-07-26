import { PrismaClient } from '@/infrastructure/repositories/client'
import { TransactionRepository } from '@/core/ports/transaction-repo'

const prisma = new PrismaClient()

export const prismaTransactionRepository: TransactionRepository = {
  save: async (transactionData) => {
    return prisma.transaction.create({ data: transactionData })
  },

  findAll: async () => {
    return prisma.transaction.findMany({
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
