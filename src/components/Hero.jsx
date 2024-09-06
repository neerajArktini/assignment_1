import React from 'react'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col gap-3 md:px-20 px-4'>
      <div className="flex-1 flex flex-col gap-6">
        <h1 className='md:text-6xl text-3xl mt-8 font-semibold'>Healthy Minds, Happy Lives <span className='text-[#2FD1A6]'>Mental Health Consultancy</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis accusamus iusto cupiditate molestias accusantium, aliquid alias esse iure quibusdam.</p>
        <button className='px-4 py-1 text-[white] bg-[#2FD1A6] rounded-[20px] w-max'>Get started</button>
        <div className="flex items-center gap-5">
            <div className="flex items-center text-[grey] font-semibold text-xs md:text-[16px]">logoispum</div>
            <div className="flex items-center text-[grey] font-semibold text-xs md:text-[16px]">logoispum</div>
            <div className="flex items-center text-[grey] font-semibold text-xs md:text-[16px]">logoispum</div>
            <div className="flex items-center text-[grey] font-semibold text-xs md:text-[16px]">logoispum</div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPcE1ywz3QL7GNaFsVFGrtuhBCidle6vHA4KnHnwymbdUA3wN-AQs3LbH6pXrPznRvnU&usqp=CAU" className='w-[60%]' alt="" />
      </div>
    </div>
  )
}

export default Hero
