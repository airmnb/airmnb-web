import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Input, Button, Title, Container, Muted, Anchor } from '../../shared';
import { signupNativeUser, signupCheckUser } from './actions';



class Signup extends Component {
    render() {
        const { signup } = this.props;
        return (
            <Container>
                <Title>Signup</Title>
                <Input placeholder="account" type="text" name="accountName" onChange={() => this.props.validateAccountName(this.accountName.value)} innerRef={a=> this.accountName = a} />
                <Input placeholder="password" type='password' name="password" innerRef={p => this.password = p} />
                <Button loading={signup.loading} primary="true" onClick={() => this.props.signupUser(this.accountName.value, this.password.value)}>Submit</Button>
                <div className="align-center margin-top-20px">
                    <Muted>Already a Customer?</Muted>
                    <br /><Anchor to="/login">Log In now</Anchor>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({signup}) => ({signup});

const mapDispatchToProps = (dispatch) => ({
    signupUser: (accountName, password) => dispatch(signupNativeUser(accountName, password)),
    validateAccountName: (payload) => dispatch(signupCheckUser(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);