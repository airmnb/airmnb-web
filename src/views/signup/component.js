import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import c from './config';
import { FormValidator } from '../../services/formValidator';
import { InputControl, Button, Title, Container, Muted, Anchor } from '../../shared';
import { signupNativeUser, signupCheckUser } from './actions';



class Signup extends Component {
    submitted = false;
    validator= new FormValidator(c);

    static contextTypes = {
        t: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            accountName: '',
            password: '',
            validation: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        }, (state) => {
            this.validate();
            if(name === 'accountName') {
                this.props.validateAccountName(value);
            }
        });

    }

    validate(cb) {
        if(!this.submitted) {
            return;
        }
        this.setState({validation: this.validator.validate(this.state)}, cb);
    }

    render() {
        const { signup } = this.props;
        const { validation } = this.state;
        return (
            <Container>
                <Title>Signup</Title>
                <form onSubmit={this.submit}>
                    <InputControl config={c.accountName} validation={validation.accountName} onChange={this.handleInputChange} type="text" name="accountName" />
                    <InputControl config={c.password} validation={validation.password} onChange={this.handleInputChange} type='password' name="password" />
                    <Button loading={signup.loading} primary="true">{this.context.t('Submit')}</Button>
                </form>
                <div className="align-center margin-top-20px">
                    <Muted>{this.context.t('Already a Customer?')}</Muted>
                    <br /><Anchor to="/login">{this.context.t('Log In now')}</Anchor>
                </div>
            </Container>
        )
    }

    submit(ev) {
        ev.preventDefault();
        this.submitted = true;
        this.validate(() => {
            if(!this.state.validation.isValid) {
                return
            }
        });
        this.props.signupUser(this.state);
    }
}

Signup.contextTypes = {
    t: PropTypes.func.isRequired
}

const mapStateToProps = ({signup}) => ({signup});

const mapDispatchToProps = (dispatch) => ({
    signupUser: (payload) => dispatch(signupNativeUser(payload)),
    validateAccountName: (payload) => dispatch(signupCheckUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);