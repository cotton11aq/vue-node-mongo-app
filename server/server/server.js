const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mongoose connected');
  }
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const todoRoutes = require('./routes/todo');

app.use('/api', todoRoutes);

app.get('/', (req, res) => {
  res.send('<h1>hoge</h1>');
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on PORT', 3000);
  }
});
