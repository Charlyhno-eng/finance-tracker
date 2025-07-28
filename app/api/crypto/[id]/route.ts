import { NextRequest, NextResponse } from 'next/server';
import { prismaCryptomonnaieRepository } from '@/infrastructure/repositories/prisma-cryptomonnaie-repo';
import { updateCrypto, deleteCrypto } from '@/core/use-cases/cryptomonnaie';

const update = updateCrypto(prismaCryptomonnaieRepository);
const remove = deleteCrypto(prismaCryptomonnaieRepository);

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const data = await request.json();
  const updated = await update(id, {
    nom: data.nom,
    ticker: data.ticker,
    quantite: data.quantite,
    stacking: data.stacking,
  });

  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await remove(Number(params.id))
  return NextResponse.json(null, { status: 201 })
}
