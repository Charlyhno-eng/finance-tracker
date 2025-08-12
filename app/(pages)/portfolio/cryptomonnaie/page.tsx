import { Box } from '@mui/material';
import CryptoMobileCard from './_components/CryptoMobileCard';
import CryptoPageLayout from './_components/CryptoPageLayout';
import { getAllCryptosWithPrice } from '@/core/services/crypto-service';

export default async function CryptoPage() {
  const cryptoData = await getAllCryptosWithPrice();

  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <CryptoMobileCard cryptoData={cryptoData} />
      <CryptoPageLayout cryptoData={cryptoData} />
    </Box>
  );
}
