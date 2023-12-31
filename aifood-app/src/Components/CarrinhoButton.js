import React, { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CarrinhoCompras from './CarrinhoCompras';


const CarrinhoButton = ({ cartItems, setCartItems }) => {
  const [openCarrinho, setOpenCarrinho] = useState(false);

  const handleOpenCarrinho = () => {
    setOpenCarrinho(true);
  };

  const handleCloseCarrinho = () => {
    setOpenCarrinho(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpenCarrinho} sx={{
        padding: '13px'
      }}>
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon sx={{color: 'white'}}/>
        </Badge>
      </IconButton>
      <CarrinhoCompras open={openCarrinho} onClose={handleCloseCarrinho} cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CarrinhoButton;
