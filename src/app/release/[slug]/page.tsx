/* eslint-disable import/extensions */

import React from 'react'
import { allReleases } from '@/app/components/Releases'
import { aoboshi, average } from '../../fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";




type Props = {}


const page = ({ params }: { params: { slug: string } }) => {
    const currentPageId = parseInt(params.slug, 10) - 1 

  return (
    <div className='mt-[25vh] min-h-[55vh] sm:grid grid-cols-2 border-red-500 border-4'>
        <div className='flex flex-col gap-8 m-12'>
            <div className={`${aoboshi.className} sm:text-8xl text-4xl`}>{allReleases[currentPageId].artist}</div>        
            <div className={`${average.className} sm:text-4xl text-2xl`}>{allReleases[currentPageId].title}</div> 
            <div className={`${average.className} text-l`}>{allReleases[currentPageId].blurb}</div>
            <div className='flex flex-row items-center justify-start gap-4'>
                {allReleases[currentPageId].bandcamp}
                <Link target="_blank" href={allReleases[currentPageId].instagram}><FaInstagram size={30} /> </Link>
            </div>
            </div> 
        <div className='flex justify-center items-center bg-red-500'>
            <div className='h-[50vh] w-[50vh] relative '>
            <Image  src={allReleases[currentPageId].artistImage} alt='picture of the artist' height={0} width={0} sizes='40vh' fill style={{objectFit:"cover", objectPosition:"top"}} quality={100} unoptimized={true}></Image>
            </div>
        </div>      
    </div>
  )
}

export default page