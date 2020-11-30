import React from 'react';

import Piechart from '../PieChart/index';
import BarChart from '../BarChart/index';

import {
  MainBox,
  LevelRisk,
  AirComposition,
  Title,
  ElementList

} from './styles';

interface IBoxDataListProps{
  data:{
    Name: string;
    value: number;
    max?: number ;
    alert?: number;
  }[]
}

const BoxDataList: React.FC<IBoxDataListProps> = ({data}) => {
  return (
    <MainBox>
      <LevelRisk>
        <Title>
          Níveis de risco
        </Title>
        <ElementList>
          {
            data.map((indicator) => (
              <BarChart 
                key={indicator.Name} 
                value={ indicator.value} 
                maxValue={80 } 
                RiskMarge={70} 
                name={indicator.Name}
              />
            ))
          }
        </ElementList>
        {/* <HistoryBarChart /> */}
      </LevelRisk>
      <AirComposition>
        <Title>
          composição do ar
         </Title>
        <Piechart data={data} />
      </AirComposition>
    </MainBox>
  );
}

export default BoxDataList;