import React, { useEffect } from 'react'
import Image from '../assets/me.jpg'
import './css/user.css'
export default function User() {
 const user=JSON.parse(window.sessionStorage.getItem('user'))
  return (
    <div className='user'>
        <img src='https://miro.medium.com/max/790/1*reXbWdk_3cew69RuAUbVzg.png' alt='img'/>
        <span>{user.firstName} {user.lastName}</span>
        <span>Admin</span>
    </div>
  )
}
