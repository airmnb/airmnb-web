import styled from "styled-components";

export const ErrorMessage = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.failure}
`;