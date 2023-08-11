import React, { useState } from 'react';
import { Button } from '@mui/material';
import LoginForm from './LoginForm';

const LoginButton = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpenModal}>
        Login
      </Button>
      <LoginForm open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default LoginButton;
