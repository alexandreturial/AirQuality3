import styled from 'styled-components';

export const BoxData = styled.div`
    background-color: var(--color-background-box);

    padding: 0px 30px 10px;
    border-radius: 7px;

    box-shadow: 0 10px 10px -5px #000000ad;

    margin: 15px 0;

    width: 80%;

    h3{
        color: var(--color-white);
    }

    h1{
        color: var(--color-white);
        font: 700 5rem Archivo;
        text-align: start;
        margin-top: 15px;
    }

    h2{
    font: 500 2.5rem Archivo;
    text-align: start;
    margin-top: 20px;
    color: var(--color-white);
}

small{
    margin-top: 5px;

    color: var(--purple-blue);
    font-size: 1.6rem;
    
    display: flex;
}
`;

export const BoxChart = styled.div`
    background: var(--color-background-box);
    box-shadow: var(--color-background-box);

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
        color: var(--color-white);
        font: 500 1.5rem Archivo;
    }

    li > p:first-child{
        color: var(--color-white);
    }

    li > p{
        color: var(--purple-blue);
    }
`;

export const BoxLineChart = styled.div`
    background: var(--color-background-box-secundary);
    box-shadow: 6px 6px 10px -5px #000000ad;

    border-radius: 7px;

    display: flex;
    justify-content: center;

    height: 40px;
    width: 40%;
`;