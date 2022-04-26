import React from 'react'

const FAQ = ({currState,moreHandler,level,more,icon,aos,aos_delay}) => {
    return (
        <div className='m-1 w-full sm:w-3/4' data-aos={aos} data-aos-delay={aos_delay} data-aos-duration='700'>
            <div className='flex items-center justify-between p-3 border bg-teal-100 text-gray-600 cursor-pointer' onClick={moreHandler}>
                <h2>{level}</h2>
                <i className={`fa fa-${icon}`}></i>
            </div>
            <div className={`${currState} border m-1 p-3 transition ease-in-out duration-1000 cursor-pointer`}>
                <h5 className='leading-8 px-4 text-sm text-gray-700'>{more}</h5>
            </div>
        </div>
    )
}

export default FAQ
