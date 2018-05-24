import styled from 'styled-components';

export const Input = styled.input`
    outline: none;
    padding: 30px 10px;
    margin: 8px 0;
    width: 100%;
    color: ${({theme}) => theme.primary_2};
    border: 1px solid ${({theme}) => theme.primary_2};
    height: 48px;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 150ms linear;
    background: ${({theme}) => theme.secondary_2};
    &:focus {
        box-shadow: 0 0 10px rgba(255, 204, 0, .4);
    }
`;