import styled, { css } from 'styled-components';

export const Loader = styled.div`
    display: inline-block;
    border: 2px solid ${({theme}) => theme.primary_2};
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