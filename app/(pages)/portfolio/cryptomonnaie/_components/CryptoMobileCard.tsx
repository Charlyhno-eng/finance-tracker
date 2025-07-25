'use client';

import { Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { Props } from '../page';
import { calculateTotalValue } from '@/core/domain/finance/calculateTotalValue';

export default function CryptoMobileCard({ cryptoData }: Props) {
  const total: number = calculateTotalValue(cryptoData);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
      <CustomCard title="Valeur du wallet" sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 30, fontWeight: 'bold', color: '#7F00FF', letterSpacing: 1, fontFamily: "'Roboto', sans-serif" }}>
          {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'}
        </Typography>
      </CustomCard>

      <CustomCard title="Mon wallet">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Ticker</TableCell>
              <TableCell sx={{ color: '#fff' }}>Montant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoData.map((crypto, index) => {
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
                  <TableCell sx={{ color: '#fff' }}>{crypto.ticker}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    {montant.toFixed(2)} €
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CustomCard>
    </Box>
  );
}
