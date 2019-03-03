const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
    let errors = {};

    // if its empty or null then set '' string
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    // do the checking
    if(Validator.isEmpty(data.title)){
        errors.title = 'Job Title is required';
    }

    if(Validator.isEmpty(data.company)){
        errors.company = 'Company is required';
    }

    if(Validator.isEmpty(data.from)){
        errors.from = 'From date is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}