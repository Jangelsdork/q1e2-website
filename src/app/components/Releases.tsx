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
  artistImage: ""
},
{
  id: 2,
  title: "Move On EP",
  artist: "Papi Gaba", 
  cover: "/move-on.jpg",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
  artistImage: ""
},
{
  id: 3,
  title: "Ruckusfrei",
  artist: "okayokayokay", 
  cover: "/ruckusfrei.png",
  blurb: "",
  instagram: "", 
  bandcamp: "", 
  artistImage: ""
},
{
  id: 4,
  title: "Adayofthesun",
  artist: "Veezo", 
  cover: "/adayofthesun.jpg",
  blurb: "Veezo is a beatmaker out of Milan. A wizard on the Rhodes, he grew up on a healthy diet of jazz before branching out and undertaking collaborations with a number of hip hop acts. This led to a monumental shift in how he saw his place in music. He began experimenting with sampling, and exploring analogue sounds - introducing him to the world of modular systems, refining his studio skills and defining the artist we see now.",
  instagram: "", 
  bandcamp: <iframe className="h-[120px] w-[100%] border-0"  src="https://bandcamp.com/EmbeddedPlayer/album=1781398062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://q1e2recordings.bandcamp.com/album/adayofthesun-ep">adayofthesun EP by Veezo</a></iframe>,
  artistImage: "/artist-pics/veezo.jpg" 
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