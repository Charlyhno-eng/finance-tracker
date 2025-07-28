'use client';

import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { calculateTotalValue } from '@/core/domain/calculateTotalValue';
import PortfolioTypography from '@/components/PortfolioTypography/PortfolioTypography';
import { CryptoWithPrice } from '@/shared/types/type-crypto';

export default function CryptoLeftPanel({ cryptoData }: { cryptoData: CryptoWithPrice[] }) {
  const total: number = calculateTotalValue(cryptoData);

  useEffect(() => {
    if (total === 0) return;

    fetch('/api/sauvegarde/crypto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total }),
    });
  }, [total]);

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur du wallet" sx={{ height: '100%' }}>
          <PortfolioTypography>
            {total.toLocaleString('fr-FR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) + ' €'}
          </PortfolioTypography>
        </CustomCard>
      </Grid>

      <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
        <CustomCard title="Répartition du wallet" sx={{ height: '100%' }}>
          <Box sx={{ height: '100%', mt: 4 }}>
            <PieChart
              data={cryptoData.map((crypto) => ({
                label: crypto.ticker,
                value: crypto.price * crypto.amount,
              }))}
            />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}
