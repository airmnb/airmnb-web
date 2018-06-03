import React, { Component } from 'react';
import { Input, Button, GoggleBtn, Container, Title, Anchor, Muted } from '../../shared';
import { loginNativeUser, loginGoogleUser } from './actions';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { login } = this.props
        return (
            <Container>
                <Title>Log In</Title>
                <Input placeholder="Account" type="text" name="accountName" innerRef={u => this.accountName = u} />
                <Input placeholder="Password" type='password' name="password" innerRef={p => this.password = p} />
                <Button primary loading={login.nativeLoading} onClick={() => this.props.loginNativeUser(this.accountName.value, this.password.value)}>Submit</Button>
                <div className="align-center " style={{padding: '20px 0'}}>
                    <span style={{display: 'inline-block', width: '30px', background: 'white',zIndex: '1', position: 'relative'}}>or</span>
                    <div className="separator"></div>
                </div>
                <GoggleBtn loading={login.googleLoading} onClick={this.props.loginGoogleUser}/>
                <div className="align-center margin-top-20px">
                    <Muted>New Customer?</Muted>
                    <br /><Anchor to="/signup">Sign Up now</Anchor>
                </div>
            </Container>
        )
    }
}

const mapState = ({ login, user }) => ({ login, user })

const mapDispatch = (dispatch) => ({
    loginNativeUser: (accountName, password) => dispatch(loginNativeUser(accountName, password)),
    loginGoogleUser: () => dispatch(loginGoogleUser())
});

export default connect(mapState, mapDispatch)(Login);