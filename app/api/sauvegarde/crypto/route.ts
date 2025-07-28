import { NextRequest, NextResponse } from 'next/server';
import { prismaSauvegardeRepository } from '@/infrastructure/repositories/prisma-sauvegarde-repo';
import { getAllSauvegardes, createSauvegarde, updateSauvegarde } from '@/core/use-cases/sauvegarde';
import { formatDate } from '@/shared/helpers';

const fetchSauvegardes = getAllSauvegardes(prismaSauvegardeRepository);
const addSauvegarde = createSauvegarde(prismaSauvegardeRepository);
const modifySauvegarde = updateSauvegarde(prismaSauvegardeRepository);

export async function POST(request: NextRequest) {
  const { total } = await request.json();
  const today = formatDate(new Date());
  const currentMonth = today.slice(0, 7);

  const sauvegardes = await fetchSauvegardes();

  if (sauvegardes.length === 0) {
    const created = await addSauvegarde({
      date: new Date(),
      totalCompte: 0,
      totalCrypto: total,
      totalBourse: 0,
    });
    return NextResponse.json(created, { status: 201 });
  }

  const last = sauvegardes[0];
  const lastMonth = last.date.toISOString().slice(0, 7);

  if (lastMonth === currentMonth) {
    const updated = await modifySauvegarde(last.id, { totalCrypto: total });
    return NextResponse.json(updated, { status: 200 });
  } else {
    const created = await addSauvegarde({
      date: new Date(),
      totalCrypto: total,
      totalCompte: last.totalCompte,
      totalBourse: last.totalBourse,
    });
    return NextResponse.json(created, { status: 201 });
  }
}
