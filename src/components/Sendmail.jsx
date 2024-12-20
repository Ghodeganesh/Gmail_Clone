import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { FaRegWindowMinimize } from "react-icons/fa";
const Sendmail = () => {
    return (
        <div className='w-[800px]  bg-white shadow-xl shadow-slate-100 rounded-t-2xl'>
            <div className='flex justify-between items-center px-3 bg-[#F2F6FC]'>
                <h1 className='font-semibold'>New Messages</h1>
                <div className='flex items-center justify-between gap-1'>
                    <div className='p-2 rounded-full cursor-pointer hover:bg-gray-300'><FaRegWindowMinimize size={"10px"} /></div>
                    <div className='p-2 items-center cursor-pointer rounded-full hover:bg-gray-300'><RxCross2 size={"18px"} /></div>
                </div>

            </div>
            <form className='flex flex-col mx-2' >
                <input type="text" placeholder='To' className='outline-none border-b border-b-gray-500  py-2 px-2 w-full text-gray-600' />
                <input type="text" placeholder='Subjext' className='outline-none border-b border-b-gray-500  py-2 px-1 w-full text-gray-600' />
                <textarea name="" clo={30} rows={10} className='outline-none'></textarea>
                <button className='px-3 p-3 bg-[#0B57D0] rounded-md text-white'>Send</button>
            </form>

        </div>
    )
}

export default Sendmail