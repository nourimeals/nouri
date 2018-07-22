'use strict';
const express = require('express');
const passport = require('passport');


const router = express.Router();

const Pool = require('../models/pool');

const Meal = require('../models/meal');


router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
 //update this only had to update the pool
    .then(meal =>{
      Pool.findOne({}, 'total', (err, pool) => {
        let currentPool = pool.total;
        pool.total = currentPool + meal.mealCost;
        console.log('38 new pool total', pool.total);
      })
        .save();
    })
    .then(donation => res.status(200).json(donation))
    .catch(err => res.status(404).json(err));
});

module.exports = router;