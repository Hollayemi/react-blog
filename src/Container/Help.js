import React from 'react'

import Help from '../Components/FAQ/help'
import Header from '../Components/Home/header'

const MyHelp = () => {
  return (
    <>
        <Header />
        <h1>
          Help
        </h1>
        <div className='w-full flex mt-4 justify-center'>
            <div className='w-3/5 flex justify-center'>
              <Help />
            </div>
        </div>
    </>
  )
}

export default MyHelp