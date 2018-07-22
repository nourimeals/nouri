'use strict';

const express = require('express');
const passport = require('passport');


const router = express.Router();

const User = require('../models/user');

const Pool = require('../models/pool');

const Meal = require('../models/meal');

const validateDonation = require('../validation/validateDonation');

router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const {
    errors, isValid 
  } = validateDonation(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  console.log('28 meals');
  const newMeal= new Meal({
    restaurant : req.body.restaurant,
    date : req.body.date,
    mealCost: req.body.mealCost,
    patron: req.body.patron,
    story: req.body.story
  });
  newMeal.save()
    .then(meal => {
      Pool.findOne({})
        .then(pool => {
          let totalDonation = pool.total - meal.mealCost;
          pool.total = totalDonation;
          console.log('39 pool', pool.total);
          pool.save();
        });
      return meal;
    })
    .then(meal => res.status(200).json(meal))
    .catch(err => res.status(404).json(err));
});

module.exports = router;