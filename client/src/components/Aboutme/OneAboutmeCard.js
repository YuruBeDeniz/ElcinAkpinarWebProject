import React, {useContext} from 'react';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';
import DeleteAboutme from './DeleteAboutme';

export default function OneAboutmeCard({aboutMe}) {
  const {_id, textBody } = aboutMe;

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
    {isLoggedIn ? <DeleteAboutme id={_id}/>  : null}
  
    {isLoggedIn ?
    <>
    <Link to={`/about-me/${_id}`}  className='ml-80 inline-block px-4 py-1 border-2 border-gray-900 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Update About Me</Link>
    </> : null
    }
  
    <div><p>{textBody}</p></div>
    </>
  )
}
