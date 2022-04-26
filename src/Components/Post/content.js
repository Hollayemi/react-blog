import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as myIcon from '@fortawesome/free-solid-svg-icons'

import { ContextPage } from '../../useContext/authContext'

const Content = ({openSideBar,setSideBar}) => {

    const {createPostHandler} = ContextPage()
    const [editCreateState, setCreateState] = useState('new')
    const [topTitle, setTopTitle] = useState('')
    const [postRoute, setpostRoute] = useState(topTitle)
    const [postImage, setImage] = useState(null)
    const [PreviewImage, setPreview] = useState('')
    
    const postTitle = useRef()
    const blogCategoryRef = useRef()
    const publishedDateRef = useRef()
    const bloggerRef = useRef()
    const publishCheckBox = useRef()
    const routeRef = useRef()
    const blogContent = useRef()

    const navigate = useNavigate();
    const createPost = async () =>{

        await createPostHandler(
            blogContent.current.value,
            bloggerRef.current.value,
            routeRef.current.value,
            blogCategoryRef.current.value,
            topTitle,
            publishedDateRef.current.value,
            postImage
        )
        
        navigate('/');

    }

    useEffect(() => {
        if(postTitle.current.value !=='' || blogCategoryRef.current.value !=='' || bloggerRef.current.value !=='' || blogContent.current.value !==''){
            setCreateState('edited')
        }else{
            setCreateState('new')
        }
    }, [])
    

   

    const setImageHandler = e =>{
        setImage(e.target.files[0])
        setPreview({[e.target.name]: URL.createObjectURL(e.target.files[0])})
    }

    
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
                        <h1>{ topTitle === '' ? <p>No Title</p> : <h1 className='font-bold text-xl text-gray-700 capitalize'>{topTitle}</h1>  } </h1>
                        <div className='flex items-center '>
                            
                            {editCreateState === 'new' ? <><div className='w-2 h-2 rounded-full bg-teal-500 px-2 mx-2'></div><h4 className='text-sm pr-4'>New Post</h4> </> : ''}
                            {editCreateState === 'edited' ? <><div className='w-2 h-2 rounded-full bg-orange-500 px-2 mx-2'></div><h4 className='text-sm pr-4'>Not Saved</h4> </> : ''}
                            {editCreateState === 'saved' ? <><div className='w-2 h-2 rounded-full bg-green-500 px-2 mx-2'></div><h4 className='text-sm pr-4'>Saved</h4> </> : ''}
                            <button onClick={createPost} className='bg-teal-500 text-md font-semibold shadow-lg text-white p-1 rounded px-3'>Save</button>
                        </div>
                    </div>
                </div>


                <div className='w-full flex justify-center'>
                    <div className='w-11/12 md:w-4/6 border-gray-400 border border-t-0'>

                        <form>
                            <div className='py-3 px-6 md:py-6 md:px-12'>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500'>Title</p>
                                        <div className='p-1 flex items-center justify-center'><input type='text' ref={postTitle} onChange={(e)=>{if(e.target.value.length < 50){setTopTitle(e.target.value)}}} value={topTitle} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Blog Category</p>
                                        <div className='p-1 flex items-center justify-center'><input type='text' ref={blogCategoryRef} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Published On</p>
                                        <div className='p-1 flex items-center justify-center'><input type='text'  ref={publishedDateRef} value={Date()} onChange={()=>{}} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Blogger</p>
                                        <div className='p-1 flex items-center justify-center'><input type='text' ref={bloggerRef}  className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                    </div>
                                </div>

                                <div className='flex w-full justify-between mb-6'>
                                    <div className='w-6/12 md:w-2/5'>
                                        <div className='w-full flex items-center mt-6 '>
                                            <input type='checkbox' ref={publishCheckBox} className='border font-semibold rounded  text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                            <p className='text-sm text-gray-500 px-3'>Publish</p>
                                        </div>
                                    </div>

                                    <div className='w-6/12 md:w-2/5'>
                                        <p className='mt-3 text-sm text-gray-500 '>Route</p>
                                        <input type='text' ref={routeRef} value={('/post/'+topTitle.toLowerCase()).split(' ').join('_')} onChange={(e) => setpostRoute(e.target.value)} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                    </div>
                                </div>
                            </div>

                            <div className='px-4 md:px-12 border-t border-gray-400 pb-10'>

                                <div className='w-10/12 md:w-2/5'>
                                    <p className='mt-3 text-sm text-gray-500 '>Add Picture</p>
                                    <input type='file' onChange={(e)=>{setImageHandler(e)}} className='font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                </div>
                                <div>
                                    <img src={PreviewImage['']} alt="preview_image" className='w-48 rounded-lg '/>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='mt-3 text-sm text-gray-500 '>Blog Content</p>
                                    <textarea ref={blogContent} className='border font-semibold rounded w-full h-40 text-gray-700 border-gray-500 p-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700'></textarea>
                                    <p className='mb-1 text-sm text-gray-500 text-teal-700'>Description in plain text, only a couple of lines. (max 150 character Only)</p>
                                </div>
                                
                                <button className="px-4 bg-gray-200 border text-gray-700 border-gray-500 focus:outline-none">Preview</button>
                            </div>
                        </form>

                    </div>
                </div>


                <div className='text-center bg-teal-800 mt-20 text-white'>
                    <h2 className='py-3'>Designed with love by stephanyemmitty</h2>
                </div>
            
    </div>
  )
}

export default Content