import React from 'react'
import Stat from '../components/Stat'
import { Line } from "react-chartjs-2";

import { Circle } from 'rc-progress';
import './css/home.css'
import MenuIcon from '../components/MenuIcon';
import { ArrowRightOutlined, FileAddFilled, FileOutlined, PlusOutlined } from '@ant-design/icons';


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};


export default function Home() {
 
  return (
    <div className='home_container'>
    <div className='dash_detail'>

      <div className='values'>
        <h2>Stats</h2>
        <Stat
        title1='Active Prisoners'
        value1='700'
        title2='Dispatched Prisoners'
        value2='200' 
        />
        <div className='progress'>
        <h2>20 Staff</h2>
        <Circle
        style={{
          height:100,
          width:'50%'
        }}
         percent={50} 
         strokeWidth={2} 
         strokeColor="#2d8b49" /> 
        </div>
      </div>
      <div className='chart_container'>
      <Line data={data} />
      </div>

    </div>

    <div className='minors'>
      <MenuIcon title='Add Staff' Icon={()=><PlusOutlined/>}/>
      <MenuIcon title='Add Prisoner' Icon={()=><FileAddFilled/>}/>
      <MenuIcon title='Generate Report' Icon={()=><FileOutlined/>}/>
      <MenuIcon title='Dispatch Prisoner' Icon={()=><ArrowRightOutlined/>}/>
    </div>
       
    </div>
  )
}
