const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importa a conexão com o banco de dados

// Rota para fazer o login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Consulta ao banco de dados para verificar se o usuário está cadastrado
    const user = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Usuário não encontrado. Por favor cadastre-se.' });
    }

    res.json({ message: 'Login bem-sucedido', user: user.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
