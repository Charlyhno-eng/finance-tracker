import { NextRequest, NextResponse } from 'next/server'
import { prismaTransactionRepository } from '@/infrastructure/repositories/prisma-transaction-repo'
import { getTransactionById, deleteTransaction } from '@/core/use-cases/transaction'

const getTransaction = getTransactionById(prismaTransactionRepository)
const removeTransaction = deleteTransaction(prismaTransactionRepository)

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const transaction = await getTransaction(Number(params.id))
  if (!transaction) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(transaction)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await removeTransaction(Number(params.id))
  return NextResponse.json(null, { status: 204 })
}
