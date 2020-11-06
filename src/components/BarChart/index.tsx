import React from 'react';

import { 
  Bar, 
  Title, 
  Value, 
  BarContainer, 
  BoxDataValue, 
  ImageData, 
  DataContent } from './styles';
import element from '../../assets/images/icons/atom.svg';


const BarChart: React.FC = () => {
  return (
    <BoxDataValue>
      <ImageData src={element}/>
      <DataContent>
        <Title>Ozonio</Title>
        <BarContainer>
          <Value>58</Value>
          <Bar><div></div></Bar>
        </BarContainer>
      </DataContent>
    </BoxDataValue>
  );
}

export default BarChart;