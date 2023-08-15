import React from 'react';

const VendasPage = ({ user }) => {
  return (
    <div>
      <h2>Página de Vendas</h2>
      {user && <p>Bem-vindo, {user.name}!</p>}
      {/* Outro conteúdo da página de vendas */}
    </div>
  );
};

export default VendasPage;
