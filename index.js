const express = require('express');
const bodyParser = require('body-parser');
const { signup, login } = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define POST routes for signup and login
app.post('/signup', signup);
app.post('/login', login);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
