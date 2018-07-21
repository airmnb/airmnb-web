import styled, { css } from 'styled-components';

export const Loader = styled.div`
    display: inline-block;
    border: 2px solid ${({theme, color}) => color || theme.primary_2};
    border-top: 2px solid transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin .8s linear infinite;
    ${({size}) => size && css`
        width: ${size}px;
        height: ${size}px;
    `}
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export const LoaderContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    > div {
        position: absolute;
        left: 50%;
        margin-left: -15px;
        top: 50%;
        margin-top: -15px;
    }
`