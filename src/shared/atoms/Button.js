import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { GoogleIcon, Loader } from '..';

export const ButtonRaw = ({disabled, loading, children, primary, className}) => {
  return <button className={className} disabled={disabled || loading}>{loading? <Loader size="25" />: children}</button>
}

ButtonRaw.propTypes = {
  loading: PropTypes.bool
}

export const Button = styled(ButtonRaw)`
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
  ${props => props.loading && css`
    text-align: center;
  `}
  &:hover {
    background: ${({ primary, theme }) => primary ? theme.primary_1_L1 : theme.secondary_2};
  }
`;

export const GoggleBtnStyled = Button.extend`
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.primary_2};
  text-align: left;
  ${({loading}) => loading && css`
    text-align: center;
  `}
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

export const GoggleBtn = ({disabled, loading, label, ...rest}) => {
  return <GoggleBtnStyled {...rest} disabled={disabled || loading} loading={loading}>{loading? <Loader size="25" />: <span><span className='logo-contianer'><GoogleIcon/></span><label>{label}</label></span>}</GoggleBtnStyled>
}

export const SquareBtn = styled.button`
  width: 120px;
  height: 120px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  font-size: 3rem;
  font-weight: 200;
  padding: 0;
  margin: 0;
  border: none;
  transition: all 300ms ease;
  color: white;
  ${({background}) => background && css`
    background: ${background} center center;
    background-size: cover;
  `}
`;


export const BackBtn = styled.button`
  color: blue;
  background: white;
  border: 1px solid blue;
  height: 30px;
  min-width: 50px;
`;

export const RoundBtn = styled.button`
  color: black;
  border: 1px solid black;
  padding: 6px 28px;
  border-radius: 40px;
  font-size: .8rem;
  cursor: pointer;
  outline: none;
}
`;