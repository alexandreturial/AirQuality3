import styled, { keyframes } from 'styled-components';


interface IBarContainerProps{ 
    value: number;
    maxValue?: number;
    RiskMarge?: number;
}


const handleColorType = (value:number, limit:number, RiskMarge:number, colors:any) => {
    if(value >= (limit)){
        return colors.red;
    }else if(value >= (RiskMarge) && value < limit){
        return colors.yellow;
    }else{
        return colors.birches;
    }
};


const animate = (y: number) =>  keyframes`
     0% { width: 0; }
     100% { width: ${y}%}
`;

export const BarContainer =  styled.div`
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const BoxDataValue =  styled.div`
    display: flex;

    padding: 0 15px;

    margin-top: 10px;
`;

export const ImageData = styled.img`
    height: 30px;
    margin-right: 15px;

`;

export const Bar = styled.div<IBarContainerProps>`

    height: 6px;
    width: 80%;
    background-color: ${props => props.theme.colors.primary};

    border-radius: 10px;
    box-shadow: 0 10px 10px -5px #000000ad;
    
    div {
        height: 6px;
        width: ${props => props.value}%; 
        border-radius: 10px;

         background-color: ${props => handleColorType(props.value, (props.maxValue || 100), (props.RiskMarge || 0), props.theme.colors)}; 

        animation: ${props => animate(props.value)} 2s;
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
    color: ${props => props.theme.colors.white};
`;

export const Value = styled.h3`
    font: 700 2rem archivo;
    color: ${props => props.theme.colors.white};
    margin-right: 5%;
`;





