import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogout } from '../authentication/actions';
import { Nav, Header } from '../../elements';

export class Home extends Component {
    tabs = [
        {
            url: '/profile',
            label: 'Profile'
        },
        {
            url: '/tab2',
            label: 'Tab2'
        },
        {
            url: '/tab3',
            label: 'Tab3'
        }
    ]
    componentWillMount() {
    }

    render() {
        return <div>
            <Header>
                {/* <Logo /> */}
                <Nav tabs={this.tabs} />
            </Header>
        </div>
    }
}

const mapDispatch = (dispatch) => ({
    logout: dispatch(authLogout())
});

export default connect(null, mapDispatch)(Home);