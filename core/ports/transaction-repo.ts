import { Transaction } from '@/infrastructure/repositories/client'

export type TransactionRepository = {
  save: (transaction: Omit<Transaction, 'id'>) => Promise<Transaction>
  findAll: () => Promise<Transaction[]>
  findById: (id: number) => Promise<Transaction | null>
  delete: (id: number) => Promise<void>
}
