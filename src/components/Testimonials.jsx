import React from 'react'

const Testimonials = () => {
  return (
    <div className='mt-32 md:px-20 px-4 flex items-center justify-between md:flex-row flex-col'>
      <div className="flex flex-col gap-4 md:w-[35%] w-[90%]">
        <span>Testimonials</span>
        <p className='md:text-4xl text-2xl font-semibold'>Healing Words Testimonials from a Mental Health Consultant</p>
      </div>

      <div className="flex md:w-[50%] w-[98%] justify-end md:pr-20 gap-4 md:mt-0 mt-5">
        <div className="flex w-[50%] flex-col bg-[#413596] items-center gap-4 rounded-lg p-4">
            <img src="/one.png" className='rounded-full md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt="" />
            <p className='text-xs text-center text-[white] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde earum, facere alias fugiat itaque atque quis laborum perferendis eveniet obcaecati pariatur omnis culpa est repellat rem maiores tempora libero.</p>
            
            <span className='font-semibold text-[white]'>George J client</span>

        </div>
        <div className="flex flex-col w-[50%] border border-black items-center gap-4 rounded-lg p-4">
        <img src="/one.png" className='rounded-full md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt="" />
        <p className='text-xs mt-4 text-[black] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde earum, facere alias fugiat itaque atque quis laborum perferendis eveniet obcaecati pariatur omnis culpa est repellat rem maiores tempora libero.</p>

        <span className='font-semibold'>George J client</span>

        </div>
      </div>
    </div>
  )
}

export default Testimonials
