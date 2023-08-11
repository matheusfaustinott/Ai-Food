import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Divider } from '@mui/material';

const CarrinhoCompras = ({ open, onClose, items }) => {
  const calcularTotal = () => {
    // Implemente a lógica para calcular o total dos itens do carrinho
    // Por enquanto, retornaremos um valor fixo
    return 100;
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300 }}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.nome} secondary={`Preço: R$${item.preco}`} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText primary={`Total: R$${calcularTotal()}`} />
          <Button variant="contained" color="primary">
            Finalizar Compra
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CarrinhoCompras;
