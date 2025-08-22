import React from 'react'
import { Routes, Route } from "react-router-dom"
import AlbumHome from './AlbumHome'
export default function Display() {
    return (
        <div className='w-full lg:w-[75%] bg-[#1e1d1d] rounded mt-2 p-4'>
            <Routes>
                <Route path='/' element={<AlbumHome/>}/>
            </Routes>
        </div>
    )
}
