'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('mongo connected'))
  .catch((err) => console.log(err));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api/v0', require('./routes/routes.js'));
app.use('/api/v0/users', require('./routes/users.js'));

const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});