import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransactionFromApi } from '@/shared/types/types-transaction';
import { formatMonth } from '@/shared/helpers';

type Props = {
  month: string;
  transactions: TransactionFromApi[];
  onDelete: (id: number) => void;
};

export default function TransactionGroup({ month, transactions, onDelete }: Props) {
  return (
    <Box mb={3}>
      <Typography variant="h6" fontWeight="medium" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 1 }}>
        {formatMonth(month)}
      </Typography>
      <Paper variant="outlined" sx={{ bgcolor: 'rgba(25, 25, 25, 0.2)', color: 'rgba(255, 255, 255, 0.85)', borderRadius: 2 }}>
        <List>
          {transactions.map(({ id, date, type, categorie, montant }) => (
            <React.Fragment key={id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)} sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={`${type === 'REVENU' ? '+' : '-'} ${montant.toFixed(2)} € — ${categorie?.nom ?? 'Catégorie inconnue'}`}
                  secondary={new Date(date).toLocaleDateString()}
                  slotProps={{ primary: { sx: { color: 'white' } }, secondary: { sx: { color: 'rgba(255,255,255,0.7)' } } }}
                />
              </ListItem>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
