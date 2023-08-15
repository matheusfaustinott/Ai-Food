import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import LoginButton from './Components/LoginButton';
import CadastroButton from './Components/CadastroButton';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

const HomePage = () => {
  const navigate = useNavigate(); // Inicialize o useNavigate

  const handleLoginSuccess = () => {
    navigate('/home'); // Redirecionar para a página de vendas
  };

  return (
    <Box   
      sx={{
        position: 'relative', // Para posicionar elementos filhos de forma absoluta
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* Imagem de fundo com blur */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("https://s1.1zoom.me/b4857/620/Fast_food_Hamburger_Vegetables_Fire_Two_520128_3840x2160.jpg")`, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(4px)', // Aplicar o efeito de blur
          zIndex: -1, // Colocar a imagem no fundo
        }}
      />
      {/* Conteúdo sobreposto */}
      <div className='menuHome'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor cinza com transparência
          padding: '20px', // Espaçamento interno
          gap: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '30px',
          // borderRadius: '10px', // Borda arredondada
          zIndex: 1,
          textAlign: 'center', // Centralizar o conteúdo
        }}
      >
        <Typography variant="h2" align="center" sx={{ color: 'white' }}>
          Bem-Vindos!
        </Typography>
        <Typography variant="p" paragraph align="center" sx={{ color: 'white'}}>
          Faça login para ter acesso ao nosso cardápio, caso não seja inscrito faça aqui seu cadastro!
        </Typography>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Grid item>
            <LoginButton onLoginSuccess={handleLoginSuccess} />
          </Grid>
          <Grid item>
            <CadastroButton />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default HomePage;
