import { PrismaTransaction } from '@/shared/types/types-transaction';

export type TransactionRepository = {
  save: (transaction: Omit<PrismaTransaction, 'id'>) => Promise<PrismaTransaction>
  findAll: () => Promise<PrismaTransaction[]>
  findById: (id: number) => Promise<PrismaTransaction | null>
  delete: (id: number) => Promise<void>
}
