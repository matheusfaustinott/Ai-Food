const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota para criar uma nova conta de usuário
router.post('/', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    
    if (!name || !password || !email) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    // Verifica se o usuário já está cadastrado pelo email
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Já existe um usuário com esse email.' });
    }

    // Insere o novo usuário no banco de dados
    const newUser = await pool.query(
      'INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING *',
      [name, password, email]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
