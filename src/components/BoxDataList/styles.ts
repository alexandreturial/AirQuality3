import styled from 'styled-components';

export const BoxData = styled.div`
    background-color: ${props => props.theme.colors.tertiary};

    padding: 0px 30px 10px;
    border-radius: 7px;

    box-shadow: 0 10px 10px -5px #000000ad;

    margin: 15px 0;

    width: 80%;

    h3{
        color: ${props => props.theme.colors.white};
    }

    h1{
        color: ${props => props.theme.colors.white};
        font: 700 5rem Archivo;
        text-align: start;
        margin-top: 15px;
    }

    h2{
    font: 500 2.5rem Archivo;
    text-align: start;
    margin-top: 20px;
    color: ${props => props.theme.colors.white};
}

small{
    margin-top: 5px;

    color: ${props => props.theme.colors.purpleBlue};
    font-size: 1.6rem;
    
    display: flex;
}
`;

export const BoxChart = styled.div`
    background: ${props => props.theme.colors.tertiary};
    box-shadow: ${props => props.theme.colors.tertiary};

    display: flex;
    flex: 1;
    justify-content: center;

    margin: 15px 0;
    
    height: 150px;
   
`;

export const BoxList = styled.ul`
    margin-top: 15px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 5px 0;

        list-style-type:none;
        color:  ${props => props.theme.colors.white};
        font: 500 1.5rem Archivo;
    }

    li > p:first-child{
        color: ${props => props.theme.colors.white};
    }

    li > p{
        color: ${props => props.theme.colors.purpleBlue};
    }
`;

export const BoxLineChart = styled.div`

    background: ${props => props.theme.colors.secundary};
    box-shadow: 6px 6px 10px -5px #000000ad;

    border-radius: 7px;

    display: flex;
    justify-content: center;

    height: 40px;
    width: 40%;
`;