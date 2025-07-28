import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { formatDate, getLast12MonthsLabels, formatPct, reverseAllSeries } from '@/shared/helpers';
import ExpensesPolarChartContainer from '@/components/Charts/MainPage/ExpensesPolarChart/ExpensesPolarChartContainer';
import WealthChartContainer from '@/components/Charts/MainPage/WealthEvolutionChart/WealthEvolutionChartContainer';
import { prismaSauvegardeRepository } from '@/infrastructure/repositories/prisma-sauvegarde-repo';
import { getExpensesChartData } from '@/core/services/expenses-service';
import { calculateMonthlyPnL } from '@/core/domain/calculateMonthlyPnL';
import { calculateTotalChrono } from '@/core/domain/calculateTotalChrono';
import PortfolioTypography from '@/components/PortfolioTypography/PortfolioTypography';

export default async function Home() {
  const sauvegardes = await prismaSauvegardeRepository.find12LastMonths();
  const labels = getLast12MonthsLabels();

  const { labels: expenseLabels, data: expenseData } = await getExpensesChartData();

  const values = {
    compte: sauvegardes.map(s => s.totalCompte),
    crypto: sauvegardes.map(s => s.totalCrypto),
    bourse: sauvegardes.map(s => s.totalBourse),
  };

  const valuesChrono = reverseAllSeries(values);
  const totalChrono = calculateTotalChrono(valuesChrono.compte, valuesChrono.crypto, valuesChrono.bourse);

  const pnl = {
    total: calculateMonthlyPnL(totalChrono),
    compte: calculateMonthlyPnL(valuesChrono.compte),
    crypto: calculateMonthlyPnL(valuesChrono.crypto),
    bourse: calculateMonthlyPnL(valuesChrono.bourse),
  };

  const lastMonthTotal =
    valuesChrono.compte[valuesChrono.compte.length - 1] +
    valuesChrono.crypto[valuesChrono.crypto.length - 1] +
    valuesChrono.bourse[valuesChrono.bourse.length - 1];

  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      {/* Mobile : only total assets */}
      <Box sx={{ mt: 6, display: { xs: 'block', md: 'none' } }}>
        <CustomCard title="Patrimoine total" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            {lastMonthTotal.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </Typography>
        </CustomCard>
        <CustomCard title="Comptes" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            {valuesChrono.compte[valuesChrono.compte.length - 1].toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </Typography>
        </CustomCard>
        <CustomCard title="Cryptomonnaies" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            {valuesChrono.crypto[valuesChrono.crypto.length - 1].toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </Typography>
        </CustomCard>
        <CustomCard title="Actions" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            {valuesChrono.bourse[valuesChrono.bourse.length - 1].toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </Typography>
        </CustomCard>
      </Box>

      {/* Desktop (md+) : layout complet */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          {/* Left part */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
            <CustomCard title="Évolution du patrimoine" subtitle={`${formatDate(new Date())}`} sx={{ height: '100%' }}>
              <Grid container spacing={2} sx={{ my: 6 }}>
                <Grid size={6}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL total mensuel : {pnl.total.length > 0 ? formatPct(pnl.total[pnl.total.length - 1]) : 'N/A'}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL comptes mensuel : {pnl.compte.length > 0 ? formatPct(pnl.compte[pnl.compte.length - 1]) : 'N/A'}
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL cryptomonnaie mensuel : {pnl.crypto.length > 0 ? formatPct(pnl.crypto[pnl.crypto.length - 1]) : 'N/A'}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    PnL bourse mensuel : {pnl.bourse.length > 0 ? formatPct(pnl.bourse[pnl.bourse.length - 1]) : 'N/A'}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ height: '100%' }}>
                <WealthChartContainer
                  labels={labels}
                  values={{ Compte: valuesChrono.compte, Cryptomonnaie: valuesChrono.crypto, Bourse: valuesChrono.bourse }}
                />
              </Box>
            </CustomCard>
          </Grid>

          {/* Right part */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
            <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
              <Grid size={12} sx={{ height: 'calc(25% - 8px)' }}>
                <CustomCard title="Patrimoine total" sx={{ height: '100%' }}>
                  <PortfolioTypography>
                    {lastMonthTotal.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </PortfolioTypography>
                </CustomCard>
              </Grid>
              <Grid size={12} sx={{ height: 'calc(75% - 8px)' }}>
                <CustomCard title="Les dépenses" sx={{ height: '100%' }}>
                  <Box sx={{ height: '100%' }}>
                    <ExpensesPolarChartContainer labels={expenseLabels} data={expenseData} />
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
