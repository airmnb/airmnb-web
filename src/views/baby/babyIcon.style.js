import styled from 'styled-components';
export const Icon = styled.div`
    display: inline-block;
    width: 120px;
    height: 120px;
    ${({iconUrl, theme: {male, female}}) => {
        if (iconUrl && iconUrl.match(/female\.png$/i)) {
            return `background: ${female}`
        } else if (iconUrl && iconUrl.match(/male\.png$/i)) {
            return `background: ${male}`
        } else {
            return 'background-size: cover;'
        }
    }}
    background-image: url('${({iconUrl}) => iconUrl}');
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: opacity .15s linear;
    &:hover {
        opacity: .8;
    }
`;