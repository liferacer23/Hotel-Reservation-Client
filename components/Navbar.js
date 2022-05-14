import React from 'react'
import Image from "next/image";
import Header from './Header';
export default function Navbar() {
  return (
    <nav className='flex flex-col h-fit w-screen'>
    <div className='flex justify-between px-8 bg-blue-800'>
        <div className='p-2'>
            <h1 className='text-white text-2xl text-center'>BOOKER!</h1>
        {/* <Image/> */}
        </div>

        <div className='flex justify-center items-center space-x-2 p-2'>
            <button className='font-semibold w-20 h-7 bg-white rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm'>Register</button>
            <button className='font-semibold w-20 h-7 bg-white rounded-md cursor-pointer hover:bg-gray-200 duration-500 text-sm'>Login</button>
        </div>
    </div>
    <Header/>
    </nav>
  )
}
