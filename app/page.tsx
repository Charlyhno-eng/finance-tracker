'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate, getLast12MonthsLabels } from '@/shared/helpers';
import ExpensesPolarChartContainer from '@/components/Charts/MainPage/ExpensesPolarChart/ExpensesPolarChartContainer';
import WealthEvolutionChart from '@/components/Charts/MainPage/WealthEvolutionChart/WealthEvolutionChart';

const compte = [ 15000, 16200, 17500, 18800, 20050, 21300, 22700, 23000, 24250, 25500, 26800, 28000];
const crypto = [ 52000, 48000, 39000, 34000, 39000, 47000, 50000, 52050, 49000, 51000, 48500, 50500];
const bourse = [ 19500, 19600, 19400, 19700, 19550, 19800, 19650, 19750, 19500, 19450, 19600, 19800];

export default function Home() {
  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      {/* Mobile : only total assets */}
      <Box sx={{ mt: 6, display: { xs: 'block', md: 'none' } }}>
        <CustomCard title="Patrimoine total" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">Total</Typography>
        </CustomCard>
        <CustomCard title="Comptes" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">Compte</Typography>
        </CustomCard>
        <CustomCard title="Cryptomonnaies" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">Crypto</Typography>
        </CustomCard>
        <CustomCard title="Actions" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">Bourse</Typography>
        </CustomCard>
      </Box>

      {/* Desktop (md+) : layout complet */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          {/* Left part */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
            <CustomCard title="Évolution du patrimoine" subtitle={`Mise à jour : ${formatDate(new Date())}`} sx={{ height: '100%' }}>
              <Grid container spacing={2} sx={{ my: 6,  }}>
                <Grid size={6}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL total mensuel :
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL comptes mensuel :
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL cryptomonnaie mensuel :
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL bourse mensuel :
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ height: "100%" }}>
                <WealthEvolutionChart
                  labels={getLast12MonthsLabels()}
                  values={{ Compte: compte, Cryptomonnaie: crypto, Bourse: bourse }}
                  visibleLines={['Total', 'Compte', 'Cryptomonnaie', 'Bourse']}
                />
              </Box>
            </CustomCard>
          </Grid>

          {/* Right part */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
            <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
              <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
                <CustomCard title="Patrimoine total" sx={{ height: '100%' }}>
                  <Typography variant="h6" fontWeight="medium">
                    test
                  </Typography>
                </CustomCard>
              </Grid>

              <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
                <CustomCard title="Les dépenses" sx={{ height: '100%' }}>
                  <Box sx={{ height: '100%' }}>
                    <ExpensesPolarChartContainer />
                  </Box>
                </CustomCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
