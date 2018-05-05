import React, { Component } from 'react';
import { Input, Button } from '../../elements';
import { loginUser } from './actions';
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

    loginUser() {
        this.props.login({
            username: this.username.value,
            password: this.password.value
        })
    }

    render() {
        const { loading } = this.props
        return (
            <Container>
                <Title>Login</Title>
                {loading && <span>loading</span>}
                <Input placeholder="Username" type="text" name="username" innerRef={u => this.username = u} />
                <Input placeholder="Password" type='password' name="password" innerRef={p => this.password = p} />
                <Button onClick={() => this.loginUser()}>Submit</Button>
                <div>
                    Or {' '}
                    <Link to="signup">Signup</Link>
                </div>
            </Container>
        )
    }
}

const mapState = ({ login }) => login

const mapDispatch = (dispatch) => ({
    login: (payload) => dispatch(loginUser(payload)),
    fetchUser: () => dispatch(fetchUser())
});

export default connect(mapState, mapDispatch)(Login);