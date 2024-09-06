import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const ques = [
    "what service do you offer as a mental health consultant ?",
    "How can i benifit from working with mental health consultant",
    "What Types of issues can a mental health mental health consultant healp with ?"
]

const Faq = () => {
  return (
    <div className='mt-32 md:px-20 px-4 flex flex-col items-center justify-center gap-4'>
      <span>FAQ</span>
      <p className='md:text-4xl text-2xl md:w-[70%] text-center font-semibold w-[90%]'>Navigating Mental Health Constitution Commonly Asked Questions</p>
      <div className="flex flex-col mt-10 w-[100%] items-center justify-center gap-8">
      {
        ques.map((q,i)=>{
            return (
                <div className='flex md:w-[70%] w-[90%] font-semibold items-center justify-between cursor-pointer' key={i}>
                    <p className='w-[90%]'>{q}</p>
                    <IoIosArrowDown className='cursor-pointer' />
                    </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Faq
