import React, { useState } from 'react';
import { Button } from '@mui/material';
import CadastroForm from './CadastroForm';

const CadastroButton = () => {
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
        Cadastro
      </Button>
      <CadastroForm open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CadastroButton;
