import { NextRequest, NextResponse } from 'next/server'
import { prismaTransactionRepository } from '@/infrastructure/repositories/prisma-transaction-repo'
import { getAllTransactions, createTransaction } from '@/core/use-cases/transaction'

const getTransactions = getAllTransactions(prismaTransactionRepository)
const addTransaction = createTransaction(prismaTransactionRepository)

export async function GET() {
  const transactions = await getTransactions()
  return NextResponse.json(transactions)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const newTransaction = await addTransaction(data)
  return NextResponse.json(newTransaction, { status: 201 })
}
