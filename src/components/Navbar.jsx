
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../Reducs/appSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firbase';
import Sidebar from './Sidebar'
const Navbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.appslice);
  const [visibility, setvisibility] = useState(false)

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input, dispatch]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.error("Sign out error:", error));
  };
 


  return (
    <div className="flex justify-between items-center h-16 px-3  shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Menu" onClick={hambergerHandler}
          className="hover:bg-gray-200 p-2 text-center rounded-full"
        >
          <RxHamburgerMenu size="24px" />
        </button>
        <img
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
          alt="Gmail Logo"
        />
        <p className="text-gray-500 font-semibold text-2xl hidden md:block">Gmail</p>
      </div>

      {/* Search Section */}
      <div className="hidden md:flex w-[50%] items-center">
        <div className="flex bg-[#EAE1FB] items-center w-full rounded-full px-2 py-2">
          <IoSearch size="20px" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Mail"
            className="px-2 w-full bg-transparent outline-none"
            type="text"
            aria-label="Search Mail"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Settings"
          className="p-2 hover:bg-gray-200 rounded-full"
        >
          <IoSettingsOutline size="20px" />
        </button>
        <button
          aria-label="Apps"
          className="p-2 hover:bg-gray-200 rounded-full"
        >
          <TbGridDots size="20px" />
        </button>
        <Avatar
          src={user?.photoUrl || ''}
          size="40px"
          round={true}
          alt="User Avatar"
          className="cursor-pointer"
        />
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
