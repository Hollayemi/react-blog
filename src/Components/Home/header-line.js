import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const HeaderLine = () => {

    return (
        <div className='w-full z-100 shadow'>
            <div className='bg-teal-700 flex justify-end w-full px-20'>
                <ul className='m-1 flex'>
                <Link to='/' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Register</li></Link>
                    <Link to='/signup' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Sign up</li></Link>
                    <Link to='/signin' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Login</li></Link>
                    <Link to='/contact-us' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Contact us</li></Link>
                    <Link to='/help' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Help</li></Link>
                </ul>
            </div>
        </div>

    )
}

export default HeaderLine