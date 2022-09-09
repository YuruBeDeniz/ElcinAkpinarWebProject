import React from 'react';
import elcinHomePic from "../images/elcin2.jpeg"

export default function Home() {
  return (
    <div className='flex items-center flex-col'>
      <div><h1 className='text-6xl'>Elçin Akpınar</h1></div>
      <div><img src={elcinHomePic} className='w-80 pt-6' alt='portre' /></div>
    </div>
  )
}
