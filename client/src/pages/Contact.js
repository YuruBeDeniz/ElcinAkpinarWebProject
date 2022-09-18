import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handleSubject = e => setSubject(e.target.value);
    const handleMessage = e => setMessage(e.target.value);

    const handleSubmit = e => {
      e.preventDefault();
      const requestBody = {name, email, subject, message};
      axios.post('/api/send-email', requestBody)
        .then(response => {
          navigate('/contact');
        })
        .catch((err) => {
          const errorDescription = err.response.data.message;
          setErrorMessage(errorDescription);
        })
    }

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input  type="text" value={name} onChange={handleName}/>
    <br />
    <label>Email</label>
    <input  type="text" value={email} onChange={handleEmail}/>
    <br />
    <label>Subject</label>
    <input  type="text" value={subject} onChange={handleSubject}/>
    <br />  
    <label>Message</label>
    <textarea value={message} onChange={handleMessage} />
    <br />
    <button type='submit'>Enter</button>
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}

    </div>
  )
}
