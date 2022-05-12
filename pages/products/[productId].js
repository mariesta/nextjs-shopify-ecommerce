import * as React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import Navigation from '../../components/Navigation';
import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
import ProductsList from '../../components/ProductsList';
import PRODUCTS from '../../data.js';

export default function ProductPage() {
  const router = useRouter()

  // Navigate to collection page
  const goToCollection = () => router.push(`/collections/${collection}`)

  // Get productId from url: /products/[productId]
  const { productId } = router.query
  // Get product data
  const product = PRODUCTS.find(product => product.id === parseInt(productId))
  const { name, image, price, collection } = product || {}

  return (
    <Box>
      <Navigation />
      {product &&
        <Container maxWidth="lg">
          <BreadcrumbsNavigation title={name} />
            <Grid container direction="row">
              <Grid item xs={6}>
                <Image
                  src={image}
                  alt={`Picture of ${name}`}
                  width={500} automatically provided
                  height={500} automatically provided
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" my={2}>{name}</Typography>
                 <Chip
                  label={collection}
                  color="primary"
                  size="large"
                  variant="outlined"
                  onClick={goToCollection} />
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
