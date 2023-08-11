import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';
import axios from 'axios';

const LoginForm = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });

      // Aqui você pode tratar a resposta do servidor
      console.log(response.data);

      onClose(); // Feche a modal após o login bem-sucedido
    } catch (error) {
      // Trate erros aqui, como exibir uma mensagem de erro para o usuário
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <TextField fullWidth label="Email" variant="outlined" value={email} onChange={handleEmailChange} />
        <TextField fullWidth label="Senha" type="password" variant="outlined" value={password} onChange={handlePasswordChange} />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Entrar
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginForm;
