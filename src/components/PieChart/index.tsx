import React, { PureComponent } from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer
} from 'recharts';

const data01 = [{name: 'Group A', value: 400}]

const data02 = [{name: 'n1', value: 100},
                {name: 'n2', value: 300}]

export default class Example extends PureComponent {
  

  render() {
    return (
        <ResponsiveContainer >
            <PieChart >
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#7517F8" stopOpacity={0.8}/>
                    <stop offset="85%" stopColor="#E323FF" stopOpacity={1}/>
                </linearGradient>
                <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4DA1FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor=" #4DFFDF" stopOpacity={1}/>
                </linearGradient>
                </defs>
                <Pie cornerRadius={20} midAngle={45} data={data01} dataKey="value"  innerRadius={40} outerRadius={60} fill="url(#colorUv)" stroke="#14142b" />
                <Pie cornerRadius={20} angle={45} data={data02} dataKey="value"  innerRadius={70} outerRadius={90} fill="url(#colorDv)" stroke="#14142b" />
            </PieChart>
        </ResponsiveContainer>
        
    );
  }
}