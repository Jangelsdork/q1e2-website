import React from 'react'
import Link from 'next/link';

import { aoboshi, average } from "../fonts";


type Props = {}

function page({}: Props) {
  return (
    <div className={`mt-[25vh] h-[55vh] bg-red-500 text-balance flex flex-col gap-4 justify-center items-center align-middle`}>
        <div className={`${average.className} text-white text-center`}>Coming Soon...</div>
        <div className={`${average.className} text-white text-center`}>Until then, please check out our <Link className='underline' href={"https://q1e2recordings.bandcamp.com/"}>bandcamp page</Link></div>
        </div>
  )
}

export default page