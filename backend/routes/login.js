const express = require('express');
const router = express.Router();
const pool = require('../db');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authMiddleware'); // Importa a conexão com o banco de dados
// Rota para verificar e renovar o token
router.post('/check', authenticateToken, (req, res) => {
  try {
    // Se o middleware passou, o token é válido, então podemos simplesmente enviar um token renovado
    const token = jwt.sign({ userId: req.user.id }, '123456789', { expiresIn: '1h' });

    res.json({ valid: true, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});


// Rota para fazer o login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Consulta ao banco de dados para verificar se o usuário está cadastrado
    const user = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Usuário não encontrado. Por favor cadastre-se.' });
    }
    const token = jwt.sign({ userId: user.rows[0].id }, '123456789', { expiresIn: '1h' });

    res.json({ message: 'Login bem-sucedido', token, user: user.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
