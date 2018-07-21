import React, { Component } from 'react';
import styled from 'styled-components';

export const RoundBtn = styled.button`
    outline: none;
    color: black;
    border: 1px solid black;
    padding: 6px 28px;
    border-radius: 40px;
    font-size: .8rem;
    transition: width .3 linear;
}`;

export class DeleteBtn extends Component {

    state = {
        showConfirmMessage: false
    }

    constructor(props) {
        super(props);
        this.showConfirmMessage = this.showConfirmMessage.bind(this);
        this.hideConfirmMessage = this.hideConfirmMessage.bind(this);
    }

    showConfirmMessage() {
        this.setState({ showConfirmMessage: true });
    }

    hideConfirmMessage() {
        this.setState({ showConfirmMessage: false });
    }

    render() {
        const { confirmMessage, onConfirmClick } = this.props;
        const { showConfirmMessage } = this.state;

        return (
            <RoundBtn>
                {
                    showConfirmMessage ?
                        (
                            <span>
                                <span>{confirmMessage}</span>
                                {'  '}
                                <span className={'cursor-pointer'} onClick={onConfirmClick}>Delete</span>
                                {' | '}
                                <span className={'cursor-pointer'} onClick={this.hideConfirmMessage}>Cancel</span>
                            </span>
                        ) :
                        <span className={'cursor-pointer'} onClick={this.showConfirmMessage} >Delete</span>
                }
            </RoundBtn>
        )
    };
};
