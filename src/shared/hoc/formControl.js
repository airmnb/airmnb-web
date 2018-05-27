import React, {Component} from 'react';
import { Label } from '../';

export function formControl(WrappedComponent) {
    return class extends Component {
        render() {
            const { label, ...passThroughProps } = this.props;
            return (
                <div>
                    <div>
                        <Label>{label}</Label>
                    </div>
                    <WrappedComponent { ...passThroughProps } />
                </div>
            )
        }
    }
}