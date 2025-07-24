'use client';

import { Box, Grid } from '@mui/material';
import StockRightPanel from './StockRightPanel';
import StockLeftPanel from './StockLeftPanel';
import { Props } from '../page';

export default function StockPageLayout({ stockData }: Props) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <StockLeftPanel stockData={stockData} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
          <StockRightPanel stockData={stockData} />
        </Grid>
      </Grid>
    </Box>
  );
}
