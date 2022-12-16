import { Input } from 'antd'
import React from 'react'
import Prisoner from '../components/Prisoner'
import './css/prisoners.css'
export default function Prisoners() {
  return (
    <div className='prisoners_container'>
     <div>
     <span>Prisoners List</span>
      <Input placeholder='Search Prisoners' size='large'/>
     </div>

     <div className='prisoner_list'>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
      <Prisoner/>
     </div>
    </div>
  )
}
