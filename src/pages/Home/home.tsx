import React from 'react';

import Header from '../../components/Header/header';
import BoxData from '../../components/BoxDataList/boxDataList';
import BoxResult from '../../components/boxDataRseult/boxDataResult';
import MainChart from '../../components/MainData/index';

import {
  Container,
  ChartBox,
  Aside
} from './styles';

const pages: React.FC = () => {
  return (
    <> 
      <Header></Header>
      <Container>
        <Aside>
          <BoxData></BoxData>
          {/* <BoxResult></BoxResult> */}
        </Aside>
        <ChartBox>
          <MainChart></MainChart>
        </ChartBox>
      </Container>
    
    </>
    
  );
}

export default pages;