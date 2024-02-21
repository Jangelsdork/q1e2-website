import React from 'react'

import { aoboshi, average } from "../fonts";


type Props = {}

function page({}: Props) {
  return (
    <div className={`mt-[25vh] h-[55vh] bg-red-500 text-balance flex flex-col gap-4 justify-center items-center align-middle`}>
        <div className={`${average.className} text-white text-center`}>Born out of a desire to release solid artists & good tunes without the ego, Q1E2 was founded in 2020 as the latest spoke of the Midnight Marauders group. Q1E2 has its roots in Berlin & Amsterdam, and focuses on electronic talent around the world.</div>
        {/* <div className={`${average.className} text-white text-center`}>We have released physical and digital releases from a number of musicians, working </div> */}
        </div>
  )
}

export default page