import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { Input, Button, GoggleBtn, Container, Title, Anchor, Muted } from '../../shared';
import { loginNativeUser, loginGoogleUser } from './actions';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { login } = this.props
        return (
            <Container>
                <Title>{this.context.t('Log In')}</Title>
                <Input placeholder={this.context.t('Account')} type="text" name="accountName" innerRef={u => this.accountName = u} />
                <Input placeholder={this.context.t('Password')} type='password' name="password" innerRef={p => this.password = p} />
                <Button primary loading={login.nativeLoading} onClick={() => this.props.loginNativeUser(this.accountName.value, this.password.value)}>{this.context.t('Submit')}</Button>
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
}

Login.contextTypes = {
    t: PropTypes.func.isRequired
}

const mapState = ({ login, user }) => ({ login, user })

const mapDispatch = (dispatch) => ({
    loginNativeUser: (accountName, password) => dispatch(loginNativeUser(accountName, password)),
    loginGoogleUser: () => dispatch(loginGoogleUser())
});

export default connect(mapState, mapDispatch)(Login);