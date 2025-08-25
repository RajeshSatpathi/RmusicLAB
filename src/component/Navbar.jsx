import React from 'react'
import { assets } from '../assets/assets/assets'

function Navbar() {
  return (
    <>
      <div className='w-full  flex justify-between '>
        <div className='flex items-center gap-2'>
            <img src={assets.arrow_left} alt="" className='w-5 cursor-pointer' />
            <img src={assets.arrow_right} alt="" className='w-5 cutsor-pointer'/>   
        </div>
        <div className='flex gap-4'>
            <p className='bg-white text-black p-1.5 rounded-2xl text-sm font-bold cursor-pointer'>Explore Premium</p>
            <p className='bg-black text-white p-2 rounded-2xl text-sm font-bold'>Install App </p>
            <p className='rounded-full bg-gray-800  w-10 flex justify-center items-center text-white'> R </p>

        </div>
    </div>
    <div className='flex gap-2 my-2'>
        <button className='p-1.5 w-12 rounded bg-white text-black cursor-pointer '>All</button>
        <button className='p-1.5  rounded bg-black text-white cursor-pointer'>Music</button>
        <button className='p-1.5  rounded bg-black text-white cursor-pointer'>Podcast</button>

    </div>
    </>
  
  )
}

export default Navbar