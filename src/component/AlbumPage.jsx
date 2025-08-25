import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from '../assets/assets/assets';
function AlbumPage() {
  const { id } = useParams();
  const filterAlbum = albumsData[id];

  return (
    <div className='p-2'>
      <Navbar /><br />
      <div className='flex gap-6'>
        <img src={filterAlbum?.image} alt="" className='w-50' />
        <div className='text-white'>
          <p className='text-gray-400'>Playlist</p><br />
          <h2 className='font-bold text-5xl'>{filterAlbum?.name}</h2><br />
          <p className='text-gray-400 mt-3'>{filterAlbum?.desc}</p>
          <p className='flex justify-center items-center gap-3 text-gray-400'>
            <img src={assets?.spotify_logo} className='w-5' alt="" />
            <span>Soptify 1,323,154 Likes . 50 songs . about 2hr 30min</span>
          </p>
        </div>
      </div>
      {/* <tabel content > */}
      <div className='text-gray-300 flex justify-between items-center my-5'>
        <p className='flex gap-10'><span>#</span><span>title</span> </p>
        <p>album</p>
        <p>Date added</p>
        <p><img src={assets?.clock_icon} alt="" className='w-5' /></p>
      </div>
      <hr className='text-gray-500' />
      <div className='text-gray-500 '>
        {
          songsData.map((item) => (
            <div className='flex  justify-between items-center '>
              <p className='flex gap-2 my-3'>
                <span>{item.id}</span>
                <img src={item.image} className='w-7' alt="" />
                <span>{item.name}</span> 
              </p>
             
              <p>{filterAlbum.name}</p>
              <p>5 days ago</p>
              <p>{item.duration}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AlbumPage