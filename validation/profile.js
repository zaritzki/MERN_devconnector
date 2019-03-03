const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    // if its empty or null then set '' string
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    // do the checking
    if( !Validator.isLength(data.handle, { min: 2, max: 40 }) ) {
        errors.handle = 'Handle needs to between 2 and 40 characters';
    }

    if( Validator.isEmpty(data.handle) ) {
        errors.handle = 'Profile handle is required';
    }

    if( Validator.isEmpty(data.status) ) {
        errors.status = 'Status is required';
    }

    if( Validator.isEmpty(data.skills) ) {
        errors.skills = 'Skills is required';
    }

    // Not required fields, but if there's a value check the URL format
    if( !isEmpty(data.website) ) {
        if( !Validator.isURL(data.website) ) {
            errors.website = 'Not a valid URL';
        }
    }

    if( !isEmpty(data.youtube) ) {
        if( !Validator.isURL(data.youtube) ) {
            errors.youtube = 'Not a valid URL';
        }
    }

    if( !isEmpty(data.twitter) ) {
        if( !Validator.isURL(data.twitter) ) {
            errors.twitter = 'Not a valid URL';
        }
    }

    if( !isEmpty(data.linkedin) ) {
        if( !Validator.isURL(data.linkedin) ) {
            errors.linkedin = 'Not a valid URL';
        }
    }

    if( !isEmpty(data.instagram) ) {
        if( !Validator.isURL(data.instagram) ) {
            errors.instagram = 'Not a valid URL';
        }
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
}