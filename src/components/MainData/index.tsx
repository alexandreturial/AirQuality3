import React from 'react';

import Piechart from '../PieChart/index';
import BarChart from '../BarChart/index';
import HistoryBarChart from '../History/barChart';

import {
  MainBox,
  LevelRisk,
  AirComposition,
  Title,
  ElementList

} from './styles';


const data= [
  {
    name: "O3",
    value: 33.5,
    max: 60,
    alert: 30
  },
  {
    name: "O2",
    value: 85,
    max: 94,
    alert: 88
  },
  {
    name: "CO2",
    value: 55,
    max: 50,
    alert: 20
  },
  {
    name: "NH3",
    value: 3.5,
    max: 18,
    alert: 8
  },
];


const BoxDataList: React.FC = () => {
  return (
    <MainBox>
      <LevelRisk>
        <Title>
          Níveis de risco
        </Title>
        <ElementList>
          {
            data.map((indicator) => (
              <BarChart key={indicator.name} value={ indicator.value} maxValue={indicator.max} RiskMarge={indicator.alert} name={indicator.name}/>
            ))
          }
        </ElementList>
        {/* <HistoryBarChart /> */}
      </LevelRisk>
      <AirComposition>
        <Title>
          composição do ar
         </Title>
        <Piechart></Piechart>
      </AirComposition>
    </MainBox>
  );
}

export default BoxDataList;