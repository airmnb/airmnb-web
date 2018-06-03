import styled from "styled-components";

export const Tag = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.primary_2};
    background: ${({theme}) => theme.secondary_1};
    padding: 4px 10px;
    border-radius: 20px;
`;