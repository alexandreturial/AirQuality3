import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { useData } from '../../Hooks/airData';

import {
    Text

} from './styles';

interface IPiechartProps{
    data:{
        Name: string;
        value: number;
    }[]
}

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                cornerRadius={20}
                cursor="pointer"

            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle + 10}
                endAngle={endAngle - 10}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
                cornerRadius={20}

            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <Text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} >{payload.Name}</Text>
            <Text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey}  dy={18} textAnchor={textAnchor}>
                {`( ${(percent * 100).toFixed(2)}%)`}
            </Text>
        </g>
    );
};


const Piechart: React.FC<IPiechartProps> = ({data}) => {
    const [state, setState] = useState(0);

    const { showHistory } = useData();

    const ClickHistory = (data: any) => showHistory(data);

    const onPieEnter = (data: any, index: any) => setState(index);

    
    

    return (
        <ResponsiveContainer >
            
            <PieChart >

                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1.2">
                        <stop offset="15%" stopColor="#7517F8" stopOpacity={0.8} />
                        <stop offset="85%" stopColor="#E323FF" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4DA1FF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor=" #4DFFDF" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="colorAv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor='#02A4FF' stopOpacity={0.8} className="linearColor"/>
                        <stop offset="95%" stopColor="#7D40FF" stopOpacity={1} />
                    </linearGradient>
                    

                </defs>
                
                <Pie
                    activeIndex={state}
                    activeShape={renderActiveShape}
                    data={data}
                    cornerRadius={20}
                    paddingAngle={8}
                    blendStroke
                    innerRadius={60}
                    outerRadius={80}
                    fill="url(#colorUv)"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    onClick={ClickHistory}
                >
                    <Cell fill="url(#colorDv)" />
                    <Cell fill="url(#colorAv)" />
                   

                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );

}

export default Piechart;