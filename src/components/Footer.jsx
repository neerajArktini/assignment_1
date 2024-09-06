import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterCircle, AiFillYoutube, AiOutlinePhone } from 'react-icons/ai'
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='flex md:px-20 px-4 py-10 bg-[#413596] text-[white] flex-col gap-5'>
      <div className="flex md:flex-row flex-col items-center justify-between border-b-2 border-b-white pb-10">
        <div className="flex flex-col md:w-[15%] w-[90%] gap-4">
            <div className="flex items-center">
                <img src="" alt="" />
                <span className='text-xl'>Mindfullcare</span>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit ullam illo unde maiores voluptates!</p>
        </div>

        <div className="flex flex-col md:w-[15%] w-[90%] gap-4 md:mt-0 mt-5">
            <div className="flex items-center">
                <span className='text-xl'>Services</span>
            </div>
            <div className="flex flex-col text-sm gap-3">
                <span>Psychotherepy</span>
                <span>Mental Counseling</span>
                <span>Support Groups</span>
                <span>Case Management</span>
            </div>
        </div>

        <div className="flex flex-col md:w-[15%] w-[90%] md:mt-0 mt-5 gap-4">
            <div className="flex items-center">
                <span className='text-xl'>Contact</span>
            </div>
            <div className="flex flex-col text-sm gap-3">
                <div className="flex items-center gap-2">
                    <AiOutlinePhone className='text-xl'/>
                <span >+19 87827346</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiFillMail className='text-xl'/>
                <span >rana@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoLocationSharp className='text-xl'/>
                <span >Lorem ipsum dolor, sit amet consectetur.</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:w-[15%] w-[90%] md:mt-0 mt-5 gap-4">
            <div className="flex items-center">
                <span className='text-xl'>Links</span>
            </div>
            <div className="flex flex-col text-sm gap-3">
                <span>Privacy policy</span>
                <span>Terms of use</span>
            </div>
        </div>

        <div className="flex flex-col md:w-[15%] w-[90%] md:mt-0 mt-5 gap-4">
            <div className="flex items-center">
                <span className='text-xl'>Maps</span>
            </div>
            <div className="flex flex-col text-sm">
                <img src="/one.png" className='w-[150px] h-[150px]' alt="" />
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-xl gap-4 my-6">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiFillYoutube />
        <AiFillTwitterCircle />
        <AiFillLinkedin />
      </div>
      <div className="flex items-center justify-center mb-10">
        Copyright 2024 @ mindfulcare all rights reserved 
      </div>
    </div>
  )
}

export default Footer
