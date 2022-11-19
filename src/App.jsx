import React from 'react'
import Layout from './screens/Layout'
import Login from './screens/Login'
import Home from './screens/Home'
import Prisoners from './screens/Prisoners'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
     <Route element={<Login/>} path='/'/>
     <Route path='dashboard' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='prisoners' element={<Prisoners/>}/>
     </Route>
    </Routes>
  )
}

