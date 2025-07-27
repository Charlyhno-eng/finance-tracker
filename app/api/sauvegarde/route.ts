import { NextRequest, NextResponse } from 'next/server'
import { prismaSauvegardeRepository } from '@/infrastructure/repositories/prisma-sauvegarde-repo'
import { getAllSauvegardes, createSauvegarde } from '@/core/use-cases/sauvegarde'

const getSauvegardes = getAllSauvegardes(prismaSauvegardeRepository)
const addSauvegarde = createSauvegarde(prismaSauvegardeRepository)

export async function GET() {
  const sauvegardes = await getSauvegardes()
  return NextResponse.json(sauvegardes)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const sauvegarde = await addSauvegarde(body)
  return NextResponse.json(sauvegarde, { status: 201 })
}
