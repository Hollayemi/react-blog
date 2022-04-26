import React from 'react'

import BG from '../../asset/myBg.jpeg'
import MyPosts from './posts'
import TitleVisit, {DisplayInfo, TitleImageVisit} from '../../Components/sideBarCont/sideBarContents';
import { ContextPage } from '../../useContext/authContext';

const Main = () => {

    
    const {myPostAdAudio,myPostAdImages,myPostAdDisplay,myPostAdTitleVisit} = ContextPage()
    
    let imagePostAdd = myPostAdImages.map( e => {
       return <TitleImageVisit title={e.Title} img={e.imageUrl} link='Russia vs Ukrain' />
    })

    let audioPostAdd = myPostAdAudio.map( e => {
        return <titleAudio title={e.Title} src={e.imageUrl} link='Russia vs Ukrain' />
     })

    let titleVisitAd = myPostAdTitleVisit.map( e => {
        console.log(e.imageUrl)
        return <TitleVisit title={e.Title} img={e.imageUrl} link='Russia vs Ukrain' />
     })

    let displayInfoAd = myPostAdDisplay.map( e => {
        return <DisplayInfo title={e.Title} text= {e.DisplayText} />
     })


     console.log(myPostAdTitleVisit)
     

    return (
        <>
            
            <div className='sticky top-0 h-4 w-full bg-gray-300 z-50 shadow'></div>
            <div className='w-full flex'>

                <div className='flex flex-col w-1/6 bg-gray-200 border-r border-gray-300 sticky min-h-screen max-h-screen pt-10 top-0 z-30 p-2 overflow-auto scrollBar'>
                    
                    {displayInfoAd}
                    {titleVisitAd}
                    
                </div>

                <div className='w-4/6'>
                    <div className='flex justify-center w-full flex-col items-center'>
                        <div className='mainHightPic relative'>
                            <img src={BG} alt='bg' className='h-full' />
                            <div className='overlay2 mainHightPic w-full absolute top-0 z-40'></div>
                        </div>
                        <div className='p-1 flex justify-center items-center flex-col'>
                            <p className='text-sm text-gray-700 leading-8 mt-4'><span className='text-2xl font-bold'></span></p> 
                            <MyPosts />
                            <p className='text-sm text-gray-700 leading-8 mt-4'></p>                  
                            <p className='text-sm text-gray-700 leading-8 mt-4'></p>                  
                            <p className='text-sm text-gray-700 leading-8 mt-4'></p>                  
                        </div>
                    </div>
                </div>
                
                
                <div className='flex flex-col w-1/6 sticky bg-gray-200 border-l border-gray-300 min-h-screen max-h-screen pt-10 top-0 p-2 overflow-auto scrollBar'>
                
                    {audioPostAdd}
                    {imagePostAdd}

                </div>

            </div>
        </>
    )
}

export default Main
 