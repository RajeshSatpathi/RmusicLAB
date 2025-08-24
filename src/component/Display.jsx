import React from 'react'
import { Routes, Route } from "react-router-dom"
import AlbumHome from './AlbumHome'
import AlbumPage from './AlbumPage'
export default function Display() {
    return (
        <div className='w-full lg:w-[75%]  bg-[#1e1d1d] rounded mt-2 p-4 overflow-auto'>
            <Routes>
                <Route path='/' element={<AlbumHome/>}/>
                <Route path='/album/:id' element={<AlbumPage/>}/>

            </Routes>
        </div>
    )
}
