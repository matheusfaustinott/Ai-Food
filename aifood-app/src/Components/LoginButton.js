import React, { useState } from 'react';
import { Button } from '@mui/material';
import LoginForm from './LoginForm';

const LoginButton = ({ onLoginSuccess }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLoginSuccess = () => {
    handleCloseModal(); // Fechar o modal de login
    onLoginSuccess(); // Chamar a função de redirecionamento
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleOpenModal}>
        Login
      </Button>
      <LoginForm open={openModal} onClose={handleCloseModal} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginButton;
