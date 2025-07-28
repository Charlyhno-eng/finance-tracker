import { NextRequest, NextResponse } from 'next/server';
import { prismaCryptomonnaieRepository } from '@/infrastructure/repositories/prisma-cryptomonnaie-repo';
import { createCrypto } from '@/core/use-cases/cryptomonnaie';

const addCrypto = createCrypto(prismaCryptomonnaieRepository);

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newCrypto = await addCrypto(data);
  return NextResponse.json(newCrypto, { status: 201 });
}
