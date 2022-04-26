import React from 'react'


export const Error = ({message}) => {
    return (
        <div className='bg-red-300 w-full border-red-500 rounded border mb-5'>
            <p className='p-2 pl-3 text-gray-700'>{message}</p>
        </div>
    )
}

export const Success = ({message}) => {
    return (
        <div className='bg-green-300 w-full border-green-500 rounded border mb-5'>
            <p className='p-2 pl-3 text-green-700'>{message}</p>
        </div>
    )
}

const Info = ({message}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}
export default Info
