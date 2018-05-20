import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Input, Button, H1, Container } from '../../elements';
import { signupNativeUser, signupCheckUser } from './actions';



class Signup extends Component {
    render() {
        return (
            <Container>
                <H1>Signup</H1>
                <Input placeholder="accountName" type="text" name="accountName" onChange={() => this.props.validateAccountName(this.accountName.value)} innerRef={a=> this.accountName = a} />
                <Input placeholder="password" type='password' name="password" innerRef={p => this.password = p} />
                <Button primary onClick={() => this.props.signupUser(this.accountName.value, this.password.value)}>Submit</Button>
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