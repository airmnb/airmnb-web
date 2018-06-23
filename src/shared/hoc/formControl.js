import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { Label, ErrorMessage } from '../';


export function formControl(WrappedComponent) {
    return class extends Component {
        static contextTypes = {
            t: PropTypes.func.isRequired,
          }
        static proptypes = {

        }
        render() {
            const { validation, config, ...passThroughProps } = this.props;
            return (
                <div className="margin-top-20px">
                    <div>
                        <Label>{this.context.t(config.label)}</Label>
                    </div>
                    <WrappedComponent className={validation && validation.isInvalid && 'inValid'}  { ...passThroughProps } />
                    {validation && <ErrorMessage>{this.context.t(validation.message)}</ErrorMessage>}
                </div>
            )
        }
    }
}