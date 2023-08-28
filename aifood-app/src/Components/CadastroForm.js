import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import axios from 'axios';

const CadastroForm = ({ open, onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCadastro = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/cadastro', {
        name: nome,
        email: email,
        password: password,
      });
      console.log('Usuário cadastrado:', response.data);
      
      onClose(); // Feche o modal após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          borderRadius: 3,
        }}
      >
        <TextField
          fullWidth
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={handleNomeChange}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCadastro}
          fullWidth
        >
          Cadastrar
        </Button>
      </Box>
    </Modal>
  );
};

export default CadastroForm;
