import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
`
export const InfoCol  = styled.div`
    padding-right: 20px;
    h1 {
        margin: 10px 0;
        font-size: 30px;
    }
`;

export const Form = styled.div`
    background: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
`

export const Header = styled.header`
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
    h1 {
        margin: 0;
    }
    button {

    }
`

export const ButtonGroup = styled.div`
    position: absolute;
    right: 20px;
    bottom: -15px;
    button {
        margin-right: 10px
    }
`