import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUpPopup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
  
    const navigate = useNavigate();
    const handleSubmit = e => {
      e.preventDefault();
      const requestBody = {password, name, email}
      axios.post('/api/auth/signup', requestBody)
      .then(response => {
        //console.log('response from backend: ', response)
        navigate('/login');
      })
      .catch(err => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription)
      })
    }
  
    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleConfirmPassword = e => setConfirmPassword(e.target.value);


    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-lg sm:max-w-md sm:rounded-lg">
                <h3 className="text-4xl font-bold text-center text-bg-gray-900">
                    Sign Up
                </h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleName}
                                    name="name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmail}
                                    name="email"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                    name="password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                    name="password_confirmation"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                to="/login"
                            >
                                Already have an account?
                            </Link>
                            {password === confirmPassword ? <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Sign Up
                            </button> : <Link to='/signup'>Passwords don't match</Link>}
                        </div>
                    </form>

                    {errorMessage && <h5>{errorMessage}</h5>}

                </div>
            </div>
        </div>
    );
}