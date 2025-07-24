'use client';

import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile ? <SidebarMobile /> : <SidebarDesktop />}
    </Box>
  );
}
