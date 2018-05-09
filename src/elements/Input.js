import styled from 'styled-components';

export const Input = styled.input`
    outline: none;
    padding: 30px 10px;
    margin: 8px 0;
    width: 100%;
    color: black;
    border: 2px solid ${props => props.theme.secondary_1};
    height: 48px;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: border-color 100ms linear;
    &:focus {
        border: 2px solid ${props => props.theme.primary_1};
    }
`;