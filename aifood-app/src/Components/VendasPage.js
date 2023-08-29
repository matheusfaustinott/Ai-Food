import React, { useState } from 'react';
import FoodList from './FoodList';
import CarrinhoButton from './CarrinhoButton'; // Importe o componente CarrinhoButton
import WelcomeButton from './WelcomeButton'; 
import { Container, Box } from '@mui/material';
import fotoSites from '../images/fotoSite.png';


const VendasPage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]); // Adicione o estado para os itens do carrinho
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{
      // display: 'flex',
      // flexDirection: 'column',
      position: 'relative', 
      // background: 'url("https://s1.1zoom.me/b4857/620/Fast_food_Hamburger_Vegetables_Fire_Two_520128_3840x2160.jpg") center/cover no-repeat fixed',
      // backdropFilter: 'blur(5px)',
      minHeight: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://s1.1zoom.me/b4857/620/Fast_food_Hamburger_Vegetables_Fire_Two_520128_3840x2160.jpg")',
          backgroundSize: 'cover',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      ></div>
      
      <div style={{
        position:'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        height: '60px',
        paddingRight: '50px',
        paddingLeft: '50px',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#b80000',
        zIndex: 1000,
        


      }}>
        <div style={{display: 'flex', gap: '10px'}}>
          {/* aqui vai uma imagem com link p/ voltar pro topo da pagina */}
          <a href="#" onClick={scrollToTop}>
            <img 
            src={fotoSites}
            alt="Voltar ao topo"
            style={{ maxWidth: '60px', cursor: 'pointer', marginLeft: '80px' }} 
            />
          </a>
          <h2 style={{ marginLeft: '5px', color:'white' }}> Lanchonete do Dudu Hamburgueria</h2>
        </div>
        <div style={{
          display:'flex',
          flexDirection:'row'
        }}>
          {user && <p>Bem-vindo, {user.name}!</p>}
          <WelcomeButton/>
          <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems} /> 
        </div>

      </div>
      <div style={{ marginTop: '80px' }}>
        <Container sx={{
          backgroundColor: 'rgb(255, 255, 255)', // Cor de fundo com opacidade rgba e mais uma ,
          padding: '20px', 
        }}>
          <h2>Cardápio:</h2>
          <FoodList setCartItems={setCartItems} /> 
        </Container>

      </div>
    </Box>
  );
};

export default VendasPage;
