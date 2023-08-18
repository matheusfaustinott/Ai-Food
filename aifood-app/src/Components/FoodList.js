import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';

const FoodList = ({ setCartItems }) => {
  const [foods, setFoods] = useState([]);

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
    <Grid container spacing={2}>
      {foods.map(food => (
        <Grid item xs={12} sm={6} md={4} key={food.id}>
          <Card style={{ height: '50%' }}>
            <CardContent style={{ height: '50%' }}>
              <img src={food.image} alt={food.foodname} style={{ maxWidth: '100%', maxHeight: '60%' }} />
              <Typography variant="h6">{food.foodname}</Typography>
              <Typography>{food.description}</Typography>
              <Typography variant="h6">Preço: {food.price}</Typography>
            </CardContent>
            <CardActions>
              <Button
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
