import React from 'react';
import styled from 'styled-components';

const RadioRaw = ({className, selected}) =>
    <span className={className}>
        <span class={`${selected? 'selected': ''}`}></span>
    </span>

export const Radio = styled(RadioRaw)`
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 4px;
    border: 1px solid ${({theme} ) => theme.primary_2};
    border-radius: 15px;
    line-height: 15px;
    margin-right: 5px;
    > span {
        display: inline-block;
        opacity: 0;
        width: 15px;
        height: 15px;
        background: ${({theme} ) => theme.primary_3};
        border-radius: 13px;
        &.selected {
            opacity: 1;
        }
    }
`;