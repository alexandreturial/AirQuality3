import React from 'react';

import { 
  Container,
  Input,
  Slider   

} from './styles';

interface IToogleButtonProps{
    checked: boolean;
    onChange(): void;
}

const ToogleButton: React.FC<IToogleButtonProps> = ({
    checked, onChange
}) => {
  return (
    <Container>
        <Input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        />
        <Slider className="slider round"></Slider>
  </Container>
  )
}

export default ToogleButton;