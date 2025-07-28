'use client';

import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Select, MenuItem, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate } from '@/shared/helpers';
import { CryptoWithPrice } from '@/shared/types/type-crypto';

export default function CryptoMainChart({ cryptoData }: { cryptoData: CryptoWithPrice[] }) {
  const today = formatDate(new Date());
  const [data, setData] = useState<CryptoWithPrice[]>(cryptoData);

  const handleChange = ( index: number, field: keyof CryptoWithPrice, value: string | number | boolean) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    setData(updated);
  };

  const handleDelete = async (index: number) => {
    const cryptoId = data[index].id;
    try {
      const res = await fetch(`/api/crypto/${cryptoId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Échec de la suppression');
      setData(current => current.filter((_, i) => i !== index));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleAdd = async () => {
    const newCrypto = { ticker: 'USDC', nom: 'usd-coin', quantite: 1, stacking: false };
    try {
      const response = await fetch('/api/crypto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCrypto),
      });

      const addedCrypto = await response.json();
      const usdcPrice = 0.86;
      setData([...data, { ...addedCrypto, price: usdcPrice, amount: 1 }]);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleUpdate = async (index: number) => {
    const crypto = data[index];
    const updatedCrypto = {
      nom: crypto.nom,
      ticker: crypto.ticker,
      quantite: crypto.amount,
      stacking: crypto.stacking,
    };

    try {
      const res = await fetch(`/api/crypto/${crypto.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCrypto),
      });

      if (!res.ok) throw new Error('Erreur lors de la mise à jour');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <CustomCard title="Mes cryptomonnaies" subtitle={`Mise à jour : ${today}`} sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Table size="small" sx={{ minWidth: 500, mt: 2 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff', width: 80 }}>Ticker</TableCell>
              <TableCell sx={{ color: '#fff' }}>ID Coingecko</TableCell>
              <TableCell sx={{ color: '#fff' }}>Montant</TableCell>
              <TableCell sx={{ color: '#fff' }}>Prix</TableCell>
              <TableCell sx={{ color: '#fff', width: 100 }}>Quantité</TableCell>
              <TableCell sx={{ color: '#fff' }}>Stacké</TableCell>
              <TableCell sx={{ color: '#fff', width: 80 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((crypto, index) => {
              const montant = crypto.price * crypto.amount;
              return (
                <TableRow
                  key={crypto.id}
                  sx={{
                    bgcolor: 'rgba(103, 58, 183, 0.03)',
                    border: crypto.stacking ? '2px solid #7F00FF' : '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': { bgcolor: 'rgba(103, 58, 183, 0.07)' }
                  }}
                >
                  <TableCell sx={{ color: '#fff' }}>
                    <TextField
                      variant="standard"
                      value={crypto.ticker}
                      onChange={(e) => handleChange(index, 'ticker', e.target.value)}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{crypto.nom}</Typography>
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{montant.toFixed(2)} €</Typography>
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>
                      {typeof crypto.price === 'number' ? crypto.price.toFixed(4) : '—'}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    <TextField
                      type="number"
                      variant="standard"
                      value={crypto.amount}
                      onChange={(e) => handleChange(index, 'amount', parseFloat(e.target.value))}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    <Select
                      variant="standard"
                      value={crypto.stacking ? 'oui' : 'non'}
                      onChange={(e) => handleChange(index, 'stacking', e.target.value === 'oui')}
                      disableUnderline
                      sx={{ color: '#fff', bgcolor: 'transparent', '& .MuiSelect-icon': { color: '#fff' } }}
                    >
                      <MenuItem value="oui">Oui</MenuItem>
                      <MenuItem value="non">Non</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell sx={{ color: '#fff', width: 80 }}>
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
              <TableCell colSpan={7} align="center">
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
