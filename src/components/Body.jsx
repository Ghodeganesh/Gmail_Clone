import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Body = () => (
  <div className='flex bg-[#F6F8FC]'>
    <Sidebar />
    <Outlet />
  </div>
)

export default Body