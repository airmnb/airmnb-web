import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authCheck } from '../authentication/actions';
import { Logo, Header, Nav } from '../../shared';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store';
import { Home } from '../home/component';
import Login from '../login/component';
import Signup from '../signup/component';
import { Profile } from '../profile/component';
import config from '../../config';
import { getUrlParams } from '../../services/routerService';

const Content = styled.section`
    padding: 70px;
`


const tabs = [
    {
        url: '/platform/home',
        label: 'Home'
    },
    {
        url: '/platform/profile',
        label: 'Profile'
    },
]

const PrivateContainer = ({match}) =>
    <div>
        <Header>
            <Nav tabs={tabs} />
        </Header>
        <Content>
            <Switch>
                <Route path={`${match.path}/home`} component={Home} />
                <Route path={`${match.path}/profile`} component={Profile} />
                <Redirect to={`${match.path}/home`} component={Home} />
            </Switch>
        </Content>
    </div>

const PublicContainer = () => {
    let redirect = '';

    if(!window.location.search.match(/r=/ig) && !config.publicUrls.includes(config.publicUrls)) {
        redirect = window.location.pathname;
    }
    return (<div>
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Logo colored={true} />
        </div>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to={`/login${redirect?'?r='+redirect: ''}`} />
        </Switch>
    </div>)
}

export class AppContainer extends Component {
    componentWillMount() {
        this.props.authCheck()
    }
    render() {
        const { auth } = this.props;
        const redirect = getUrlParams(window.location.href)['r'];
        return (
            <div>
                {   
                    (auth.loading) ? 
                        (
                        <div style={{ textAlign: 'center', marginTop: '100px' }}>
                            <Logo colored={true} />
                            <div className="align-center">loading</div>
                        </div>
                        ) :
                        <ConnectedRouter history={history}>
                            {
                                auth.isAuthenticated?
                                <Switch>
                                    <Route path="/platform" component={PrivateContainer} />
                                    <Redirect to={redirect? redirect: '/platform'} />
                                </Switch>:
                                <Route path="/" component={PublicContainer} />
                            }
                        </ConnectedRouter>
                }
            </div>
        )

    }
}

const mapState = ({ auth }) => ({ auth })

const mapDispatch = (dispatch) => ({
    authCheck: () => dispatch(authCheck())
})

export default connect(mapState, mapDispatch)(AppContainer);