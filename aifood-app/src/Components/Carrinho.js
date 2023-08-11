import React, { useState } from 'react';
import { Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CarrinhoCompras from './CarrinhoCompras';

const CarrinhoButton = () => {
  const [openCarrinho, setOpenCarrinho] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState([]); // Aqui você pode manter a lista de itens do carrinho

  const handleOpenCarrinho = () => {
    setOpenCarrinho(true);
  };

  const handleCloseCarrinho = () => {
    setOpenCarrinho(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenCarrinho}>
        <Badge badgeContent={itensCarrinho.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        Carrinho
      </Button>
      <CarrinhoCompras open={openCarrinho} onClose={handleCloseCarrinho} items={itensCarrinho} />
    </div>
  );
};

export default CarrinhoButton;
