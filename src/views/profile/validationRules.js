import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import isEmail from 'validator/lib/isEmail';

export default [
    {
        field: 'accountName',
        method: isEmpty,
        validWhen: false,
        message: 'Please provide an Account Name.'
    },
    {
        field: 'accountName',
        method: isLength,
        args: [{min: 8, max: 30}],
        validWhen: true,
        message: 'Account Name should be between 8 and 30 characters.'
    },
    {
        field: 'fullName',
        method: isEmpty,
        validWhen: false,
        message: 'Please provide an Full Name.'
    },
    {
        field: 'fullName',
        method: isLength,
        args: [{min: 8, max: 30}],
        validWhen: true,
        message: 'Full Name should be between 8 and 30 characters.'
    },
    {
        field: 'phone',
        method: isEmpty,
        validWhen: false,
        message: 'Please provide an Mobile.'
    },
    {
        field: 'email',
        method: isEmpty,
        validWhen: false,
        message: 'Please provide an Email.'
    },
    {
        field: 'email',
        method: isEmail,
        validWhen: true,
        message: 'Please provide a valid email.'
    }
]