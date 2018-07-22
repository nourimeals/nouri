'use strict';

const fs = require('fs');
const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
  console.log('hi there this is the server');
});

router.get('/api/v0/signin', (req, res) => {

});


router.post('/api/v0/signup', (req, res) => {

});

router.post('/api/v0/donate', (req, res) => {

});

router.post('/api/v0/meals', (req, res) => {

});

router.put('', (req, res) => {

});




// yo actually make a var that holds the value for email from the users model pass it through the url so the db can identify it and remove it thanks - love past ix.... :3

router.delete('/api/user/delete/:email', function (req, res) {

});

module.exports = router;