'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');


const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();


router.post('/api/user', jsonParser, function (req, res, next) {

});

router.get('/api/users', function (req, res, next) {

});

router.get('/api/user/:email', function (req, res) {

});



router.put('/api/user/:email', jsonParser, (req, res) => {

});




// yo actually make a var that holds the value for email from the users model pass it through the url so the db can identify it and remove it thanks - love past ix.... :3

router.delete('/api/user/delete/:email', function (req, res) {

});