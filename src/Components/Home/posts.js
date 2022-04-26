import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {fireSt } from '../../firebase'
import { PostJSON } from '../../PostJSON'


const MyPosts = () => {

    const [myData, setData] = useState(PostJSON)
    
    // const postCollectionRef = collection(db,"HIROS")
    // const ref = fireSt.collection('HIROS')
    // useEffect(()=>{

    //     ref.orderBy('publishedDateRef','desc').onSnapshot(querySnapshot =>{
    //         const items = []
    //         querySnapshot.forEach(doc =>{
    //             items.push(doc.data())
    //         })
    //         setData(items)
    //     })
    // },[])


    let eachPost = myData.map((each,index) => {
        return (
            <div key={index} className='w-1/3 p-1 rounded'>
                <div className='shadow border rounded h-48 overflow-hidden relative'>
                    <img src={each.imageUrl} className='w-full h-full ' alt='post_image'/>
                    <Link to={each.routeRef}><h2 className='font-bold absolute top-0 bg-white p-1 text-md px-3 w-full shadow z-50'>{each.postTitle}</h2></Link>
                </div>
            </div>
        )
    })

  return (
    <div className='w-full flex flex-wrap'>
        
            {eachPost}
        
    </div>
  )
}

export default MyPosts