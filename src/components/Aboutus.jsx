import React from 'react'

const Aboutus = () => {
  return (
    <div className='flex md:flex-row flex-col md:mx-20 px-4 mt-20 py-10 md:gap-0 gap-3'>
      <div className="flex-1 flex items-center justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPcE1ywz3QL7GNaFsVFGrtuhBCidle6vHA4KnHnwymbdUA3wN-AQs3LbH6pXrPznRvnU&usqp=CAU" className='w-[50%]' alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <span>About us</span>
        <p className='font-semibold md:text-5xl text-2xl md:mb-5 md:w-[70%] w-[90%]'>Discover The Faces Behind Our Mental HEalth COnsultancy</p>
        <p className='w-[80%] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus dolorum quibusdam alias, nam quis eligendi nostrum vitae vel sint velit, distinctio eaque, itaque id!</p>
        <button className='px-5 py-1 rounded-[20px] text-[white] bg-[#2FD1A6] w-max'>See detail</button>
      </div>
    </div>
  )
}

export default Aboutus
