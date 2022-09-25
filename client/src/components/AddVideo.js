import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from 'axios';

export default function AddVideo() {
  const [youTubeURL, setYouTubeURL] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleYouTubeURL = e => setYouTubeURL(e.target.value);

  const handleSubmit = e => {
    const requestBody = { youTubeURL }
    axios.post('/api/add-video', requestBody)
      .then(response => {
        console.log(response)
        navigate('/videos')
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  }

  return (
    <div>
    <Helmet><title>Add Videos</title></Helmet>
    <form onSubmit={handleSubmit}>
      <label>Add YouTube Link</label>
      <input 
        value={youTubeURL} 
        onChange={handleYouTubeURL}
        placeholder="paste the YouTube link here" />
      <button>Enter</button>  
    </form>


    {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  )
}
