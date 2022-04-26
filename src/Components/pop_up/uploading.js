import React from 'react'

const Uploading = ({curr}) => {
  return (
    <div className='w-full min-h-screen overlay2 fixed top-0 h-full z-50 flex items-center justify-center rounded'>
        <div className='w-2/4 h-48 bg-white flex flex-col rounded-md overflow-hidden'>
            <div className='w-full bg-teal-600 p-3 flex justify-between items-center shadow'>
                <h3 className='font-bold text-md text-white'>Uploading</h3>
                <div className='w-20 h-5 rounded-full bg-gray-100 border-4 border-teal-700 overflow-hidden p-0 border-none'>
                    <progress value={curr} max='100' className='text-teal-700 w-full bg-teal-700 h-full m-0 border-none'  ></progress>
                </div>
            </div>

            <div className='w-full flex items-center justify-center h-full flex-col'>
                <p className='pb-3'>uploading <i>{curr}%</i></p>
                <progress value={curr} max='100' className='text-teal-700 w-4/5 md:w-2/4 bg-teal-700 h-5 rounded-full'  ></progress>
            </div>
            
        </div>
    </div>
  )
}

export default Uploading