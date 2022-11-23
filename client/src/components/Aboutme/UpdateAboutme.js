import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function UpdateAboutme({id}) {
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    axios.get(`/api/about-me/${id}`)
    .then(response => {
      const {aboutMe} = response.data;
      setAboutMe(aboutMe);
    })
    .catch(err => console.log(err));
  }, [])

  const handleAboutme = e => setAboutMe(e.target.value);
  
  const handleSubmit = event => {
    const storedToken = localStorage.getItem('authToken')
      event.preventDefault();
      const requestBody = {aboutMe};
      axios.put(`/api/about-me/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        console.log(response)
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="w-full max-w-lg mb-36 ml-12">
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-password">
            Message
          </label>
          <textarea 
            value={aboutMe} 
            onChange={handleAboutme} 
            type="text" 
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"
            placeholder="Your message"></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
      </form>
   {/*  <form>
      <input type='text' value={aboutMe} />
      <button
     type="button"
     className="ml-80 inline-block px-4 py-1 border-2 border-gray-900 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
     Update this part</button>
    </form> */}
    </div>
  )
}
