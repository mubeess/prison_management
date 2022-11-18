import React from 'react'
import { Input,Button } from 'antd';
import '../App.css'
import Logo from '../assets/logo.png'
export default function Login() {
    const inputStyle={
        marginBottom:20
    }
  return (
    <div className='login_container'>
    <div className='login_body'>
        <div className='login_logo'>
            <img src={Logo} alt='logo'/>
            <span>Jimeta Central Prison Management System</span>
        </div>

        <div className='login_form'>
        <Input style={inputStyle} placeholder="Basic usage" />
        <Input style={inputStyle} placeholder="Basic usage" />
        <Button type='primary'>Login</Button>
        </div>
    </div>
    </div>
  )
}
