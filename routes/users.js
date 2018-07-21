'use strict';

const fs = require('fs');
const express = require('express');

const router = express.Router();

const User = require('../models/user');


router.get('/api/v0/users', (req, res) => {
  console.log('hi there this is users');
});

router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user));
});

module.exports = router;