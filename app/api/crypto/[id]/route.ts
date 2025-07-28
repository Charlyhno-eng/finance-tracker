import { NextRequest, NextResponse } from 'next/server';
import { prismaCryptomonnaieRepository } from '@/infrastructure/repositories/prisma-cryptomonnaie-repo';
import { updateCrypto, deleteCrypto } from '@/core/use-cases/cryptomonnaie';

const update = updateCrypto(prismaCryptomonnaieRepository);
const remove = deleteCrypto(prismaCryptomonnaieRepository);

type Params = { params: { id: string } };

export async function PUT(request: NextRequest, { params }: Params) {
  const id = parseInt(params.id);
  const data = await request.json();
  const updated = await update(id, data);
  return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const id = parseInt(params.id);
  await remove(id);
  return NextResponse.json({ success: true });
}
