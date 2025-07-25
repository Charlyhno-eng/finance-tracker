'use client';

import { Box, Grid, Typography } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';

export default function ManagingPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#fff', mb: 4 }}>
        Gestion
      </Typography>

      <Grid container spacing={4}>
        <Grid size={12}>
          <CustomCard title="Paramètres globaux" subtitle="Configurer les paramètres de l'application">
            <Typography sx={{ color: '#ccc' }}>
              Ici, tu peux gérer les préférences générales, les devises, ou encore les paramètres de langue.
            </Typography>
          </CustomCard>
        </Grid>

        <Grid size={12}>
          <CustomCard title="Services externes" subtitle="API, clés et intégrations">
            <Typography sx={{ color: '#ccc' }}>
              Gère ici les clés d’API, la connexion à des services comme CoinGecko ou tout autre fournisseur de données financières.
            </Typography>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}
