import { prismaCategorieTransactionRepository } from '@/infrastructure/repositories/prisma-categorie-transaction-repo';
import { prismaTransactionRepository } from '@/infrastructure/repositories/prisma-transaction-repo';
import { TYPE_TRANSACTION} from '@/shared/constants'

export async function getExpensesChartData() {
  const [transactions, categories] = await Promise.all([
    prismaTransactionRepository.findAll(),
    prismaCategorieTransactionRepository.findAll(),
  ]);

  const depenses = transactions.filter(tx => tx.type === TYPE_TRANSACTION.DEPENSE);

  const sommeParCategorie: Record<number, number> = {};
  depenses.forEach(tx => {
    const catId = tx.categorieId;
    sommeParCategorie[catId] = (sommeParCategorie[catId] || 0) + tx.montant;
  });

  const labels: string[] = [];
  const data: number[] = [];

  categories.forEach(cat => {
    if (sommeParCategorie[cat.id]) {
      labels.push(cat.nom);
      data.push(sommeParCategorie[cat.id]);
    }
  });

  return { labels, data };
}
