'use strict';

const express = require('express');
const passport = require('passport');


const router = express.Router();

const User = require('../models/user');

// const Profile = require('../models/profile');


router.get('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const errors = {};
  console.log('18 user',req.user);
  User.findOne({
    _id: req.user._id
  })
    .populate('user', ['fname','lname', 'donations'])
    .then(profile => {
      if (!profile) {
        error.noprofile = 'Theres no prfile for this user';
        return res.status(400).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});



module.exports = router;