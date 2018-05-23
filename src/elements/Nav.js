import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    position: fixed;
    height: 100%;
    width: 100%;
    top: -100%;
    left: 0;
    background: ${({theme}) => theme.secondary_2};
    border-right: 1px solid black;
    z-index: 999;
    text-align: center;
    overflow: hidden;
    opacity: 0;
    transition: all .5s linear;
    padding-top: 100px;
    &.show {
        top: 0;
        opacity: .95;
        a {
            margin: 70px auto;
            opacity: 1;
        }
    }
    .close-btn{
        position: absolute;
        cursor: pointer;
        font-size: 70px;
        line-height: 40px;
        vertical-align: top;
        left: 20px;
        top: 20px;
        font-weight: 200;
    }
    a {
        font-size: 40px;
        color: ${({theme}) => theme.primary_2};
        padding: 0 30px;
        text-decoration: none;
        display: block;
        margin: 0 auto;
        min-width: 50px;
        max-width: 500px;
        font-weight: 200;
        transition: all .5s ease-in;
        opacity: 0;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const MenuIcon = styled.div`
    position: fixed;
    padding: 10px;
    left: 0;
    top: 0;
    cursor: pointer;
    display: inline-block;
    width: auto;
    margin: 0 auto;
    transition: all .5s ease;
    z-index: 1000;
    .bar {
        display: block;
        height: 3px;
        width: 40px;
        background: black;
        margin: 10px auto;
    }

    &.show .bar{
        background-color: ${({theme}) => theme.primary_1};
    }
 
    .middle {
        margin: 0 auto;
    }
 
    .bar {
        transition: all .5s ease;
    }
 
    &.show .top {
     transform: translateY(13px) rotateZ(45deg);
    }
 
    &.show .bottom {
        transform: translateY(-13px) rotateZ(-45deg);
    }
 
    &.show .middle {
        width: 0;
    }
`;

export class Nav extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    render() {
        const {tabs} = this.props;
        return (
        <div onClick={() => this.setState({'show': false})}>
            <MenuIcon className={this.state.show? 'show': null} onClick={(ev) => {ev.stopPropagation(); this.setState({'show': !this.state.show});}}>
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
            </MenuIcon>
            <StyledNav className={this.state.show? 'show': null} onClick={() => this.setState({'show': false})}>
                {tabs.map((tab, i) => <Link to={tab.url} key={i}>{tab.label}</Link>)}
            </StyledNav>
        </div>
        )
    }
}