import React from 'react';

import BoxData from '../../components/BoxDataList/boxDataList';
import MainChart from '../../components/MainData/index';

import  { lastDatas }  from '../../repositorie/Contollers';

import {
  ChartBox,
  Aside
} from './styles';

const pages: React.FC = () => {
  const data = lastDatas();
  
  return (
    <>
      <Aside>
        <BoxData></BoxData>
      </Aside>
      <ChartBox>
        <MainChart data={data} ></MainChart>
      </ChartBox>
    </>

  );
}

export default pages;