import React, { useContext, useState, useEffect } from 'react';
import elcin from '../images/elcin.jpeg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import axios from 'axios';


export default function AboutMe(props) {
  const [aboutMes, setAboutMes] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  
  const getAboutMes = () => {
    axios.get('/api/about-me')
      .then((response) =>{
        console.log(response.data)
        setAboutMes(response.data);
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => {
    getAboutMes();
  }, [])
  

  return (
    <div>
     <div className='flex flex-col items-center mb-48'>
    <div className='w-80'><img src={elcin} alt='portre' /></div>
    <div className='mx-60 my-5 leading-loose text-justify'>
   
    <div>
      {aboutMes?.map((aboutMe, i) => (<p key={aboutMe._id}>{aboutMe.textBody}</p>))}
    </div>

    </div>
    {isLoggedIn ?
    <>
    <Link to='/create-about-me' className='underline'>Add About Me</Link>
    </> : null
    }
    </div>
    </div>
  )
}


