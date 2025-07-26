import { NextResponse } from 'next/server';
import { getAllCategories } from '@/core/use-cases/categorie-transaction';
import { prismaCategorieTransactionRepository } from '@/infrastructure/repositories/prisma-categorie-transaction-repo';

export async function GET() {
  try {
    const categories = await getAllCategories(prismaCategorieTransactionRepository)();
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Erreur API categories :', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
}
