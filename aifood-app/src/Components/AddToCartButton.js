import React from 'react';
import { Button } from '@mui/material';

const AddToCartButton = ({ onAddToCart, item }) => {
  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleAddToCart}>
      Adicionar ao Carrinho
    </Button>
  );
};

export default AddToCartButton;
