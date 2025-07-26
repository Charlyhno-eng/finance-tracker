import { Box } from '@mui/material';
import AccountMobileCard from './_components/AccountMobileCard';
import AccountPageLayout from './_components/AccountPageLayout';
import { prismaCompteRepository } from '@/infrastructure/repositories/prisma-compte-repo';
import { getAllComptes } from '@/core/use-cases/compte';
import { Account } from '@/shared/types/types-compte';

export default async function AccountPage() {
  const comptes = await getAllComptes(prismaCompteRepository)();

  const accountData: Account[] = comptes.map((compte) => ({
    id: compte.id,
    ticker: compte.nom,
    amount: compte.montant,
  }));

  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <AccountMobileCard accountData={accountData} />
      <AccountPageLayout accountData={accountData} />
    </Box>
  );
}
