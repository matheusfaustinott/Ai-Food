import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import WelcomeButton from './WelcomeButton';
import CarrinhoButton from './CarrinhoButton';

const Header = ({ user }) => {
    const [cartItems, setCartItems] = useState([]);

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
          <IconButton>
            <img src="../public/" alt="Logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>
        </Link>
        <div style={{ display: 'flex' }}>
          <WelcomeButton />
          <CarrinhoButton cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;