'use client';

import { Box, Grid } from '@mui/material';
import CryptoRightPanel from './CryptoRightPanel';
import CryptoLeftPanel from './CryptoLeftPanel';
import { CryptoWithPrice } from '@/shared/types/type-crypto';

export default function CryptoPageLayout({ cryptoData }: { cryptoData: CryptoWithPrice[] }) {
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
