'use client';

import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Stock } from '@/shared/types/type-bourse';
import { calculateTotalValue } from '@/core/domain/calculateTotalValue';
import PortfolioTypography from '@/components/PortfolioTypography/PortfolioTypography';

export default function StockLeftPanel({ stockData }: { stockData: Stock[] }) {
  const total: number = calculateTotalValue(stockData);

  useEffect(() => {
    if (total === 0) return;

    fetch('/api/sauvegarde/bourse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total }),
    });
  }, [total]);

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur du PEA" sx={{ height: '100%' }}>
          <PortfolioTypography>
            {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}€
          </PortfolioTypography>
        </CustomCard>
      </Grid>

      <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
        <CustomCard title="Répartition du PEA" sx={{ height: '100%' }}>
          <Box sx={{ height: '100%', mt: 4 }}>
            <PieChart
              data={stockData.map((stock) => ({
                label: stock.ticker,
                value: stock.price * stock.amount,
              }))}
            />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}
