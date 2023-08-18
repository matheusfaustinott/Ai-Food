import React, { useState } from 'react';
import WelcomeButton from './WelcomeButton'; 
import FoodList from './FoodList';
import CarrinhoButton from './CarrinhoButton'; // Importe o componente CarrinhoButton

const VendasPage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]); // Adicione o estado para os itens do carrinho

  return (
    <div>
      <h2>Página de Vendas</h2>
      {user && <p>Bem-vindo, {user.name}!</p>}
      <WelcomeButton/>
      <FoodList setCartItems={setCartItems} /> 
      <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems} /> {/* Passe as propriedades cartItems e setCartItems */}
    </div>
  );
};

export default VendasPage;
