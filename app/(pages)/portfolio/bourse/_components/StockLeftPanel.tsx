'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Props } from '../page';
import { calculateTotalValue } from '@/core/domain/finance/calculateTotalValue';

export default function StockLeftPanel({ stockData }: Props) {
  const total: number = calculateTotalValue(stockData);

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur du PEA" sx={{ height: '100%' }}>
          <Typography sx={{ fontSize: 36, fontWeight: 'bold', color: '#7F00FF', letterSpacing: 1 }}>
            {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}€
          </Typography>
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
