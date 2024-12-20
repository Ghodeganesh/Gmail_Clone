import React, { useState } from 'react'
import { LuPen } from 'react-icons/lu'
import { MdExpandMore } from "react-icons/md";
import { MdOutlineDrafts } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { MdOutlineSnooze } from "react-icons/md";
import { MdQueryBuilder } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setOpen } from '../Reducs/appSlice';
const sidebarData = [{
    icon: <FaInbox size={"24px"} />,
    name: "inbox"
},
{
    icon: <IoMdStarOutline size={"24px"} />,
    name: "starred"
}, {
    icon: <MdQueryBuilder size={"24px"} />,
    name: "snooze"
}, {
    icon: <LuSendHorizontal size={"24px"} />,
    name: "sent"
},
{
    icon: <MdOutlineDrafts size={"24px"} />,
    name: "Draft"
}, {
    icon: <MdExpandMore size={"24px"} />,
    name: "more"
}]

const Sidebar = () => {
    const dispatch = useDispatch()

    const handlerCompose = () => {
        dispatch(setOpen(true))
    }
    return (
        <div className='w-[15%]  p-3'>
            <div className=''>
                <button onClick={handlerCompose} className='flex gap-2 font-semibold items-center bg-[#C2E7FF] px-6 py-4  rounded-2xl hover:shadow-md hover:shadow-slate-300 '>
                    <LuPen />
                    Compose
                </button>
            </div>
            <div className='mt-5 text-gray-500 '>
                {
                    sidebarData.map((data, index) => {
                        return (<div key={index} className='flex gap-4 pl-6 items-center hover:bg-[#D3E3FD] py-1 rounded-r-xl'>
                            <p>{data.icon}</p>
                            <p>{data.name}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar