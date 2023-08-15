import React, { useState } from 'react';
import { Modal, Button, TextField, Box, Alert } from '@mui/material';
import axios from 'axios';

const LoginForm = ({ open, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

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
  
      if (response.data.message === 'Login bem-sucedido') {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setLoginMessage(`Olá, ${response.data.user.name} Bem-vindo!`);
        onClose();
        onLoginSuccess();
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Ocorreu um erro ao fazer o login. Por favor, tente novamente mais tarde.');
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <TextField fullWidth label="Email" variant="outlined" value={email} onChange={handleEmailChange} />
        <TextField fullWidth label="Senha" type="password" variant="outlined" value={password} onChange={handlePasswordChange} />
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        {loginMessage && <Alert severity="success" sx={{ mt: 2 }}>{loginMessage}</Alert>}
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Entrar
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginForm;
