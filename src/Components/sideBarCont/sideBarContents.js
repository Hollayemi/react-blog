import React from 'react'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'

const TitleImageVisit = ({title,img,link}) => {
  return (
    <div className='w-full p-2'>
        <div className='border w-full flex items-center justify-center flex-col shadow'>
            <h3 className='m-3 text-center font-semibold capitalize'>{title}</h3>
            <img src={img} alt='loading...' />
            <Link to={'/'+link} className='bg-blue-500 px-8 rounded-full text-sm text-white shadow m-3 mt-6 '>Visit</Link>
        </div>
    </div>
  )
}

const DisplayInfo = ({title,text}) => {
  return (
    <div className='w-full p-2'>
        <div className='border w-full flex items-center justify-center p-2 flex-col shadow'>
            <h3 className='p-2 text-left font-semibold border-b w-full mb-2 capitalize'>{title}</h3>
            <p className='leading-8 text-gray-600 text-sm'>{text}</p>
        </div>
    </div>
  )
}



const TitleVisit = ({title,link}) => {
  return (
    <div className='w-full p-2'>
        <div className='border w-full flex items-center justify-center flex-col shadow'>
            <h3 className='m-3 text-center font-semibold capitalize'>{title}</h3>
            <Link to={'/'+link} className='bg-blue-500 px-8 rounded-full text-sm text-white shadow m-3 mt-6 '>Visit</Link>
        </div>
    </div>
  )
}

const titleAudio = ({src,title}) => {
  return (
    <div className='w-full p-2'>
        <div className='border w-full flex items-center justify-center flex-col shadow'>
        <h3 className='m-3 text-center font-semibold capitalize'>{title}</h3>
        <ReactAudioPlayer
          src={src}
          controls
        />
        </div>
    </div>
  )
}


export { TitleImageVisit, DisplayInfo, titleAudio}
export default TitleVisit