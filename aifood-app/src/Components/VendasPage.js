import React, { useState } from 'react';
import WelcomeButton from './WelcomeButton'; 
import FoodList from './FoodList';
import CarrinhoButton from './CarrinhoButton'; // Importe o componente CarrinhoButton

const VendasPage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]); // Adicione o estado para os itens do carrinho

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        {user && <p>Bem-vindo, {user.name}!</p>}
        <WelcomeButton/>
        <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems} /> {/* Passe as propriedades cartItems e setCartItems */}
      </div>
      <div>
        <h2>Página de Vendas</h2>
        <FoodList setCartItems={setCartItems} /> 
      </div>
    </div>
  );
};

export default VendasPage;
