'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
import { Dashboard, AccountBalanceWallet, TrendingUp, ExpandLess, ExpandMore, AccountBalance, CurrencyBitcoin, CreditCard, Menu as MenuIcon } from '@mui/icons-material';

export default function SidebarMobile() {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handlePortfolioClick = () => {
    setOpenPortfolio(!openPortfolio);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        bgcolor: 'rgba(103, 58, 183, 0.03)',
        boxShadow: '0 8px 24px rgba(103, 58, 183, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        p: 2,
        height: '100%',
        backgroundColor: '#0e0f1a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ px: 1, mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="inherit">
          Finance Tracker
        </Typography>
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
          {openPortfolio ? (
            <ExpandLess sx={{ color: '#bb86fc' }} />
          ) : (
            <ExpandMore sx={{ color: '#bb86fc' }} />
          )}
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
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#0e0f1a', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="inherit">
            Finance Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0e0f1a', borderRight: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
