import React from 'react';


import PieChartImg from '../../assets/images/pieChart.svg';
import LineChartData from '../../assets/images/lineChartData.svg';

import './styles.css';
const BoxDataList: React.FC = () => {
  return (
    <div className="box-data">
    <img src={PieChartImg} alt="pieChart"/>
    <div className="box-chart-legend">
      
      
      <h3>Total Earning</h3>
      <h2>R$ 4548,22</h2>
      <small>compared last year</small>

      <ul className="box-data-list">
        <li>
          <p>
            dado1
          </p>
          <img src={LineChartData} alt="chart"/>
        </li>
        <li>
          <p>
            dado2
          </p>
          <img src={LineChartData} alt="chart"/>
        </li>
        <li>
          <p>
            dado3
          </p>
          <img src={LineChartData} alt="chart"/>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default BoxDataList;