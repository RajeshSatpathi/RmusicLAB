import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets/assets'
import AlbumCard from './AlbumCard'
import SongCard from './SongCard'
function AlbumHome() {
  return (
    <div>
      <Navbar />
      <div className='mt-4'>
        <h2 className='text-white font-bold text-2xl my-2'>Featured Charts</h2>
        {/* feature charts  */}
        <div className='flex overflow-auto'>
          {
            albumsData.map((item) => (
              <AlbumCard
                id={item?.id}
                name={item?.name}
                desc={item?.desc}
                image={item?.image}
                bgColor={item?.bgColor}
              />
            ))
          }
        </div>
        <h2 className='text-white font-bold text-2xl my-2'>Today's biggest hits</h2>
        {/* todays biggest hits */}
        <div className='flex overflow-auto'>
          {
            songsData.map((item) => (
              <SongCard
                id={item?.id}
                name={item?.name}
                desc={item?.desc}
                image={item?.image}
                duration={item?.duration}
                file={item?.file}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AlbumHome