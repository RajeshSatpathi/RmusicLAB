import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumCard({ id, name, image, desc, bgColor }) {
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate(`/album/${id}`)
  }

  return (
    <div>
      <div onClick={changeRoute} className='w-[180px] mx-2 rounded px-3 p-2 cursor-pointer bg-[#252424] hover:bg-[#3c3838]'>
        <img src={image} alt="" className='rounded' />
        <p className='text-white font-bold'>{name}</p>
        <p className='text-white text-sm '>{desc}</p>
      </div>
    </div>
  )
}

export default AlbumCard