'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  restaurant : {type: Number, required: true},
  date : {type: Date, default: Date.now},
  mealCost: {type: Number, required: true},
  patron: {type: String },
  story: {type: String},
  patronEmail:{type: String},
  // photo: AWS LINK How do?
  // recipt: Aws link
});

const Meals = mongoose.model('meal', mealSchema);

module.exports = Meals;