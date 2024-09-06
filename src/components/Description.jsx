import React from 'react'
import { FaHands } from "react-icons/fa";

const Description = () => {
  return (
    <div className='md:px-20 px-4 mt-16 py-10'>
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2">
            <span className='font-semibold text-2xl'>why ?</span>
            <p className='md:w-[50%] w-[90%] font-semibold md:text-4xl text-2xl text-center'>Why Our Mental Health Consultants are the Best Choice</p>
        </div>
      </div>


      <div className="flex md:flex-row flex-col border border-black rounded-lg items-center md:items-start relative md:mt-24 mt-10 py-8 justify-between md:px-20 md:gap-0 gap-4">
        <div className="flex md:w-[30%] w-[90%] flex-col gap-4 items-center">
        <img src="/HolisticApproach.jpg" className='md:w-[30%] w-[30%]' alt="" />
        <span className='text-xl font-semibold'>Holistic Approach</span>
        <p className='text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sunt maiores soluta quas ab quaerat deleniti, dolorum fuga ducimus perspiciatis.</p>
        </div>

        <div className="md:absolute w-[90%] md:w-[30%] text-[white] rounded-lg md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2  min-h-[350px] bg-[#413596] flex flex-col items-center justify-center gap-4">
        <img src="/four.png" className='md:w-[30%] w-[30%]' alt="" />
        {/* <img src="https://img.freepik.com/premium-vector/vector-design-psychologist-male-icon-style_822882-115498.jpg?w=740" className='w-[150px] h-[150px]' alt="" /> */}
        <span className='text-xl font-semibold'>Expertise Team</span>
        <p className='text-center px-2 md:px-0 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sunt maiores soluta quas ab quaerat deleniti, dolorum fuga ducimus perspiciatis.</p>
        </div>

        <div className="flex flex-col gap-4 items-center md:w-[30%] w-[90%]">
            <img src='./three.png' alt='' />
            <span className='text-xl font-semibold'>Accessibility</span>
            <p className='text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sunt maiores soluta quas ab quaerat deleniti, dolorum fuga ducimus perspiciatis.</p>
        </div>

      </div>
    </div>
  )
}

export default Description
