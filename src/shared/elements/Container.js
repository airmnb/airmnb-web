import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: auto;
    max-width: 500px;
    margin-top: 30px;
    padding: 20px;
    animation: fadein .5s;
    @keyframes fadein {
        from { opacity: 0; top: 20px; }
        to   { opacity: 1; top: 0; }
    }
    .separator {
        position: relative;
        border-top: 1px solid black;
        top: -8px;
    }
`;