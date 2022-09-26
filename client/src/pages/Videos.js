import React, { useContext } from 'react';
import YoutubeEmbed from '../components/Videos/YoutubeEmbed';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import Addvideo from '../../src/pages/Addvideo';

export default function Videos() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div >
{/*     <YoutubeEmbed embedId="VAuJupO8VWI"/>
    <br />
    <YoutubeEmbed embedId="iovwJh1Ze4I"/>
    <br />
    <YoutubeEmbed embedId="Tn3VgagCONE"/> */}
    
    <div className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-36'>
    {isLoggedIn? <Link to='/add-video' >Add Video</Link> : null}
    </div>
    <br />
    </div>
  )
}
