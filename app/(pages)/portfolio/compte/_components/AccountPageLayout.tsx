'use client';

import { Box, Grid } from '@mui/material';
import AccountRightPanel from './AccountRightPanel';
import AccountLeftPanel from './AccountLeftPanel';
import { Account } from '@/shared/types/types-compte';

export default function AccountPageLayout({ accountData }: { accountData: Account[] }) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <AccountLeftPanel accountData={accountData} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
          <AccountRightPanel accountData={accountData} />
        </Grid>
      </Grid>
    </Box>
  );
}
