import { prismaCategorieTransactionRepository } from '@/infrastructure/repositories/prisma-categorie-transaction-repo';
import { prismaTransactionRepository } from '@/infrastructure/repositories/prisma-transaction-repo';
import { TYPE_TRANSACTION } from '@/shared/constants';

/**
 * Retrieves expense data grouped by category for use in chart visualizations.
 *
 * @returns {Promise<{ labels: string[]; data: number[] }>}
 * A promise that resolves to an object containing:
 * - `labels`: an array of category names
 * - `data`: an array of total expense amounts corresponding to each category
 *
 * @throws Will throw if fetching transactions or categories fails.
 */
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
