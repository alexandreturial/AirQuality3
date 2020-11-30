import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};

`;

export const Main = styled.main`
    height: 92vh;
    min-width: 730px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    'data chart';

    

    @media(max-width: 1000px){
        min-width: 730px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
        'chart'
        'data';
        
    }
`;