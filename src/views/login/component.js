import React, {Component} from 'react';
import { Input, Button } from 'airmnb-react-components';
import { loginUser } from './actions';
import { connect } from 'react-redux';

class Login extends Component {

    loginUser() {
        this.props.login({
            username: this.username.value,
            password: this.password.value
        })
    }

    render() {
        const {loading} = this.props
        return (
            <div>
                {loading && <span>loading</span>}
                <Input type="text" innerRef={u => this.username = u } />
                <Input type='text' innerRef={p => this.password = p } />
                <Button onClick={() => this.loginUser()}>Submit</Button>
            </div>
        )
    }
}

const mapState = ({login}) => login

const mapDispatch = (dispatch) => ({
    login: (payload) => dispatch(loginUser(payload))
});

export default connect(mapState, mapDispatch)(Login);