import React from 'react'

const SingleBlog = () =>{
    return (
        <div className='flex flex-col items-center justify-center md:w-[30%] w-[90%] md:mb-0 mb-12 md:gap-7 gap-4'>
            <img src="/two.png" className='w-[80%] h-[300px] rounded-lg' alt="" />
            <p className='font-semibold text-2xl w-[90%]'>How Mental HEalth Consultant Can Help...</p>
            <div className='text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium placeat saepe non aliquam, a perferendis perspiciatis consequuntur commodi libero!<span className='text-[blue]'>see more..</span></div>
        </div>
    )
}

const Blog = () => {
  return (
    <div className='mt-20 md:px-20 px-4 flex flex-col items-center justify-between mb-20'>
              <span>Blog</span>
              <p className='md:text-4xl text-2xl font-semibold'>Our Blog For You</p>
              <div className="flex md:flex-row flex-col items-center justify-center mt-10 flex-wrap">
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
              </div>
    </div>
  )
}

export default Blog
