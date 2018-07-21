'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema  = new Schema({
  user: {
    type : Schema.Types.ObjectId,
    ref:'users'
  },
  
  donations: [{
    donationIds: {
      type: Schema.Types.ObjectId,
      ref: 'donation',
    }
  }],

  totalDonations: {
    type: Number,

  }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
