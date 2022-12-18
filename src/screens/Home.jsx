import React, { useState } from 'react'
import Stat from '../components/Stat'
import { Line } from "react-chartjs-2";

import { Circle } from 'rc-progress';
import './css/home.css'
import MenuIcon from '../components/MenuIcon';
import { ArrowRightOutlined, CloseOutlined, FileAddFilled, FileOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router';


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
const { TextArea } = Input;
 const addStafRef=useRef()
 const navigate=useNavigate()
 const [addState,setAddState]=useState('Add')
  return (
    <div className='home_container'>
    <div className='dash_detail'>

      <div className='values'>
        <h2>Stats</h2>
        <Stat
        title1='Active Prisoners'
        value1='700'
        title2='Discharge Prisoners'
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
      <MenuIcon onClick={()=>{
        setAddState('Add Staff')
        addStafRef.current.style.transform='translateX(0px)'
      }} title='Add Staff' Icon={()=><PlusOutlined/>}/>
      <MenuIcon onClick={()=>{
        setAddState('Add Prisoner')
        addStafRef.current.style.transform='translateX(0px)'
      }} title='Add Prisoner' Icon={()=><FileAddFilled/>}/>
      <MenuIcon title='Generate Report' Icon={()=><FileOutlined/>}/>
      <MenuIcon onClick={()=>navigate('/dashboard/prisoners')} title='Dispatch Prisoner' Icon={()=><ArrowRightOutlined/>}/>
    </div>
       

    <div ref={addStafRef} className='add_staff'>
     <div className='staff_form_head'>
      <h4>{addState}</h4>
      <CloseOutlined onClick={()=>{
        addStafRef.current.style.transform='translateX(500px)'
      }}/>
     </div>
     
     <div className='staff_detail'>
      <Input style={{marginBottom:20}} placeholder='First Name'/>
      <Input style={{marginBottom:20}} placeholder='Last Name'/>
      {addState=='Add Staff'&&(
        <Input style={{marginBottom:20}} placeholder='Email Address'/>
      )}
      
      <Input style={{marginBottom:20}} placeholder='Phone'/>
      {
        addState=='Add Prisoner'&&(
          <>
          <Input style={{marginBottom:20}} placeholder='Offence Warrant'/>
          <Input style={{marginBottom:20}} placeholder='Case Number'/>
          <Input style={{marginBottom:20}} placeholder='Court Name'/>
          <TextArea rows={3} placeholder="Case Description" maxLength={6} />
          </>
        )
      }
      <Button onClick={()=>{
        addStafRef.current.style.transform='translateX(500px)'
      }} style={{marginTop:20}} type='primary' size='large'>{addState}</Button>
      
     </div>
    </div>
    </div>
  )
}
