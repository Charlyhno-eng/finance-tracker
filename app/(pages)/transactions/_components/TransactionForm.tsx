import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import CustomButton from '@/components/CustomButton/CustomButton';
import { FormState, Category } from '@/shared/types/types-transaction';
import { TypeTransaction } from '@/infrastructure/repositories/client';

type Props = {
  form: FormState;
  categories: Category[];
  onChange: <K extends keyof FormState>(field: K, value: FormState[K]) => void;
  onSubmit: () => void;
};

export default function TransactionForm({ form, categories, onChange, onSubmit }: Props) {
  return (
    <>
      <Grid container spacing={2} mb={2}>
        <Grid size={6}>
          <TextField
            label="Date"
            type="date"
            value={form.date}
            onChange={(e) => onChange('date', e.target.value)}
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
              onChange={(e) => onChange('type', e.target.value as TypeTransaction)}
              sx={{
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 1)' },
              }}
            >
              <MenuItem value={TypeTransaction.REVENU}>Revenu</MenuItem>
              <MenuItem value={TypeTransaction.DEPENSE}>Dépense</MenuItem>
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
              onChange={(e) => onChange('category', e.target.value)}
              sx={{
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(103, 58, 183, 1)' },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>{cat.nom}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <TextField
            label="Montant (€)"
            type="number"
            value={form.amount}
            onChange={(e) => onChange('amount', e.target.value === '' ? '' : Number(e.target.value))}
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
          <CustomButton fullWidth onClick={onSubmit}>Ajouter la transaction</CustomButton>
        </Grid>
      </Grid>
    </>
  );
}
