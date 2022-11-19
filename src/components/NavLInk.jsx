import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import './css/navlink.css'
export default function NavLInk({active=false,Icon=()=><HomeOutlined/>,title=''}) {
  return (
    <div className={`nav_container ${active?'active':''}`}>
    <div className='icon'>
    <Icon/>
    </div>
    
     <span>
        {title}
     </span>
    </div>
  )
}
