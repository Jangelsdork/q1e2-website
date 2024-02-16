/* eslint-disable arrow-body-style */
import React from 'react'
import Image from 'next/image'
import { aoboshi, average } from '../fonts'
import Link from 'next/link';

const isOdd = require('is-odd');

export const allReleases = [{
  id: 1,
  title: "Heading South EP",
  artist: "Dr Sud", 
  cover: "/heading-south.png",
  blurb: "Gregorio Marigliano is a Rome born, Berlin raised producer, that for his intimi and fans goes by the name of Dr. Sud. His music is percussion centered with integrated jazz harmony, his style borrowing influences from different genres such as electronica, funk and house, to create a blend unique to his productions. A fan of the nostalgic and abstract, he emphasises emotion over functionality, quality over quantity.",
  instagram: "https://www.instagram.com/dr.sud/", 
  bandcamp: <iframe className="h-[120px] w-[100%] border-0"src="https://bandcamp.com/EmbeddedPlayer/album=753129054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>, 
  artistImage: "/artist-pics/dr-sud.jpeg"
},
{
  id: 2,
  title: "Move On EP",
  artist: "Papi Gaba", 
  cover: "/move-on.jpg",
  blurb: "Papi Gaba's music takes a surgical and alternative turn from conventional House. Lofi-house has peaked, so as we bid it farewell we welcome the sounds of Amsterdam based Mr. Gaba as he pushes the genre in a new direction - a style coined post-lofi. Combining influences from old school and lofi-house, the sound is warm, melodic and melancholic. Mr. Gaba warmly welcomes everyone aboard the post-lofi train, whatever that may mean to them.",
  instagram: "https://www.instagram.com/papi_gaba/", 
  bandcamp: <iframe className="h-[120px] w-[100%] border-0" src="https://bandcamp.com/EmbeddedPlayer/album=767033470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>, 
  artistImage: "/artist-pics/papi-gaba.jpg"
},
{
  id: 3,
  title: "Ruckusfrei",
  artist: "okayokayokay", 
  cover: "/ruckusfrei.png",
  blurb: "Okayokayokay is an Australian born producer who spent the last 5 years immersed in the Berlin club scene. His music draws inspiration from 5am escapades, and artists ranging from Roza Terenzi to The Armed. ",
  instagram: "https://www.instagram.com/okay0kokay/", 
  bandcamp: <iframe className="h-[120px] w-[100%] border-0" src="https://bandcamp.com/EmbeddedPlayer/track=944692301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>, 
  artistImage: "/artist-pics/okay.jpg"
},
{
  id: 4,
  title: "Adayofthesun",
  artist: "Veezo", 
  cover: "/adayofthesun.jpg",
  blurb: "Veezo is a beatmaker out of Milan. A wizard on the Rhodes, he grew up on a healthy diet of jazz before branching out and undertaking collaborations with a number of hip hop acts. This led to a monumental shift in how he saw his place in music. He began experimenting with sampling, and exploring analogue sounds - introducing him to the world of modular systems, refining his studio skills and defining the artist we see now.",
  instagram: "https://www.instagram.com/veezo___/", 
  bandcamp: <iframe className="h-[120px] w-[100%] border-0"  src="https://bandcamp.com/EmbeddedPlayer/album=1781398062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>,
  artistImage: "/artist-pics/veezo.jpg" 
},
]


type Props = {}

const Releases = (props: Props) => {


const renderReleases = allReleases.map((release)=>{
  return (
    <div key={release.id} className='sm:grid grid-cols-2'>
        <div className={`sm:h-[50vw] h-[100vw]  bg-red-500 flex flex-col justify-center ${isOdd(release.id)? "sm:col-start-2":""}`}>
            <Link href={`/release/${release.id}`}><div className={`${aoboshi.className} text-white text-center text-4xl mb-4 cursor-pointer`}>{release.artist}</div></Link>
            <Link href={`/release/${release.id}`}><div className={`${average.className} text-white text-center text-4xl`}>{release.title}</div></Link>
        </div>
        <div className={` sm:h-[50vw]  h-[100vw] inner-border border-red-500 border-4  bg-white flex items-center justify-center  ${isOdd(release.id)? `sm:col-start-1 sm:row-start-1`:""} `}>
        <Link href={`/release/${release.id}`}><Image src={release.cover} alt='Heading south EP cover art' width={800} height={800} style={{width: '40vw', height: "40vw"}} quality={100}></Image></Link>
        </div>
    </div>
  )
})

  return (

    <ul className='flex flex-col mt-[25vh]'>{renderReleases}</ul>
    
  )
}

export default Releases