import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormValidator } from '../../services/formValidator';
import { Title, InputControl, FormButtonsGroup, RadioButtonGroupControl, DateControl, TextareaControl } from '../../shared';
import { saveBaby } from './actions';
import { gender as genderEnum } from '../../enums';
import c from './config';
import PropTypes from 'prop-types';

class BabiesContainer extends Component {

    submitted = false;
    validator = new FormValidator(c);

    static contextTypes = {
        t: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            payload: {
                nickName: '',
                fullName: '',
                gender: '',
                dob: '',
                info: '',
                creatorId: props.auth.user.userId,
            },
            validation: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange(name, value) {
        this.setState((prevState) => ({
            ...prevState,
            payload: {
                ...prevState.payload,
                [name]: value
            }
        }), this.validate);
    }

    validate(cb) {
        if(!this.submitted) {
            return;
        }
        this.setState({validation: this.validator.validate(this.state.payload)}, cb)
    }

    render() {
        // const { baby } = this.props;
        const { validation } = this.state;
        return (
        <div>
            <Title>{this.context.t('Babies')}</Title>
            <form onSubmit={this.submit}>
                <InputControl config={c.nickName} validation={validation.nickName} onChange={this.handleInputChange} type="text" name="nickName" />
                <InputControl config={c.fullName} validation={validation.fullName} onChange={this.handleInputChange} type="text" name="fullName" />
                <DateControl config={c.dob} onChange={this.handleInputChange} name='dob' type='text'/>
                <RadioButtonGroupControl config={c.gender} onChange={this.handleInputChange} name='gender' items={genderEnum} />
                <TextareaControl config={c.info} onChange={this.handleInputChange} name='info' />
                <FormButtonsGroup
                        primaryLabel='Save'
                        disablePrimary={false}
                        secondaryLabel='Cancel'
                        disableSecondary={false}
                />
            </form>
        </div>
        )
    }

    submit(ev) {
        ev.preventDefault();
        this.submitted = true;
        this.validate(() => {
            if(!this.state.validation.isValid) {
                return
            }
            this.props.saveBaby(this.state.payload);
        });
    }

}

const mapState = ({baby, auth}) => ({
    baby,
    auth
})

const mapDispatch = (dispatch) => ({
    saveBaby: (payload) => dispatch(saveBaby(payload))
})

export default connect(mapState, mapDispatch)(BabiesContainer);