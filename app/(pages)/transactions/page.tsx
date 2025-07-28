'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import TransactionForm from './_components/TransactionForm';
import TransactionList from './_components/TransactionList';
import { TransactionWithCategorie, PrismaCategorieTransaction, FormState } from '@/shared/types/types-transaction';
import { TYPE_TRANSACTION } from '@/shared/constants';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<TransactionWithCategorie[]>([]);
  const [categories, setCategories] = useState<PrismaCategorieTransaction[]>([]);
  const [form, setForm] = useState<FormState>({ date: '', type: TYPE_TRANSACTION.REVENU, category: '', amount: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, txRes] = await Promise.all([
          fetch('/api/categorieTransaction'),
          fetch('/api/transaction'),
        ]);

        if (!catRes.ok || !txRes.ok) throw new Error('Erreur de chargement');

        const [catData, txData] = await Promise.all([catRes.json(), txRes.json()]);

        setCategories(catData);
        setTransactions(txData);
      } catch {
        alert('Erreur lors du chargement des données');
      }
    };

    fetchData();
  }, []);

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.date || !form.category || form.amount === '') {
      alert('Veuillez remplir la date, la catégorie et le montant');
      return;
    }

    try {
      const response = await fetch('/api/transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: form.type,
          montant: form.amount,
          date: new Date(form.date).toISOString(),
          categorieId: Number(form.category),
        }),
      });

      if (!response.ok) throw new Error('Échec de la création de la transaction');

      const newTransaction: TransactionWithCategorie = await response.json();
      setTransactions((prev) => [newTransaction, ...prev]);
      setForm({ date: '', type: TYPE_TRANSACTION.REVENU, category: '', amount: '' });
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/transaction/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Échec de la suppression');
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const groupedTransactions = transactions.reduce<Record<string, TransactionWithCategorie[]>>(
    (groups, transaction) => {
      const month = transaction.date.slice(0, 7);
      if (!groups[month]) groups[month] = [];
      groups[month].push(transaction);
      return groups;
    }, {}
  );

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4 }}>
          Transactions
        </Typography>

        <Paper sx={{ p: 3, mb: 4, bgcolor: 'rgba(25, 25, 25, 0.2)', color: 'rgba(255, 255, 255, 0.85)', borderRadius: 2 }} elevation={0}>
          <TransactionForm form={form} categories={categories} onChange={handleChange} onSubmit={handleSubmit} />
        </Paper>

        <TransactionList groupedTransactions={groupedTransactions} onDelete={handleDelete} />
      </Container>
    </Box>
  );
}
