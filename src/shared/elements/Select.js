import React, { Component } from 'react';
import styled from 'styled-components';
import { CaretIcon } from '..';

class SelectRaw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.defaultValue,
            collection: props.collection,
            show: false
        }
        this.btn = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', () => this.close());
    }

    componentWillUnmount() {
        document.removeEventListener('click', () => this.close());
    }

    getLabelById(id) {
        const selectedItem = this.state.collection.find((item) => item.id === id);
        if (this.state.collection.find((item) => item.id === id)) {
            return <span>{selectedItem.label}</span>;
        } else {
            return <span>please select</span>;
        }
    }

    selectItem(selected) {
        this.setState({
            selected
        });
        this.props.onChange(selected);
    }

    toggle(ev) {
        ev.nativeEvent.stopImmediatePropagation();
        this.setState({
            show: !this.state.show
        });
    }

    close() {
        this.setState({
            show: false
        });
    }

    render() {
        const { selected, collection } = this.state;
        const { className } = this.props;
        return (
            <div className={className} onClick={(ev) => this.toggle(ev)}>
                <button ref={this.btn}>{this.getLabelById(selected)}<CaretIcon/></button>
                <ul className={this.state.show ? 'show' : ''}>
                    <li>Select your language</li>
                    {
                        collection.map(item => <li key={item.id} className={(selected === item.id)? 'selected': ''} onClick={() => this.selectItem(item.id)}>{item.label}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export const Select = styled(SelectRaw) `
    position: relative;
    display: inline-block;
    width: 130px;
    height: 40px;
    line-height: 30px;
    text-align: left;
    button{
        cursor: pointer;
        font-size: 14px;
        width: 100%;
        padding: 5px 10px;
        background: none;
        border: none;
        text-align: left;
        outline: none;
        height: 100%;
        svg{
            height: 20px;
            float: right;
        }
    }
    ul{
        position: absolute;
        padding: 0;
        margin: 0;
        top: 40px;
        right: 0;
        display: none;
        background: white;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
        padding: 5px;
        width: 250px;
        li {
            cursor: pointer;
            list-style: none;
            padding-left: 20px;
            color: #999;
            &:first-child {
                padding: 5px 10px;
                border-bottom: 1px solid #999;
                color: #999;
                &:hover {
                    background: none;
                }
            }
            &.selected {
                color: #000;
            }
            &:hover {
                background: #efefef;
            }
        }
        &.show {
            display: inline-block;
        }
    }
`;