import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Error } from '../alert/alerts'

import { ContextPage } from '../../useContext/authContext'


const Signup = () => {
    
    const [error, setError] = useState('')

    const {signup, currentUser} = ContextPage()
    const emailRef = useRef()
    const passwordRef = useRef()
    const conf_passwordRef = useRef()

    async function signUpHandler (e) {
        e.preventDefault();
        if(passwordRef.current.value !== conf_passwordRef.current.value){
            return setError('Passoword not match')
        }
        try{
            
            await signup(emailRef.current.value,passwordRef.current.value)
        }catch{
            return setError('Unable to sign up') 
        }

    }

    return (
        <div className='bg-teal-900 h-full w-full absolute flex items-center justify-center'>
            <div className='flex items-center border p-8 rounded justify-center flex-col'>
                {error && <Error message={error} />}
                {/* {JSON.stringify(currentUser.email)} */}
                <h1 className='font-bold text-white'>MocoMoca Sign up</h1>
                <div>
                    <form onSubmit={signUpHandler} className='flex flex-col items-center justify-center'>
                        <input 
                            className='border focus:border-red-100 w-full m-2 mt-2 bg-transparent rounded-xl text-white px-5 py-1' 
                            placeholder='email'
                            type="email"
                            ref = {emailRef} required/>
                            
                            
                        <div className='w-full flex px-2 text-xs justify-end items-center'>
                            <i className='fa fa-eye hover:text-teal-200 text-teal-100'></i>
                        </div>
                        <input 
                            className='border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1' 
                            placeholder='password'
                            type="password"
                            ref = {passwordRef} required/>

                        <div className='w-full flex px-2 text-xs justify-end items-center'>
                            <i className='fa fa-eye hover:text-teal-200 text-teal-100'></i>
                        </div>
                        <input 
                            className='border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1' 
                            placeholder='confirm password'
                            type="password"
                            ref = {conf_passwordRef} required/>

                        <button className='text-black h-8 w-full bg-teal-200 rounded-full shadow-lg'>Sign up</button>

                        <div className='w-full flex px-2 text-xs justify-between mt-2 items-center'>
                            <p className='text-sm hover:text-teal-200 text-teal-100'>Already have account </p>
                            <Link to="/signin" className='text-sm hover:text-teal-200 text-teal-100'>Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
