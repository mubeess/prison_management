import React from 'react'
import { Outlet } from 'react-router'
import './css/layout.css'
import Logo from '../assets/logo.png'
import User from '../components/User'
import NavLInk from '../components/NavLInk'
import { IdcardOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

export default function Layout() {
  return (
    <div className='layout_container'>
        <div className='aside'>
        <div className='layout_logo'>
            <img src={Logo} alt='logo'/>
        </div>
        <User/>
        <NavLInk 
        title='Home'
        route='/dashboard'
        active={true}
        />
        <NavLInk 
        route='/dashboard/prisoners'
        title='Prisoners'
        Icon={()=><IdcardOutlined />}
        />
        <NavLInk
        route='/dashboard/staff'
        title='Staff' 
        Icon={()=><UserOutlined/>}
        />
        <div className='logout'>
            <NavLInk 
            title='Logout'
            Icon={()=><LogoutOutlined/>}/>
        </div>
        </div>



        <div className='main_content'>
        <Outlet/>
        </div>
      
    </div>
  )
}
