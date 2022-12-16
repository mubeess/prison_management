import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router'
import './css/navlink.css'
export default function NavLInk({active=false,Icon=()=><HomeOutlined/>,title='',route}) {
  const navigate=useNavigate()
  const location=useLocation()
  return (
    <div onClick={()=>{
     navigate(route)
    }} className={`nav_container ${location.pathname==route?'active':''}`}>
    <div className='icon'>
    <Icon/>
    </div>
    
     <span>
        {title}
     </span>
    </div>
  )
}
