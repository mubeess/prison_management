import React, { useState } from 'react'
import { Input,Button } from 'antd';
import '../App.css'
import Logo from '../assets/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';
export default function Login() {
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
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
        <Input onChange={(e)=>{
        setMail(e.target.value)
      }} style={inputStyle} placeholder="Username" prefix={<UserOutlined style={{color:'black'}}/>} size='large' />
        <Input onChange={(e)=>{
        setPassword(e.target.value)
      }} style={inputStyle} placeholder="Password" prefix={<LockOutlined style={{color:'black'}}/>} size='large'/>
        <Button onClick={()=>{
       
         if (!mail||!password) {
         alert('Fields cant be empty!!!!')
         return
          }
         setLoading(true)
         const bodyData={
          username:mail,
          password
  }
 
   
         fetch(`https://pms.fly.dev/admin/login`,{
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
             if (data.success) {
              window.sessionStorage.setItem('user',JSON.stringify(data.newUser))
              navigate('/dashboard')
             }else{
              alert('Email or Password Incorrect')
             }
             console.log(data)
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
           
        
    
        
        }} size='large' type='primary'>Login</Button>
        </div>
    </div>
    </div>
  )
}
