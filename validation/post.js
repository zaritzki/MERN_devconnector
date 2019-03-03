const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    let errors = {};

    // if its empty or null then set '' string
    data.text = !isEmpty(data.text) ? data.text : '';

    // do the checking
    if(!Validator.isLength(data.text, { min: 10, max: 300 })){
        errors.text = 'Post must be between 10 and 300 characters';
    }

    if(Validator.isEmpty(data.text)){
        errors.text = 'Text is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}