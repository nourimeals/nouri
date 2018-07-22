'use strict';

const fs = require('fs');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const validateRegisterInput = require('../validation/validateRegister');
const validateSigninInput = require('../validation/signin');

const router = express.Router();

const User = require('../models/user');


router.get('/', (req, res) => {
  console.log('hi there this is users');
});

router.post('/', (req, res) => {
  const {
    errors,
    isValid,
  } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          fname: req.body.fname,
          lname: req.body.lname,
          streetAddress: req.body.streetAddress,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          phone: req.body.phone,
          donations: req.body.donations,
          totalDonations: req.body.totalDonations,
          signupDate: req.body.signupDate,
          isBusinessUser: req.body.isBusinessUser,
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

router.post('/signin', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const {
    errors,
    isValid
  } = validateSigninInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({
    email
  })
    .then(user => {
      console.log(user, 'user');
      if (!user) {
        errors.email = 'User not found';
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user._id,
              fname: user.fname,
              isBusinessUser: user.isBusinessUser,

            };
            jwt.sign(
              payload,
              process.env.SECRET_KEY, {
                //change the time later leave for testing now
                expiresIn: 9999
              },
              (err, token) => {
                console.log(token);
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  userId: user._id,
                  isBusinessUser: user.isBusinessUser
                });
              });
          } else {
            errors.password = 'password incorrect';
            return res.status(400).json(errors);
          }
        });
    });
});

router.get('/current', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  res.json({
    id: req.user.id,
    fname: req.user.fname,
    email: req.user.email
  });
});



module.exports = router;