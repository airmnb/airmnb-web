import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authCheck } from '../authentication/actions';
import { Logo } from '../../elements';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store';
import { Home } from '../home/component';
import Login from '../login/component';
import Signup from '../signup/component';
import config from '../../config';
import { getUrlParams } from '../../services/routerService';


const PrivateContainer = ({match}) =>    
    <div>
        <Route path={`${match.path}/home`} component={Home} />
        <Redirect to={`${match.path}/home`} component={Home} />
    </div>

const PublicContainer = () =>{
    let redirect = '';

    if(!window.location.search.match(/redirect=/ig) && !config.publicUrls.includes(config.publicUrls)) {
        redirect = window.location.pathname;
    }
    return (<div>
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Logo colored={true} />
        </div>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to={`/login${redirect?'?redirect='+redirect: ''}`} />
        </Switch>
    </div>)
}

export class AppContainer extends Component {
    componentWillMount() {
        this.props.authCheck()
    }
    render() {
        const { auth } = this.props;
        const redirect = getUrlParams(window.location.href)['redirect'];
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