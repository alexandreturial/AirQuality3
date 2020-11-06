import React from 'react';

import Piechart from '../PieChart/index';
import BarChart from '../BarChart/index';
import HistoryBarChart from '../History/barChart';

import './styles.css';

const BoxDataList: React.FC = () => {
  return (
    <div className="main-box">
      <div className="main-box-chart">
        <div className="level-risk">
         <h2>
         Níveis de risco
         </h2>
         <BarChart></BarChart>
         <BarChart></BarChart>
         <BarChart></BarChart>
         
         <HistoryBarChart></HistoryBarChart>
        </div>
        <div className="Air-composition">
        <h2>
         composição do ar
         </h2>
         <Piechart></Piechart>
        </div>
      </div>               
  </div>
  );
}

export default BoxDataList;