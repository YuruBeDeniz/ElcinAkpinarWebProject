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
      axios.post('/api/email/send-email', requestBody)
        .then(response => {
          console.log(response)
          navigate('/');
        })
        .catch((err) => {
          const errorDescription = err.response.data.message;
          setErrorMessage(errorDescription);
        })
    }

return (
  <div> 
    <form onSubmit={handleSubmit} className="w-full max-w-lg mb-36 ml-12">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-first-name">
            Name
          </label>
          <input 
            value={name} 
            onChange={handleName} 
            type="text" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            placeholder="Name" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-first-name">
            Subject
          </label>
          <input 
            value={subject} 
            onChange={handleSubject} 
            type="text" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" 
            placeholder="Subject" />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-password">
            E-mail
          </label>
          <input value={email} 
            onChange={handleEmail} 
            type="email" 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="email"/>
          {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="grid-password">
            Message
          </label>
          <textarea 
            value={message} 
            onChange={handleMessage} 
            type="text" 
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"></textarea>
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

    {errorMessage && <h5>{errorMessage}</h5>}

  </div>
  )
}

