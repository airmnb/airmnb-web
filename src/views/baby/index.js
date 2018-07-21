import React, { Component } from 'react';
import BabiesList from './babiesList';
import BabyForm from './form';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

class BabiesContainer extends Component {

    componentWillMount() {

    }

    render() {
        const {match} = this.props;
        return (
            <div>
                <Switch>
                    <Route path={`${match.path}/register`} component={BabyForm} />
                    <Route path={`${match.path}/:babyId`} component={BabyForm} />
                    <Route path={`${match.path}`} component={BabiesList} />
                    <Redirect to={`${match.path}`} component={BabiesList} />
                </Switch>
            </div>
        )
    }

}

export default connect(null, null)(BabiesContainer);