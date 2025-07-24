'use client';

import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate } from '@/utils/reusableFunctions';
import { Props, Stock } from '../page';

export default function StockMainChart({ stockData }: Props) {
  const today = formatDate(new Date());
  const [data, setData] = useState<Stock[]>(stockData);

  const handleChange = (index: number, field: keyof Stock, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    setData(updated);
  };

  const handleDelete = (index: number) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  const handleAdd = () => {
    setData([...data, { ticker: '-', price: 0, amount: 0 }]);
  };

  return (
    <CustomCard title="Mes actions" subtitle={`Mise à jour : ${today}`} sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Table size="small" sx={{ minWidth: 400, mt: 2 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Ticker</TableCell>
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
                  key={index}
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
                    <IconButton aria-label="delete" onClick={() => handleDelete(index)} size="small" sx={{ color: '#fff' }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={5} align="center">
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
