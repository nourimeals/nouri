'use strict';

const express = require('express');
const passport = require('passport');


const router = express.Router();

const User = require('../models/user');

const Donation = require('../models/donation');

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

  console.log('17 donations');
  const newDonation = new Donation({
    amount: req.body.amount,
    user: req.user._id
  });
  newDonation.save()
    .then(donation => res.status(200).json(donation))
    .catch(err => res.status(404).json(err));
});

module.exports = router;