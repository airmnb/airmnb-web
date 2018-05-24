import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../authentication/actions';

export class Home extends Component {

    render() {
        return <div>
            Home
        </div>
    }
}

const mapDispatch = (dispatch) => ({
    logout: dispatch(authLogout())
});

export default connect(null, mapDispatch)(Home);