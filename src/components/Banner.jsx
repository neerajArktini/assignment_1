import React from 'react'

const Banner = () => {
  const obj = {
    'experienced':8,
    'teams':122,
    'clients':563
  }
  return (
    <div className='py-5 flex-wrap flex justify-between mt-3 items-center bg-[#413596] text-[white] md:px-20 px-4'>
      {
        Object.keys(obj).map(key =>{
          return (
            <div className="flex flex-col items-center gap-4">
            <span className='md:text-lg text-xs'>{key}</span>
            <b className='md:text-5xl text-xl'>{obj[key]}+</b>
          </div>
          )
        })
      }
      
    </div>
  )
}

export default Banner
