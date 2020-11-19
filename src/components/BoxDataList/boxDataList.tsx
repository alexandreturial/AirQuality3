import React from 'react';

import LineChart from '../LineChart/index';

import { useTeste } from '../../Hooks/testeData';

import {
  BoxData,
  BoxChart,
  BoxList,
  BoxLineChart

} from './styles';

const data = {
  colors:[
    {
      nameGradient:"uv",
      color1:"#7517F8",
      color2:"#E323FF",
    },
    {
      nameGradient:"pv",
      color1:"#4DA1FF",
      color2:"#4DFFDF",
    },
    {
      nameGradient:"amt",
      color1:" #328a31",
      color2:"#5EFF5A",
    }
  ],
  dataChart :[
    {
      name: 'Page A', uv: 2400, pv: 2400, amt: 2400,
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
  ]
};

const data1 = {
  colors:[
    {
      nameGradient:"uv",
      color1:"#7517F8",
      color2:"#E323FF",
    }
  ],
  dataChart :[
    {
      name: 'Page A', uv: 2400,
    },
    {
      name: 'Page B', uv: 3000,
    },
    {
      name: 'Page C', uv: 2000,
    },
    {
      name: 'Page D', uv: 2780,
    },
    {
      name: 'Page E', uv: 1890,
    },
    {
      name: 'Page F', uv: 2390,
    },
    {
      name: 'Page G', uv: 3490,
    },
  ]
};

const data2 = {
  colors:[
    {
      nameGradient:"pv",
      color1:"#4DA1FF",
      color2:"#4DFFDF",
    }
  ],
  dataChart :[
    {
      name: 'Page A', pv: 2400,
    },
    {
      name: 'Page B',pv: 1398,
    },
    {
      name: 'Page C', pv: 9800,
    },
    {
      name: 'Page D', pv: 3908,
    },
    {
      name: 'Page E', pv: 4800,
    },
    {
      name: 'Page F', pv: 3800,
    },
    {
      name: 'Page G', pv: 4300,
    },
  ]
};

const data3 = {
  colors:[
    {
      nameGradient:"amt",
      color1:" #328a31",
      color2:"#5EFF5A",
    }
  ],
  dataChart :[
    {
      name: 'Page A', amt: 2400,
    },
    {
      name: 'Page B', amt: 2210,
    },
    {
      name: 'Page C', amt: 2290,
    },
    {
      name: 'Page D', amt: 2000,
    },
    {
      name: 'Page E', amt: 2181,
    },
    {
      name: 'Page F', amt: 2500,
    },
    {
      name: 'Page G', amt: 2100,
    },
  ]
};


const BoxDataList: React.FC = () => {
  const { teste } = useTeste();
  return (
    <BoxData>
      <h2>{teste.data}:</h2>
      <h1>34%</h1>
      <small>compared last year</small>
      <BoxChart>
        <LineChart
          data={data}
        ></LineChart>
      </BoxChart>
      <BoxList>
        <li>
          <p>
            Material 1
          </p>
          <p>
            150
          </p>
          <BoxLineChart>
            <LineChart  
              data={data1}
            />
          </BoxLineChart>
          
        </li>
        <li>
          <p>
            Material 2
          </p>
          <p>
            150
          </p>
          <BoxLineChart>
            <LineChart 
              data={data2}
            />
          </BoxLineChart>
        </li>
        <li>
          <p>
            Material 3
          </p>
          <p>
            150
          </p>
          <BoxLineChart >
            <LineChart 
              data={data3}
            />
          </BoxLineChart>
        </li>
      </BoxList>
    
  </BoxData>
  );
}

export default BoxDataList;