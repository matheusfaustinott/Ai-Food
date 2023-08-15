const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',             // Nome de usuário do banco de dados
  host: '150.162.67.194',       // Endereço IP ou nome do host do banco de dados
  database: 'ai_food',         // Nome do banco de dados
  password: 's3nh@BD!',        // Senha do banco de dados
  port: 5432,                  // Porta padrão do PostgreSQL
});

module.exports = pool;         // Exporta o pool de conexões para ser usado em outros lugares
