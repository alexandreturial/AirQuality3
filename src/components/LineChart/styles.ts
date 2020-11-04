import styled from 'styled-components';

interface IContainerProps{
    color: string;
    shadow: string;
}

export const Container = styled.div<IContainerProps>`
    background: ${props => props.color} ; 
    width: 100%;
    
    border-radius: 5px; 
    box-shadow: 6px 6px 10px -5px ${props => props.color};
    

`;

