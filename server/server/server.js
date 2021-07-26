const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  }
);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const productRoutes = require('./routes/product');

app.use('/api', productRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on PORT', 3000);
  }
});
