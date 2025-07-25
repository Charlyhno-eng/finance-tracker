'use client';

import { Box, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { Props } from '../page';
import { calculateTotalValue } from '@/core/domain/finance/calculateTotalValue';

export default function StockMobileCard({ stockData }: Props) {
  const total: number = calculateTotalValue(stockData);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
      <CustomCard title="Valeur du PEA" sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 30, fontWeight: 'bold', color: '#7F00FF' }}>
          {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}€
        </Typography>
      </CustomCard>

      <CustomCard title="Mon PEA">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {stockData.map((stock, index) => {
            const montant = stock.price * stock.amount;
            return (
              <Box
                key={index}
                sx={{ bgcolor: 'rgba(103, 58, 183, 0.03)', p: '8px 12px', borderRadius: 1, border: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 500 }}>
                  {stock.ticker}
                </Typography>
                <Typography sx={{ color: '#bbb', fontSize: 14 }}>
                  {montant.toFixed(2)} €
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CustomCard>
    </Box>
  );
}
