'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';

export default function ManagingPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <CustomCard title="Services crypto" subtitle="API coingecko">
            <Typography sx={{ color: '#ccc' }}>
              Ici, tu peux gérer les préférences générales, les devises, ou encore les paramètres de langue.
            </Typography>
          </CustomCard>
        </Grid>

        <Grid size={12}>
          <CustomCard title="Services bourses" subtitle="API Yahoo Finance">
            <Typography sx={{ color: '#ccc', mb: 1 }}>
              Pour obtenir l'identifiant d'une action ou d'un ETF, il suffit de faire une recherche sur le site Yahoo Finance.
              Une fois sur la page du titre, l'identifiant se trouve dans l'URL après <code>/quote/</code>.
            </Typography>
            <Typography sx={{ color: '#ccc' }}>
              Exemple : <br />
              URL :{' '}
              <a
                href="https://fr.finance.yahoo.com/quote/MC.PA/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7F00FF', textDecoration: 'underline' }}
              >
                https://fr.finance.yahoo.com/quote/MC.PA/
              </a>{' '}
              → identifiant : <strong>MC.PA</strong> correspond à l'action LVMH
            </Typography>
          </CustomCard>
        </Grid>

      </Grid>
    </Box>
  );
}
