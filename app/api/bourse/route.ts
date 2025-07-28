import { NextRequest, NextResponse } from 'next/server';
import { prismaActionRepository } from '@/infrastructure/repositories/prisma-action-repo';
import { createAction } from '@/core/use-cases/action';

const addAction = createAction(prismaActionRepository);

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newAction = await addAction({
    ticker: data.ticker,
    nom: data.nom,
    quantite: data.quantite,
  });
  return NextResponse.json(newAction, { status: 201 });
}
