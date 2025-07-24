'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Props } from '../page';

export default function AccountLeftPanel({ accountData }: Props) {
  const totalInEur = accountData.reduce(
    (acc, account) => acc + account.amount, 0
  );

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur des comptes" sx={{ height: '100%' }}>
          <Typography sx={{ fontSize: 36, fontWeight: 'bold', color: '#7F00FF' }}>
            {totalInEur.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}€
          </Typography>
        </CustomCard>
      </Grid>

      <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
        <CustomCard title="Répartition des comptes" sx={{ height: '100%' }}>
          <Box sx={{ height: '100%', mt: 4 }}>
            <PieChart
              data={accountData.map((account) => ({
                label: account.ticker,
                value: account.amount,
              }))}
            />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}
