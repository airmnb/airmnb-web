import React, { Component } from 'react';
import { Title, InputControl, Muted, DateControl, FormButtonsGroup, RadioButtonGroupControl, Tag } from '../../shared';
import { connect } from 'react-redux';
import { FormValidator } from '../../services/formValidator';
import validationRules from './validationRules';
import { saveUser, cancelUser } from './actions';
import { RadioButtonGroup } from '../../shared/elements/RadioButton';

export class ProfileRaw extends Component {

    submitted = false;
    validator = new FormValidator(validationRules);

    constructor(props) {
        super(props)
        const { user } = this.props;
        this.state = {
            ...user,
            accountName: user.accountName || '',
            fullName: user.fullName || '',
            phone: user.phone || '',
            email: user.email || '',
            dob: user.dob || '',
            gender: user.gender,
            validation: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    validate(cb) {
        if(!this.submitted) {
            return;
        }
        this.setState({validation:this.validator.validate(this.state)}, cb);
    }

    componentWillMount() {
        this.validate();
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        }, this.validate);
    }

    render() {
        const { validation } = this.state;
        return (
            <div>
                <div>
                    <Title>Account Profile</Title>
                    <Tag># {this.state.userId}</Tag>
                    <form onSubmit={(ev) => {ev.preventDefault(); this.submit(this.props.saveUser)}}>
                        <InputControl validation={validation.accountName} onChange={this.handleInputChange} name='accountName' label='Account Name' type='text' value={this.state.accountName}/>
                        <InputControl validation={validation.fullName} onChange={this.handleInputChange} name='fullName' label='Full Name' type='text' value={this.state.fullName}/>
                        <InputControl validation={validation.phone} onChange={this.handleInputChange} name='phone' label='Mobile' type='text' value={this.state.phone}/>
                        <InputControl validation={validation.email} onChange={this.handleInputChange} name='email' label='Email' type='text' value={this.state.email}/>
                        <DateControl validation={validation.dob} onChange={this.handleInputChange} name='dob' label='Date of Birth' type='text' value={this.state.dob}/>
                        <RadioButtonGroupControl validation={validation.gender} onChange={this.handleInputChange} name='gender' label='Gender' value={this.state.gender} items={[{label: 'male', value: 1}, {label: 'female', value: 2}]} />
                        <FormButtonsGroup
                            primaryLabel='Save'
                            disablePrimary={false}
                            secondaryLabel='Cancel'
                            disableSecondary={false}
                            onSecondaryClick={this.props.handleCancel}
                        />
                    </form>
                </div>
            </div>
        )
    }

    submit(save) {
        this.submitted = true;
        this.validate(() => {
            if(!this.state.validation.isValid) {
                return
            }
        });
        this.props.saveUser(this.state)
    }
}

const mapStateToProps = ({auth}) => ({
    user: auth.user
});

const mapDispatchToProps = (dispatch) => ({
    saveUser: (payload) => dispatch(saveUser(payload)),
    handleCancel: () => dispatch(cancelUser())
});

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileRaw);