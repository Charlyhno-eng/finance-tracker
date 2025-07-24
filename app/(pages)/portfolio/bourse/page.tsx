import { Box } from '@mui/material';
import StockMobileCard from './_components/StockMobileCard';
import StockPageLayout from './_components/StockPageLayout';

export type Stock = {
  ticker: string;
  price: number;
  amount: number;
};

export type Props = {
  stockData: Stock[];
};

const stockData: Stock[] = [
  { ticker: 'ASML', price: 615.9, amount: 5 },
  { ticker: 'SP500', price: 27.23, amount: 89 },
  { ticker: 'HERMES', price: 2347.00, amount: 1 },
  { ticker: 'ETF LEV USA', price: 21.66, amount: 100 },
  { ticker: 'LVMH', price: 470.25, amount: 4 },
  { ticker: 'AIR LIQUIDE', price: 172.9, amount: 10 },
  { ticker: 'GTT', price: 159.4, amount: 8 },
  { ticker: "L'OREAL", price: 373.65, amount: 3 },
  { ticker: 'CAPGEMINI', price: 189.25, amount: 6 },
  { ticker: 'DASSAULT SYSTEMES', price: 29.31, amount: 27 },
  { ticker: 'SCHNEIDER ELETRIC', price: 238.9, amount: 3 },
  { ticker: 'STMICROELECTRONICS', price: 22.5, amount: 20 },
  { ticker: 'INTERPARFUMS', price: 31.92, amount: 12 },
];

export default function StockPage() {
  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <StockMobileCard stockData={stockData} />
      <StockPageLayout stockData={stockData} />
    </Box>
  );
}
