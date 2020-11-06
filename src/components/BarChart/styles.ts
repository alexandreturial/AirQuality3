import styled, { keyframes } from 'styled-components';

const animate = keyframes`
     0% { width: 0; }
   100% { width: 50%; }
`;


export const BoxDataValue =  styled.div`
    display: flex;

    padding: 0 15px;

    margin-top: 10px;
`;

export const ImageData = styled.img`
    height: 45px;
    margin-right: 15px;

`;

export const Bar = styled.div`

    height: 6px;
    width: 80%;
    background-color: var(--blueish-black);

    border-radius: 10px;
    box-shadow: 0 10px 10px -5px #000000ad;
    div {
        height: 6px;
        width: 50%; 
        border-radius: 10px;

        background-color: var(--color-birches);

        animation: ${animate} 2s;
    }
`;

export const DataContent =  styled.div`
    display: flex;
    flex-direction:column;
    align-items: baseline;
    width: 100%;
`;

export const Title = styled.h2`
    font: 500 2.1rem archivo;
    text-align:start;
`;

export const Value = styled.h3`
    font: 700 2.3rem archivo;

    margin-right: 8px;
`;

export const BarContainer =  styled.div`
    display: flex;
    width: 100%;
    
    align-items: baseline;
`;



