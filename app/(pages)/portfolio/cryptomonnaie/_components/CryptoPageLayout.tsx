'use client';

import { Box, Grid } from '@mui/material';
import CryptoRightPanel from './CryptoRightPanel';
import CryptoLeftPanel from './CryptoLeftPanel';
import { Props } from '../page';

export default function CryptoPageLayout({ cryptoData }: Props) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <CryptoLeftPanel cryptoData={cryptoData} />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
          <CryptoRightPanel cryptoData={cryptoData} />
        </Grid>
      </Grid>
    </Box>
  );
}
