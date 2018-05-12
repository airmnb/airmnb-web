import styled from 'styled-components';

export const Input = styled.input`
    outline: none;
    padding: 30px 10px;
    margin: 8px 0;
    width: 100%;
    color: black;
    border: 1px solid black;
    height: 48px;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 150ms linear;
    background: white;
    
    &:focus {
        box-shadow: 0 0 10px rgba(255, 204, 0, .4);
        // border: 1px solid ${props => props.theme.primary_1};
    }
`;