'use client';

import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate } from '@/shared/helpers';
import { Stock } from '@/shared/types/type-bourse';

export default function StockRightPanel({ stockData }: { stockData: Stock[] }) {
  const today = formatDate(new Date());
  const [data, setData] = useState<Stock[]>(stockData);

  const handleChange = (index: number, field: keyof Stock, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    setData(updated);
  };

  const handleUpdate = async (index: number) => {
    const stock = data[index];
    const updatedAction = {
      ticker: stock.ticker,
      nom: stock.nom,
      quantite: stock.amount,
    };

    try {
      const res = await fetch(`/api/bourse/${stock.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAction),
      });

      if (!res.ok) throw new Error('Erreur lors de la mise à jour');
      window.location.reload();
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleDelete = async (index: number) => {
    const stockId = data[index].id;
    try {
      const res = await fetch(`/api/bourse/${stockId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Échec de la suppression');
      setData((current) => current.filter((_, i) => i !== index));
      window.location.reload();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleAdd = async () => {
    const newAction = { ticker: 'TESLA', nom: 'TSLA', quantite: 1 };
    try {
      const response = await fetch('/api/bourse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAction),
      });

      const added = await response.json();
      const defaultPrice = 1;
      setData([...data, { ...added, price: defaultPrice, amount: 1 }]);
      window.location.reload();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <CustomCard title="Mes actions" subtitle={`Mise à jour : ${today}`} sx={{ height: '100%' }}>
      <Box sx={{ height: 750, overflowY: 'auto' }}>
        <Table size="small" sx={{ minWidth: 600, mt: 2 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Ticker</TableCell>
              <TableCell sx={{ color: '#fff' }}>ID Yahoo finance</TableCell>
              <TableCell sx={{ color: '#fff' }}>Montant</TableCell>
              <TableCell sx={{ color: '#fff' }}>Prix</TableCell>
              <TableCell sx={{ color: '#fff' }}>Quantité</TableCell>
              <TableCell sx={{ color: '#fff', width: 48 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((stock, index) => {
              const montant = stock.price * stock.amount;
              return (
                <TableRow
                  key={stock.id}
                  sx={{
                    bgcolor: 'rgba(103, 58, 183, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': { bgcolor: 'rgba(103, 58, 183, 0.07)' },
                  }}
                >
                  <TableCell sx={{ color: '#fff' }}>
                    <TextField
                      variant="standard"
                      value={stock.ticker}
                      onChange={(e) => handleChange(index, 'ticker', e.target.value)}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell>

                  <TableCell sx={{ color: '#fff' }}>
                    <TextField
                      variant="standard"
                      value={stock.nom}
                      onChange={(e) => handleChange(index, 'nom', e.target.value)}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell>

                  <TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{montant.toFixed(2)} €</Typography>
                  </TableCell>

                  <TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{stock.price.toFixed(2)} €</Typography>
                  </TableCell>

                  <TableCell sx={{ color: '#fff' }}>
                    <TextField
                      type="number"
                      variant="standard"
                      value={stock.amount}
                      onChange={(e) => handleChange(index, 'amount', parseFloat(e.target.value))}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell>

                  <TableCell sx={{ color: '#fff', width: 48 }}>
                    <IconButton
                      aria-label="save"
                      onClick={() => handleUpdate(index)}
                      size="small"
                      sx={{ color: '#00e676' }}
                    >
                      <SaveIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(index)}
                      size="small"
                      sx={{ color: '#fff' }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={6} align="center">
                <IconButton aria-label="add" onClick={handleAdd} sx={{ color: '#7F00FF' }}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </CustomCard>
  );
}
