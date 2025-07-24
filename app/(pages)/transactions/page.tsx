'use client';

import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import CustomButton from '@/components/CustomButton/CustomButton';

type Transaction = {
  id: number;
  date: string;
  type: 'revenu' | 'dépense';
  category: string;
  amount: number;
};

type FormState = {
  date: string;
  type: string;
  category: string;
  amount: number | '';
}

const categories = [
  'Essence',
  'Dividendes',
  'Alimentation',
  'Loyer',
  'Loisirs',
  'Autre',
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [form, setForm] = useState<FormState>({ date: '', type: 'revenu', category: '', amount: '' });

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.date || !form.category || form.amount === '') {
      alert('Please fill date, category and amount');
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      date: form.date,
      type: form.type as 'revenu' | 'dépense',
      category: form.category,
      amount: Number(form.amount),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setForm({ date: '', type: 'revenu', category: '', amount: '' });
  };

  const groupedTransactions = transactions.reduce<Record<string, Transaction[]>>(
    (groups, transaction) => {
      const month = transaction.date.slice(0, 7);
      if (!groups[month]) groups[month] = [];
      groups[month].push(transaction);
      return groups;
    },
    {}
  );

  const formatMonth = (monthStr: string) => {
    const [year, month] = monthStr.split('-').map(Number);
    return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Transactions
        </Typography>

        <Paper sx={{ p: 3, mb: 4, bgcolor: 'rgba(25, 25, 25, 0.2)', color: 'rgba(255, 255, 255, 0.85)', borderRadius: 2 }} elevation={0}>
          <Grid container spacing={2} mb={2}>
            <Grid size={6}>
              <TextField
                label="Date"
                type="date"
                value={form.date}
                onChange={(e) => handleChange('date', e.target.value)}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
                sx={{
                  input: { color: 'white' },
                  label: { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(103, 58, 183, 1)' },
                  },
                }}
              />
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Type</InputLabel>
                <Select
                  value={form.type}
                  label="Type"
                  onChange={(e) => handleChange('type', e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 1)' },
                  }}
                >
                  <MenuItem value="revenu">Revenu</MenuItem>
                  <MenuItem value="dépense">Dépense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Catégorie</InputLabel>
                <Select
                  value={form.category}
                  label="Catégorie"
                  onChange={(e) => handleChange('category', e.target.value)}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 1)' },
                  }}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <TextField
                label="Montant (€)"
                type="number"
                value={form.amount}
                onChange={(e) => handleChange('amount', e.target.value === '' ? '' : Number(e.target.value))}
                fullWidth
                sx={{
                  input: { color: 'white' },
                  label: { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(103, 58, 183, 1)' },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid size={6}>
              <CustomButton fullWidth onClick={handleSubmit}>
                Ajouter la transaction
              </CustomButton>
            </Grid>
          </Grid>
        </Paper>

        {Object.keys(groupedTransactions).length === 0 ? (
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Aucune transaction enregistrée.
          </Typography>
        ) : (
          Object.entries(groupedTransactions).map(([month, txs]) => (
            <Box key={month} mb={3}>
              <Typography variant="h6" fontWeight="medium" mb={1} sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                {formatMonth(month)}
              </Typography>
              <Paper variant="outlined" sx={{ bgcolor: 'rgba(25, 25, 25, 0.2)', color: 'rgba(255, 255, 255, 0.85)', borderRadius: 2 }}>
                <List>
                  {txs.map(({ id, date, type, category, amount }) => (
                    <React.Fragment key={id}>
                      <ListItem>
                        <ListItemText
                          primary={`${type === 'revenu' ? '+' : '-'} ${amount.toFixed(2)} € — ${category}`}
                          secondary={date}
                          slotProps={{ primary: { sx: { color: 'white' } }, secondary: { sx: { color: 'rgba(255,255,255,0.7)' } } }}
                        />
                      </ListItem>
                      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
}
