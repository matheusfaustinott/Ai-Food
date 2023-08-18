import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { Card, CardContent, CardActions, Typography } from '@mui/material';

const CarrinhoCompras = ({ open, onClose, cartItems, setCartItems }) => {
  const calcularTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace("R$", "").replace(".", "").replace(",", ".")), 0);
    return total;
  };

  const handleLimparCarrinho = () => {
    setCartItems([]);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300 }}>
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <img src={item.image} alt={item.foodname} style={{ maxWidth: '100%', maxHeight: '60%' }} />
                  <Typography variant="h6">{item.foodname}</Typography>
                  <Typography>{item.description}</Typography>
                  <Typography variant="h6">Preço: {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
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
        <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText primary={`Total: R$${calcularTotal().toFixed(2)}`} />
          <Button variant="contained" color="primary">
            Finalizar Compra
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLimparCarrinho}>
            Limpar Carrinho
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CarrinhoCompras;

