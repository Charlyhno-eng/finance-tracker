import React from 'react';
import { Typography } from '@mui/material';
import { TransactionFromApi } from '@/shared/types/types-transaction';
import TransactionGroup from './TransactionGroup';

type Props = {
  groupedTransactions: Record<string, TransactionFromApi[]>;
  onDelete: (id: number) => void;
};

export default function TransactionList({ groupedTransactions, onDelete }: Props) {
  if (Object.keys(groupedTransactions).length === 0) {
    return <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Aucune transaction enregistrée.</Typography>;
  }

  return (
    <>
      {Object.entries(groupedTransactions).map(([month, txs]) => (
        <TransactionGroup key={month} month={month} transactions={txs} onDelete={onDelete} />
      ))}
    </>
  );
}
