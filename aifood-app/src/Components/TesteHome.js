import React from 'react';
import { Grid, Typography } from '@mui/material';
import Carrinho from './Components/Carrinho';


const HomeLog = () => {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            AiFOOD
          </Typography>
        </Grid>
        <Grid item>
          <Carrinho />
        </Grid>
      </Grid>
    );
  };
  
  export default HomeLog;
  