import * as React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import Navigation from '../../components/Navigation';
import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
import ProductsList from '../../components/ProductsList';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

export default function CollectionPage({products, collectionName}) {
  return (
    <Box>
      <Navigation />
      <Container maxWidth="lg">
        <BreadcrumbsNavigation title={collectionName} />
        <ProductsList products={products} />
      </Container>
    </Box>
  );
}

export const getServerSideProps = async ({params}) => {
  const { collectionName } = params
  // Fetch all the collections
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
  const collections = parseShopifyResponse(collectionsData);
  // Get the right one
  const collection = collections.find(collection => collection.handle === collectionName)

  return {
   props: {
    collectionName,
    products: collection.products,
  },
 };
};
