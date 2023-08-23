import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';


const FoodList = ({ setCartItems }) => {
  const [foods, setFoods] = useState([]);
  const isMediumScreen = useMediaQuery('(max-width:1600px)'); // Verifica se a tela é menor que 1600 pixels
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Verifica se a tela é menor que 600 pixels

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/foods');
        setFoods(response.data);
      } catch (error) {
        console.error('Erro ao buscar alimentos:', error);
      }
    };

    fetchFoods();
  }, []);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <Grid container spacing={1}>
      {foods.map(food => (
        <Grid item xs={12} sm={isMediumScreen ? 12 : 6} md={6} key={food.id}>
          <Card style={{
            height: isMediumScreen ? '95%' : (isSmallScreen ? '60%' : '80%'), // Aplica a altura condicionalmente
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <CardContent style={{ height: isMediumScreen ? '59%' : (isSmallScreen ? '59%' : '69%') }}>
              <img src={food.image} alt={food.foodname} style={{ maxWidth: '100%', maxHeight: '90%' }} />
              <Typography variant="h6">{food.foodname}</Typography>
              <Typography>{food.description}</Typography>
              <Typography variant="h6">Preço: {food.price}</Typography>
            </CardContent>
            <CardActions >
              <Button
                size='small'
                variant="contained"
                color="primary"
                onClick={() => addToCart(food)}
              >
                Adicionar ao Carrinho
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodList;