import React from 'react';
import { LuPen } from 'react-icons/lu';
import { MdExpandMore, MdOutlineDrafts, MdOutlineSnooze, MdQueryBuilder } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setOpen } from '../Reducs/appSlice';

const sidebarData = [
    { icon: <FaInbox size="24px" />, name: "Inbox" },
    { icon: <IoMdStarOutline size="24px" />, name: "Starred" },
    { icon: <MdQueryBuilder size="24px" />, name: "Snoozed" },
    { icon: <LuSendHorizontal size="24px" />, name: "Sent" },
    { icon: <MdOutlineDrafts size="24px" />, name: "Drafts" },
    { icon: <MdExpandMore size="24px" />, name: "More" },
];

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleCompose = () => {
        dispatch(setOpen(true));
    };

    return (
        <div className="hidden sm:w-[15%]  md:block md:w-[20%] bg-[#F6F8FC] p-3 shadow-md">
            {/* Compose Button */}
            <div>
                <button
                    onClick={handleCompose}
                    className="flex gap-2 items-center bg-blue-100 px-6 py-3 rounded-2xl font-semibold text-gray-700 hover:shadow-md hover:bg-blue-200 transition duration-200"
                    aria-label="Compose"
                >
                    <LuPen />
                    Compose
                </button>
            </div>

            {/* Sidebar Menu */}
            <div className="mt-5 text-gray-600">
                {sidebarData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 pl-4 py-2 rounded-r-xl hover:bg-blue-100 cursor-pointer transition duration-200"
                        aria-label={item.name}
                    >
                        <span>{item.icon}</span>
                        <p className="text-sm md:text-base">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
