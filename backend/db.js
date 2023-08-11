const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '150.162.67.194',
  database: 'ai_food',
  password: 's3nh@BD!',
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;