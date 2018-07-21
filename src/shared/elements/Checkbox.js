import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tick } from "../atoms/Tick";
import { Label } from "..";

export class Checkbox extends Component {

    static propTypes = {
        checked: PropTypes.bool,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        checked: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            label: props.label
        }
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            value: nextProp.value
        });
    }

    toggleCheckboxChange() {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onChange(!this.state.checked);
    }

    render() {
        const { checked, label } = this.state;
        return <span>
            <Tick checked={checked} onChange={this.toggleCheckboxChange}/>
            <Label>{label}</Label>
        </span>
    }

}