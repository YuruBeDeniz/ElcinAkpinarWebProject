import React from 'react';
import elcin from '../images/elcin.jpeg';

export default function AboutMe() {
  return (
    <div>
      <div className='flex flex-col items-center'>
    <div className='w-80'><img src={elcin} alt='portre' /></div>
    <div className='mx-60 my-5 leading-loose text-justify'>
        I was born on February 6, 1991 in Ankara/Turkey. 
        The habitat where I was born has hosted communities where music, minstrel and dervish traditions have been present for hundreds of years.
        That's why I started using my voice from a young age.
        <br />
        <br />After graduating from high school, my life underwent radical changes when I was accepted to a job at a sculpture workshop.
        After taking lessons from city opera soloists for 1 year, I was accepted to Ankara University State Conservatory in 2013.
        <br />
        <br />
        I met psytrance in 2014 and the festivals and music played in those festivals fascinated me.
        This is how I got interested in music production and took the first steps towards the production world.
        Started learning music production in 2015.
        <br />
        <br />
        In 2018, I shared my first vocal compositions on platforms.
        <br />
        <br />
        And my DJ career started in 2019. I performed at many indoor and outdoor festivals in Turkey.
        In 2021 and 2022, I shared my first EPs on several platforms in the fields of vocal and psytrance music.
        <br />
        <br />
        I also started visual and digital art productions in 2022.
        And I had the opportunity to work as a make-up artist on short film sets.
        Thus, I assumed the responsibility of the visual production of the music I made.
        <br />
        <br />
        I continue to produce in the fields of sculpture, DJ, electronic dance music and vocal music, visual/digital art, sculpture and plastic make up.
        <br />
        <br />   
    </div>
    </div>

    </div>
  )
}


/* import React, { useState, useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../context/auth';
import elcin from '../images/elcin.jpeg'

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState('');
  const { isLoggedIn } = useContext(AuthContext);

  const handleAboutMe = e => setAboutMe(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = {aboutMe}
    axios.post('/api/aboutme', requestBody)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='flex flex-col items-center'>
    <div className='w-80'><img src={elcin} alt='portre' /></div>
    <div className='mx-60 my-5 leading-loose text-justify'>
      {isLoggedIn ? 
      <>
        <form onSubmit={handleSubmit}>
          <label className='font-bold'>Add about me</label>
          <br/>
          <input type='text' value={aboutMe} onChange={handleAboutMe} />
          <br />
        <button>Enter</button>
        </form>
        </> : null}
    </div>
    </div>
  )
} */
