/* eslint-disable arrow-body-style */
import React from 'react'
import { panchang } from '../fonts'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/Logo'

type Props = {}

const Nav = (props: Props) => {


  return (
    <div className='w-full h-[25vh] border-red-500 border-4 fixed overflow-hidden top-0 grid grid-cols-3 bg-white z-10'>
    {/* <Image src={"./Q1E2-RECORDS-LOGO.svg"} alt='Q1E2 tag logo' width={0} height={0} style={{width: 'auto', height: "20vh"}} className='self-center	 align-middle ml-3' ></Image> */}
    <div className='self-center	 ml-3'>
      <Logo />
    </div>
    <div className={` text-2xl sm:text-6xl ${panchang.className} self-center  justify-self-center font-bold`}>Releases</div>
    <div className={`flex flex-col items-end mr-3 self-center text-xs  sm:text-s ${panchang.className}`}>
        <Link href={"/"} className=' hover:font-bold hover":cursor-pointer '>Releases</Link>
        <div className=' hover:font-bold hover":cursor-pointer '>About</div>
        <div className=' hover:font-bold hover":cursor-pointer '>Shop</div>
        <div className=' hover:font-bold hover":cursor-pointer '>Contact</div>
    </div>
    </div>
  )
}

export default Nav