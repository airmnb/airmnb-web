import React, { Component } from 'react';
import { Input } from '.'
import styled from 'styled-components';
import { formControl } from '../hoc/index';

class DateRaw extends Component {

    render() {
        const { className, ...passThroughProps} = this.props;
        return (
            <div className={className}>
                <Input {...passThroughProps} placeholder='DD/MM/YYYY' fluid/>
            </div>
        )
    }
}

export const Date = styled(DateRaw)`
    display: inline-block;
    width: 130px;
`

export const DateControl = formControl(Date);