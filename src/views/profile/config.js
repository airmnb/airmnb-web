import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import isEmail from 'validator/lib/isEmail';

export default {
    accountName: {
        label: 'Account Name',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Please provide an Account Name.'
            },
            {
                method: isLength,
                args: [{min: 8, max: 30}],
                validWhen: true,
                message: 'Account Name should be between 8 and 30 characters.'
            }
        ]
    },
    fullName: {
        label: 'Full Name',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Please provide an Full Name.'
            },
            {
                method: isLength,
                args: [{min: 8, max: 30}],
                validWhen: true,
                message: 'Full Name should be between 8 and 30 characters.'
            }
        ]
    },
    email: {
        label: 'Email',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Please provide an Email.'
            },
            {
                method: isEmail,
                validWhen: true,
                message: 'Please provide a valid email.'
            }
        ]
    },
    phone: {
        label: 'Mobile'
    },
    dob: {
        label: 'Date of Birth'
    },
    gender: {
        label: 'Gender'
    }

}