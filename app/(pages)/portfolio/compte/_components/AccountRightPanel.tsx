'use client';

import { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { Account } from '@/shared/types/types-compte';

export default function AccountRightPanel({ accountData }: { accountData: Account[] }) {
  const [data, setData] = useState<Account[]>(accountData);

  const handleChange = async (index: number, field: keyof Account, value: string | number) => {
    const updated = [...data];
    let parsedValue: string | number = value;

    if (field === 'amount') {
      parsedValue = Number(value);
      if (isNaN(parsedValue)) return;
    }

    const updatedAccount = { ...updated[index], [field]: parsedValue };
    updated[index] = updatedAccount;
    setData(updated);

    try {
      await fetch(`/api/compte/${updatedAccount.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticker: updatedAccount.ticker,
          montant: updatedAccount.amount,
        }),
      });
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <CustomCard title="Mes comptes & livrets" sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', overflowY: 'auto' }}>
        <Table size="small" sx={{ minWidth: 400, mt: 2 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Nom</TableCell>
              <TableCell sx={{ color: '#fff' }}>Montant (en €)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((account, index) => (
              <TableRow
                key={account.id}
                sx={{
                  bgcolor: 'rgba(103, 58, 183, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: 'rgba(103, 58, 183, 0.07)' },
                }}
              >
                <TableCell sx={{ color: '#fff' }}>
                  <TextField
                    variant="standard"
                    value={account.ticker}
                    onChange={(e) => handleChange(index, 'ticker', e.target.value)}
                    slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#fff' }}>
                  <TextField
                    variant="standard"
                    type="number"
                    value={account.amount}
                    onChange={(e) => handleChange(index, 'amount', e.target.value)}
                    slotProps={{ input: { disableUnderline: true, sx: { color: '#fff' } } }}
                    sx={{ width: '100%' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </CustomCard>
  );
}
