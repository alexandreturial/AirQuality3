import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,

} from 'recharts';

import {
  Container
} from './styles';



interface ILineChartComponentProps {
  data: {
    colors: {
      nameGradient: string;
      color1: string;
      color2: string;
    }[],
    dataChart: {
      name: string;

    }[]
  }

}


const LineChartComponent: React.FC<ILineChartComponentProps> = ({
   data
}) => {
  return (
    <Container>
      <ResponsiveContainer >

        <LineChart
          data={data.dataChart}
        >
          <defs>
            {
              data.colors.map((indicator) => (
                <linearGradient id={indicator.nameGradient} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="15%" stopColor={indicator.color1} stopOpacity={0.8} />
                  <stop offset="85%" stopColor={indicator.color2} stopOpacity={1} />
                </linearGradient>
              ))
            }
          </defs>
          {
            data.colors.map((indicator) => (
              <Line type="monotone" strokeWidth={3} dataKey={indicator.nameGradient} stroke={"url(#" + indicator.nameGradient + ")"} activeDot={{ r: 0 }} dot={{ r: 0 }} />
            ))
          }

        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default LineChartComponent;