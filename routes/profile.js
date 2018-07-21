'use strict';

const express = require('express');
const passport = require('passport');


const router = express.Router();

const User = require('../models/user');


router.get('/', (req, res) => {
  console.log('hi there this is users');
});



module.exports = router;