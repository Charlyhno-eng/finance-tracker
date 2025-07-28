'use client';

import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import PieChart from '@/components/Charts/PieChart/PieChart';
import { Account } from '@/shared/types/types-compte';
import { calculateTotalAmount } from '@/core/domain/calculateTotalAmount';
import PortfolioTypography from '@/components/PortfolioTypography/PortfolioTypography';

export default function AccountLeftPanel({ accountData }: { accountData: Account[] }) {
  const total = calculateTotalAmount(accountData);

  useEffect(() => {
    if (total === 0) return;

    fetch('/api/sauvegarde/compte', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total }),
    });
  }, [total]);

  return (
    <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
      <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
        <CustomCard title="Valeur des comptes" sx={{ height: '100%' }}>
          <PortfolioTypography>
            {total.toLocaleString('fr-FR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} €
          </PortfolioTypography>
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
