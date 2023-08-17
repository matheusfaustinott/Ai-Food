import React from 'react';
import WelcomeButton from './WelcomeButton'; 
import Carrinho from './Carrinho';
import FoodList from './FoodList';

const VendasPage = ({ user }) => {
  return (
    <div>
      <h2>Página de Vendas</h2>
      {user && <p>Bem-vindo, {user.name}!</p>}
      <FoodList /> 
      <WelcomeButton /> 
      <Carrinho /> 
      
    </div>
  );
};

export default VendasPage;
