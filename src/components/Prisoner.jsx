import { ArrowRightOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import './css/prisoner.css'
export default function Prisoner({name='',convic='',id}) {
  return (
    <div className='prisoner_container'>
        <img 
        src='https://miro.medium.com/max/790/1*reXbWdk_3cew69RuAUbVzg.png'
         alt='img'/>
        <div className='prisoner_detail'>
            <h4>{name}</h4>
            <span>{convic}</span>
            <div className='priosner_icons'>
                <DeleteOutlined onClick={()=>{
                   fetch(`https://pms.fly.dev/admin/delete-single-inmate?inmateId=${id}`,{
                    method:'DELETE',
                    headers:{
                      "Content-Type":'application/json'
                    },
                    
                  
         })
  .then(res=>{
    res.json()
    .then(data=>{
      alert('deleted succesful')
      console.log(data)
      location.reload()
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
                }} style={{color:'red'}}/>
                <PlusOutlined/>
            </div>
        </div>
    </div>
  )
}
