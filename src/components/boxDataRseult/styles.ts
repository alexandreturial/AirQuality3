import styled from 'styled-components';


export const BoxResultData = styled.div`
    background-color: ${props => props.theme.colors.blueishBlack};

    padding: 20px 60px;
    border-radius: 7px;

    box-shadow: 0 10px 10px -5px #000000ad;

    margin: 15px 0;

    .box-result-data h2, h3, small{
    color: ${props => props.theme.colors.white};
    margin-top: 5px;
    }
`;
