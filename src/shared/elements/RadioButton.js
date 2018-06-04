import React, {Component} from 'react';
import { Radio, Label } from '..';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formControl } from '../hoc/index';

class RadioButtonRaw extends Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        selected: PropTypes.bool
    }

    static defaultProps = {
        value: false
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
            label: props.label
        }
        this.handleSelectRadioButton = this.handleSelectRadioButton.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: nextProps.selected,
            label: nextProps.label
        })
    }

    handleSelectRadioButton() {
        this.props.onChange(this.props.value)
    }

    render() {
        const {label, className} = this.props;
        return <span className={className} onClick={this.handleSelectRadioButton}>
            <Radio selected={this.state.selected} />
            <Label>{label}</Label>
        </span>
    }
}

export const RadioButton = styled(RadioButtonRaw)`
    display: inline-block;
    margin-right: 20px;
    line-height: 26px;
`

export class RadioButtonGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.value
        }
        this.handleSelectRadioButton = this.handleSelectRadioButton.bind(this);
    }

    handleSelectRadioButton(value) {
        const { name } = this.props;
        this.setState({
            selected: value
        })
        this.props.onChange(name, value)
    }

    render() {
        const { items } = this.props;
        return <div className='margin-top-10px'>
            {items.map(r => <RadioButton label={r.label} value={r.value || r.label} key={r.label} selected={r.value === this.state.selected} onChange={this.handleSelectRadioButton}/>)}
        </div>
    }
}

export const RadioButtonGroupControl = formControl(RadioButtonGroup);