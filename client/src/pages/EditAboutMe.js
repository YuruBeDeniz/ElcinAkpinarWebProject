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
    axios.post('/api/about-me', requestBody)
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
