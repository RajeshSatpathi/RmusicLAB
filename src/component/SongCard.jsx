import React from 'react'

function SongCard({id,name,desc,image,file,duration}) {
    return (
        <div>
        <div className='w-[180px] mx-2 rounded px-3 p-2 cursor-pointer bg-[#252424] hover:bg-[#3c3838]'>
                <img src={image} alt="" className='rounded' />
                <p className='text-white font-bold'>{name}</p>
                <p className='text-white text-sm'>{desc}</p>
            </div>
        </div>
    )
}

export default SongCard