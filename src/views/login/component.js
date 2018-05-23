import React, { Component } from 'react';
import { Input, Button, GoggleBtn, H1, Container } from '../../elements';
import { loginNativeUser, loginGoogleUser } from './actions';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        const { login } = this.props
        return (
            <Container>
                <H1>Login</H1>
                {login.loading && <span>loading</span>}
                <Input placeholder="accountName" type="text" name="accountName" innerRef={u => this.accountName = u} />
                <Input placeholder="Password" type='password' name="password" innerRef={p => this.password = p} />
                <Button primary onClick={() => this.props.loginNativeUser(this.accountName, this.password)}>Submit</Button>
                <div className="align-center " style={{padding: '20px 0'}}>
                    <span style={{display: 'inline-block', width: '30px', background: 'white',zIndex: '1', position: 'relative'}}>or</span>
                    <div className="separator"></div>
                </div>
                <GoggleBtn onClick={this.props.loginGoogleUser}/>
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