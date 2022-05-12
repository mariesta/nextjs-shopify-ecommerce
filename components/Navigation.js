import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" underline="none" color="inherit"><Typography mr={2}>All products</Typography></Link>
        <Link href="/collections/women" underline="none" color="inherit"><Typography mr={2}>Women</Typography></Link>
        <Link href="/collections/men" underline="none" color="inherit"><Typography>Men</Typography></Link>
      </Toolbar>
    </AppBar>
  )
};
