'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Props } from '../page';
import { useUsdToEurConversion } from '@/hooks/useUsdToEurConversion';

export default function CryptoLeftPanel({ cryptoData }: Props) {
  const { conversionRate, error, loading } = useUsdToEurConversion();

  const totalInUsd = cryptoData.reduce(
    (acc, crypto) => acc + crypto.price * crypto.amount, 0
  );

  const totalInEur = conversionRate !== null ? totalInUsd * conversionRate : null;

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur du wallet" sx={{ height: '100%' }}>
          {loading ? (
            <Typography sx={{ fontSize: 30, fontWeight: 'bold', color: '#7F00FF' }}>
              Loading...
            </Typography>
          ) : error ? (
            <>
              <Typography sx={{ fontSize: 36, fontWeight: 'bold', color: '#7F00FF' }}>
                {totalInEur !== null ? totalInEur.toLocaleString('fr-FR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €' : '-'}
              </Typography>
              <Typography variant="caption" color="error">
                {error}
              </Typography>
            </>
          ) : (
            <Typography sx={{ fontSize: 36, fontWeight: 'bold', color: '#7F00FF' }}>
              {totalInEur !== null ? totalInEur.toLocaleString('fr-FR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €' : '-'}
            </Typography>
          )}
        </CustomCard>
      </Grid>

      <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
        <CustomCard title="Répartition du wallet" sx={{ height: '100%' }}>
          <Box sx={{ height: '100%', mt: 4 }}>
            <PieChart data={cryptoData.map((crypto) => ({ label: crypto.ticker, value: crypto.price * crypto.amount }))} />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}
