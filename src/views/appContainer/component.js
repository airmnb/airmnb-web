import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authCheck, authLogout } from '../authentication/actions';
import { Logo, Header, Nav, Select } from '../../shared';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../../store';
import { Home } from '../home/component';
import Login from '../login/component';
import Signup from '../signup/component';
import { Profile } from '../profile/component';
import config from '../../config';
import { getUrlParams } from '../../services/routerService';
import { setLanguage } from "./actions"
import BabiesContainer from '../baby'
import PropTypes from 'prop-types';

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
    {
        url: '/platform/babies',
        label: 'Babies'
    },
]

const PrivateContainer = ({match, onSigoutClicked}) =>
    <div>
        <Header>
            <Nav tabs={tabs} onSigoutClicked={onSigoutClicked}/>
        </Header>
        <Content>
            <Switch>
                <Route path={`${match.path}/home`} component={Home} />
                <Route path={`${match.path}/profile`} component={Profile} />
                <Route path={`${match.path}/babies`} component={BabiesContainer} />
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

    lang = localStorage.getItem('lang') || 'en';

    constructor(props) {
        super(props)
        this.state = {
            lang: this.lang
        }
    }

    componentWillMount() {
        this.props.authCheck();
        this.props.setLanguage(this.lang)
    }
    render() {
        const { auth, setLanguage } = this.props;
        const redirect = getUrlParams(window.location.href)['r'];
        return (
            <div>
                <div style={{padding: '0 20px', textAlign: 'right'}}>
                    <Select collection={[{id: 'en', label: 'English'}, {id: 'zh', label: '中文 (简体)'}]} defaultValue={this.state.lang} onChange={setLanguage} />
                </div>
                {
                    (auth.loading) ?
                        (
                        <div style={{ textAlign: 'center', marginTop: '60px' }}>
                            <Logo colored={true} />
                            <div className="align-center">loading</div>
                        </div>
                        ) :
                        <ConnectedRouter history={history}>
                            {
                                auth.isAuthenticated?
                                <Switch>
                                    <Route path="/platform" render={(props) => <PrivateContainer onSigoutClicked={this.props.authLogout} {...props}/>} />
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

AppContainer.contextTypes = {
    t: PropTypes.func.isRequired
}

const mapState = ({ auth, i18nState }) => ({
    auth,
    i18nState
})

const mapDispatch = (dispatch) => ({
    authCheck: () => dispatch(authCheck()),
    authLogout: () => dispatch(authLogout()),
    setLanguage: (lang) => dispatch(setLanguage(lang))
})

export default connect(mapState, mapDispatch)(AppContainer);