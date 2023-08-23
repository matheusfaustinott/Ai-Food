import React, { useState } from 'react';
import FoodList from './FoodList';
// import Header from './Header'
import CarrinhoButton from './CarrinhoButton'; // Importe o componente CarrinhoButton
import WelcomeButton from './WelcomeButton'; 
import { Container } from '@mui/material';


const VendasPage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]); // Adicione o estado para os itens do carrinho

  return (
    <div>
      {/* <Header/> */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        paddingRight: '50px',
        paddingLeft: '50px',

      }}>
        {user && <p>Bem-vindo, {user.name}!</p>}
        <WelcomeButton/>
        <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems} /> 
      </div>
      <div>
        <Container>
          <h2>Cardápio:</h2>
          <FoodList setCartItems={setCartItems} /> 
        </Container>

      </div>
    </div>
  );
};

export default VendasPage;
