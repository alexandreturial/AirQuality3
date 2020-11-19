import styled from 'styled-components';


export const Container = styled.label`

    position: relative;
    display: inline-block;
    width: 50px;
    height: 1px;
  
`;



export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

  &:focus + .slider {
    box-shadow: 0 0 1px ${props => props.theme.colors.purpleBlue};
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    border: 3px solid ${props => props.theme.colors.purpleBlue};
  }



`;


export const Slider = styled.span`

    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.purpleBlue};
    -webkit-transition: .4s;
    transition: .4s;


    /* Rounded sliders */
    border-radius: 34px;
    
    
    &:before {
        border-radius: 50%;
    }

    &:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 4px;
        bottom: -10px;
        background-color: ${props => props.theme.colors.balck};
        border: 3px solid ${props => props.theme.colors.purpleBlue};
        -webkit-transition: .4s;
        transition: .4s;
    }

    

`;




  