import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { Label, ErrorMessage } from '../';


export function formControl(WrappedComponent) {
    return class extends Component {
        static contextTypes = {
            t: PropTypes.func.isRequired,
          }
        static proptypes = {
            onInputChange: PropTypes.func.isRequired
        }
        render() {
            const { validation, config, onChange, name, type, items } = this.props;
            return (
                <div className="margin-top-20px">
                    <div>
                        <Label>{this.context.t(config.label)}</Label>
                    </div>
                    <WrappedComponent className={validation && validation.isInvalid && 'inValid'} {...{name, type, onChange, items}}/>
                    {validation && <ErrorMessage>{this.context.t(validation.message)}</ErrorMessage>}
                </div>
            )
        }
    }
}