

import React from 'react';
import { FaRegSquare } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../Reducs/appSlice';

const Message = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateTo = () => {
    dispatch(setSelectedEmail(data));
    navigate(`/mail/${data.id}`);
  };

  return (
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
      className="flex  items-center  justify-between bg-[#F2F6FC] border-b px-4 py-3 hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex  items-center justify-between w-full">
        <div className="flex gap-3 text-gray-500 items-center">
          <FaRegSquare size="20px" />
          <IoMdStarOutline size="20px" />
        </div>
        <div className="ml-4 flex-1 w-full truncate">
          <h1 className="font-semibold text-gray-700">{data.to}</h1>
        </div>
        <div className="flex-1 ml-7 w-full truncate text-gray-600">
          {data.message}
        </div>
      </div>
      <div className="text-gray-400 text-sm hidden sm:block ">
        {new Date(data?.createdAt?.seconds * 1000).toUTCString()}
      </div>
    </motion.div>
  );
};

export default Message;
