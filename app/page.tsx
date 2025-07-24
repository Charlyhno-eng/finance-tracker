'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate } from '@/utils/reusableFunctions';
import { getLast12MonthsLabels } from '@/utils/reusableFunctions';
import ExpensesPolarChart from '@/components/Charts/ExpensesPolarChart/ExpensesPolarChart';
import WealthEvolutionChart from '@/components/Charts/WealthEvolutionChart/WealthEvolutionChart';

const labels = getLast12MonthsLabels();

const compte = [
  15000, 16200, 17500, 18800, 20050, 21300,
  22700, 23000, 24250, 25500, 26800, 28000
];

const crypto = [
  52000, 48000, 39000, 34000, 39000, 47000,
  50000, 52050, 49000, 51000, 48500, 50500
];

const bourse = [
  19500, 19600, 19400, 19700, 19550, 19800,
  19650, 19750, 19500, 19450, 19600, 19800
];

export default function Home() {
  const today = formatDate(new Date());

  return (
    <Box sx={{ p: 2 }}>
      {/* Only show this card on xs, centered */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Grid size={12} sx={{ maxWidth: 360 }}>
          <CustomCard title="Patrimoine total">
            <Typography variant="h6" fontWeight="medium" align="center">
              test
            </Typography>
          </CustomCard>
        </Grid>
      </Box>

      {/* Show the full layout only on md+ */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={2}>
          {/* Left column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <CustomCard title="Évolution du patrimoine" subtitle={`Mise à jour : ${today}`}>
              <Box sx={{ height: "100%" }}>
                <WealthEvolutionChart
                  labels={labels}
                  values={{ Compte: compte, Cryptomonnaie: crypto, Bourse: bourse }}
                  visibleLines={['Total', 'Compte', 'Cryptomonnaie', 'Bourse']}
                />
              </Box>
            </CustomCard>
          </Grid>

          {/* Right column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={2} direction="column">
              <Grid size={12}>
                <CustomCard title="Patrimoine total">
                  <Typography variant="h6" fontWeight="medium">test</Typography>
                </CustomCard>
              </Grid>

              <Grid size={12}>
                <CustomCard title="Les dépenses">
                  <Box sx={{ height: "80%" }}>
                    <ExpensesPolarChart />
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
