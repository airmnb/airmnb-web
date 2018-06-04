import React from 'react';
import styled from 'styled-components';

const RadioRaw = ({className, selected}) =>
    <span className={className}>
        <span className={`${selected? 'selected': ''}`}></span>
    </span>

export const Radio = styled(RadioRaw)`
    display: inline-block;
    width: 12px;
    height: 12px;
    padding: 7px;
    border: 1px solid ${({theme} ) => theme.primary_2};
    border-radius: 15px;
    line-height: 12px;
    margin-right: 5px;
    > span {
        display: inline-block;
        opacity: 0;
        width: 12px;
        height: 12px;
        background: ${({theme} ) => theme.primary_3};
        border-radius: 13px;
        &.selected {
            opacity: 1;
        }
    }
`;