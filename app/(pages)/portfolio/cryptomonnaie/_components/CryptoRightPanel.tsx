'use client';

import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Select, MenuItem, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate } from '@/utils/reusableFunctions';
import { Props, Crypto } from '../page';

export default function CryptoMainChart({ cryptoData }: Props) {
  const today = formatDate(new Date());
  const [data, setData] = useState<Crypto[]>(cryptoData);

  const handleChange = (index: number, field: keyof Crypto, value: string | number | boolean) => {
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
    setData([...data, { ticker: '-', price: 0, amount: 0, staked: false }]);
  };

  return (
    <CustomCard title="Mes cryptomonnaies" subtitle={`Mise à jour : ${today}`} sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Table size="small" sx={{ minWidth: 400, mt: 2 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Ticker</TableCell><TableCell sx={{ color: '#fff' }}>Montant</TableCell><TableCell sx={{ color: '#fff' }}>Prix</TableCell><TableCell sx={{ color: '#fff' }}>Quantité</TableCell><TableCell sx={{ color: '#fff' }}>Stacké</TableCell><TableCell sx={{ color: '#fff', width: 48 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((crypto, index) => {
              const montant = crypto.price * crypto.amount;
              return (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(103, 58, 183, 0.03)',
                    border: crypto.staked ? '2px solid #7F00FF' : '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(103, 58, 183, 0.07)' },
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
                  </TableCell><TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{montant.toFixed(2)} $</Typography>
                  </TableCell><TableCell sx={{ color: '#fff' }}>
                    <Typography sx={{ color: '#fff' }}>{crypto.price.toFixed(2)} $</Typography>
                  </TableCell><TableCell sx={{ color: '#fff' }}>
                    <TextField
                      type="number"
                      variant="standard"
                      value={crypto.amount}
                      onChange={(e) => handleChange(index, 'amount', parseFloat(e.target.value))}
                      slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                      sx={{ width: '100%' }}
                    />
                  </TableCell><TableCell sx={{ color: '#fff' }}>
                    <Select
                      variant="standard"
                      value={crypto.staked ? 'oui' : 'non'}
                      onChange={(e) => handleChange(index, 'staked', e.target.value === 'oui')}
                      disableUnderline
                      sx={{ color: '#fff', backgroundColor: 'transparent', '& .MuiSelect-icon': { color: '#fff' } }}
                    >
                      <MenuItem value="oui">Oui</MenuItem>
                      <MenuItem value="non">Non</MenuItem>
                    </Select>
                  </TableCell><TableCell sx={{ color: '#fff', width: 48 }}>
                    <IconButton aria-label="delete" onClick={() => handleDelete(index)} size="small" sx={{ color: '#fff' }}>
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
