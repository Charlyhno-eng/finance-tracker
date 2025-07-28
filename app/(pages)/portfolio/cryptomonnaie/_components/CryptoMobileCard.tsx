'use client';

import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import { calculateTotalValue } from '@/core/domain/calculateTotalValue';
import PortfolioTypography from '@/components/PortfolioTypography/PortfolioTypography';
import { CryptoWithPrice } from '@/shared/types/type-crypto';

export default function CryptoMobileCard({ cryptoData }: { cryptoData: CryptoWithPrice[] }) {
  const total: number = calculateTotalValue(cryptoData);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 4 }}>
      <CustomCard title="Valeur du wallet" sx={{ mb: 2 }}>
        <PortfolioTypography>
          {total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'}
        </PortfolioTypography>
      </CustomCard>

      <CustomCard title="Mon wallet">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(103, 58, 183, 0.05)' }}>
              <TableCell sx={{ color: '#fff' }}>Ticker</TableCell>
              <TableCell sx={{ color: '#fff' }}>Montant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoData.map((crypto, index) => {
              const montant = crypto.price * crypto.amount;
              return (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(103, 58, 183, 0.03)',
                    border: crypto.stacking ? '2px solid #7F00FF' : '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(103, 58, 183, 0.07)' },
                  }}
                >
                  <TableCell sx={{ color: '#fff' }}>{crypto.ticker}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>
                    {montant.toFixed(2)} €
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CustomCard>
    </Box>
  );
}
