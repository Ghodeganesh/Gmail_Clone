

import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../../Firbase';
import { useDispatch } from 'react-redux';
import { setUser } from '../Reducs/appSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser({
        displayName: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen bg-slate-400 justify-center items-center p-5">
      <div className="max-w-md w-full bg-white p-9 items-center rounded-md flex flex-col gap-4">
        <h1 className="text-2xl font-medium text-center">Login</h1>
        <p className="text-center text-sm text-gray-500 mb-6">Please login with your Google account to continue.</p>
        <GoogleButton
          onClick={handleLogin}
          className="w-full p-2 border rounded-lg shadow-md transition duration-200 hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default Login;
