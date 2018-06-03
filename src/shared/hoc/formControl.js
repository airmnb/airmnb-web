import React, {Component} from 'react';
import { Label, ErrorMessage } from '../';


export function formControl(WrappedComponent) {
    return class extends Component {
        render() {
            const { label, validation, ...passThroughProps } = this.props;
            return (
                <div className="margin-top-20px">
                    <div>
                        <Label>{label}</Label>
                    </div>
                    <WrappedComponent className={validation && validation.isInvalid && 'inValid'}  { ...passThroughProps } />
                    {validation && <ErrorMessage>{validation.message}</ErrorMessage>}
                </div>
            )
        }
    }
}