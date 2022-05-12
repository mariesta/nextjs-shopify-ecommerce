import * as React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import Navigation from '../components/Navigation';
import ProductsList from '../components/ProductsList';
import PRODUCTS from '../data.js';

export default function Index() {
  return (
    <Box>
      <Navigation />
      <Container maxWidth="lg">
        <ProductsList products={PRODUCTS} />
      </Container>
    </Box>
  );
}
