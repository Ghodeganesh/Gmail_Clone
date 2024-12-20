import React from 'react'
import { IoMdMore, IoMdArrowBack } from 'react-icons/io'
import { BiArchiveIn } from 'react-icons/bi'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkunread,
  MdDriveFileMove,
  MdOutlineAddTask,
  MdMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineDriveFileMove
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Mail = () => {
  const navigator = useNavigate()
  const handleNavigation = () => {
    navigator("/")
  }
  return (
    <div className='rounded-xl bg-white mx-5 h-screen w-screen'>
      <div className='flex justify-between px-4 items-center mt-3'>
        <div className='flex items-center gap-3 '>
          <div onClick={handleNavigation} className='p-2 rounded-full hover:bg-gray-300'><IoMdArrowBack size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><BiArchiveIn size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdOutlineReport size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdDeleteOutline size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdMarkEmailUnread size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdOutlineWatchLater size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdOutlineAddTask size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><MdOutlineDriveFileMove size={"20px"} /></div>
          <div className='p-2 rounded-full hover:bg-gray-300'><IoMdMore size={"20px"} /></div>
        </div>
        <div className='flex'>
          <div className='p-2  text-gray-500 rounded-full'><FiChevronLeft /></div>
          <div className='p-2  text-gray-500 rounded-full'><FiChevronRight /></div>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto p-5'>
        <div className='flex justify-between items-center  '>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-2xl font-bold'>Subject</p>
            <p className='px-3 py-1 bg-gray-300 rounded-md text'>inbox</p>
          </div>
          <div>
            <p className='text-gray-500 '>19-12-2024</p>
          </div>

        </div>
        <div className='mt-5 text-gray-500'>
          <p>ganeshghode@gmail.com</p>
          <p>To Me</p>
        </div>
        <div className='mt-10'>
          <p>Massge</p>
        </div>

      </div>


    </div>
  )
}

export default Mail