import React, { PureComponent } from 'react';
import {
  LineChart, 
  Line, 
  ResponsiveContainer,

} from 'recharts';

import './styles.css';

const data = [
  {
    name: 'Page A', uv: 1000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={75} height="85%">
       
        <LineChart
            className="box-line"
            data={data}
        >
           
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="15%" stopColor="#7517F8" stopOpacity={0.8}/>
                  <stop offset="85%" stopColor="#E323FF" stopOpacity={1}/>
              </linearGradient>
                
              </defs>
          
            <Line type="monotone" strokeWidth={3} dataKey="uv" stroke="url(#colorUv)" dot={{r: 0}} activeDot={{r:0}} />
        </LineChart>
      </ResponsiveContainer>
      
    );
  }
}