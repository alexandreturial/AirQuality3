import React from 'react';

import LineChart from '../LineChart/index';
import PieChart from '../PieChart/index';

import './styles.css';
const BoxDataList: React.FC = () => {
  return (
    <div className="box-data">
      <div className="box-chart">
        <PieChart></PieChart>
      </div>
    <div className="box-chart-legend">
      
      
      <h3>Total Earning</h3>
      <h2>R$ 4548,22</h2>
      <small>compared last year</small>

      <ul className="box-data-list">
        <li>
          <p>
            dado1
          </p>
          <div className="box-line-chart">
            <LineChart></LineChart>
          </div>
          
        </li>
        <li>
          <p>
            dado2
          </p>
          <div className="box-line-chart">
            <LineChart></LineChart>
          </div>
        </li>
        <li>
          <p>
            dado3
          </p>
          <div className="box-line-chart">
            <LineChart></LineChart>
          </div>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default BoxDataList;