import React from 'react'
import { FaRegSquare, FaUserFriends } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { RxDragHandleDots1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../Reducs/appSlice';

const Message = ({ data }) => {
  console.log(data)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const navigateTo = () => {
    dispatch(setSelectedEmail(data))
    navigate(`/mail/${data}`)
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
          {data.message}
        </div>
      </div>
      <div className='flex gap-1 items-center'>
        {new Date(data?.createdAt?.seconds * 1000).toUTCString()}
      </div>
    </div>
  )
}

export default Message