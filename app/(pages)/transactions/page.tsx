'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import TransactionForm from './_components/TransactionForm';
import TransactionList from './_components/TransactionList';
import { TransactionFromApi, Category, FormState } from '@/shared/types/types-transaction';
import { TypeTransaction } from '@/infrastructure/repositories/client';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<TransactionFromApi[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState<FormState>({ date: '', type: TypeTransaction.REVENU, category: '', amount: '' });

  useEffect(() => {
    fetch('/api/categorieTransaction')
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch(() => alert('Échec du chargement des catégories'));

    fetch('/api/transaction')
      .then((res) => res.json())
      .then((data: TransactionFromApi[]) => setTransactions(data))
      .catch(() => alert('Échec du chargement des transactions'));
  }, []);

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.date || !form.category || form.amount === '') {
      alert('Please fill date, category and amount');
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

      if (!response.ok) throw new Error('Failed to create transaction');

      const newTransaction: TransactionFromApi = await response.json();
      setTransactions((prev) => [newTransaction, ...prev]);
      setForm({ date: '', type: TypeTransaction.REVENU, category: '', amount: '' });
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

  const groupedTransactions = transactions.reduce<Record<string, TransactionFromApi[]>>(
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
