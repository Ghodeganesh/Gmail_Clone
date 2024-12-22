import React from 'react'
import { FaRegSquare, FaUserFriends } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { RxDragHandleDots1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../Reducs/appSlice';
import { motion } from 'framer-motion';
const Message = ({ data }) => {
  // console.log(data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navigateTo = () => {
    dispatch(setSelectedEmail(data))
    navigate(`/mail/${data.id}`)
  }

  return (
    // <motion.div animate={{
    //   scale: 2,
    //   transition: { duration: 2 }
    // }} onClick={navigateTo} className='flex hover:cursor-pointer bg-[#F2F6FC] justify-between border-b items-center hover:shadow-md hover:border-b hover:shadow-black px-4 py-3'>
    //   <div className='flex items-center  justify-between'>
    //     <div className='flex gap-3 text-gray-500 items-center'>
    //       <RxDragHandleDots1 size={"20px"} />
    //       <FaRegSquare size={"20px"} />
    //       <IoMdStarOutline size={"20px"} />
    //     </div>
    //     <div className='flex-1 ml-6 w-full  truncate max-w-full text-gray-600 items-center'>
    //       {data.message}
    //     </div>
    //   </div>
    //   <div className='flex gap-1 items-center'>
    //     {new Date(data?.createdAt?.seconds * 1000).toUTCString()}
    //   </div>
    // </motion.div>
    // <motion.div
    //   initial={{ scale: 1, opacity: 0.8 }}
    //   animate={{
    //     scale: 1.05,
    //     opacity: 1,
    //     transition: { duration: 0.5 },
    //   }}
    //   whileHover={{
    //     scale: 1.1,
    //     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    //     transition: { duration: 0.3 },
    //   }}
    //   whileTap={{ scale: 0.95 }}
    //   onClick={navigateTo}
    //   className="flex hover:cursor-pointer bg-[#F2F6FC] justify-between border-b items-center hover:shadow-md hover:border-b hover:shadow-black px-4 py-3"
    // >
    //   <div className="flex items-center justify-between">
    //     <div className="flex gap-3 text-gray-500 items-center">
    //       <RxDragHandleDots1 size={"20px"} />
    //       <FaRegSquare size={"20px"} />
    //       <IoMdStarOutline size={"20px"} />
    //     </div>
    //     <div className="flex-1 ml-6 w-full truncate max-w-full text-gray-600 items-center">
    //       {data.message}
    //     </div>
    //   </div>
    //   <div className="flex gap-1 items-center">
    //     {new Date(data?.createdAt?.seconds * 1000).toUTCString()}
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      whileHover={{
        y: -2,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.98,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 },
      }}
      onClick={navigateTo}
      className="flex  hover:cursor-pointer bg-[#F2F6FC] justify-between  items-center    px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-gray-500 items-center">
          <RxDragHandleDots1 size={"20px"} />
          <FaRegSquare size={"20px"} />
          <IoMdStarOutline size={"20px"} />
        </div>
        <div className="flex-1 ml-6 w-full truncate max-w-full text-gray-600 items-center">
          {data.message}
        </div>
      </div>
      <div className="flex gap-1 items-center">
        {new Date(data?.createdAt?.seconds * 1000).toUTCString()}
      </div>
    </motion.div>


  )
}

export default Message