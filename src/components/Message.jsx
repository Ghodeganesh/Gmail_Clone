import React from 'react'
import { FaRegSquare, FaUserFriends } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { RxDragHandleDots1 } from "react-icons/rx";
import { Navigate, useNavigate } from 'react-router-dom';

const Message = () => {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate("/mail/123")
  }

  return (
    <div onClick={navigateTo} className='flex hover:cursor-pointer bg-[#F2F6FC] justify-between border-b items-center hover:shadow-md hover:border-b hover:shadow-black px-4 py-3'>
      <div className='flex items-center  justify-between'>
        <div className='flex gap-3 text-gray-500 items-center'>
          <RxDragHandleDots1 size={"20px"} />
          <FaRegSquare size={"20px"} />
          <IoMdStarOutline size={"20px"} />
        </div>
        <div className='flex-1 ml-6 w-full  truncate max-w-full text-gray-600 items-center'>
          Newsletter
        </div>
      </div>
      <div className='flex gap-1 items-center'>
        Newsletter
      </div>
    </div>
  )
}

export default Message