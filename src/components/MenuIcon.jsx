import { FileAddFilled } from '@ant-design/icons'
import React from 'react'
import './css/menu.css'
function MenuIcon({Icon,title='',onClick}) {
  return (
    <div onClick={onClick} className='menu-cont'>
        <div className='icon-cont'>
            <Icon/>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default MenuIcon