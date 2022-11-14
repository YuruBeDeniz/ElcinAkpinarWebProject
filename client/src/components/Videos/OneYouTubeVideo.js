import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/auth';
import DeleteVideo from './DeleteVideo';

export default function OneYouTubeVideo({video}) {
  const {youTubeLink} = video;
  const [url, setUrl] = useState('');

  const { isLoggedIn } = useContext(AuthContext);

  const getUrl = (theYouTubeUrl) => {
    return theYouTubeUrl.replace('watch?v=', 'embed/')
  }

  useState(() => {
    setUrl(getUrl(youTubeLink))
  }, [youTubeLink])

  
 
  return (
    <>
    {isLoggedIn ? <DeleteVideo id={video._id}/>  : null}
    <div className="mx-auto">
    <div className="video-responsive">
      <iframe
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      /> 
    </div>
    </div>    
    
    </>
  )
}
