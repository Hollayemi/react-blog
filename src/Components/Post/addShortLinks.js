import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as myIcon from '@fortawesome/free-solid-svg-icons'

import TitleVisit, {TitleImageVisit,DisplayInfo} from '../sideBarCont/sideBarContents'
import { ContextPage } from '../../useContext/authContext'
import { useNavigate } from 'react-router-dom'




const ShortLinks = ({setSideBar,openSideBar}) => {

    const navigate = useNavigate()
    
    const [typeRef, setTypeRef] = useState('DisplayInfo')
    const [titleRef, setTitleRef] = useState()
    const [displayInfoText, setDisplayInfoText] = useState()
    const [imageRef, setImageRef] = useState()
    const [pageRef, setpageRef] = useState()
    const [Published, setPublished] = useState(Date())
    const [isFile, setIsFile] = useState(false)
    const [fileType, setFileType] = useState(false)
    const [isInfo, setIsInfo]   =   useState(false)
    const [Preview, setPreview] = useState({})
    const {myData, createLinkPost} = ContextPage()

    
    


    const imageHandler = (e) =>{
        setImageRef(e.target.files[0])
        let exactType = (e.target.files[0].type).split('/')
        setFileType(exactType[0])
        setIsFile(true)
        setPreview({[e.target.name]: URL.createObjectURL(e.target.files[0])})
        console.log(Preview)
        console.log({[e.target.name]: URL.createObjectURL(e.target.files[0])})
    }


    const infoHandler = (e) =>{
        setDisplayInfoText(e.target.value)
        setIsInfo(true)
        

    }

    
    const createLinkPostHandler = async () =>{
        await createLinkPost(
            typeRef,
            titleRef,
            pageRef,
            Published,
            displayInfoText,
            isInfo,
            isFile,
            fileType ,
            imageRef
        )
        setIsFile(false)
        navigate('/');
        
    }

    



    let myOpt = myData.map((element,index) => {
        return <option value={element} key={index}>{element}</option>
    })

    return (
        <div>
            <div className='sticky top-0'>
                    <div className='flex bg-teal-100 border-b'>
                        <div className='flex items-center justify-between w-full px-6'>
                            <h1 className='text-gray-600 text-md p-2 pl-4 font-semibold'>Website - Blog - Create Post</h1>
                            <i className='cursor-pointer' onClick={()=>{setSideBar(!openSideBar)}}>
                                <FontAwesomeIcon icon={myIcon.faBars} />
                            </i>
                        </div>
                    </div>
                    <div className='w-full  flex justify-between p-2 px-5 border-b border-gray-400 bg-gray-100'>
                        <h1>{ titleRef === '' ? <p>No Title</p> : <p className='font-bold text-xl text-gray-700 capitalize'>{titleRef}</p>  } </h1>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 rounded-full bg-orange-500 px-2 mx-2'></div>
                            <h4 className='text-sm pr-4'>Not Saved</h4>
                            <button onClick={createLinkPostHandler} className='bg-teal-500 text-md font-semibold shadow-lg text-white p-1 rounded px-3'>Save</button>
                        </div>
                    </div>
                </div>


                <div className='w-full flex justify-center'>
                    <div className='w-11/12 md:w-4/6 border-gray-400 border border-t-0'>

                        <form>
                            <div className='py-3 px-6 md:py-6 md:px-12'>
                                <div className='flex w-full justify-between'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Type</p>
                                        <div className='p-1 flex items-center justify-center'><select name="cars" onChange={(e)=>{setTypeRef(e.target.value)}} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700'>
                                            <option value="titleVisit">Title and Visit</option>
                                            <option value="titleImageVisit">Title Image Visit</option>
                                            <option value="DisplayInfo">Title and Information</option>
                                            <option value="titleAudio">Title, Info Audio</option>
                                        </select></div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Title</p>
                                        <div className='p-1 flex items-center justify-center'><input type='text' onChange={(e)=>{if(e.target.value.length < 50){setTitleRef(e.target.value)}}} value={titleRef} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500'>Published On </p>
                                        <div className='p-1 flex items-center justify-center'><input type='text' value={Date()} onChange={()=>{}} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Page</p>
                                        <div className='p-1 flex items-center justify-center'><select name="cars"  onChange={(e)=>setpageRef(e.target.value)} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700'>
                                            <option value='Select Page'>Select page</option>
                                            {myOpt}
                                        </select></div>
                                    </div>

                                </div>

                                <div className='flex w-full justify-between mb-6'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <div className='w-full flex items-center mt-6 '>
                                            <div className='p-1 flex items-center justify-center'><input type='checkbox' className='border font-semibold rounded  text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                            <p className='text-sm text-gray-500 px-3'>Publish</p>
                                        </div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Address</p>
                                        <input type='text' value={('/post/'+pageRef).split(' ').join('_')} onChange={(e) =>{}} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='px-4 md:px-12 border-t border-gray-400 pb-10'>                                

                                {typeRef === 'titleImageVisit' || typeRef === 'titleAudio' ?
                                    <div className='w-2/5 mt-10'>
                                        <p className='mt-3 text-sm text-gray-500 '>Add Picture</p>
                                        <input type='file' onChange={imageHandler} className='font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                    </div>
                                : null }


                                {typeRef === 'DisplayInfo'?

                                    <div className='w-full mt-5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Blog Content</p>
                                        <textarea onChange={infoHandler} value={displayInfoText} className='border font-semibold rounded w-full h-20 text-gray-700 border-gray-500 p-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700'></textarea>
                                        <p className='mb-1 text-sm text-gray-500 text-teal-700'>Description in plain text, only a couple of lines. (max 150 character Only)</p>
                                    </div>

                                : null }

                                <div>
                                    <p className='mt-6 ml-3 text-sm text-gray-500 '>Preview</p>
                                    <div className='flex justify-center items-center p-5'>
                                        <div className='w-full md:w-2/4'>
                                            {typeRef === 'titleVisit' ?<TitleVisit title={titleRef} link= '' /> : null}
                                            {typeRef === 'titleImageVisit' ?<TitleImageVisit title={titleRef} img={Preview['']} link= '' />: null}
                                            {typeRef === 'titleAudio' ?<TitleVisit title={titleRef} link= '' /> : null}
                                            {typeRef === 'DisplayInfo' ?<DisplayInfo title={titleRef} text= {displayInfoText} /> : null}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </form>

                    </div>
                </div>


                <footer className='text-center bg-teal-800 mt-20 text-white mt-12'>
                    <h2 className='py-3'>Designed with love by stephanyemmitty</h2>
                </footer>
            
    </div>
  )
}

export default ShortLinks