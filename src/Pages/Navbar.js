import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#333', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Affordmed Medical
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            sx={{ ml: 1, flex: 1, color: '#fff' }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px', color: '#fff' }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
