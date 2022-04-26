import React,{ useState } from 'react'

import FAQ from './FAQ'

const Help = () => {
    const [showing, setShowing] = useState(0)
    
    const moreHandler = number => {
        setShowing(number)
    }
  return (
      
    <div className='w-full'>
        <FAQ
                aos='fade-up-left'  
                aos_delay='50'
                currState = {showing === 1 ? 'block' : 'hidden'}
                moreHandler={showing !== 1 ? ()=>moreHandler(1) :  ()=>moreHandler(0)}
                level= 'MASTER DEGREE GRAPHIC DESIGN'
                icon = {showing === 1 ? 'minus' : 'plus'}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />

        <FAQ
                aos='fade-up-left'  
                aos_delay='50'
                currState = {showing === 2 ? 'block' : 'hidden'}
                moreHandler={showing !== 2 ? ()=>moreHandler(2) :  ()=>moreHandler(0)}
                level= 'MASTER DEGREE GRAPHIC DESIGN'
                icon = {showing === 1 ? 'minus' : 'plus'}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />                
    </div>
  )
}

export default Help