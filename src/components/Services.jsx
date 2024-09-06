import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Services = () => {
  return (
    <div className='md:mt-20'>
      <div className="flex md:px-20 px-4 flex-col items-center gap-5">
        <span>Services</span>
        <p className='md:text-4xl text-2xl font-semibold w-[80%] md:w-[70%] text-center'>Empowering Minds Our Mental Health Consulting Services</p>
        <div className="flex md:items-stretch items-center justify-center md:justify-normal flex-wrap relative overflow-x-scroll gap-4 mt-8">
            {
                Array.from({length:4}).map((_,i)=><div key={i} className='bg-[black] text-[white] md:w-[250px] w-[80%] h-[230px] rounded-lg relative'>
                    <img src="/two.png" className='w-[100%] h-[100%]' alt="" />
                    <div className="absolute w-[100%] h-[100%] rounded-lg bg-[black] opacity-[0.8] top-0 flex items-center justify-center flex-col gap-2 px-[30px]">
                        <span>Mental Counselling</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, provident.</p>
                        <button className='px-4 py-1 bg-[#2FD1A6] text-[white] rounded-[20px]'>See details</button>
                    </div>
                    </div>
                    )
            }
            <AiOutlineArrowLeft className='absolute left-0 bottom-0 text-2xl text-[black]' />
            <AiOutlineArrowRight className='absolute right-0 bottom-0 text-2xl text-[black]'/>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center md:items-stretch mt-36 md:px-20 px-4 md:relative bg-[#413596] py-5 justify-end">
        <img className='md:absolute w-[70%] h-[200px] md:w-[350px] md:h-[420px] md:left-[12%] md:transform md:bottom-0 md:mb-0 mb-5 rounded-lg' src='/two.png' alt='' />
        <div className="flex flex-col md:items-stretch items-center md:w-[40%] w-[90%] text-[white] gap-5">
            <span className='text-2xl font-semibold'>Mentor</span>
            <p className='md:text-4xl text-2xl font-semibold'>Introducing Experianced Consulting</p>
            <div className="flex items-center mt-2">
                <img src="" alt="" />
                <div className="flex flex-col">
                    <span>Professional Growth</span>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus illo asperiores tenetur veniam suscipit?</p>
                </div>
            </div>
            <div className="flex items-center mt-2">
                <img src="" alt="" />
                <div className="flex flex-col">
                    <span>Professional Growth</span>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus illo asperiores tenetur veniam suscipit?</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-28 md:px-20 px-4">
        <div className="flex-1 flex flex-col gap-4">
            <span className='text-2xl font-semibold'>Team</span>
            <p className='md:text-4xl text-2xl md:w-[50%] w-[90%] font-semibold'>Caring For Your Mental Health Get to Know Our Team Of Experts</p>
            <p className='md:w-[50%] w-[90%] py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque ab qui adipisci dicta explicabo aliquam ullam repudiandae impedit sunt, quas nisi itaque, odit iste?</p>
            <button className='px-5 py-2 w-max text-[white] bg-[#2FD1A6] rounded-[20px]'>See more</button>
        </div>
        <div className="flex1 border md:mt-0 mt-5">
            <img src="/one.png" className='md:w-[90%] w-[70%]' alt="" />
        </div>
      </div>
      <div className="flex md:h-[240px] h-[150px] mt-24 relative">
        <div className="absolute w-[100%] h-[100%] bg-[black] opacity-[0.6] text-[white] text-center flex items-center justify-center md:text-3xl text-xl font-bold">
            <p className='md:w-[70%] w-[90%]'>
            " Self-Care is not a luxury. its a necessity. Without it, We cannot be our best selves, mentally, emotionally, or physically "
            </p>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 bg-[black]"></div>
        <div className="flex-1 "></div>
        <div className="flex-1 bg-[black]"></div>
        <div className="flex-1 "></div>
        <div className="flex-1 bg-[black]"></div>
      </div>
    </div>
  )
}

export default Services
