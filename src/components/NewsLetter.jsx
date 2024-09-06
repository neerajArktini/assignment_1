import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#413596] mt-20 py-10 flex items-center justify-center flex-col gap-10'>
      <h1 className='md:text-4xl text-2xl text-[white] font-semibold '>Join To Our NewsLetter</h1>
      <p className='md:w-[60%] md:text-[16px] text-sm w-[90%] text-[white] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error a, consequuntur corrupti minus iure numquam id veritatis vel beatae tempore animi sint doloribus ipsum pariatur, dignissimos enim. Non, corrupti quasi.</p>
      <div className="flex justify-center md:justify-normal md:w-[55%] w-[90%] md:border border-[white] rounded-[20px]">
        <input type='text' className='md:flex-1 w-[60%] md:w-auto text-xs rounded-tl-[20px] rounded-bl-[20px] px-8 py-1 outline-none border-none' placeholder='your email' />
        <button className='px-4 py-2 rounded-br-[20px] rounded-tr-[20px] text-xs text-[white] bg-[#2FD1A6]'>Subscribe US</button>
      </div>
    </div>
  )
}

export default NewsLetter
