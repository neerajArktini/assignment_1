import React, { useState } from 'react'
import PriceList from './PriceList'

const Pricing = () => {
    const [seeprice, setSeeprice] = useState(false)
  return (
    <div className='md:px-20 px-4 mt-20'>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className='font-semibold'>Pricing</span>
        <p className='md:text-4xl text-2xl text-center md:w-[60%] w-[90%] font-semibold'>Choose Of Mental Health Consultation Packages For Your Needs</p>
      </div>
      <div className="flex flex-col mt-10 gap-5">
        <PriceList show={true} />
        <PriceList show={false} />
        <PriceList show={false} />
      </div>
    </div>
  )
}

export default Pricing
