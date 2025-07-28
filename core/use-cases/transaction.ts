import { PrismaTransaction } from '@/shared/types/types-transaction';
import { TransactionRepository } from '../ports/transaction-repo'

export const createTransaction = (repository: TransactionRepository) => async (data: Omit<PrismaTransaction, 'id'>): Promise<PrismaTransaction> => {
  return repository.save(data)
}

export const getAllTransactions = (repository: TransactionRepository) => async (): Promise<PrismaTransaction[]> => {
  return repository.findAll()
}

export const getTransactionById = (repository: TransactionRepository) => async (id: number): Promise<PrismaTransaction | null> => {
  return repository.findById(id)
}

export const deleteTransaction = (repository: TransactionRepository) => async (id: number): Promise<void> => {
  await repository.delete(id)
}
