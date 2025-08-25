import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import AlbumHome from './AlbumHome'
import AlbumPage from './AlbumPage'
import { albumsData } from '../assets/assets/assets'
export default function Display() {
    const location = useLocation()
    const displayref = useRef();
    const isAlbumpage = location.pathname.includes("album")
    const id = isAlbumpage ? location.pathname.slice(-1) : "";
    const bgColor = albumsData[Number(id)].bgColor;
    
    useEffect(() => {
        if (isAlbumpage) {
            displayref.current.style.background = `linear-gradient(${bgColor}, #1e1d1d)`
        } else {
            displayref.current.style.background = "#1e1d1d"
        }
    }, [location.pathname, isAlbumpage, bgColor])
    return (
        <div ref={displayref} className='w-full lg:w-[75%] bg-[#1e1d1d]  rounded mt-2 p-4 overflow-auto'>
            <Routes>
                <Route path='/' element={<AlbumHome />} />
                <Route path='/album/:id' element={<AlbumPage />} />

            </Routes>
        </div>
    )
}
