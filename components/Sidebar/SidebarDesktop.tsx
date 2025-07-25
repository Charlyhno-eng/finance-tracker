'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Divider } from '@mui/material';
import { Dashboard, AccountBalanceWallet, TrendingUp, ExpandLess, ExpandMore, AccountBalance, CurrencyBitcoin, CreditCard, Settings } from '@mui/icons-material';

export default function SidebarDesktop() {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const router = useRouter();

  const handlePortfolioClick = () => {
    setOpenPortfolio(!openPortfolio);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240, flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          bgcolor: 'rgba(103, 58, 183, 0.03)',
          boxShadow: '0 8px 24px rgba(103, 58, 183, 0.4)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#fff',
          p: 2,
          borderRight: 'none',
          backgroundColor: '#0e0f1a',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        },
      }}
    >
      <Box sx={{ px: 1, mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="inherit">Finance Tracker</Typography>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        <ListItemButton sx={{ color: '#ddd' }} onClick={() => handleNavigation('/')}>
          <ListItemIcon sx={{ color: '#bb86fc' }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton sx={{ color: '#ddd' }} onClick={() => handleNavigation('/transactions')}>
          <ListItemIcon sx={{ color: '#bb86fc' }}>
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>

        <ListItemButton onClick={handlePortfolioClick} sx={{ color: '#ddd' }}>
          <ListItemIcon sx={{ color: '#bb86fc' }}>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
          {openPortfolio ? (<ExpandLess sx={{ color: '#bb86fc' }} /> ) : (<ExpandMore sx={{ color: '#bb86fc' }} /> )}
        </ListItemButton>

        <Collapse in={openPortfolio} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton sx={{ color: '#ccc' }} onClick={() => handleNavigation('/portfolio/compte')}>
              <ListItemIcon sx={{ color: '#9575cd' }}>
                <CreditCard fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Compte" />
            </ListItemButton>
            <ListItemButton sx={{ color: '#ccc' }} onClick={() => handleNavigation('/portfolio/cryptomonnaie')}>
              <ListItemIcon sx={{ color: '#9575cd' }}>
                <CurrencyBitcoin fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Cryptomonnaie" />
            </ListItemButton>
            <ListItemButton sx={{ color: '#ccc' }} onClick={() => handleNavigation('/portfolio/bourse')}>
              <ListItemIcon sx={{ color: '#9575cd' }}>
                <AccountBalance fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Bourse" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

      <List>
        <ListItemButton sx={{ color: '#ddd' }} onClick={() => handleNavigation('/gestion')}>
          <ListItemIcon sx={{ color: '#bb86fc' }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Gestion" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
