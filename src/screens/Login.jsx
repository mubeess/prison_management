import React from 'react'
import { Input,Button } from 'antd';
import '../App.css'
import Logo from '../assets/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';
export default function Login() {
    const inputStyle={
        marginBottom:20
    }
    const navigate=useNavigate()
  return (
    <div className='login_container'>
    <div className='login_body'>
        <div className='login_logo'>
            <img src={Logo} alt='logo'/>
            <span>Jimeta Central Prison Management System</span>
        </div>

        <div className='login_form'>
        <Input style={inputStyle} placeholder="Username" prefix={<UserOutlined style={{color:'black'}}/>} size='large' />
        <Input style={inputStyle} placeholder="Password" prefix={<LockOutlined style={{color:'black'}}/>} size='large'/>
        <Button onClick={()=>{
         navigate('/dashboard')
        }} size='large' type='primary'>Login</Button>
        </div>
    </div>
    </div>
  )
}
