import React, { useState } from 'react';
import FoodList from './FoodList';
// import Header from './Header'
import CarrinhoButton from './CarrinhoButton'; // Importe o componente CarrinhoButton
import WelcomeButton from './WelcomeButton'; 


const VendasPage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]); // Adicione o estado para os itens do carrinho

  return (
    <div>
      {/* <Header/> */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
      }}>
        {user && <p>Bem-vindo, {user.name}!</p>}
        <WelcomeButton/>
        <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems} /> 
      </div>
      <div>
        <h2>Cardápio:</h2>
        <FoodList setCartItems={setCartItems} /> 
      </div>
    </div>
  );
};

export default VendasPage;
