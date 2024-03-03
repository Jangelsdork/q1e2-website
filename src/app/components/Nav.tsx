/* eslint-disable arrow-body-style */

"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { panchang } from '../fonts'


const Nav = () => {

  const [currentPage, setCurrentPage] = useState<string>("Releases")




  return (
    <div className='w-full h-[25vh] border-red-500 border-4 fixed overflow-hidden top-0 grid grid-cols-3 bg-white z-10'>
    {/* <Image src={"./Q1E2-RECORDS-LOGO.svg"} alt='Q1E2 tag logo' width={0} height={0} style={{width: 'auto', height: "20vh"}} className='self-center	 align-middle ml-3' ></Image> */}
    <div className='self-center	 ml-3'>
      <Logo />
    </div>
    <div className={` text-2xl sm:text-6xl ${panchang.className} self-center  justify-self-center font-bold`}>{currentPage}</div>
    <div className={`flex flex-col items-end mr-3 self-center text-xs  sm:text-s ${panchang.className}`}>
        <Link href={"/"} onClick={() => setCurrentPage("Releases")} className=' hover:font-bold hover":cursor-pointer '>Releases</Link>
        <Link href={"/about"} onClick={() => setCurrentPage("About")} className=' hover:font-bold hover":cursor-pointer '>About</Link>
        <Link href={"/shop"} onClick={() => setCurrentPage("Shop")} className=' hover:font-bold hover":cursor-pointer '>Shop</Link>
        <Link href={"/contact"} onClick={() => setCurrentPage("Contact")} className=' hover:font-bold hover":cursor-pointer '>Contact</Link>
    </div>
    </div>
  )
}

export default Nav