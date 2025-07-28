import { Box } from '@mui/material';
import StockMobileCard from './_components/StockMobileCard';
import StockPageLayout from './_components/StockPageLayout';
import { prismaActionRepository } from '@/infrastructure/repositories/prisma-action-repo';
import { getAllActions } from '@/core/use-cases/action';
import { getStockQuote } from '@/core/services/stock-service';
import { Stock } from '@/shared/types/type-bourse';

export default async function StockPage() {
  const fetchActions = getAllActions(prismaActionRepository);
  const actions = await fetchActions();

  const stockData: Stock[] = await Promise.all(
    actions.map(async (action) => {
      try {
        const quote = await getStockQuote(action.nom);
        return {
          id: action.id,
          ticker: action.ticker,
          nom: action.nom,
          price: quote.price,
          amount: action.quantite,
        };
      } catch (err) {
        console.error(`Erreur Yahoo pour ${action.nom} :`, err);
        return {
          id: action.id,
          ticker: action.ticker,
          nom: action.nom,
          price: 0,
          amount: action.quantite,
        };
      }
    })
  );

  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <StockMobileCard stockData={stockData} />
      <StockPageLayout stockData={stockData} />
    </Box>
  );
}
