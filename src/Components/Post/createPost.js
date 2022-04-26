import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as myIcon from '@fortawesome/free-solid-svg-icons'

import Content from './content'
import ShortLinks from './addShortLinks'
import ModifyField from './modifyField'



const CreatePost = () => {
    const [show, setShow] = useState('addPost')
    const [openSideBar, setSideBar] = useState(true)
    
    return (
        <section className='w-full flex'>
            {openSideBar === true ? <div onClick={()=>setSideBar(!openSideBar)} className='fixed w-full h-full bg-black bg-opacity-75 z-40'></div> : ""}
            <div className={`fixed shadow-xl top-0 h-full w-20 z-50 ${openSideBar === true ? '' : '-ml-20 md:-m-40'} myTrans md:w-1/12 bg-teal-800 flex flex-col items-center`}>
                <div className='rounded-full w-16 h-16 bg-gray-100 flex items-center my-8 justify-center'>
                    <h1 className='font-bold'>H</h1>
                </div>
                <h1 onClick={()=>setShow('addShortLinks')} className={`${show === 'addShortLinks' ? 'text-teal-400' : 'text-white' } cursor-pointer font-bold my-3 text-white`} title="Create Tag"><FontAwesomeIcon icon={myIcon.faAd} /></h1>
                <h1 onClick={()=>setShow('addPost')} className={`${show === 'addPost' ? 'text-teal-400' : 'text-white' } cursor-pointer font-bold my-3 text-white text-2xl`} title="Create New Post"><FontAwesomeIcon icon={myIcon.faClipboardList}/></h1>
                <h1 onClick={()=>setShow('modifyField')} className={`${show === 'modifyField' ? 'text-teal-400' : 'text-white' } cursor-pointer font-bold my-3 text-white text-2xl`} title="Add New field "><FontAwesomeIcon icon={myIcon.faPlus}/></h1>
            </div>
            <div className=' w-full'>
                {show === 'addPost' ? <Content setSideBar={setSideBar} openSideBar={openSideBar}/> : null }
                {show === 'addShortLinks' ? <ShortLinks setSideBar={setSideBar} openSideBar={openSideBar}/>  : null}
                {show === 'modifyField' ? <ModifyField setSideBar={setSideBar} openSideBar={openSideBar}/>  : null}
            </div>

        </section>
    )
}

export default CreatePost

