import React from 'react';


import element from '../../assets/images/icons/molecula1.svg';

import { 
  Bar, 
  Title, 
  Value, 
  BarContainer, 
  BoxDataValue, 
  ImageData, 
  DataContent } from './styles';

interface IBarChartProps{
  name: string;
  value: number;
  RiskMarge?: number;
  maxValue?: number;
}

const BarChart: React.FC<IBarChartProps> = ({
  name, value, RiskMarge, maxValue
}) => {
  return (
    <BoxDataValue>
      <ImageData src={element}/>
      <DataContent>
        <Title>{name}</Title>
        <BarContainer >
          <Value>{value + '%'}</Value>
          <Bar value={value} RiskMarge={RiskMarge} maxValue={maxValue} ><div></div></Bar>
        </BarContainer>
      </DataContent>
    </BoxDataValue>
  );
}

export default BarChart;