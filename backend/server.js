const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const loginRoute = require('./routes/login');
const foodRoutes = require('./routes/food');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/login', loginRoute); // Usa a rota de login com o prefixo /login
app.use('/api/foods', foodRoutes);// mesma coisa aqui

db.connect()
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
 