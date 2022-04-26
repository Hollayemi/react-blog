import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


import { fireSt } from '../../firebase';
import { PostJSON } from '../../PostJSON';
import HeaderLine from '../../Components/Home/header-line';
import TitleVisit, {TitleImageVisit} from '../../Components/sideBarCont/sideBarContents';





const PostTemplate =  () => {
    const username = useParams().id;
    
    
    const [myData, setData] = useState(PostJSON)

    
    // const postCollectionRef = collection(db,"HIROS")
    // const ref = fireSt.collection('HIROS')
    //  useEffect(()=>{

    //      ref.where('postTitle','==','This is my First Post ').onSnapshot(querySnapshot =>{
    //         const items = []
    //         querySnapshot.forEach(doc =>{
    //             items.push(doc.data())
    //         })
    //         setData(items)
    //     })

    // },[])

    
    let ThePost = myData.map((each,index) => {
        return (
            <div key={index} className='w-1/2 p-4 rounded'>
                <div className='shadow border p-4 rounded'>
                    <img src={each.imageUrl} className='w-full h-62 ' alt='post_image'/>
                    <Link to={each.routeRef}><h2 className='font-bold text-lg  m-4 ,'>{each.postTitle}</h2></Link>
                    <p>{each.blogContent}</p>
                </div>
            </div>
            )
        })

    

  return (
    <section>
        <div className='sticky top-0 z-50'>
          <HeaderLine />
          <div className="">
            {/* {console.log(myData)} */}
            <div className='w-full p-5 bg-teal-900 text-white font-bold text-xl'>{myData[0].postTitle}</div>
          </div>
        </div>


        
        <div className='w-full flex'>

            <div className='flex flex-col w-1/6 bg-gray-200 border-r border-gray-300 sticky min-h-screen max-h-screen pt-10 top-0 z-30 p-2 overflow-auto scrollBar'>
              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />
              <TitleVisit title='Ghana vs Nigeria' link='Ghana vs Nigeria' />
              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />

              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />
              <TitleVisit title='Ghana vs Nigeria' link='Ghana vs Nigeria' />
              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />

              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />
              <TitleVisit title='Ghana vs Nigeria' link='Ghana vs Nigeria' />
              <TitleVisit title='Russia vs Ukraine' link='Russia vs Ukrain' />
            </div>


            <div className='w-4/6'>
                <div className='flex justify-center w-full'>
                    <div className='w-5/6 flex justify-center items-center flex-col'>
                      <p className='text-sm text-gray-700 leading-8 mt-4'><span className='text-2xl font-bold'>{(myData[0].blogContent).substring(0,1)}</span>{(myData[0].blogContent).substring(1,300)}</p> 
                      <img src={myData[2].imageUrl} alt='get' className='w-2/4'/>
                      <p className='text-sm text-gray-700 leading-8 mt-4'>{(myData[0].blogContent).substring(300)}</p>                  
                      <p className='text-sm text-gray-700 leading-8 mt-4'>{myData[0].blogContent}</p>                  
                      <p className='text-sm text-gray-700 leading-8 mt-4'>{myData[0].blogContent}</p>                  
                    </div>
                </div>
            </div>
            
            
            
            <div className='flex flex-col w-1/6 sticky bg-gray-200 border-l border-gray-300 min-h-screen max-h-screen pt-10 top-0 p-2 overflow-auto scrollBar'>
              
              <TitleImageVisit title='Russia vs Ukraine' img={myData[1].imageUrl} link='Russia vs Ukraine' />
              <TitleImageVisit title='Russia vs Ukraine' img={myData[2].imageUrl} link='Russia vs Ukraine' />
              <TitleImageVisit title='Russia vs Ukraine' img={myData[3].imageUrl} link='Russia vs Ukraine' />
              <TitleImageVisit title='Russia vs Ukraine' img={myData[0].imageUrl} link='Russia vs Ukraine' />

            </div>

        </div>
    </section>
    // <>
    // {ThePost}
    // {console.log(ThePost)}
    // </>
  )
}

export default PostTemplate