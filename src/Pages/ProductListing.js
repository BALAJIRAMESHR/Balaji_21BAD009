import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Container, Grid, Card, CardActionArea,
  CardMedia, CardContent, TextField, MenuItem, Select,
  FormControl, InputLabel, Button, Checkbox, ListItemText,
  Slider, FormControlLabel
} from '@mui/material';
import './Product.css'; // Ensure this file exists

const products = [
  // Add your product data here
  // Example:
  { id: 1, name: 'Product 1', category: 'Phone', company: 'AMZ', price: 100, rating: 4, discount: 10, available: true, image: '/path/to/image1.jpg' },
  // More products...
];

const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
const categories = ['Phone', 'Computer', 'TV', 'Earphones', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'];

const ProductListing = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedRating, setSelectedRating] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [availability, setAvailability] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    let filtered = products.filter(product => 
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedCompany.length ? selectedCompany.includes(product.company) : true) &&
      (selectedRating ? product.rating >= selectedRating : true) &&
      (availability ? product.available : true) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption) {
      filtered.sort((a, b) => {
        if (sortOption === 'price') return a.price - b.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'discount') return b.discount - a.discount;
        return 0;
      });
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedCompany, selectedRating, priceRange, availability, sortOption]);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 5 }}>Product Listing</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <MenuItem value={category} key={index}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Company</InputLabel>
              <Select
                multiple
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                {companies.map((company) => (
                  <MenuItem key={company} value={company}>
                    <Checkbox checked={selectedCompany.indexOf(company) > -1} />
                    <ListItemText primary={company} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Rating"
              type="number"
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              inputProps={{ min: 0, max: 5 }}
            />
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="discount">Discount</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={availability}
                  onChange={(e) => setAvailability(e.target.checked)}
                />
              }
              label="Only show available"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  className={`product-card ${flippedCard === product.id ? 'flipped' : ''}`}
                  onClick={() => handleFlip(product.id)}
                  sx={{ maxWidth: 300, margin: '0 auto' }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
                    <Button variant="outlined" color="secondary">
                      View Details
                    </Button>
                    <Button variant="contained" color="primary">
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductListing;
