'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poolSchema = new Schema({
  total : {type: Number, required: true},
});

const Pool = mongoose.model('pool', poolSchema);

module.exports = Pool;