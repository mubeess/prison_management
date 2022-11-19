import React from 'react'
import Image from '../assets/me.jpg'
import './css/user.css'
export default function User() {
  return (
    <div className='user'>
        <img src={Image} alt='img'/>
        <span>Mubarak Ibrahim</span>
        <span>CEO</span>
    </div>
  )
}
