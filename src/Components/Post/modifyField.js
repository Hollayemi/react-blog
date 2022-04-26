import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as myIcon from '@fortawesome/free-solid-svg-icons'

import {PostSample} from '../others/random_export'
import { ContextPage } from '../../useContext/authContext'
import { useNavigate } from 'react-router-dom'
import Uploading from '../pop_up/uploading'




const ModifyField = ({setSideBar,openSideBar}) => {

    const navigate = useNavigate()

    const {myData, usingRefHIROS,DeletePost,updatePost,uploadProgress} = ContextPage()
    console.log(uploadProgress)
    const [postByTitle, setPostByTitle] = useState()

    // delete states
    const [deleteDetail, setDeleteDetail] = useState({postTitle:'', blogContent:'', imageUrl:''})
    

    // edit post states
    const [postTheTitle, setPostTitle] = useState()
    const [disabled, setDisabled]= useState(true)
    const [getPostedDate, setPostedDate] = useState()
    const [editCategory, setEditCategory] = useState()
    const [editPublishedDate, setEditPublishedDate] = useState()
    const [editBloggerName, setBloggerName] = useState()
    const [editAddress, setEditAddress] = useState()
    const [getContent, setContent] =useState()
    // editPost image
    const [newImage, setNewImage] = useState()
    const [changedImage, setChangedImage] = useState(false)
    const [realImage, setRealImage] = useState()

    let myOpt = myData.map((element,index) => {
        return <option value={element} key={index} />
    })

    const DeleteTitleFunc = e =>{
        let myValue = e.target.value
        let checkValidation =  (myData.includes(myValue))

        if(checkValidation === true){

            usingRefHIROS.where('postTitle','==',myValue).onSnapshot(querySnapshot =>{
                querySnapshot.forEach(doc =>{
                    setDeleteDetail(doc.data())
                })
            })
        }
        
    }


    const  deleteHandler = async(e) =>{
        e.preventDefault()
        if(deleteDetail.postTitle !== ''){
            await DeletePost(deleteDetail.postTitle)
            console.log(myData)
        }
        navigate('/post/l')
    }

    const imageHandler = (e) =>{
        let myImage = {[e.target.name]: URL.createObjectURL(e.target.files[0])}
        setNewImage(myImage[''])
        setChangedImage(true)
        setRealImage(e.target.files[0])
    }


    const checkEditPost = e =>{
        let myValue = e.target.value
        setPostTitle(myValue)
        let checkValidation =  (myData.includes(myValue))

        if(checkValidation === true){

            usingRefHIROS.where('postTitle','==',myValue).onSnapshot(querySnapshot =>{
                querySnapshot.forEach(doc =>{
                    setEditPublishedDate(doc.data().publishedDateRef)
                    setEditCategory(doc.data().blogCategoryRef)
                    setBloggerName(doc.data().bloggerRef)
                    setEditAddress(doc.data().routeRef)
                    setContent(doc.data().blogContent)
                    setNewImage(doc.data().imageUrl)
                    setDisabled(false)
                })
            })
        }else{
            setEditPublishedDate('')
            setEditCategory('')
            setBloggerName('')
            setEditAddress('')
            setContent('')
            setDisabled(true)
        }
        
    }

    const newEditedContent = e =>{
        setContent(e.target.value)
    }
    const changeBlogger = e =>{
        setBloggerName(e.target.value)
    }


    const editPostHandler = async(e) =>{
        e.preventDefault()
        await updatePost(
            postTheTitle,
            getContent,
            changedImage,
            realImage,
            editCategory,
            editBloggerName
        )
    }




    return (
        <div>
            {uploadProgress !== null ? <Uploading curr={uploadProgress} /> : '' && uploadProgress < 100 ? <Uploading curr={uploadProgress} /> : ''}
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
                        
                        <p>Modify</p>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 rounded-full bg-orange-500 px-2 mx-2'></div>
                            <h4 className='text-sm pr-4'>Not Saved</h4>
                        </div>
                    </div>
                </div>


                <div className='w-full flex justify-center'>
                    <div className='w-11/12 md:w-4/6'>
                        
                        {/* Delete section starts here*/}

                        <div className='w-full border-gray-400 border border-t-0 px-1 md:py-6 md:px-12'>
                            <form>
                                <div className='py-3 px-6 md:py-6 md:px-12'>
                                    <p className='text-gray-600 text-lg font-semibold'>Delete {postByTitle} </p>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-6/12 md:w-2/5'>
                                            <p className='mt-3 text-sm text-gray-500 '>Post Title {}</p>
                                            <div className='p-1 flex items-center justify-center'>
                                                <input list="browsers" name="browser" onChange={e=>DeleteTitleFunc(e)} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                                <datalist id="browsers">
                                                    {myOpt}
                                                </datalist>
                                            </div>
                                        </div>

                                        <div className='w-6/12 md:w-2/5'>
                                            <p className='mt-3 text-sm text-gray-500'>Published On </p>
                                            <div className='p-1 flex items-center justify-center'><input type='text' value={getPostedDate} onChange={()=>{}} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                        </div>
                                    </div>


                                    <div className='w-full flex items-center justify-center mt-5'>
                                        <div className='w-full sm:w-4/5 shadow p-1'>
                                            <PostSample 
                                                title={(deleteDetail.postTitle)}
                                                imageUrl={(deleteDetail.imageUrl)}
                                                content={(deleteDetail.blogContent).substring(0,400)}/>
                                        </div>
                                    </div>

                                    <div className='mt-3 px-8 flex justify-end'>
                                        <button onClick={e => deleteHandler(e)} className='px-4 py-1 shadow bg-red-500 text-white text-md rounded hover:bg-red-600'>Delete</button>
                                    </div>
                                </div>
                            </form>

                        </div>

                        {/* Delete section ends here*/}


                        {/* This is edit section */}
                                

                        <div className='w-full border-t-0 border border-gray-400 pb-10'>
                            <div className='px-4 md:px-12 w-full  border-gray-400 pb-10 '>                                
                                <form>
                                    <div className='py-3 px-6 md:py-6 md:px-12'>
                                        <p className='text-gray-600 text-lg font-semibold mb-3'>Edit Post </p>
                                        <div className='flex w-full justify-between items-center'>
                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500'>Title</p>
                                                <div className='p-1 flex items-center justify-center'>
                                                    <input list="browsers2" onChange={checkEditPost} name="browser2" className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                                    <datalist id="browsers2">
                                                        {myOpt}
                                                    </datalist>
                                                </div>
                                            </div>

                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500 '>Blog Category</p>
                                                <div className='p-1 flex items-center justify-center'><input type='text' disabled={disabled}  onChange={(e)=>{editCategory(e.target.value)}} value={editCategory} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                            </div>
                                        </div>

                                        <div className='flex w-full justify-between'>
                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500 '>Published On</p>
                                                <div className='p-1 flex items-center justify-center'><input type='text' disabled={true} onChange={(e)=>{}} name="published" value={editPublishedDate} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                            </div>

                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500 '>Blogger</p>
                                                <div className='p-1 flex items-center justify-center'><input type='text' disabled={disabled} value={editBloggerName} onChange={(e)=>changeBlogger(e)} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                            </div>
                                        </div>

                                        <div className='flex w-full justify-between mb-6'>
                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500 '>Edited On</p>
                                                <div className='p-1 flex items-center justify-center'><input type='text' disabled={true} onChange={(e)=>{}} value={Date()} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' /></div>
                                            </div>

                                            <div className='w-6/12 md:w-2/5'>
                                                <p className='mt-3 text-sm text-gray-500 '>Route</p>
                                                <input type='text' disabled={disabled} value={(('/post/'+editAddress).toLowerCase()).split(' ').join('_')} onChange={(e) => (e.target.value)} className='border font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-4 md:px-12'>
                                        <div className='w-full flex justify-center '>
                                            <img src={newImage} alt="post_image..." />
                                        </div>
                                        <div className='w-10/12 md:w-2/5'>
                                            <p className='mt-3 text-sm text-gray-500 '>Change Image</p>
                                            <input type='file' disabled={disabled} onChange={(e)=>imageHandler(e)} className='font-semibold rounded w-full text-gray-700 border-gray-500 p-1 pl-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700' />
                                        </div>
                                        <div className='w-full mt-5'>
                                            <p className='mt-3 text-sm text-gray-500 '>Blog Content</p>
                                            <textarea disabled={disabled} value={getContent} onChange={e =>newEditedContent(e)} className='border font-semibold rounded w-full h-40 text-gray-700 border-gray-500 p-3 mt-1 text-sm focus:outline-none focus:border-teal-400 focus:text-teal-700'></textarea>
                                            <p className='mb-1 text-sm text-gray-500 text-teal-700'>Description in plain text, only a couple of lines. (max 150 character Only)</p>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-3 px-8 flex justify-end'>
                                        <button disabled={disabled} onClick={e=>editPostHandler(e)} className='px-4 py-1 shadow bg-teal-500 text-white text-md rounded hover:bg-teal-600'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* edit section ends here */}
                            

                    </div>
                </div>
                


                <footer className='text-center bg-teal-800 mt-20 text-white mt-12'>
                    <h2 className='py-3'>Designed with love by stephanyemmitty</h2>
                </footer>
            
    </div>
  )
}

export default ModifyField