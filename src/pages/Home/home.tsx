import React from 'react';

import Header from '../../components/Header/header';
import BoxData from '../../components/BoxDataList/boxDataList';
import BoxResult from '../../components/boxDataRseult/boxDataResult';
import MainChart from '../../components/MainData/index';

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
          {/* <img src={ChartImg} alt="logo" /> */}
          
          <MainChart></MainChart>
        </div>
      </main>
    
    </>
    
  );
}

export default pages;