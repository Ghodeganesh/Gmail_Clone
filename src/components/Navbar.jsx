import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../Reducs/appSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firbase';


const Navbar = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

    const logedHandler = () => {
        signOut(auth).then(() => dispatch(setUser(null))).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='flex justify-between items-center h-16  px-3'>
            <div className='flex items-center gap-2 '>
                <div className=' hover:bg-gray-200 p-2 text-center rounded-full'>
                    <RxHamburgerMenu size={"24px"} />
                </div>
                <img className='w-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail_Photo" />
                <p className='text-gray-500  font-semibold text-2xl'>Gmail</p>
            </div>

            <div className='md:block hidden w-[50%] mr-60 items-center '>
                <div className=' flex  bg-[#EAE1FB] items-center w-full  rounded-full px-2 py-2 mr-60'>
                    <IoSearch size={"20px"} />
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Mail' className='px-2 w-full bg-transparent outline-none' type="text" />

                </div>
            </div>

            <div className='flex items-center gap-2 justify-between '>
                {/* <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <CiCircleQuestion size={"20px"} />
                </div> */}
                <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <IoSettingsOutline size={"20px"} />
                </div><div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                    <TbGridDots size={"20px"} />
                </div>
                <div className='p-2 hover:bg-gray-200 rounded-full'>
                    <Avatar src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" size={"40px"} round={true} />
                </div>
                <button onClick={logedHandler} className='px-2 py-1 bg-blue-300 rounded-md font-semibold hover:bg-blue-600'>LogOut</button>

            </div>


        </div>
    )
}

export default Navbar
