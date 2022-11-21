import React from 'react'
import './css/stat.css'
export default function Stat({title1='',value1='',title2='',value2=''}) {
  return (
    <div className='stat_container'>
        <div className='stat_detail'>
        <span>{value1}</span>
        <p>{title1}</p>
        </div>
        
        <div className='drawer'></div>

        <div className='stat_detail'>
        <span>{value2}</span>
        <p>{title2}</p>
        </div>
    </div>
  )
}
