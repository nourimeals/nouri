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
  donations: [{
    donationIds: {
      type: Schema.Types.ObjectId,
      ref: 'donation',
    }
  }],

  totalDonations: {
    type: Number,

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
  },

});


const User = mongoose.model('user', userSchema);

module.exports = User;