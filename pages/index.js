import * as React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Navigation from '../components/Navigation';
import ProductsList from '../components/ProductsList';
import { shopifyClient, parseShopifyResponse } from '../lib/shopify'

export default function Index({products}) {
  return (
    <Box>
      <Navigation />
      <Container maxWidth="lg">
        <ProductsList products={products} />
      </Container>
    </Box>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
   props: {
    products: parseShopifyResponse(products),
  },
 };
};
