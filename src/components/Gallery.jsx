import React from 'react'

const Gallery = () => {
  return (
    <div className='md:px-20 mt-20 mx-4'>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-2 md:w-[40%]">
            <span>Gallery</span>
            <p className='md:text-4xl text-2xl font-semibold'>A Gallery Of Mental Health Themes Through Art</p>
        </div>
        <div className="flex md:w-[30%] w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, delectus. Eveniet atque perspiciatis animi distinctio rem? Libero quae ad fugit nihil perspiciatis reiciendis, nam quo illo! Obcaecati, unde! Facere, impedit!
        </div>
      </div>
      <div className="flex mt-8 items-center justify-center flex-wrap">
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src='/one.png' alt='' />
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src="/two.png" alt="" />
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src='/one.png' alt='' />
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src="/two.png" alt="" />
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src='/one.png' alt='' />
        <img className='md:w-[33%] w-[30%] h-[150px] mb-3' src="/two.png" alt="" />
      </div>
    </div>
  )
}

export default Gallery
