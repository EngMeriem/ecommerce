const express = require('express');
const data = require('./data');
const mongoose = require('mongoose');
const seedRouter = require('./routes/seedRoutes');
const productRouter = require('./routes/productRoutes');
require('dotenv').config({ path: './config/.env' });

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB successfully connected !'))
  .catch((err) => console.log(err.message, 'MongoDB NOT connected !'));

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, PATCH, OPTIONS'
//   );
//   next();
// });

module.exports = app;
