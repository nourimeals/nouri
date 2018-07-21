'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,

  },
  lname: {
    type: String,

  },
  streetAddress: {
    type: String,

  },
  city: {
    type: String,

  },
  state: {
    type: String,

  },
  zip: {
    type: String,

  },
  phone: {
    type: String,

  },
  signupDate: {
    type: Date,
    default: Date.now

  },
  isBusinessUser: {
    type: Boolean,

  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

});


const User = mongoose.model('user', userSchema);

module.exports = User;