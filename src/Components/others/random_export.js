import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as myIcon from '@fortawesome/free-solid-svg-icons'

const PostSample  = ({content,imageUrl,title}) => {
    return (
        <div className='w-full'>
            <div className='w-full px-5 py-2 text-white bg-teal-700 text-lg md:text-2xl font-bold rounded-b-lg flex justify-between items-center'>
                {title}
                <p className='text-sm font-normal text-teal-400'>Published</p>
            </div>  
            <p className='text-sm text-gray-700 px-3 leading-8 mt-4'>
                    {content.substring(0,100)}
            </p>    
            <div className='w-full flex justify-center'>
                <img  src={imageUrl} alt='post_image' className='w-3/4 mt-4'/>
            </div>
            <div className='px-3'>
                <p className='text-sm text-gray-700 leading-8 mt-4'>
                    {content.substring(100,400)+'...'}
                </p>    
                <div className='flex justify-end'>
                    <i className='px-2 py-1 text-gray-400 flex'><FontAwesomeIcon icon={myIcon.faThumbsUp} /><p className='text-sm px-1'>132</p></i>
                    <i className='px-2 py-1 text-gray-400 flex'><FontAwesomeIcon icon={myIcon.faCommenting} /><p className='text-sm px-1'>82</p></i>
                </div>
            </div>
        </div>
  )
}

export {PostSample}