import { ArrowRightOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import './css/prisoner.css'
export default function Prisoner() {
  return (
    <div className='prisoner_container'>
        <img 
        src='https://s.abcnews.com/images/US/william-garrison-ap-aa-200420_hpMain_16x9_992.jpg'
         alt='img'/>
        <div className='prisoner_detail'>
            <h4>Umar Yusuf</h4>
            <span>5 years</span>
            <div className='priosner_icons'>
                <DeleteOutlined style={{color:'red'}}/>
                <PlusOutlined/>
            </div>
        </div>
    </div>
  )
}
