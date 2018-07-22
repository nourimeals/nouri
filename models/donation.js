'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  amount : {type: Number, required: true},
  user : {type: Schema.Types.ObjectId, ref: 'user'},
  date : {type: Date, default: Date.now},

});

const Donation = mongoose.model('donation', donationSchema);

module.exports = Donation;