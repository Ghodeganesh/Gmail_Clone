

import React, { useState } from 'react';
import { FaRegSquare, FaUserFriends, FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { MdInbox, MdOutlineMoreVert } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GoTag } from 'react-icons/go';
import Multimassage from './Mutimassages';

const inboxData = [
  {
    icon: <MdInbox size={"20px"} />,
    name: "Primary"
  },
  {
    icon: <GoTag size={"20px"} />,
    name: "Promotions"
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    name: "Socials"
  },
];

const Inbox = () => {
  const [mailType, setMailType] = useState(0);

  return (
    <div className="bg-white h-screen w-screen  rounded-xl mt-1 my-auto overflow-hidden">
      <div className="flex items-center justify-between px-4 mt-5">
        <div className="flex items-center gap-2">
          <div className="p-2 hover:bg-gray-300 rounded-full">
            <FaRegSquare size={"20px"} />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full">
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full">
            <MdOutlineMoreVert size={"20px"} />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full">
            <IoMdRefresh size={"20px"} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-xs px-3 py-2 hover:bg-gray-300 rounded-sm">1-31 of 31</div>
          <div className="flex">
            <div className="p-2 text-gray-500 rounded-full">
              <FiChevronLeft />
            </div>
            <div className="p-2 text-gray-500 rounded-full">
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>

      {/* Inbox Category Buttons */}
      <div className="h-[80vh] overflow-y-auto p-4">
        <div className="flex gap-4 mt-2 flex-wrap justify-start md:justify-between">
          {inboxData.map((data, index) => (
            <button
              onClick={() => setMailType(index)}
              key={index}
              className={`${mailType === index
                  ? "border-b-4 text-blue-500 border-blue-600"
                  : "bg-transparent"
                } flex items-center gap-2 px-4 py-3 w-full md:w-52 rounded-md hover:bg-gray-300`}
            >
              {data.icon}
              <span className="text-sm">{data.name}</span>
            </button>
          ))}
        </div>

        {/* Display the selected category's messages */}
        <div className="mt-6">
          <Multimassage />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
