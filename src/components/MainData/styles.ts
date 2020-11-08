import styled from 'styled-components';

export const MainBox = styled.div`
    width: 100%;
    height: 70vh;
    
    background-color: var(--color-background-box);

    padding: 10px 15px;
    border-radius: 7px;

    box-shadow: 0 10px 10px -5px #000000ad;

    margin: 0px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "levelRisk chartDraw";
`;

export const LevelRisk = styled.div`
    grid-area:levelRisk;
    width: 100%;
`;

export const ElementList= styled.div`
    max-height: 350px;
    overflow-y: auto;

    margin-bottom: 10%;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--purple-blue);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: none;
        
    }
`;

export const AirComposition = styled.div`
    grid-area:chartDraw;
    max-height: 100%;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font: 500 2.5rem Archivo;
`;

