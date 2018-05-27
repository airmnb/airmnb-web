import React, { Component } from 'react';
import { Title, InputControl, Toggle, Muted } from '../../shared';
import { connect } from 'react-redux';

export class ProfileRaw extends Component {

    render() {
        const { user } = this.props;
        return (
            <div>
                <div>
                    <Title>Account Profile</Title>
                    <Muted>{user.userId}</Muted>
                    <InputControl label='Account Name' type='text' />
                </div>
                <div>
                    <Toggle value={true} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => ({
    user: auth.user
});

export const Profile = connect(mapStateToProps)(ProfileRaw);