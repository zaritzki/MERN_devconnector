const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // if its empty or null then set '' string
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // do the checking
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}