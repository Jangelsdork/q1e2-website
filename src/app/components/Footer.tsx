/* eslint-disable arrow-body-style */
import { FaInstagram, FaBandcamp } from "react-icons/fa";
import { aoboshi, average } from '../fonts'
import Link from "next/link";



type Props = {}

const Footer = (props: Props) => {
  return (
    
    <div className="w-full bg-white border-red-500 border-4 h-[20vh] flex flex-row items-center justify-end pr-8"> 
    <div className="flex flex-col items-end gap-2">
      <div className="flex flex-row gap-4">
      <Link href={"https://www.instagram.com/q1e2_recordings/"}><FaInstagram size={50}  /></Link>
      <Link href={"https://q1e2recordings.bandcamp.com/"}><FaBandcamp size={50} /> </Link>
      </div>
      <div className={`${aoboshi.className} text-xs`}>© 2024 Q1E2 Recordings</div>
      <div className={`${aoboshi.className} text-xs`}>Website design by Jack Mangelsdorf</div>
    </div>
    </div>
    
  )
}

export default Footer