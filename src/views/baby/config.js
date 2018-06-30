import isEmpty from 'validator/lib/isEmpty';

export default {
    nickName: {
        label: 'Nick Name',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Input field is required.'
            }
        ]
    },
    fullName: {
        label: 'Full Name',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Input field is required.'
            }
        ]
    },
    gender: {
        label: 'Gender',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Input field is required.'
            },
        ]
    },
    info: {
        label: 'Information'
    },
    dob: {
        label: 'Date of Birth',
        validations: [
            {
                method: isEmpty,
                validWhen: false,
                message: 'Please provide an Email.'
            }
        ]
    }
}