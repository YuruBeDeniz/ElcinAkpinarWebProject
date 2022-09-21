import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Addvideo() {
    const [youTubeLink, setYouTubeLink] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleYouTubeLink = e => setYouTubeLink(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = { youTubeLink };

        axios.post('/api/add-videos', requestBody)
            .then((response) => {
                console.log(response)
                navigate('/videos');
            })
            .catch(error => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

  return (
    <div>
    <form  onSubmit={handleSubmit} className="w-full max-w-lg mb-36 ml-12">
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Link
          </label>
          <textarea value={youTubeLink} onChange={handleYouTubeLink} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="subnit">
            Send
          </button>
        </div>
       </div> 
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  )
}
