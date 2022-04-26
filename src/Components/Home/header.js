import React, { useRef } from 'react'
import '../display.css'
import { Link } from 'react-router-dom'


const Header = () => {
    const searchRef = useRef()
    return (
        <div className='z-30 bg-white'>


            <div className='bg-teal-700 flex justify-end w-full sticky top-0 px-20'>
                <ul className='m-1 flex'>
                    <Link to='/' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Register</li></Link>
                    <Link to='/signup' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Sign up</li></Link>
                    <Link to='/signin' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Login</li></Link>
                    <Link to='/contact-us' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Contact us</li></Link>
                    <Link to='/help' ><li className='p-0.5 px-4 text-sm font-semibold text-white border-gray-500 border-l hover:bg-teal-600 cursor-pointer'>Help</li></Link>
                </ul>
            </div>



            
            <div className=' flex items-center p-6 w-4/5 justify-evenly'>
                <div className='border-b-4 border-teal-700 px-2'>
                    <h1 className='text-3xl font-bold '>STEPHAN</h1>
                </div>

                <div className=''>
                    <form className='flex'>
                        <input type="text" ref={searchRef} className='border-b border-l border-t rounded w-full p-1 pl-3 focus:outline-none focus:border-teal-500'
                                placeholder='search'/>
                        <button className='bg-teal-800 text-white px-2 -ml-1'>search</button>
                    </form>
                </div>
            </div>

            <div className='bg-white flex justify-start w-full px-20 border-b border-gray-400 py-2'>
                <ul className='m-1 flex'>
                    <li className='p-0.5 px-4 text-sm font-semibold text-teal-700 hover:text-teal-400 cursor-pointer'>News</li>
                    <li className='p-0.5 px-4 text-sm font-semibold text-teal-700 hover:text-teal-400 cursor-pointer'>Sport</li>
                    <li className='p-0.5 px-4 text-sm font-semibold text-teal-700 hover:text-teal-400 cursor-pointer'>Health</li>
                    <li className='p-0.5 px-4 text-sm font-semibold text-teal-700 hover:text-teal-400 cursor-pointer'>Covid 19</li>
                    <li className='p-0.5 px-4 text-sm font-semibold text-teal-700 hover:text-teal-400 cursor-pointer'>Joke</li>
                </ul>
            </div>

        </div>


    )
}

export default Header
