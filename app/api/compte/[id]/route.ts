import { NextRequest, NextResponse } from 'next/server'
import { prismaCompteRepository } from '@/infrastructure/repositories/prisma-compte-repo'
import { updateCompte } from '@/core/use-cases/compte'

const update = updateCompte(prismaCompteRepository)

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  const data = await request.json()

  const updated = await update(id, {
    nom: data.ticker,
    montant: data.montant,
  })

  return NextResponse.json(updated)
}
