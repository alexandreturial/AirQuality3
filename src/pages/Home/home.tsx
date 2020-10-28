import React from 'react';

import Header from '../../components/Header/header';
import ChartImg from '../../assets/images/chartTeste.svg';

import BoxData from '../../components/BoxDataList/boxDataList';
import BoxResult from '../../components/boxDataRseult/boxDataResult';
import './styles.css';

const pages: React.FC = () => {
  return (
    <> 
      <Header></Header>
      <main className="home-main">
        <aside className="aside-data">
          <BoxData></BoxData>
          <BoxResult></BoxResult>
        </aside>
        <div className="App-logo">
          <img src={ChartImg} alt="logo" />

        </div>
      </main>
    
    </>
    
  );
}

export default pages;