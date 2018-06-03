import React from 'react';
import { TickIcons } from '.';
import styled from 'styled-components';

const TickRaw = (props) => {
    const {checked, onChange, className} = props;
    return (<span className={className+' '+(checked? 'checked': '')} onClick={onChange}>
        {
            checked?
            <TickIcons color="white"/>:
            null
        }
    </span>)
}

export const Tick = styled(TickRaw)`
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 4px;
    border-radius: 3px;
    border: 2px solid ${({theme}) => theme.primary_3};
    &.checked {
        background: ${({theme}) => theme.primary_3};
    }
`;