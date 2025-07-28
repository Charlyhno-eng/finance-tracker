'use client';

import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, List, ListItem, ListItemText, Paper } from '@mui/material';
import CustomCard from '@/components/CustomCard/CustomCard';
import CustomButton from '@/components/CustomButton/CustomButton';
import { CoinListItem } from '@/shared/types/type-gestion';
import { searchCoinBySymbol } from '@/core/services/coingecko-service';

export default function ManagingPage() {
  const [ticker, setTicker] = useState('');
  const [results, setResults] = useState<CoinListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!ticker.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const filtered = await searchCoinBySymbol(ticker);
      setResults(filtered);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* === Services Crypto === */}
        <Grid size={12}>
          <CustomCard title="Services crypto" subtitle="API coingecko">
            <Paper sx={{ bgcolor: 'rgba(25, 25, 25, 0.2)', color: 'rgba(255, 255, 255, 0.85)'}} elevation={0}>
              <Typography sx={{ mb: 2 }}>
                Recherche d'une cryptomonnaie via son ticker (ex: <code>btc</code>, <code>eth</code>, <code>jup</code>)
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
                <TextField
                  label="Ticker"
                  variant="outlined"
                  size='small'
                  value={ticker}
                  onChange={(e) => setTicker(e.target.value)}
                  sx={{
                    input: { color: 'white' },
                    label: { color: 'rgba(255,255,255,0.7)' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: 'rgba(103, 58, 183, 0.7)' },
                      '&.Mui-focused fieldset': { borderColor: 'rgba(103, 58, 183, 1)' },
                    },
                  }}
                />
                <CustomButton onClick={handleSearch}>Rechercher</CustomButton>
              </Box>

              {error && (<Typography sx={{ color: 'red', mb: 2 }}>{error}</Typography>)}

              {results.length > 0 && (
                <List dense>
                  {results.map((coin) => (
                    <ListItem key={coin.id} sx={{ bgcolor: 'rgba(25,25,25,0.4)', borderRadius: 1, mb: 1 }}>
                      <ListItemText
                        primary={coin.name}
                        secondary={`ID: ${coin.id} — Symbole: ${coin.symbol.toUpperCase()}`}
                        slotProps={{ primary: { sx: { color: 'white' } }, secondary: { sx: { color: 'rgba(255,255,255,0.7)' } } }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              {results.length === 0 && !loading && !error && (<Typography sx={{ color: '#888' }}>Aucun résultat</Typography>)}
            </Paper>
          </CustomCard>
        </Grid>

        {/* === Services Bourses === */}
        <Grid size={12}>
          <CustomCard title="Services bourses" subtitle="API Yahoo Finance">
            <Typography sx={{ color: '#ccc', mb: 1 }}>
              Pour obtenir l'identifiant d'une action ou d'un ETF, il suffit de faire une recherche sur le site Yahoo Finance.
              Une fois sur la page du titre, l'identifiant se trouve dans l'URL après <code>/quote/</code>.
            </Typography>
            <Typography sx={{ color: '#ccc' }}>
              Exemple : <br />
              URL :{' '}
              <a
                href="https://fr.finance.yahoo.com/quote/MC.PA/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7F00FF', textDecoration: 'underline' }}
              >
                https://fr.finance.yahoo.com/quote/MC.PA/
              </a>{' '}
              → identifiant : <strong>MC.PA</strong> correspond à l'action LVMH
            </Typography>
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}
