import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, teal, indigo, pink, red } from '@mui/material/colors';
import { ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const WelcomeButton = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [anchorEl, setAnchorEl] = useState(null);

  const getRandomColor = () => {
    const colors = [deepOrange[500], deepPurple[500], teal[500], indigo[500], pink[500], red[500]];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/'; // Recarrega a página para limpar o estado
  };

  return (
    <div>
      <Button
        variant="standard"
        color="primary"
        onClick={handleMenuOpen}
        endIcon={<Avatar sx={{ bgcolor: getRandomColor() }}>{user && user.name.charAt(0)}</Avatar>}
        sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        Olá {user && user.name} Bem-vindo!
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default WelcomeButton;