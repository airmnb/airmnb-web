import React from 'react';
import styled from 'styled-components';
import {GoogleIcon} from './icons/Google';

export const Button = styled.button`
  background: ${({ secondary, theme }) => secondary ? theme.secondary_2 : theme.primary_2};
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  display: inline-block;
  border: 1px solid #000;
  line-height: 31px;  
  margin: 8px 0;
  outline: none;
  padding: 12px 0;
  text-transform: uppercase;
  transition: all 300ms ease;
  width: 100%;
  height: 55px;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background: #FFE700;
  }
`;

export const GoggleBtnStyled = Button.extend`
  background: #efefef;
  color: black;
  text-align: left;
  &:hover {
    background: #fff;
  };
  .logo-contianer{
    cursor: pointer;
    width: 70px;
    display: inline-block;
    border-right: 1px solid black;
    text-align: center;
  }
  svg {
    cursor: pointer;
    height: 20px;
    vertical-align: text-bottom;
  }
  label{
    cursor: pointer;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
  }
  }
`

export const GoggleBtn = ({disabled, loading, onClick}) => {
  return <GoggleBtnStyled onClick={onClick} disabled={disabled}>{loading? 'loading...': <span><span className='logo-contianer'><GoogleIcon/></span><label>Login In With google</label></span>}</GoggleBtnStyled>
}