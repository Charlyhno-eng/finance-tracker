import { NextResponse } from 'next/server'
import { prismaCompteRepository } from '@/infrastructure/repositories/prisma-compte-repo'
import { getAllComptes } from '@/core/use-cases/compte'

const getComptes = getAllComptes(prismaCompteRepository)

export async function GET() {
  const comptes = await getComptes()
  return NextResponse.json(comptes)
}
