import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';


export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState('');

  const navigate = useNavigate();
  

  const handleAboutMe = e => setAboutMe(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = { aboutMe }
    axios.post('/api/about-me/create-about-me', requestBody)
      .then(response => {
        console.log(response.data)
        navigate('/about-me')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='flex flex-col items-center'>
    <form onSubmit={handleSubmit}>
          <label>Add an about me text:</label>
          <textarea 
            value={aboutMe} 
            onChange={handleAboutMe} 
            type="text" 
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"
            placeholder="Write here...">
            </textarea>
          <br />
          <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
           Enter
          </button>
         </form>
    </div>
  )
}
