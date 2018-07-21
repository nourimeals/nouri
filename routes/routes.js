'use strict';

const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();



router.get('/api/v0/pool', function (req, res) {
  console.log('hi there');
});

router.get('/api/v0/signin', function (req, res) {

});


router.post('/api/v0/signup', jsonParser, function (req, res) {

});

router.post('/api/v0/donate', jsonParser, function (req, res) {

});

router.post('/api/v0/meals', jsonParser, function (req, res) {

});

router.put('', jsonParser, (req, res) => {

});




// yo actually make a var that holds the value for email from the users model pass it through the url so the db can identify it and remove it thanks - love past ix.... :3

router.delete('/api/user/delete/:email', function (req, res) {

});

module.exports = router;