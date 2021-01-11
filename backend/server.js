const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3300;

//Routes
const userRoute = require('./routes/user');

//Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3330'
}));

//Use Routes
app.use('/user', userRoute);

app.all('*', (req, res) => {
  return res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
})