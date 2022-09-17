import React from 'react';
import elcinHomePic from "../images/elcin2.jpeg";
import background from '../images/home-background2.jpg'

export default function Home() {
  return (
/*     <div  
          style={{ 
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5
            }}> */
    <div className='flex items-center flex-col'>
      <div><div className='text-3xl'>My name is</div><div className='text-6xl'>Elçin Akpınar</div></div>
      <div><img src={elcinHomePic} className='w-80 pt-6' alt='portre' /></div>
    </div>
   /*  </div> */
  )
}
