const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para buscar todos os alimentos
router.get('/', async (req, res) => {
  try {
    const foods = await db.query('SELECT * FROM food');
    res.json(foods.rows);
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
    res.status(500).send('Erro ao buscar alimentos');
  }
});

module.exports = router;
