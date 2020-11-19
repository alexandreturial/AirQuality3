import styled from 'styled-components';

export const Container = styled.main`
    height: 92vh;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    "data chart";

    background-color: ${props => props.theme.colors.primary};
`;

export const ChartBox = styled.div`
    grid-area:chart;
    margin: 15px;
    
`;
export const Aside = styled.aside`
     grid-area:data;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

