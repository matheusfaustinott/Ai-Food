import React from 'react';
import WelcomeButton from './WelcomeButton';

const VendasPage = ({ user }) => {
  return (
    <div>
      <h2>Página de Vendas</h2>
      {user && <p>Bem-vindo, {user.name}!</p>}
      <WelcomeButton />
      {/* Outro conteúdo da página de vendas */}
    </div>
  );
};

export default VendasPage;
