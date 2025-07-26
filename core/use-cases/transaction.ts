import { Transaction } from '@/infrastructure/repositories/client'
import { TransactionRepository } from '../ports/transaction-repo'

export const createTransaction = (repository: TransactionRepository) => async (data: Omit<Transaction, 'id'>): Promise<Transaction> => {
  return repository.save(data)
}

export const getAllTransactions = (repository: TransactionRepository) => async (): Promise<Transaction[]> => {
  return repository.findAll()
}

export const getTransactionById = (repository: TransactionRepository) => async (id: number): Promise<Transaction | null> => {
  return repository.findById(id)
}

export const deleteTransaction = (repository: TransactionRepository) => async (id: number): Promise<void> => {
  await repository.delete(id)
}
