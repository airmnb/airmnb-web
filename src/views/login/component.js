import React, { Component } from 'react';
import { Input, Button, GoggleBtn } from '../../elements';
import { loginNativeUser, loginGoogleUser } from './actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    margin: auto;
    max-width: 500px;
    margin-top: 100px;
    padding: 20px;
    animation: fadein .5s;
    @keyframes fadein {
        from { opacity: 0; top: 20px; }
        to   { opacity: 1; top: 0; }
    }
    .separator {
        position: relative;
        border-top: 1px solid black;
        top: -8px;
    }
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 50px;
    text-transform: uppercase;
    margin: 0;
`;


class Login extends Component {

    loginUser(provider) {
        switch(provider) {
            case 'google':
                return this.props.loginGoogleUser()
            default:
                return this.props.loginNativeUser({
                    username: this.username.value,
                    password: this.password.value
                });
        }
    }

    render() {
        const { login, user } = this.props
        return (
            <Container>
                <Title>Login</Title>
                {login.loading && <span>loading</span>}
                <Input placeholder="Username" type="text" name="username" innerRef={u => this.username = u} />
                <Input placeholder="Password" type='password' name="password" innerRef={p => this.password = p} />
                <Button onClick={() => this.loginUser('native')}>Submit</Button>
                <div className="align-center " style={{padding: '20px 0'}}>
                    <span style={{display: 'inline-block', width: '30px', background: 'white',zIndex: '1', position: 'relative'}}>or</span>
                    <div className="separator"></div>
                </div>
                <GoggleBtn disabled={user.loading} onClick={() => this.loginUser('google')}/>
            </Container>
        )
    }
}

const mapState = ({ login, user }) => ({ login, user })

const mapDispatch = (dispatch) => ({
    loginNativeUser: (payload) => dispatch(loginNativeUser(payload)),
    loginGoogleUser: () => dispatch(loginGoogleUser())
});

export default connect(mapState, mapDispatch)(Login);