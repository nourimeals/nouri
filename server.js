'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path')

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('mongo connected'))
  .catch((err) => console.log(err));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use('/api/v0/users', require('./routes/users.js'));
app.use('/api/v0/profile', require('./routes/profiles.js'));
app.use('/api/v0/donations', require('./routes/donations.js'));
app.use('/api/v0/meals', require('./routes/meals.js'));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
