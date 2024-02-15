/* eslint-disable arrow-body-style */
import React from 'react'
import Image from 'next/image'
import { aoboshi, average } from '../fonts'


type Props = {}

const Releases = (props: Props) => {
  return (
    <div className='sm:grid grid-cols-2 mt-[25vh]'>

        <div className='sm:h-[50vw] h-[100vw]  bg-red-500 flex flex-col justify-center'>
            <div className={`${aoboshi.className} text-white text-center text-4xl mb-4`}>Dr Sud</div>
            <div className={`${average.className} text-white text-center text-4xl`}>Heading South EP</div>
        </div>
        <div className=' sm:h-[50vw]  h-[100vw] inner-border border-red-500 border-4  bg-white flex items-center justify-center'>
            <Image src={"/heading-south.png"} alt='Heading south EP cover art' width={800} height={800} style={{width: '40vw', height: "40vw"}} quality={100}></Image>
        </div>

        
        <div className=' sm:h-[50vw]  h-[100vw] bg-red-500 flex flex-col justify-center sm:col-start-2'>
          <div className={`${aoboshi.className} text-white text-center text-4xl mb-4`}>Papi Gaba</div>
            <div className={`${average.className} text-white text-center text-4xl`}>Move On EP</div>
        </div>
        <div className=' sm:h-[50vw]  h-[100vw] inner-border border-red-500 border-4  bg-white flex items-center justify-center bg-white sm:col-start-1 sm:row-start-2 '>
        <Image src={"/move-on.jpg"} alt='Move on EP cover art' width={800} height={800} style={{width: '40vw', height: "40vw"}} quality={100}></Image>
          </div>
    </div>
    
  )
}

export default Releases