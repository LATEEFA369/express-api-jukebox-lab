const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const mongoose = require('mongoose');
const morgan = require('morgan');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Routes go here
/////CONTEROLLER
const tracksCtrl = require('./controllers/tracks')

// PABLIC ROUTE
app.use('/tracks', tracksCtrl);

app.listen(3000, () => {
  console.log('The express app is ready!');
});