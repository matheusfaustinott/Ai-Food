import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import PagamentoModal from './PagamentoModal';

const CarrinhoCompras = ({ open, onClose, cartItems, setCartItems }) => {
  const [pagamentoModalOpen, setPagamentoModalOpen] = useState(false);

  const handleAbrirPagamentoModal = () => {
    setPagamentoModalOpen(true);
  };

  const handleClosePagamentoModal = () => {
    setPagamentoModalOpen(false);
  };

  const calcularTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace("R$", "").replace(".", "").replace(",", ".")), 0);
    return total;
  };

  const handleLimparCarrinho = () => {
    setCartItems([]);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ 
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
      }}>
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Card style={{ width: '80%' }}>
                <CardContent>
                  <img src={item.image} alt={item.foodname} style={{ maxWidth: '100%', maxHeight: '60%' }} />
                  <Typography variant="h6">{item.foodname}</Typography>
                  <Typography>{item.description}</Typography>
                  <Typography variant="h6">Preço: {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant="text"
                    color="error"
                    onClick={() => {
                      const updatedCart = cartItems.filter((_, idx) => idx !== index);
                      setCartItems(updatedCart);
                    }}
                  >
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </ListItem>
          ))}
        </List>
        <Divider />
        <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <ListItemText primary={`Total: R$${calcularTotal().toFixed(2)}`} />
          <Button size='small' variant="contained" color="success" onClick={handleAbrirPagamentoModal}>
            Ir para pagamento
          </Button>
          <Button size='small' variant="contained" color="error" onClick={handleLimparCarrinho}>
            Limpar Carrinho
          </Button>
        </div>
      </div>
      {pagamentoModalOpen && <PagamentoModal open={pagamentoModalOpen} onClose={handleClosePagamentoModal} />}
    </Drawer>
  );
};

export default CarrinhoCompras;

