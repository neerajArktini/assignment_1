import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='flex md:px-20 items-center px-4 justify-between py-6 relative'>
      <div className="flex font-semibold md:text-xl">Mindfulcare</div>
      <div className="md:flex hidden md:gap-4 gap-2 md:text-sm text-xs">
        <span className='hidden md:block'>Home</span>
        <span className='hidden md:block'>About</span>
        <span className='hidden md:block'>Services</span>
        <span className='hidden md:block'>Page</span>
      </div>
      <div className="md:flex hidden">
        <button className='px-4 py-1 bg-[#2FD1A6] text-[white] rounded-[20px]'>contact us</button>
      </div>
      <div className='md:hidden block text-sm'>
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
        {
          isOpen &&
          <div className="absolute bg-[white] text-[#2FD1A6] w-[100vw] left-[0%] flex items-center justify-between px-3 py-4">
            <span className='text-sm font-bold'>Home</span>
            <span className='text-sm font-bold'>About</span>
            <span className='text-sm font-bold'>Services</span>
            <span className='text-sm font-bold'>Page</span>
            <span className='text-sm font-bold'>Contact</span>

          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
