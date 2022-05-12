import * as React from 'react';
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ProductsList({products}) {
  const router = useRouter()
  const goToProductPage = productId => router.push(`/products/${productId}`)

  return (
    <Box>
      {
        (products && products.length > 0) ?
        <ImageList cols={5} gap={20}>
          {products.map((product) => (
            <ImageListItem
              key={product.image}
              style={{cursor: 'pointer'}}
              onClick={() => goToProductPage(product.id)}>
              <img
                src={`${product.image}?w=250&fit=crop&auto=format`}
                srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
                alt={product.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={product.name}
                subtitle={<span>Price: {product.price}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>:
        <Typography variant="body1" align="center">There are no products in this collection</Typography>
      }
    </Box>
  )
};
