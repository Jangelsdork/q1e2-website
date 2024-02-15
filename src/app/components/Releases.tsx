/* eslint-disable arrow-body-style */
import React from 'react'
import Image from 'next/image'
import { aoboshi, average } from '../fonts'

const isOdd = require('is-odd');

export const allReleases = [{
  id: 1,
  title: "Heading South EP",
  artist: "Dr Sud", 
  cover: "/heading-south.png",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
},
{
  id: 2,
  title: "Move On EP",
  artist: "Papi Gaba", 
  cover: "/move-on.jpg",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
},
{
  id: 3,
  title: "Ruckusfrei",
  artist: "okayokayokay", 
  cover: "/ruckusfrei.png",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
},
{
  id: 4,
  title: "Adayofthesun",
  artist: "Veezo", 
  cover: "/adayofthesun.jpg",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
},
]


type Props = {}

const Releases = (props: Props) => {


const renderReleases = allReleases.map((release)=>{
  return (
    <div key={release.id} className='sm:grid grid-cols-2'>
        <div className={`sm:h-[50vw] h-[100vw]  bg-red-500 flex flex-col justify-center ${isOdd(release.id)? "sm:col-start-2":""}`}>
            <div className={`${aoboshi.className} text-white text-center text-4xl mb-4`}>{release.artist}</div>
            <div className={`${average.className} text-white text-center text-4xl`}>{release.title}</div>
        </div>
        <div className={` sm:h-[50vw]  h-[100vw] inner-border border-red-500 border-4  bg-white flex items-center justify-center ${isOdd(release.id)? `sm:col-start-1 sm:row-start-1`:""} `}>
            <Image src={release.cover} alt='Heading south EP cover art' width={800} height={800} style={{width: '40vw', height: "40vw"}} quality={100}></Image>
        </div>
    </div>
  )
})

  return (

    <ul className='flex flex-col mt-[25vh]'>{renderReleases}</ul>
    
  )
}

export default Releases