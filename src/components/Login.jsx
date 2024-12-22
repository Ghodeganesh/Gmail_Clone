import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../../Firbase'
import { useDispatch } from 'react-redux'
import { setUser } from '../Reducs/appSlice'

const Login = () => {
    const dispatch = useDispatch()

    const halderLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            dispatch(setUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoUrl: result.user.photoURL,

            }))

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex w-screen h-screen font-bold bg-slate-400 justify-center items-center p-5'>
            <div className='max-w-5xl flex gap-3 flex-col bg-white p-9 items-center rounded-md '>
                <h1 className='font-medium text-center text-2xl '>Login</h1>
                <GoogleButton onClick={halderLogin} />
            </div>
        </div>
    )
}

export default Login