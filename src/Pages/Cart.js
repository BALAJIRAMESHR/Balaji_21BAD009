import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`Quantity: ${item.quantity} | Price: ${item.price}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="increase" onClick={() => increaseQuantity(item.id)}>
                  <AddIcon />
                </IconButton>
                <IconButton edge="end" aria-label="decrease" onClick={() => decreaseQuantity(item.id)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cart;
