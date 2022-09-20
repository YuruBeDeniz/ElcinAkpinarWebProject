import React from 'react';
import elcinHomePic from "../images/elcin2.jpeg";

export default function Home() {
  return (
    <div className='bg-picture'>
      <div className='flex items-center flex-col'>
        <div><div className='text-3xl'>My name is</div><div className='text-6xl'>Elçin Akpınar</div></div>
        <div><img src={elcinHomePic} className='w-80 pt-6' alt='portre' /></div>
      </div> 
    </div>

  )
}
