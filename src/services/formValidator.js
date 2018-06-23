export class FormValidator {

    constructor(config) {
        this.validations = this.extractValidations(config);
    }

    extractValidations(config) {
        const validations = [];
        for (const key in config) {
            if (config[key].validations) {
                for (const validation of config[key].validations) {
                    validations.push({
                        field: key,
                        ...validation
                    })
                }
            }
        }
        return validations;
    }

    validate(state) {
        // start out assuming valid
        let validation = this.valid();
        // for each validation rule
        this.validations.forEach(rule => {

            // if the field isn't already marked invalid by an earlier rule
            if (!validation[rule.field].isInvalid) {
                // determine the field value, the method to invoke and
                // optional args from the rule definition
                const field_value = state[rule.field] ? state[rule.field].toString() : '';
                const args = rule.args || [];

                if (rule.method(field_value, ...args, state) !== rule.validWhen) {
                    validation[rule.field] = {
                        isInvalid: true,
                        message: rule.message
                    }
                    validation.isValid = false;
                }
            }
        });
        return validation;
    }

    valid() {
        const validation = {};

        this.validations.map(rule => (validation[rule.field] = { isInvalid: false, message: '' }));

        return { isValid: true, ...validation };
    }

}