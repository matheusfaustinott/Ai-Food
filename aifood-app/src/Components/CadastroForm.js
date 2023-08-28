import React, { useState } from 'react';
import { Modal, Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useSpring, animated } from 'react-spring'; // Importe a biblioteca de animações

const CadastroForm = ({ open, onClose }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para exibir mensagens
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar a exibição da mensagem

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
      setMessage('Cadastro feito com sucesso!');
      setShowMessage(true); // Mostra a mensagem
      console.log('Usuário cadastrado:', response.data);

      onClose(); // Feche o modal após o cadastro
    } catch (error) {
      setMessage('Erro ao cadastrar usuário. Verifique os campos e tente novamente.');
      setShowMessage(true); // Mostra a mensagem de erro
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  // Configurações de animação
  const messageAnimation = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(-20px)',
  });

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
        {}
        <animated.div style={messageAnimation}>
          <Typography variant="subtitle1" color={message.includes('sucesso') ? 'primary' : 'error'}>
            {message}
          </Typography>
        </animated.div>

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
