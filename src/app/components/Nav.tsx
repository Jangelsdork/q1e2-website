/* eslint-disable arrow-body-style */
import React from 'react'
import { panchang } from '../fonts'
import Image from 'next/image'

type Props = {}

const Nav = (props: Props) => {


  return (
    <div className='w-[100vw] h-[25vh] border-red-500 border-4 fixed overflow-hidden top-0 grid grid-cols-3 bg-white'>
    <Image src={"./Q1E2-RECORDS-LOGO.svg"} alt='Q1E2 tag logo' width={0} height={0} style={{width: 'auto', height: "20vh"}} className='self-center	 align-middle ml-3' ></Image>
    <div className={` text-2xl sm:text-6xl ${panchang.className} self-center  justify-self-center font-bold`}>Releases</div>
    <div className={`flex flex-col items-end mr-3 self-center text-xs sm:text-s ${panchang.className}`}>
        <div>Releases</div>
        <div>About</div>
        <div>Shop</div>
        <div>Contact</div>
    </div>
    </div>
  )
}

export default Nav