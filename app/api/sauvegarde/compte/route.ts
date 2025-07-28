import { NextRequest, NextResponse } from 'next/server';
import { prismaSauvegardeRepository } from '@/infrastructure/repositories/prisma-sauvegarde-repo';
import { getAllSauvegardes, createSauvegarde, updateSauvegarde } from '@/core/use-cases/sauvegarde';

const fetchSauvegardes = getAllSauvegardes(prismaSauvegardeRepository);
const addSauvegarde = createSauvegarde(prismaSauvegardeRepository);
const modifySauvegarde = updateSauvegarde(prismaSauvegardeRepository);

export async function POST(request: NextRequest) {
  const { total } = await request.json();
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const sauvegardes = await fetchSauvegardes();

  if (sauvegardes.length === 0) {
    const created = await addSauvegarde({
      date: now,
      totalCompte: total,
      totalCrypto: 0,
      totalBourse: 0,
    });
    return NextResponse.json(created, { status: 201 });
  }

  const last = sauvegardes[0];
  const lastDate = new Date(last.date);
  const lastMonth = lastDate.getMonth();
  const lastYear = lastDate.getFullYear();

  if (lastMonth === currentMonth && lastYear === currentYear) {
    const updated = await modifySauvegarde(last.id, { totalCompte: total });
    return NextResponse.json(updated, { status: 200 });
  } else {
    const created = await addSauvegarde({
      date: now,
      totalCompte: total,
      totalCrypto: last.totalCrypto,
      totalBourse: last.totalBourse,
    });
    return NextResponse.json(created, { status: 201 });
  }
}
