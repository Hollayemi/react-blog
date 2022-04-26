import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { ContextPage } from '../../useContext/authContext'
import { Error, Success } from '../alert/alerts'

const ForgotPass = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef =  useRef()
    const {forgotPassword} = ContextPage()

    async function forgotPasswordHandler (e){
        e.preventDefault()
        try{
            forgotPassword(emailRef.current.value)
            setSuccess('Check your inbox to continue...')
        }catch{
            setError('Unable to Send')
        }
    }
    return (
        

        
        
        <div className='bg-teal-900 h-full w-full absolute flex items-center justify-center'>
            <div className='flex items-center border p-8 rounded justify-center flex-col'>
                {success && <Success message={success} />}
                {error && <Error message={error} />}
                <h1 className='font-bold text-white'>MocoMoca Forgot Password</h1>
                <div>
                    <form onSubmit={forgotPasswordHandler} className='flex flex-col items-center justify-center'>
                        <input 
                            className='border focus:border-red-100 w-full m-2 mt-8 bg-transparent rounded-xl text-white px-5 py-1' 
                            ref={emailRef}
                            placeholder='email'/>
                        

                        <button className='text-black h-8 w-full bg-teal-200 rounded-full shadow-lg'>Send</button>

                        <div className='w-full flex px-2 text-xs justify-between mt-2 items-center'>
                            <p className='text-sm hover:text-teal-200 text-teal-100'>  </p>
                            <Link to="/Signin" className='text-sm hover:text-teal-200 text-teal-100 cursor-pointer'>Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
