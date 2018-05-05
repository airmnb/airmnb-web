import React from 'react';
// import { Route } from 'react-router'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actions from './actions';

export class PrivateRoute extends React.Component {
    componentWillMount() {
        
    }
    render() {
        const {
            isAuthenticated,
            component: Component,
            loading,
            check,
            authCheck,
            authSuccess,
            ...props
        } = this.props;

        /* show the component if the user authenticated,
        server should return 401 if the user is not authenticated
        in that case the response will get intercepted and the user
        get logged out. */
        if(localStorage.getItem('token') && !isAuthenticated) {
            authSuccess();
            return null;
        }
        if(isAuthenticated) {
            return <Component {...props} />;
        }

        return <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
        }} />

    }
}

const mapState = ({auth}) => auth;

const mapDispatch = (dispatch) => ({
    authSuccess: () => dispatch(actions.authSuccess()),
    authCheck: () => dispatch(actions.authCheck())
});

export default connect(mapState, mapDispatch)(PrivateRoute);