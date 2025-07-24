import { Box } from '@mui/material';
import CryptoMobileCard from './_components/CryptoMobileCard';
import CryptoPageLayout from './_components/CryptoPageLayout';

export type Crypto = {
  ticker: string;
  price: number;
  amount: number;
  staked: boolean;
};

export type Props = {
  cryptoData: Crypto[];
};

const cryptoData: Crypto[] = [
  { ticker: 'ENA', price: 0.4655, amount: 12413, staked: true },
  { ticker: 'EIGEN', price: 1.29, amount: 2000, staked: false },
  { ticker: 'JUP', price: 0.5369, amount: 4257, staked: true },
  { ticker: 'MORPHO', price: 1.86, amount: 1203, staked: false },
  { ticker: 'RSR', price: 0.008493, amount: 250000, staked: false },
  { ticker: 'KMNO', price: 0.05589, amount: 12346, staked: false },
];

export default function Home() {
  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <CryptoMobileCard cryptoData={cryptoData} />
      <CryptoPageLayout cryptoData={cryptoData} />
    </Box>
  );
}
