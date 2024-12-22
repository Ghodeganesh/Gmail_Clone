

import React from 'react';
import { IoMdArrowBack, IoMdMore } from 'react-icons/io';
import { BiArchiveIn } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineReport, MdMarkEmailUnread, MdOutlineWatchLater, MdOutlineAddTask, MdOutlineDriveFileMove } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '../../Firbase';

const Mail = () => {
  const navigator = useNavigate();
  const param = useParams();
  const { selectedEmail } = useSelector(store => store.appslice);

  const deleteHandler = async (id) => {
    try {
      alert("Are you sure to delete");
      await deleteDoc(doc(db, "Emails", id));
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigation = () => {
    navigator("/");
  };

  return (
    <div className="rounded-xl bg-white mt-1 h-screen   w-screen max-w-7xl ">
      {/* Top Header Section */}
      <div className="flex justify-between px-4 items-center mt-3">
        <div className="flex gap-3">
          <div onClick={handleNavigation} className="p-2 rounded-full hover:bg-gray-300">
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <MdOutlineReport size={"20px"} />
          </div>
          <div onClick={() => deleteHandler(param.id)} className="p-2 rounded-full hover:bg-gray-300">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <MdMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-300">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="p-2 text-gray-500 rounded-full">
            <FiChevronLeft size="20px" />
          </div>
          <div className="p-2 text-gray-500 rounded-full">
            <FiChevronRight size="20px" />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        className="h-[90vh] overflow-y-auto p-5"
      >
        {/* Subject and Date */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="flex justify-between items-center mb-5"
        >
          <div className="flex gap-2">
            <motion.p
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="text-2xl font-bold"
            >
              {selectedEmail?.subject}
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-3 py-1 bg-gray-300 rounded-md text-sm"
            >
              inbox
            </motion.p>
          </div>
          <p className="text-gray-500 text-sm">
            {new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}
          </p>
        </motion.div>

        {/* To Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          className="text-gray-500 mb-5"
        >
          <p>{selectedEmail?.to}</p>
          <p>To Me</p>
        </motion.div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
          className="mt-10"
        >
          <p>{selectedEmail?.message}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mail;
