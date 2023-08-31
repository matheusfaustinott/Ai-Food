import React, { useState, useEffect } from 'react';
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
  const [avatarColor, setAvatarColor] = useState(null);

  const getRandomColor = () => {
    const colors = [deepOrange[500], deepPurple[500], teal[500], indigo[500], pink[500], red[500]];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    if (user && !avatarColor) {
      const color = getRandomColor();
      setAvatarColor(color);
    }
  }, [user, avatarColor]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div>
      <Button
        variant="standard"
        color="primary"
        onClick={handleMenuOpen}
        startIcon={<Avatar sx={{ bgcolor: avatarColor }}>{user && user.name.charAt(0)}</Avatar>}
        sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <p style={{ color: 'white', margin: 0 }}>Olá, {user && user.name}! Seja bem-vindo!</p>
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
