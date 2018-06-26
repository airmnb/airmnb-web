import React, { Component } from 'react';
import { Title, InputControl, DateControl, FormButtonsGroup, RadioButtonGroupControl, Tag } from '../../shared';
import { connect } from 'react-redux';
import { FormValidator } from '../../services/formValidator';
import c from './config';
import { saveUser, cancelUser } from './actions';

export class ProfileRaw extends Component {

    submitted = false;
    validator = new FormValidator(c);

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
                        <InputControl config={c.accountName} validation={validation.accountName} onChange={this.handleInputChange} name='accountName' type='text' value={this.state.accountName}/>
                        <InputControl config={c.fullName} validation={validation.fullName} onChange={this.handleInputChange} name='fullName' type='text' value={this.state.fullName}/>
                        <InputControl config={c.phone} onChange={this.handleInputChange} name='phone' type='text' value={this.state.phone}/>
                        <InputControl config={c.email} validation={validation.email} onChange={this.handleInputChange} name='email' type='text' value={this.state.email}/>
                        <DateControl config={c.dob} onChange={this.handleInputChange} name='dob' type='text' value={this.state.dob}/>
                        <RadioButtonGroupControl config={c.gender} onChange={this.handleInputChange} name='gender' value={this.state.gender} items={[{label: 'male', value: 1}, {label: 'female', value: 2}]} />
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

    submit() {
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