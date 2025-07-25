'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Props } from '../page';
import { calculateTotalAmount } from '@/core/domain/finance/calculateTotalAmount';

export default function AccountLeftPanel({ accountData }: Props) {
  const total: number = calculateTotalAmount(accountData);

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur des comptes" sx={{ height: '100%' }}>
          <Typography sx={{ fontSize: 36, fontWeight: 'bold', color: '#7F00FF' }}>
            {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}€
          </Typography>
        </CustomCard>
      </Grid>

      <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
        <CustomCard title="Répartition des comptes" sx={{ height: '100%' }}>
          <Box sx={{ height: '100%', mt: 4 }}>
            <PieChart data={accountData.map((account) => ({ label: account.ticker, value: account.amount }))} />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}
