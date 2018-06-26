import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { InputControl, Button, GoggleBtn, Container, Title, Anchor, Muted } from '../../shared';
import { loginNativeUser, loginGoogleUser } from './actions';
import { connect } from 'react-redux';
import c from './config';
import { FormValidator } from '../../services/formValidator';

class Login extends Component {
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
        }, this.validate);
    }

    validate(cb) {
        if(!this.submitted) {
            return;
        }
        this.setState({validation: this.validator.validate(this.state)}, cb);
    }

    render() {
        const { login } = this.props;
        const { validation } = this.state;
        return (
            <Container>
                <Title>{this.context.t('Log In')}</Title>
                <form onSubmit={this.submit}>
                    <InputControl config={c.accountName} validation={validation.accountName} onChange={this.handleInputChange} type="text" name="accountName" />
                    <InputControl config={c.password} validation={validation.password} onChange={this.handleInputChange} type='password' name="password" />
                    <Button primary loading={login.nativeLoading}>{this.context.t('Submit')}</Button>
                </form>
                <div className="align-center " style={{padding: '20px 0'}}>
                    <span style={{display: 'inline-block', width: '40px', background: 'white', zIndex: 1, position: 'relative', textAlign: 'center' }}>{this.context.t('or')}</span>
                    <div className="separator"></div>
                </div>
                <GoggleBtn label={this.context.t('Log In With Google')} loading={login.googleLoading} onClick={this.props.loginGoogleUser}/>
                <div className="align-center margin-top-20px">
                    <Muted>{this.context.t('New Customer?')}</Muted>
                    <br /><Anchor to="/signup">{this.context.t('Sign Up now')}</Anchor>
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
            this.props.loginNativeUser(this.state);
        });
    }
}

Login.contextTypes = {
    t: PropTypes.func.isRequired
}

const mapState = ({ login, user }) => ({ login, user })

const mapDispatch = (dispatch) => ({
    loginNativeUser: (payload) => dispatch(loginNativeUser(payload)),
    loginGoogleUser: () => dispatch(loginGoogleUser())
});

export default connect(mapState, mapDispatch)(Login);