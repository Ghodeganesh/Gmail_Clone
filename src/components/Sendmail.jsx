import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { FaRegWindowMinimize } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../Reducs/appSlice';

const Sendmail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    })

    const open = useSelector(store => store.appslice.open)
    const dispatch = useDispatch()
    const handlerCompose = () => {
        console.log("Closedd")
        dispatch(setOpen(false))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className={`${open ? 'block' : 'hidden'} max-w-[800px]  bg-white shadow-xl shadow-slate-100 rounded-t-2xl`}>
            <div className='flex justify-between items-center px-3 bg-[#F2F6FC]'>
                <h1 className='font-semibold'>New Messages</h1>
                <div className='flex items-center justify-between gap-1'>
                    <div className='p-2 rounded-full cursor-pointer hover:bg-gray-300'><FaRegWindowMinimize size={"10px"} /></div>
                    <div onClick={handlerCompose} className='p-2 items-center cursor-pointer rounded-full hover:bg-gray-300'><RxCross2 size={"18px"} /></div>
                </div>

            </div>
            <form onSubmit={submitHandler} className='flex flex-col mx-2' >
                <input value={formData.to} name="to" onChange={inputHandler} type="text" placeholder='To' className='outline-none border-b border-b-gray-500  py-2 px-2 w-full text-gray-600' />
                <input value={formData.subject} name="subject" onChange={inputHandler} type="text" placeholder='Subjext' className='outline-none border-b border-b-gray-500  py-2 px-1 w-full text-gray-600' />
                <textarea value={formData.message} name="message" onChange={inputHandler} clo={30} rows={10} className='outline-none'></textarea>
                <button className='px-3 p-3 bg-[#0B57D0] rounded-md text-white'>Send</button>
            </form>

        </div>
    )
}

export default Sendmail