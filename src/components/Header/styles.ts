import styled from 'styled-components';


export const Container = styled.header`
    height: 8vh;
    min-width: 730px;
    background-color: ${props => props.theme.colors.tertiary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    box-shadow: 0 10px 10px -5px #000000ad;

`;
export const Logo = styled.div`
  font: 600 2rem Archivo;
    color: ${props => props.theme.colors.white};

    img{
        vertical-align: middle;
    }
`;
export const HeaderContent = styled.div`
    font: 500 1.5rem Archivo;
    display: flex;
    align-items: center;
    justify-content: baseline;
   
`;

export const Options = styled.ul`
    list-style-type:none;

    display: flex;
    flex-direction: row;

    .link{
        margin: 0 50px;
        color: ${props => props.theme.colors.purpleBlue};
        
        text-decoration: none;
        font: 600 15px Archivo;
     
        letter-spacing: .8px;
    }

    li>.link:hover{
        color: ${props => props.theme.colors.blueishBlack};
        transition: .3s;
        cursor: pointer;   
    }
`;







