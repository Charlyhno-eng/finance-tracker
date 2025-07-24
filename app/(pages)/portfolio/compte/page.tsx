import { Box } from '@mui/material';
import AccountMobileCard from './_components/AccountMobileCard';
import AccountPageLayout from './_components/AccountPageLayout';

export type Account = {
  ticker: string;
  amount: number;
};

export type Props = {
  accountData: Account[];
};

const accountData: Account[] = [
  { ticker: 'Compte courant BP', amount: 1339.98 },
  { ticker: 'Livret A BP', amount: 13500 },
  { ticker: 'Livret jeune BP', amount: 1753.45 },
  { ticker: 'Compte courant Bourso', amount: 7496.59 },
];

export default function AccountPage() {
  return (
    <Box sx={{ p: 2, height: '93vh' }}>
      <AccountMobileCard accountData={accountData} />
      <AccountPageLayout accountData={accountData} />
    </Box>
  );
}
