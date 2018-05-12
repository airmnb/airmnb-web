import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Logo } from '../../elements'
import { authCheck } from '../authentication/actions';

export class AppContainer extends Component {
    componentWillMount() {
        this.props.authCheck()
    }
    render() {
        const { auth, children } = this.props;
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <Logo colored={true} />
                </div>
                {
                    (auth.loading) ?
                        <div className="align-center">loading</div> :
                        children
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