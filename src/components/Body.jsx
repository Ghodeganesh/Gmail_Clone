import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Body = () => (
  <div className='flex '>
    <Sidebar />
    {/* <Sendmail /> */}
    <Outlet />
  </div>
)

export default Body