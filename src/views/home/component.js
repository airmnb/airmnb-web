import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../authentication/actions';

export class Home extends Component {
    componentWillMount() {
    }

    render() {
        return <button onClick={this.props.logout}>Logout Here!</button>
    }
}

const mapDispatch = (dispatch) => ({
    logout: dispatch(authLogout())
});

export default connect(null, mapDispatch)(Home);