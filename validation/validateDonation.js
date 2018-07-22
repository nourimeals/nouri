'use strict';

const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateLoginInput(data) {
  let errors = {}


  if (data.amount === 0 ) {
    errors.amount = 'Amount must be greater then 0'
  }



  return {
    errors,
    isValid: isEmpty(errors)
  }
}