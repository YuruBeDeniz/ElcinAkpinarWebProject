import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import OneYouTubeVideo from '../components/Videos/OneYouTubeVideo';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  const getAllVideos = () => {
    axios.get('/api/videos')
      .then((response) =>{
        console.log(response)
        setVideos(response.data);
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => {
    getAllVideos();
  }, [])

  return (
    <div >

    <div>
      {videos?.map((video) => (<OneYouTubeVideo key={video._id} video={video} />))}
    </div>
    {isLoggedIn?
    <div className="flex justify-center">
    <div className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-36'>
     <Link to='/videos/add-video' >Add Video</Link> 
    </div>
    </div> : null}
    <br />
    </div>
  )
}
