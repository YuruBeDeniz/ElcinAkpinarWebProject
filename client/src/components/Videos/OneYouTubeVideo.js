import React, {useState} from 'react'

export default function OneYouTubeVideo({video}) {
  const {youTubeLink} = video;
  const [url, setUrl] = useState('');

  const getUrl = (theYouTubeUrl) => {
    return theYouTubeUrl.replace('watch?v=', 'embed/')
  }

  useState(() => {
    setUrl(getUrl(youTubeLink))
  }, [youTubeLink])
 
  return (
    <div className="mx-auto">
    <div className=" video-responsive">
      <iframe
        width="853" 
        height="480"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    </div>
  )
}
