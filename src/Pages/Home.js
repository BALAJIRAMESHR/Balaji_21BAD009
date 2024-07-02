import React from 'react';
import { Typography, Box, Grid, IconButton, Link } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

const categories = [
  { name: 'Phones', image: '/download(2).jpeg' },
  { name: 'Laptops', image: '/download(3).jpeg' },
  { name: 'Tablets', image: '/download(4).jpeg' },
  { name: 'Accessories', image: '/download(5).jpeg' }
];

const Home = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box sx={{ flex: '0 0 auto', bgcolor: 'primary.main', color: 'white', py: 3, textAlign: 'center' }}>
        <Typography variant="h3">Afordmed</Typography>
        <Typography variant="h5">Accessibility</Typography>
      </Box>

      {/* Scroll down indicator */}
      <Box sx={{ flex: '0 0 auto', textAlign: 'center', mt: 'auto', mb: 2 }}>
        <IconButton component={Link} to="#categories" sx={{ color: 'primary.main' }}>
          <ArrowDownward fontSize="large" />
        </IconButton>
      </Box>

      {/* Product categories */}
      <Box id="categories" sx={{ flex: '1 1 auto', overflowY: 'auto', px: 5 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>Our Categories</Typography>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ textAlign: 'center' }}>
                <IconButton component={Link} to={`/products/${category.name.toLowerCase()}`} sx={{ borderRadius: '50%', bgcolor: 'background.paper', p: 2 }}>
                  <img src={category.image} alt={category.name} width="100" height="100" style={{ borderRadius: '50%' }} />
                </IconButton>
                <Typography variant="h6" sx={{ mt: 1 }}>{category.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
