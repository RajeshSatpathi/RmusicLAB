import React from 'react'
import { assets } from "../assets/assets/assets"
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
            {/* 1st section of sidebar  */}
            <div className='w-[25%] h-[100%] p-2 flex-col text-white hidden lg:flex   '>
                <div className='h-[15%] w-full bg-[#252424] rounded flex flex-col justify-around gap-3 p-3 '>
                    <div className='flex item-center gap-5 pl-5 cursor-pointer'>
                        <img src={assets?.home_icon} alt="" className='w-6' />
                      <Link to="/"><p className='font-bold'>Home</p></Link>  
                    </div>
                    <div className='flex item-center gap-5 pl-5 cursor-pointer'>
                        <img src={assets?.search_icon} alt="" className='w-6' />
                        <p className='font-bold'>Search</p>
                    </div>
                </div>
                {/* 2nd section of sidebar  */}
                <div className='h-screen w-full bg-[#252424] rounded mt-5 p-2 '>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex item-center gap-5  cursor-pointer'>
                            <img src={assets?.stack_icon} alt="" className='w-6' />
                            <p className='font-bold'>Your Library</p>
                        </div>
                        <div className='flex item-center gap-5 cursor-pointer'>
                            <img src={assets?.arrow_icon} alt="" className='w-4' />
                            <img src={assets?.plus_icon} alt="" className='w-4' />
                        </div>
                    </div>
                    <div className='bg-[#3b3a3a] p-4 rounded mt-4'>
                        <h3 className='font-bold my-1'>Create your first playlist</h3>
                        <p  className='text-gray-400 text-sm'>its's easy we will help you</p>
                        <button className='
                         bg-white text-black py-1.5 px-2 
                         rounded-full text-sm font-bold mt-4
                         cursor-pointer
                        '>Create Playlist</button>
                    </div>
                    <div className='bg-[#3b3a3a] p-4 rounded mt-4'>
                        <h3 className='font-bold my-1'>Let's find someone podcast to follow</h3>
                        <p className='text-gray-400 text-sm' >We'll Keep you update on new episodes</p>
                        <button className='
                         bg-white text-black py-1.5 px-2 
                         rounded-full text-sm font-bold mt-4
                          cursor-pointer
                        '>Browse podcast</button>
                    </div>
                </div>

            </div>


        </>

    )
}
