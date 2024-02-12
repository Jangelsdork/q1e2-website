// eslint-disable-next-line camelcase
import { Aoboshi_One, Average } from 'next/font/google'
import localFont from "next/font/local"
 
export const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})
 
export const average = Average({
    subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const panchang = localFont({
    src: './Panchang-Variable.ttf',
    display: 'swap'
  })