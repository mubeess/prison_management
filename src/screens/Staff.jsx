import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import Prisoner from '../components/Prisoner'
import './css/prisoners.css'
export default function Staff() {
  const [allInmate,setAllIn]=useState(null)
  const [filtered,setFiltered]=useState([])
  const [filterText,setFilterTx]=useState('')
  const fillTererddd = allInmate!==null && allInmate.filter(inm=>inm.firstName.toLowerCase().includes(filterText.toLowerCase()))
  useEffect(()=>{
   fetch('https://pms.fly.dev/admin/get-all-staff')
   .then(res=>{
    res.json()
    .then(data=>{
    console.log(data)
    setAllIn(data.message)
    })
   })
  },[])

  return (
    <div className='prisoners_container'>
     <div>
     <span>Staff List</span>
      <Input onChange={(e)=>{
       if (allInmate==null) {
        return
       } 
       setFilterTx(e.target.value)
       
      // const fillTererddd = allInmate.filter(inm=>inm.firstName.toLowerCase().includes(filterText.toLowerCase()))
      // setFiltered(fillTererddd)
      
      }} placeholder='Search Staff By Name' size='large'/>
     </div>

     <div className='prisoner_list'>
      {
        allInmate!==null&&(
          fillTererddd.map((inm,ind)=>(
            <Prisoner staff={true} id={inm.username} name={`${inm.firstName} ${inm.lastName}`} convic={inm.phone} key={ind}/>
          ))
        )
      }
      {/* <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/> */}
     </div>
    </div>
  )
}
