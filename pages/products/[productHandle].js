import * as React from 'react';
import Image from 'next/image'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Navigation from '../../components/Navigation';
import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
import ProductsList from '../../components/ProductsList';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'

export default function ProductPage({product}) {

  const { id, title, images, variants, handle } = product
  const { src: productImage } = images[0]
  const { price } = variants[0]

  return (
    <Box>
      <Navigation />
      {product &&
        <Container maxWidth="lg">
          <BreadcrumbsNavigation title={title} />
            <Grid container direction="row">
              <Grid item xs={6}>
                <Image
                  src={productImage}
                  alt={`Picture of ${title}`}
                  width={500} automatically provided
                  height={500} automatically provided
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" my={2}>{title}</Typography>
                <Grid mt={4}>
                  <Typography variant="h6" component="span">Price: </Typography>
                  <Typography variant="body1" component="span">{price}</Typography>
                </Grid>
                <Grid mt={1}>
                  <Button variant="contained">Add to cart</Button>
                </Grid>
              </Grid>
            </Grid>
        </Container>
      }
    </Box>
  );
}

export const getServerSideProps = async ({params}) => {
  const { productHandle } = params
  // Fetch one product
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
   props: {
    product: parseShopifyResponse(product),
  },
 };
};
