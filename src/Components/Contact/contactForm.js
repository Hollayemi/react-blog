import React from 'react'

import HeaderLine from '../Home/header-line'

const ContactForm = ({setName}) => {
    return (
        <>  
        <HeaderLine />

        <div className='contact'>
            <div className='overlay w-full flex justify-center flex-col item-center'>
                <h2 className='text-teal-400 font-mono text-lg font-bold text-center sm:text-left p-8 sm:pl-20'>Contact Us</h2>
                <form className='py-10 flex flex-col w-full flex-col-reverse sm:flex-row justify-center sm:justify-evenly '>
                    <div className='mx-3 w-4/5 ml-5 mt-8 sm:mt-0 sm:w-2/5'>
                        <input type='text' name='name' value={setName} placeholder='Your Name' className='border-b w-full border-gray-700 mt-3 text-sm p-2 pl-4 bg-transparent text-white focus:outline-none focus:border-teal-400 focus:text-teal-400'/>
                        <input type='text' name='name' value={setName} placeholder='Your E-mail' className='border-b w-full border-gray-700 mt-3 text-sm p-2 pl-4 bg-transparent text-white focus:outline-none focus:border-teal-400 focus:text-teal-400'/>
                        <input type='text' name='name' value={setName} placeholder='Subject ' className='border-b w-full border-gray-700 mt-3 text-sm p-2 pl-4 bg-transparent text-white focus:outline-none focus:border-teal-400 focus:text-teal-400'/>
                        <textarea className='border-b h-40 w-full border-gray-700 mt-3 text-sm p-2 pl-4 bg-transparent text-white focus:outline-none focus:border-teal-400 focus:text-teal-400'></textarea>

                        <button className='w-full bg-teal-400 h-8 text-black mt-3 text-lg'>Submit</button>

                    </div>
                    <div className='mx-3 border-t-4 border-teal-400 rounded ml-5 w-4/5 sm:w-2/5'>
                        <div className='my-8'>
                            <h3 className='text-teal-400 font-semibold'>Address</h3>
                            <p className='text-gray-600 leading-8 mt-2 ml-3'>Block 417, Zone 4, Jakande Estate, Isolo, Lagos State, Nigeria.</p>
                        </div>

                        <div className='my-8'>
                            <h3 className='text-teal-400 font-semibold'>E-MAIL</h3>
                            <p className='text-gray-600 leading-8 mt-2 ml-3'>stephanyemmitty@gmail.com <br /> oluwasusistephen@gmail.com</p>
                        </div>

                        <div className='my-8'>
                            <h3 className='text-teal-400 font-semibold'>Call Us At</h3>
                            <p className='text-gray-600 leading-8 mt-2 ml-3'>Phone: 08147702684</p>
                        </div>

                        <div className='my-8'>
                            <h3 className='text-teal-400 font-semibold'>Social Media</h3>
                            <p className='text-gray-200 leading-8 mt-2 ml-3 flex '>
                                <i className="fa fa-facebook p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i> 
                                <i className="fa fa-whatsapp p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i>
                                <i className="fa fa-linkedin p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i>
                                <i className="fa fa-twitter p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i>
                                <i className="fa fa-github p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i>
                                <i className="fa fa-google-plus p-2 hover:text-teal-400 transition duration-150 ease-in-out cursor-pointer"></i>
                            </p>
                        </div>

                        
                    </div>


                </form>
            </div>
        </div>
        </>
    )
}

export default ContactForm

