import React from 'react';
import styled from 'styled-components';
import {GoogleIcon} from './Icons';

export const Button = styled.button`
  background: ${({ primary, theme }) => primary ? theme.primary_1 : theme.secondary_1};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.primary_2};
  cursor: pointer;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.primary_2};
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
    background: ${({ primary, theme }) => primary ? theme.primary_1_L1 : theme.secondary_2};
  }
`;

export const GoggleBtnStyled = Button.extend`
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.primary_2};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.secondary_2};;
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