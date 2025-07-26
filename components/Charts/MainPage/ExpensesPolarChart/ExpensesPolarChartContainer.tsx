import React, { useEffect, useState } from 'react';
import ExpensesPolarChart from './ExpensesPolarChart';
import { TransactionFromApi, Category } from '@/shared/types/types-transaction';
import { TypeTransaction } from '@/infrastructure/repositories/client';

type DataSet = {
  labels: string[];
  data: number[];
};

export default function ExpensesPolarChartContainer() {
  const [transactions, setTransactions] = useState<TransactionFromApi[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [dataSet, setDataSet] = useState<DataSet>({ labels: [], data: [] });

  useEffect(() => {
    // Récupère les catégories
    fetch('/api/categoriesTransaction')
      .then(res => res.json())
      .then((cats: Category[]) => setCategories(cats))
      .catch(() => alert('Erreur chargement catégories'));

    // Récupère les transactions du mois en cours côté API (via prismaTransactionRepository.findAll)
    fetch('/api/transactions')
      .then(res => res.json())
      .then((txs: TransactionFromApi[]) => setTransactions(txs))
      .catch(() => alert('Erreur chargement transactions'));
  }, []);

  useEffect(() => {
    if (transactions.length === 0 || categories.length === 0) return;

    // Filtrer les dépenses uniquement
    const depenses = transactions.filter(tx => tx.type === TypeTransaction.DEPENSE);

    // Calculer la somme par catégorie (id)
    const sommeParCategorie: Record<number, number> = {};
    depenses.forEach(tx => {
      const catId = tx.categorie.id;
      sommeParCategorie[catId] = (sommeParCategorie[catId] || 0) + tx.montant;
    });

    // Construire les labels et data dans le même ordre
    const labels: string[] = [];
    const data: number[] = [];

    categories.forEach(cat => {
      if (sommeParCategorie[cat.id]) {
        labels.push(cat.nom);
        data.push(sommeParCategorie[cat.id]);
      }
    });

    setDataSet({ labels, data });
  }, [transactions, categories]);

  return (
    <div>
      {dataSet.data.length === 0 ? (
        <p>Aucune dépense ce mois-ci.</p>
      ) : (
        <ExpensesPolarChart labels={dataSet.labels} data={dataSet.data} />
      )}
    </div>
  );
}
