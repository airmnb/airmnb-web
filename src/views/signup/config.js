import isEmpty from 'validator/lib/isEmpty';

export default {
    accountName: {
        label: 'Account',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'input Field is required.'
            }
        ]
    },
    password: {
        label: 'Password',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'input Field is required.'
            }
        ]
    }
};