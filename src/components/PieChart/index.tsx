
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    
];

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} fontSize={15} textAnchor="middle" fill="#FFF">
                
                {payload.name}
            </text>
           
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                cornerRadius={20}
                
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
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} fontSize={15} fontFamily="Archivo" textAnchor={textAnchor} fill="#fff">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} fontSize={15} fontFamily="Archivo" dy={18} textAnchor={textAnchor} fill="#fff">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default class Example extends PureComponent {
   

    state = {
        activeIndex: 0,
    };

    onPieEnter = (data: any, index: any) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <>
             
            
            <PieChart width={400} height={400} >
                
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
                        <stop offset="5%" stopColor="#02A4FF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#7D40FF" stopOpacity={1} />
                    </linearGradient>

                </defs>



                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cornerRadius={20}
                    paddingAngle={5}
                    cx={200}
                    cy={200}
                    blendStroke
                    innerRadius={60}
                    outerRadius={80}
                    fill="url(#colorUv)"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                >

                    <Cell fill="url(#colorDv)" />
                    <Cell fill="url(#colorAv)" />

                </Pie>
            </PieChart>
            </>
        );
    }
}