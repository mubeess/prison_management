import React, { useEffect, useState } from 'react'
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
 const [firstName,setFirst]=useState('')
 const [lastName,setLast]=useState('')
 const [phone,setPhone]=useState('')
 const [mail,setMail]=useState('')
 const [desc,setDesc]=useState('')
 const [caseNum,setCaseNum]=useState('')
 const [courtName,setCourtName]=useState('')
 const [warrant,setWarrant]=useState('')
 const [inmateNUm,setInNum]=useState(0)
 const [staff,setStaff]=useState(0)
 const [loading,setLoading]=useState(false)

 useEffect(()=>{
  fetch('https://pms.fly.dev/admin/get-all-inmate')
  .then(res=>{
    res.json()
    .then(data=>{
      setInNum(data.message.length)
      fetch(' https://pms.fly.dev/admin/get-all-staff')
  .then(res=>{
    res.json()
    .then(data=>{
      setStaff(data.message.length)
      
     
    })
  })
    })
  })
 },[])
  return (
    <div className='home_container'>
    <div className='dash_detail'>

      <div className='values'>
        <h2>Stats</h2>
        <Stat
        title1='Active Prisoners'
        value1={inmateNUm}
        title2='Discharge Prisoners'
        value2='0' 
        />
        <div className='progress'>
        <h2>{staff} Staff</h2>
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
      <Input onChange={(e)=>{
        setFirst(e.target.value)
      }} style={{marginBottom:20}} placeholder='First Name'/>
      <Input onChange={(e)=>{
        setLast(e.target.value)
      }} style={{marginBottom:20}} placeholder='Last Name'/>
      
      <Input onChange={(e)=>{
          setMail(e.target.value)
        }} style={{marginBottom:20}} placeholder='Email Address'/>
      
      
      <Input onChange={(e)=>{
        setPhone(e.target.value)
      }} style={{marginBottom:20}} placeholder='Phone'/>
      {
        addState=='Add Prisoner'&&(
          <>
          <Input onChange={(e)=>{
          setWarrant(e.target.value)
        }} style={{marginBottom:20}} placeholder='Offence Warrant'/>
          <Input onChange={(e)=>{
          setCaseNum(e.target.value)
        }} style={{marginBottom:20}} placeholder='Case Number'/>
          <Input onChange={(e)=>{
          setCourtName(e.target.value)
        }} style={{marginBottom:20}} placeholder='Court Name'/>
          <TextArea onChange={(e)=>{
          setDesc(e.target.value)
        }} rows={3} placeholder="Case Description" maxLength={6} />
          </>
        )
      }
      <Button onClick={()=>{
        //   if (!mail) {
        //  alert('Field cant be empty!!!!')
        //  return
        //   }
         setLoading(true)
         const bodyData={
          username:mail,
          firstName,
          lastName,
          phone,
          address: "jambutu",
          gender: "male",
          role: "Admin"
  }
 
   
         fetch(`https://pms.fly.dev/admin/${addState=='Add Staff'?'register-staff':'create-inmate'}`,{
                           method:'POST',
                           headers:{
                             "Content-Type":'application/json'
                           },
                           body:JSON.stringify(bodyData)
                         
                })
         .then(res=>{
           res.json()
           .then(data=>{
             setLoading(false)
             if (addState=='Add Staff') {
              addStafRef.current.style.transform='translateX(500px)'
              alert('Staff added succesfull!')
              location.reload()
              return
             }
             else{
      fetch(`https://pms.fly.dev/admin/get-single-inmate?username=${mail}`)
      .then(res=>{
        res.json()
        .then(data=>{
          const bodyData={
            inmateId: data.message.inmateId,
offence: {
    warrant: {
        type:warrant,
        dateOfSentence: "8-2-2"
    },
    date: "2-3-4",
    signature: "sign",
    typeOfOffence:desc,
    caseNumber: caseNum,
    courtName: courtName
}
} 

fetch(`https://pms.fly.dev/admin/add-inmate-offence`,{
  method:'PUT',
  headers:{
    "Content-Type":'application/json'
  },
  body:JSON.stringify(bodyData)

})
.then(res=>{
  res.json()
  .then(data=>{
    addStafRef.current.style.transform='translateX(500px)'
    alert('Added inmate succesful!')
    location.reload()
  })
})

        })
      })
      



              }
             })
           .catch(_err=>{
             alert('something went wrong')
             setLoading(false)
           })
         })
         .catch(_err=>{
           alert('something went wrong')
           setLoading(false)
         })
           
        
        
      }} style={{marginTop:20}} type='primary' size='large'>{addState}</Button>
      
     </div>
    </div>
    </div>
  )
}
