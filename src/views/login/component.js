import React, { Component } from 'react';
import { Input, Button, Logo } from '../../elements';
import { loginNativeUser, loginGoogleUser } from './actions';
import { fetchUser } from '../user/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: auto;
    max-width: 500px;
    margin-top: 100px;
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 50px;
    text-transform: uppercase;
    margin: 0;
`;


class Login extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }

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
                <div style={{textAlign: 'center', marginBottom: '100px'}}>
                <Logo colored={true} />
                </div>
                <Title>Login</Title>
                {login.loading && <span>loading</span>}
                <Input placeholder="Username" type="text" name="username" innerRef={u => this.username = u} />
                <Input placeholder="Password" type='password' name="password" innerRef={p => this.password = p} />
                <Button onClick={() => this.loginUser('native')}>Submit</Button>
                <Button disabled={user.loading} onClick={() => this.loginUser('google')}>{user.loading? 'loading...': 'Login In With google'}</Button>
                <div>
                    Or {' '}
                    <Link to="signup">Signup</Link>
                </div>
            </Container>
        )
    }
}

const mapState = ({ login, user }) => ({ login, user })

const mapDispatch = (dispatch) => ({
    loginNativeUser: (payload) => dispatch(loginNativeUser(payload)),
    loginGoogleUser: () => dispatch(loginGoogleUser()),
    fetchUser: () => dispatch(fetchUser())
});

export default connect(mapState, mapDispatch)(Login);