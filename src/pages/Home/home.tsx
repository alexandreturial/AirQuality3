import React from 'react';

import Header from '../../components/Header/header';
import BoxData from '../../components/BoxDataList/boxDataList';
import BoxResult from '../../components/boxDataRseult/boxDataResult';
import './styles.css';

// import {
//   ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell
// } from 'recharts';

// import { scaleLog } from 'd3-scale';
// const scale = scaleLog().base(Math.E);

// const data = [
//   { x: 100, y: 200, z: 200 },
//   { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 },
//   { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 1000 },
//   { x: 110, y: 280, z: 200 },
// ];



import ChartImg from '../../assets/images/chartTeste.svg';



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