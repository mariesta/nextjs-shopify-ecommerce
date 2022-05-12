import * as React from 'react';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function BreadcrumbsNavigation({title}) {
  return (
    <Box mt={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" key="1" color="inherit" href="/">
          Products
        </Link>
        <Typography key="3" color="text.primary">
          {title && title.replace(/^\w/, c => c.toUpperCase())}
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}
