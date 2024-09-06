import React from 'react'
import { AiFillBoxPlot, AiFillCheckSquare, AiOutlineCheck } from "react-icons/ai"

const PriceList = ({show}) => {
  return (
    <div className={`py-5 md:px-5 px-2 bg-[${show ? '#413596' : 'white'}] text-[${show ? 'white' : 'black'}] ${!show && 'border'} ${!show && 'border-black'} flex justify-between rounded-lg`}>
      <div className="flex items-center gap-5 w-[50%] md:w-[20%]">
       {
        show ?
        <AiFillCheckSquare className='text-xl' />
        :
        <input type='checkbox' />
       }
        <div className="flex flex-col gap-3">
            <span className='font-semibold md:text-2xl text-xl'>Basic</span>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur Lorem</p>
        </div>
      </div>
        <div className="flex flex-col gap-5 ">
            <div className='flex items-center'>
                <span className='md:text-3xl font-semibold text-xl'>$69.99/</span>
                <span>month</span>
            </div>
            {
                show && 
                <button className='text-[white] bg-[#2FD1A6] md:px-4 px-1 py-1 rounded-[20px]'>See pricing</button>
            }
        </div>
    </div>
  )
}

export default PriceList
