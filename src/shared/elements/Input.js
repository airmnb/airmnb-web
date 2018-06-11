import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import { formControl } from '../hoc/index';

class InputRaw extends Component {
    constructor(props) {
        super(props);
        
        const {value} = this.props;
        this.state = {
            value
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            value: nextProp.value
        });
    }

    handleOnChange(ev) {
        const { name, value } = ev.target;
        if(this.props.onChange)
            this.props.onChange(name, value);
    }

    render() {
        const {value, onChange, fluid, ...passthroughProps} = this.props;
        return <input onChange={this.handleOnChange}  {...passthroughProps} value={this.state.value} />;
    }
}

export const Input = styled(InputRaw)`
    outline: none;
    padding: 30px 10px;
    margin: 8px 0;
    width: 100%;
    max-width: 500px;
    color: ${({theme}) => theme.primary_2};
    border: 1px solid ${({theme}) => theme.primary_2};
    height: 48px;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 150ms linear;
    background: ${({theme}) => theme.secondary_2};
    &:focus {
        border: 1px solid ${({theme}) => theme.primary_3};
        box-shadow: 0 0 5px rgba(3, 169, 244, .4);
    }
    &.inValid {
        border: 1px solid ${({theme}) => theme.failure};
        box-shadow: none;
    }
    ${props => props.fluid && css`
        width: 100%;
        display: inline-block;
    `}
`;

export const InputControl = formControl(Input);