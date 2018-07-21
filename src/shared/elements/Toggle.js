import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class ToggleRaw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
    }

    toggleState() {
        this.setState({value: !this.state.value});
    }

    render() {
        const { className } = this.props;

        return <div className={`${className} ${this.state.value? 'on': ''}`} onClick={() => this.toggleState()}>
            <div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    }
}

ToggleRaw.propTypes = {
    value: PropTypes.bool.isRequired
}

ToggleRaw.defaultProps = {
    value: false
}

export const Toggle = styled(ToggleRaw)`
    display: inline-block;
    width: 60px;
    height: 30px;
    padding: 5px
    background: #EFEFEF;
    border-radius: 40px;
    border: 1px solid #000;
    transition: background .1s linear;
    >div {
        position: relative;
        display: inline-block;
        width: 28px;
        height: 28px;
        background: white;
        border-radius: 20px;
        font-size: 0;
        overflow: hidden;
        left: 0px;
        transition: left .1s linear;
        background: white;
        border: 1px solid #000;
    }
    &.on {
        background: ${({theme}) => theme.primary_3};
        >div {
            left: 30px;
        }
    }
`